import React, { createContext, useState, FC, ReactNode, useContext } from 'react';
import { CarType } from '../types/Car.model';

export type ShoppingCartContextState = {
  cars: CarType[];
  addCar: (car: CarType) => void;
};

type ShoppingCartProviderProps = {
    children: ReactNode,
}

const ShoppingCartContext =
  createContext<ShoppingCartContextState>({} as ShoppingCartContextState);

  export const useCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children } : ShoppingCartProviderProps) => {
  const [cars, setCars] = useState<CarType[]>([]);

  const addCar = (newCar: CarType) => setCars(() => [...cars, newCar]);
  
  return (
    <ShoppingCartContext.Provider value={{ cars, addCar }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
