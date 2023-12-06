import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState();
  const [productNo, setProductNo] = useState();

  return (
    <CategoryContext.Provider value={{ category, setCategory, productNo, setProductNo }}>
      {children}
    </CategoryContext.Provider>
  );
};
