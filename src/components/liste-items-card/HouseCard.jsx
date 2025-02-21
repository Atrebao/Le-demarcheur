import React from 'react'
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MapPin, ScanSearch, BookmarkPlus ,BedDouble, Bath  } from "lucide-react";
export default function HouseCard() {
  return (
    <Card className="w-[300px] shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-xl font-semibold text-gray-800">$25,000/Year</CardTitle>
        <CardDescription className="flex items-center gap-1 text-gray-500">
          <MapPin size={15} className="text-gray-600" />
          <span>Lorem ipsum dolor</span>
        </CardDescription>
      </CardHeader>

      {/* Image & Description */}
      <CardContent className="px-4">
        <img
          className="w-full h-[200px] rounded-md object-cover"
          src="https://www.maisons-concept.com/wp-content/uploads/sites/11/2019/06/City-COsy-avec-carport.jpg"
          alt="House"
        />
        <p className="mt-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur, nulla.
        </p>

        <div className="mt-3 flex items-center justify-between">
          <NavLink to="/details">
            <p className="font-semibold text-lg text-red-500 hover:text-red-600 transition">
              View details
            </p>
          </NavLink>
          <BookmarkPlus className="text-gray-600 hover:text-gray-800 transition" size={20} />
        </div>
      </CardContent>

        {/* Footer */}
      <CardFooter className="px-4 py-3 flex justify-between border-t border-gray-200">
        <div className="flex items-center gap-1 text-gray-600">
          <span className="text-sm font-medium">6</span>
          <BedDouble size={18} />
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <span className="text-sm font-medium">3</span>
          <Bath size={18} />
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <span className="text-sm font-medium">250m²</span>
          <ScanSearch size={18} />
        </div>
      </CardFooter>
    </Card>
  )
}
