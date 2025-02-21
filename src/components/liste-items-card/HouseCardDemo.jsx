import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  ScanSearch,
  BookmarkPlus,
  BedDouble,
  Bath,
} from "lucide-react";
export default function HouseCardDemo() {
  const navigate = useNavigate();
  return (
    <Card className=" lg:w-[500px] shadow-md rounded-lg overflow-hidden">
      <CardContent className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Section */}
        <div>
          <img
            className="w-full h-auto md:h-[250px] rounded-md object-cover"
            src="https://www.shutterstock.com/image-vector/illustration-simple-house-isolated-260nw-2509940761.jpg"
            alt="House"
          />
          <div className="mt-3 grid grid-cols-2 gap-4">
            <img
              className="w-full  h-[100px] rounded-md object-cover"
              src="https://www.maisons-concept.com/wp-content/uploads/sites/11/2019/06/City-COsy-avec-carport.jpg"
              alt="House"
            />
            <img
              className="w-full h-[100px]  rounded-md object-cover"
              src="https://www.maisons-concept.com/wp-content/uploads/sites/11/2019/06/City-COsy-avec-carport.jpg"
              alt="House"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="px-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg md:text-xl font-semibold text-gray-800">
              $25,000/Year
            </CardTitle>

            <BookmarkPlus
              className="text-gray-600 hover:text-gray-800 transition"
              size={25}
            />
          </div>
          <div className="mt-1 flex items-center gap-1 text-gray-500">
            <MapPin size={15} className="text-gray-600" />
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
          </div>
          <div className="w-[40px] h-[3px] mt-3 bg-slate-700"></div>

          {/* Features Grid */}
          <div className="mt-6 grid grid-cols-2  gap-6 md:gap-8">
            {/* {Array(4)
              .fill("")
              .map((_, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-sm md:text-base">Bedrooms</p>
                  <div className="mt-2 flex items-center gap-1 text-gray-600">
                    <span className="text-sm font-medium">6</span>
                    <BedDouble size={18} />
                  </div>
                </div>
              ))} */}
            <div  className="flex flex-col">
              <p className="text-sm md:text-base">Bedrooms</p>
              <div className="mt-2 flex items-center gap-1 text-gray-600">
                <span className="text-sm font-medium">6</span>
                <BedDouble size={18} />
              </div>
            </div>

            <div  className="flex flex-col">
              <p className="text-sm md:text-base">Bedrooms</p>
              <div className="mt-2 flex items-center gap-1 text-gray-600">
                <span className="text-sm font-medium">6</span>
                <Bath size={18} />
              </div>
            </div>

            <div  className="flex flex-col">
              <p className="text-sm md:text-base">Bedrooms</p>
              <div className="mt-2 flex items-center gap-1 text-gray-600">
                <span className="text-sm font-medium">250m²</span>
                <ScanSearch size={18} />
              </div>
            </div>

            <div  className="flex flex-col">
              <p className="text-sm md:text-base">Bedrooms</p>
              <div className="mt-2 flex items-center gap-1 text-gray-600">
                <span className="text-sm font-medium">250m²</span>
                <ScanSearch size={18} />
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-4">
            <p className="font-bold text-lg">Overview</p>
            <p className="mt-2 text-sm md:text-base text-gray-500 truncate">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi modi ratione veniam et doloremque aspernatur.
            </p>
          </div>

          {/* Buy Button */}
          <Button
            onClick={() => {
              navigate("/details", { state: "open" });
            }}
            className="mt-4 bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition w-full md:w-auto"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
