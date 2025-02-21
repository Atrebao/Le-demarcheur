import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, BookmarkPlus, Package, Ruler, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const MeubleCard = () => {
  return (
    <Card className="w-[300px] shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-xl font-semibold text-gray-800">$499</CardTitle>
        <CardDescription className="flex items-center gap-1 text-gray-500">
          <MapPin size={15} className="text-gray-600" />
          <span>New York, USA</span>
        </CardDescription>
      </CardHeader>

      {/* Image & Description */}
      <CardContent className="px-4">
        <img
          className="w-full h-[200px] rounded-md object-cover"
          src="https://cdn.pixabay.com/photo/2016/11/19/12/42/furniture-1839119_1280.jpg"
          alt="Modern Sofa"
        />
        <p className="mt-3 text-sm text-gray-500">
          Modern comfortable sofa, made with high-quality leather and wooden frame.
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

      {/* Footer - Détails */}
      <CardFooter className="px-4 py-3 flex justify-between border-t border-gray-200">
        <div className="flex items-center gap-1 text-gray-600">
          <Package size={18} />
          <span className="text-sm font-medium">Wood & Leather</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Ruler size={18} />
          <span className="text-sm font-medium">200cm x 90cm</span>
        </div>
        {/* <button className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
          <ShoppingCart size={16} />
          <span className="text-sm">Buy</span>
        </button> */}
      </CardFooter>
    </Card>
  );
};

export default MeubleCard;
