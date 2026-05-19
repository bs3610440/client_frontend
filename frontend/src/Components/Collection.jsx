import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Eye,
  ChevronRight,
  Sparkles,
  Crown,
  Gem,
  Flower2,
  Briefcase,
  Sunset,
  PartyPopper,
  Shirt,
  Watch,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const collections = [
  {
    id: 1,
    name: "Summer Vibes",
    title: "Summer Collection 2026",
    description: "Light, breezy, and perfect for sunny days",
    price: "₹2499",
    originalPrice: "₹4999",
    discount: "50%",
    rating: 4.8,
    reviews: 1234,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    category: "Summer",
    items: 45,
    icon: Sunset,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50"
  },
  {
    id: 2,
    name: "Ethnic Elegance",
    title: "Traditional Collection",
    description: "Embrace your cultural roots with modern twist",
    price: "₹3999",
    originalPrice: "₹7999",
    discount: "50%",
    rating: 4.9,
    reviews: 2345,
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    category: "Ethnic",
    items: 68,
    icon: Crown,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    id: 3,
    name: "Party Wear",
    title: "Party Collection",
    description: "Stand out from the crowd with our party collection",
    price: "₹3499",
    originalPrice: "₹6999",
    discount: "50%",
    rating: 4.7,
    reviews: 1876,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    category: "Party",
    items: 32,
    icon: PartyPopper,
    color: "from-pink-500 to-red-500",
    bgColor: "bg-pink-50"
  },
  {
    id: 4,
    name: "Office Wear",
    title: "Professional Collection",
    description: "Look sharp and feel confident at work",
    price: "₹2999",
    originalPrice: "₹5999",
    discount: "50%",
    rating: 4.6,
    reviews: 987,
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    category: "Office",
    items: 54,
    icon: Briefcase,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  {
    id: 5,
    name: "Winter Essentials",
    title: "Winter Collection",
    description: "Stay warm and stylish this winter",
    price: "₹4499",
    originalPrice: "₹8999",
    discount: "50%",
    rating: 4.8,
    reviews: 1543,
    img: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6",
    category: "Winter",
    items: 78,
    icon: Flower2,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50"
  },
  {
    id: 6,
    name: "Accessories",
    title: "Accessories Collection",
    description: "Complete your look with our trendy accessories",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50%",
    rating: 4.5,
    reviews: 3210,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Accessories",
    items: 112,
    icon: Gem,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50"
  },
  {
    id: 7,
    name: "Denim Love",
    title: "Denim Collection",
    description: "Classic denim pieces for every wardrobe",
    price: "₹2799",
    originalPrice: "₹5599",
    discount: "50%",
    rating: 4.7,
    reviews: 876,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    category: "Denim",
    items: 43,
    icon: Shirt,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50"
  },
  {
    id: 8,
    name: "Luxury Edit",
    title: "Premium Collection",
    description: "Indulge in luxury with our premium range",
    price: "₹9999",
    originalPrice: "₹19999",
    discount: "50%",
    rating: 4.9,
    reviews: 543,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Luxury",
    items: 23,
    icon: Crown,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1899",
    originalPrice: "₹3799",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
  },
  {
    id: 2,
    name: "Silk Saree",
    price: "₹5999",
    originalPrice: "₹11999",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  },
  {
    id: 3,
    name: "Designer Blazer",
    price: "₹4499",
    originalPrice: "₹8999",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: "₹999",
    originalPrice: "₹1999",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
];

export default function Collection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-600 to-orange-500 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
              <Crown className="w-8 h-8 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Collections ✨
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Curated collections designed to match your style and personality
            </p>
          </motion.div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={collection.img} 
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-gray-800">{collection.items} Items</span>
                </div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-full p-2">
                  <collection.icon className={`w-5 h-5 text-${collection.color.split('-')[1]}-600`} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{collection.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{collection.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-pink-600">{collection.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{collection.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{collection.rating}</span>
                    <span className="text-xs text-gray-400">({collection.reviews})</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-gradient-to-r from-pink-600 to-orange-500 text-white py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition">
                    Explore Collection
                  </button>
                  <button className="p-2 border border-gray-200 rounded-xl hover:bg-pink-50 hover:border-pink-200 transition">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-pink-600" />
                  </button>
                </div>
              </div>
              
              {/* Discount Tag */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {collection.discount} OFF
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Products Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-orange-500 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products 🔥</h2>
            <p className="text-white/90">Most loved items from our collections</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-pink-600">{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-1.5 rounded-lg text-xs font-semibold">
                    Shop Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Our Collections?</h2>
          <p className="text-gray-500">We bring you the best quality with affordable prices</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-500 text-sm">Handpicked products with best quality materials</p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Trending Styles</h3>
            <p className="text-gray-500 text-sm">Latest fashion trends updated regularly</p>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">Free shipping on orders above ₹999</p>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-pink-600 to-orange-500 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Collection Updates!</h2>
          <p className="text-white/90 mb-6">Subscribe to get notified about new collections</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-full focus:outline-none" />
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}