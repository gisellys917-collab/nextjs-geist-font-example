"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { 
  ArrowLeft,
  Search,
  Settings,
  Grid,
  Filter,
  Folder,
  Wrench,
  MoreHorizontal 
} from "lucide-react"

const categories = [
  { id: "all", name: "All", icon: "👕" },
  { id: "bags", name: "Bags", icon: "👜" },
  { id: "belts", name: "Belts", icon: "🔃" },
  { id: "blazers", name: "Blazers", icon: "🧥" },
  { id: "cardigans", name: "Cardigans", icon: "🧶" },
  { id: "coats", name: "Coats", icon: "🧥" }
]

const clothingItems = [
  { 
    id: 1, 
    name: "Leather Effect Jacket", 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 2, 
    name: "Wide Leg Pants", 
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 3, 
    name: "Striped Knit Top", 
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 4, 
    name: "Black Sweater", 
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 5, 
    name: "Blue Scarf", 
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 6, 
    name: "Black Dress", 
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 7, 
    name: "White Tank Top", 
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 8, 
    name: "Black Sandals", 
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: 9, 
    name: "Printed Cardigan", 
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80"
  }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-medium">Main Wardrobe</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Grid className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 px-4 py-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex flex-col items-center min-w-[48px] ${
                  selectedCategory === category.id ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 ${
                  selectedCategory === category.id ? "bg-black text-white" : "bg-gray-100"
                }`}>
                  <span className="text-xl">{category.icon}</span>
                </div>
                <span className="text-xs">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 px-4 pb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
          <Button variant="outline" size="icon" className="border-gray-200">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-[180px] pb-20 px-4">
        <div className="grid grid-cols-3 gap-4">
          {clothingItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden border border-gray-200">
              <div className="aspect-square bg-gray-50 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 25vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-600 truncate">{item.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-2">
          <Button variant="ghost" className="flex flex-col items-center gap-1 px-2">
            <Folder className="h-5 w-5" />
            <span className="text-xs">Folders</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 px-2">
            <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm">N</div>
            <span className="text-xs">Wardrobe</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 px-2">
            <Wrench className="h-5 w-5" />
            <span className="text-xs">Tools & Guides</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 px-2">
            <MoreHorizontal className="h-5 w-5" />
            <span className="text-xs">More</span>
          </Button>
        </div>
      </nav>
    </main>
  )
}
