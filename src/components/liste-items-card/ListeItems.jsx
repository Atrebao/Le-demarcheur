import React from "react";
import HouseCard from "./HouseCard";
import MeubleCard from "./MeubleCard";
import { PaginationDemo } from "../widgets/PaginationDemo";
import HouseCardDemo from "./HouseCardDemo";

export default function ListeItems() {
  return (
    <div className="w-11/12 mx-auto container mt-16  ">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
        <HouseCardDemo/> 
        <HouseCardDemo/> 
        <HouseCardDemo/> 

       
      </div>
      <PaginationDemo />
    </div>
  );
}
