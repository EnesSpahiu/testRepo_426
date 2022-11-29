import React from "react";
import axios from "axios";
import { CarType } from "../types/Car.model";
import ApiService from "./ApiService";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/product",
  });

const CarService = {

    getCars: async () => {
        const {data} = await ApiService.get("product/");
        return data;
    },
    getCar: async (id: string) => {
        const {data} = await ApiService.get("product/" + id);
        return data;
    }

};
export default CarService;
