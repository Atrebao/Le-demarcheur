import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-6/12 p-2  mx-auto bg-white shadow-lg rounded-lg flex items-center justify-between  ">
      {/* Sélecteurs */}
      <div className="flex items-center w-full">
        <div className="w-1/3  border-r  px-4">
          <p className="text-sm text-gray-500">Select Place</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Places" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="tokyo">Tokyo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/3 border-r  px-4">
          <p className="text-sm text-gray-500">Property Type</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/3 border-r px-4">
          <p className="text-sm text-gray-500">Pricing Range</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Prices" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Icône filtres & bouton */}
      <div className="flex items-center space-x-3 pl-4">
        <div className="p-2 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
          <SlidersHorizontal size={20} />
        </div>
        <Button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition">
          Find Now!
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
