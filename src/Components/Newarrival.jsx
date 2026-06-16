import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from "../Components/context/Themecontext.jsx";

import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter, 
  Grid3x3, 
  LayoutList,
  ChevronDown,
  Eye,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Shield,
  Truck,
  Clock,
  Award,
  Sparkles,
  Zap,
  Tag,
  ArrowRight
} from 'lucide-react';

const newArrivals = [
  {
    id: 1,
    name: "Summer Floral Maxi Dress",
    price: "₹2499",
    originalPrice: "₹4999",
    discount: "50%",
    rating: 4.8,
    reviews: 234,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    category: "Dresses",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Oversized Denim Jacket",
    price: "₹3999",
    originalPrice: "₹6999",
    discount: "43%",
    rating: 4.7,
    reviews: 189,
    img: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6",
    category: "Jackets",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 3,
    name: "Silk Satin Blouse",
    price: "₹1899",
    originalPrice: "₹3499",
    discount: "46%",
    rating: 4.9,
    reviews: 456,
    img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
    category: "Tops",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Wide Leg Palazzo Pants",
    price: "₹1599",
    originalPrice: "₹2999",
    discount: "47%",
    rating: 4.6,
    reviews: 167,
    img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660",
    category: "Bottoms",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 5,
    name: "Embellished Evening Gown",
    price: "₹5999",
    originalPrice: "₹11999",
    discount: "50%",
    rating: 4.9,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    category: "Dresses",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 6,
    name: "Casual Linen Shirt",
    price: "₹1299",
    originalPrice: "₹2499",
    discount: "48%",
    rating: 4.5,
    reviews: 234,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    category: "Tops",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 7,
    name: "High Waist Denim Jeans",
    price: "₹2299",
    originalPrice: "₹4499",
    discount: "49%",
    rating: 4.7,
    reviews: 345,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    category: "Bottoms",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Velvet Blazer",
    price: "₹4499",
    originalPrice: "₹8999",
    discount: "50%",
    rating: 4.8,
    reviews: 123,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Jackets",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 9,
    name: "Bohemian Crop Top",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50%",
    rating: 4.6,
    reviews: 178,
    img: "https://images.unsplash.com/photo-1503342219985-d0e36e0a4b67",
    category: "Tops",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 10,
    name: "Pleated Midi Skirt",
    price: "₹1799",
    originalPrice: "₹3599",
    discount: "50%",
    rating: 4.7,
    reviews: 234,
    img: "https://images.unsplash.com/photo-1583496661160-f2b4c2b5e5f7",
    category: "Bottoms",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 11,
    name: "Silk Kimono",
    price: "₹2799",
    originalPrice: "₹5599",
    discount: "50%",
    rating: 4.9,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
    category: "Jackets",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 12,
    name: "Bodycon Party Dress",
    price: "₹3299",
    originalPrice: "₹6599",
    discount: "50%",
    rating: 4.8,
    reviews: 456,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    category: "Dresses",
    isNew: true,
    isFeatured: true,
  },
];

// Hero Banner Images
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    title: "Summer Collection 2026",
    subtitle: "Feel the breeze with our new summer styles",
    color: "from-pink-500 to-orange-500"
  },
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Ethnic Elegance",
    subtitle: "Traditional meets modern",
    color: "from-purple-500 to-pink-500"
  },
  {
    url: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Party Wear",
    subtitle: "Stand out from the crowd",
    color: "from-blue-500 to-purple-500"
  },
  {
    url: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
    title: "Casual Comfort",
    subtitle: "Everyday style made easy",
    color: "from-green-500 to-teal-500"
  }
];

const categories = ["All", "Dresses", "Tops", "Bottoms", "Jackets", "Ethnic"];

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹999" },
  { icon: Clock, title: "Fast Delivery", desc: "Within 3-5 days" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure" },
  { icon: Award, title: "Quality Guarantee", desc: "Best quality products" },
];

export default function Newarrival() {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isGridView, setIsGridView] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilter, setShowFilter] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const filteredProducts = selectedCategory === "All" 
    ? newArrivals 
    : newArrivals.filter(p => p.category === selectedCategory);

  return (
<div
  className={`min-h-screen transition-all duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gradient-to-br from-pink-50 via-white to-orange-50 text-black"
  }`}
>      
      {/* Hero Banner with Photo Slider */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide].url}
              alt={heroImages[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroImages[currentSlide].color} mix-blend-multiply opacity-60`}></div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">✨</div>
          <div className="absolute bottom-20 right-10 text-5xl opacity-20 animate-pulse">🛍️</div>
          <div className="absolute top-1/2 left-1/4 text-3xl opacity-15 animate-spin-slow">⭐</div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-semibold mb-4">
                  <Zap className="w-3 h-3" />
                  {heroImages[currentSlide].title}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                  New Arrivals
                </h1>
                <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-6 drop-shadow-lg">
                  {heroImages[currentSlide].subtitle}
                </p>
                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Shop Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 md:px-8 md:py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
                  >
                    View Collection
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full hover:bg-white/40 transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full hover:bg-white/40 transition-all z-10"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? 'w-8 h-2 bg-white rounded-full'
                  : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
<section
  className={`py-12 ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-pink-600 w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-white">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-semibold">FLASH SALE: Up to 50% OFF on new arrivals!</span>
            </div>
            <div className="flex gap-4 text-white text-sm">
              <span>🔥 Limited time offer</span>
              <span>⚡ Hurry up!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & View Options */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-pink-300 transition text-sm"
              >
                <Filter className="w-4 h-4" />
                <span>Sort by</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showFilter && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-10"
                >
                  {["newest", "price-low", "price-high", "popular"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setShowFilter(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      {option === "newest" && "Newest First"}
                      {option === "price-low" && "Price: Low to High"}
                      {option === "price-high" && "Price: High to Low"}
                      {option === "popular" && "Most Popular"}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 px-3 transition ${isGridView ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-500'}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 px-3 transition ${!isGridView ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-pink-500'}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm text-gray-600">Showing {filteredProducts.length} products</span>
          </div>
          <div className="text-sm text-gray-500">
            {filteredProducts.length === newArrivals.length ? "All products" : `${filteredProducts.length} of ${newArrivals.length}`}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          isGridView 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white"
}`}            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> NEW
                    </span>
                  )}
                </div>
                {product.discount && (
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {product.discount} OFF
                  </span>
                )}
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition z-10"
                >
                  <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="bg-white p-2.5 rounded-full hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="bg-white p-2.5 rounded-full hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick View Bar */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-center py-2 text-sm font-semibold transition-transform duration-300 ${hoveredCard === product.id ? 'translate-y-0' : 'translate-y-full'}`}>
                  Quick View
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-pink-500 font-semibold mb-1">{product.category}</p>
<h3
  className={`font-semibold text-base mb-2 line-clamp-2 ${
    darkMode ? "text-white" : "text-gray-800"
  }`}
>                  
                  {product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-pink-600">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">Save {product.discount}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  Add to Cart <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
          >
            Load More Products <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-orange-500 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1 mb-4">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Never Miss a Drop</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get New Arrivals First! ✨</h2>
          <p className="text-white/90 text-base mb-6">Subscribe and get 15% off on your first purchase</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
            />
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-white/70 text-xs mt-4">No spam, unsubscribe anytime</p>
        </div>
      </section>

      {/* Add this CSS for spin animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}