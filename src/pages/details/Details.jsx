import { CarouselSize } from "@/components/widgets/CarouselSize";
import React from "react";
import { ThumbsUp, ThumbsDown , BedDouble,Bath, MapPin,Home } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image3DView from "@/components/3D/Image3DViewer";
import chambre from "../../assets/chambres/chambre.jpg"

export default function Details() {
    return (
      <div className="w-full py-16 min-h-screen bg-slate-50">
        <div className="w-11/12 mx-auto container">
          {/* Carrousel d'images */}
          <CarouselSize />
  
          <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partie gauche - Titre et avis */}
            <div>
              <h1 className="text-3xl text-black font-bold leading-tight">
                Maison de Luxe à Los Angeles
              </h1>
  
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center px-4 py-2 space-x-2 bg-white rounded-lg shadow-sm">
                  <span className="text-xl text-gray-600 font-semibold">150</span>
                  <ThumbsUp color="#808080" strokeWidth={1.5} />
                </div>
                <div className="flex items-center px-4 py-2 space-x-2 bg-white rounded-lg shadow-sm">
                  <span className="text-xl text-gray-600 font-semibold">30</span>
                  <ThumbsDown color="#808080" strokeWidth={1.5} />
                </div>
              </div>
  
              {/* Informations générales */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Caractéristiques</h2>
                <ul className="mt-2 text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <BedDouble size={18} className="text-gray-500" /> 6 Chambres
                  </li>
                  <li className="flex items-center gap-2">
                    <Bath size={18} className="text-gray-500" /> 4 Salles de bain
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={18} className="text-gray-500" /> Los Angeles,
                    Californie
                  </li>
                  <li className="flex items-center gap-2">
                    <Home size={18} className="text-gray-500" /> 250m² de surface
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Partie droite - Prix, vendeur et description */}
            <div>
              <p className="text-red-500 text-3xl font-bold">$25,000/Year</p>
  
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-gray-700 text-lg font-semibold">
                  Nom du partenaire
                </p>
              </div>
  
              <div className="mt-6 border-t pt-6 text-gray-500">
                <p className="text-lg font-medium">Description</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum vel justo in eleifend. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Rerum impedit dolorem sunt nisi
                  nobis, explicabo, esse, minus perspiciatis mollitia officia.
                </p>
              </div>
  
              {/* Boutons d'action */}
              <div className="mt-6 flex gap-4">
                <Button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition">
                  Contacter le vendeur
                </Button>
                <Button className="bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                  Voir d'autres annonces
                </Button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
  