import React, { useEffect, useState } from 'react'
import ProductPayment from '../../components/product/ProductPayment'
import BackCartHeader from '../../components/header/BackCartHeader'
import CampOnFooter from '../../components/footer/CampOnFooter'
import UserFooter from '../../components/menu/UserFooter'
import * as products from '../../apis/product'

const ProductPaymentContainer = () => {

    const [ quantities, setQuantities ] = useState({});
    const [ cartList, setCartList ] = useState([]);
    const [ reservationList, setReserVationList ] = useState();
    const [ paymentPro, setPaymentPro ] = useState();

    const getPayList = ( async () => {
        const response = await products.payment();
        const cartList = await response.data.cartList;
        const reserVationList = await response.data.reservationList;
        // console.log("cartList : " + cartList);
        console.log(reserVationList);
        setCartList(cartList);
        setReserVationList(reserVationList);
    });

    const onIncrease = (productNo) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productNo]: prevQuantities[productNo] + 1,
        }));
    }

    const onDecrease = (productNo) => {
        setQuantities(prevQuantities => {
            if (prevQuantities[productNo] > 1) {
                return {
                    ...prevQuantities,
                    [productNo]: prevQuantities[productNo] - 1,
                };
            }
            return prevQuantities;
        });
    }

    const productNos = cartList.map(product => product.productNo);
    const cartCnts = cartList.map(product => quantities[product.productNo] || 1);

    const getPaymentPro = ( async (cartCnts, productNos) => {
      console.log(cartCnts);
      console.log(productNos);
      const response = await products.payMentPro(cartCnts, productNos);
      const data = await response.data;
      console.log(data);
      setPaymentPro(data);
    });
    
      const processPayment = (paymentType, camp, totalPrice) => {
        // if(camp === '') {
        //   alert('배송받을 캠핑장을 선택해 주세요.')
        // } else {
          if (paymentType === "카드") {
              console.log(totalPrice);
              console.log("카드 결제");
              requestPay(totalPrice);

          } else if (paymentType === "무통장입금") {
              console.log("무통장 입금");
              getPaymentPro(cartCnts, productNos);
          } else {
              console.log("결제 방법을 선택해주세요.");
          }
        // }
    }    

    const requestPay = (totalPrice) => {
      window.IMP.init('imp48458232');
      var today = new Date();
      var hours = today.getHours(); // 시
      var minutes = today.getMinutes();  // 분
      var seconds = today.getSeconds();  // 초
      var milliseconds = today.getMilliseconds();
      var makeMerchantUid = hours + minutes + seconds + milliseconds;
      window.IMP.request_pay({
          pg: 'kcp',
          pay_method: 'card',
          merchant_uid: "IMP" + makeMerchantUid,
          amount: totalPrice,
      }, function (rsp) {
          if (rsp.success) {
              console.log(rsp);
              getPaymentPro(cartCnts, productNos);
          } else {
              console.log(rsp);
          }
      });
    }

  useEffect(() => {
    getPayList();
  }, []);

  useEffect(() => {
    const initialQuantities = {};
    if (cartList) {
      cartList.forEach(product => {
        initialQuantities[product.productNo] = 1; 
      });
      setQuantities(initialQuantities);
    }
  }, [cartList]); 
  

  return (
    <>
        <BackCartHeader />
        <ProductPayment cartList={cartList} campList={reservationList} 
                        onPayment={processPayment} onIncrease={onIncrease}
                        onDecrease={onDecrease} quantities={quantities} />
        <CampOnFooter />
        <UserFooter />
    </>
  )
}

export default ProductPaymentContainer