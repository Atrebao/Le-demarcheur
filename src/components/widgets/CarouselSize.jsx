import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-8xl mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img className="w-full h-full rounded-sm object-cover" src="https://media.istockphoto.com/id/1467126728/fr/photo/design-dint%C3%A9rieur-de-chambre-moderne-de-style-scandinave-et-japonais-avec-lit-de-couleur.jpg?s=612x612&w=0&k=20&c=L7_IjjduwVvTuQeXVu0VUjDfSKOdAh5qNZg4Oz-4M3A=" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
