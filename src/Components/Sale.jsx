import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
 import { useTheme } from "../Components/context/Themecontext.jsx";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Eye,
  Flame,
  Zap,
  Gift,
  Tag,
  Percent,
  Clock,
  Truck,
  Shield,
  Sparkles,
  ArrowRight,
  Crown,
  Gem,
  AlertCircle,
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
  Package,
  Coffee,
  Filter,
  ChevronDown
} from 'lucide-react';

// Hero Background Images for Sale Page
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Mega Sale",
  },
  {
    url: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Summer Sale",
  },
  {
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    title: "Fashion Sale",
  },
  {
    url: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
    title: "Trendy Sale",
  },
];

const saleProducts = [
  {
    id: 1,
    name: "Summer Floral Maxi Dress",
    price: "₹1249",
    originalPrice: "₹4999",
    discount: "75%",
    rating: 4.8,
    reviews: 1234,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    category: "Dresses",
    stock: 45,
    isLimited: true,
    soldCount: "2.5k",
  },
  {
    id: 2,
    name: "Designer Silk Saree",
    price: "₹2999",
    originalPrice: "₹11999",
    discount: "75%",
    rating: 4.9,
    reviews: 2345,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    category: "Ethnic",
    stock: 23,
    isLimited: true,
    soldCount: "1.8k",
  },
  {
    id: 3,
    name: "Premium Leather Handbag",
    price: "₹499",
    originalPrice: "₹1999",
    discount: "75%",
    rating: 4.7,
    reviews: 3456,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Accessories",
    stock: 67,
    isLimited: false,
    soldCount: "5.2k",
  },
  {
    id: 4,
    name: "Designer Blazer",
    price: "₹2249",
    originalPrice: "₹8999",
    discount: "75%",
    rating: 4.8,
    reviews: 987,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Jackets",
    stock: 34,
    isLimited: true,
    soldCount: "987",
  },
  {
    id: 5,
    name: "High-Waist Jeans",
    price: "₹1249",
    originalPrice: "₹4999",
    discount: "75%",
    rating: 4.6,
    reviews: 1876,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    category: "Bottoms",
    stock: 89,
    isLimited: false,
    soldCount: "3.1k",
  },
  {
    id: 6,
    name: "Party Wear Gown",
    price: "₹2999",
    originalPrice: "₹11999",
    discount: "75%",
    rating: 4.9,
    reviews: 543,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    category: "Dresses",
    stock: 12,
    isLimited: true,
    soldCount: "2.1k",
  },
  {
    id: 7,
    name: "Designer Sunglasses",
    price: "₹299",
    originalPrice: "₹1199",
    discount: "75%",
    rating: 4.5,
    reviews: 4321,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    category: "Accessories",
    stock: 156,
    isLimited: false,
    soldCount: "8.7k",
  },
  {
    id: 8,
    name: "Kurti Set",
    price: "₹1499",
    originalPrice: "₹5999",
    discount: "75%",
    rating: 4.8,
    reviews: 876,
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    category: "Ethnic",
    stock: 45,
    isLimited: true,
    soldCount: "3.4k",
  },
  {
    id: 9,
    name: "Denim Jacket",
    price: "₹1499",
    originalPrice: "₹5999",
    discount: "75%",
    rating: 4.7,
    reviews: 654,
    img: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6",
    category: "Jackets",
    stock: 56,
    isLimited: false,
    soldCount: "2.3k",
  },
  {
    id: 10,
    name: "Evening Clutch",
    price: "₹399",
    originalPrice: "₹1599",
    discount: "75%",
    rating: 4.6,
    reviews: 234,
    img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
    category: "Accessories",
    stock: 78,
    isLimited: false,
    soldCount: "4.2k",
  },
  {
    id: 11,
    name: "Wedding Lehenga",
    price: "₹7499",
    originalPrice: "₹29999",
    discount: "75%",
    rating: 4.9,
    reviews: 345,
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    category: "Ethnic",
    stock: 8,
    isLimited: true,
    soldCount: "567",
  },
  {
    id: 12,
    name: "Casual Top",
    price: "₹349",
    originalPrice: "₹1399",
    discount: "75%",
    rating: 4.5,
    reviews: 1234,
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    category: "Tops",
    stock: 112,
    isLimited: false,
    soldCount: "6.8k",
  },
];

const categories = ["All", "Dresses", "Ethnic", "Accessories", "Jackets", "Bottoms", "Tops"];
const priceRanges = ["All", "Under ₹500", "₹500-₹1000", "₹1000-₹2000", "Above ₹2000"];

export default function Sale() {
  const { darkMode } = useTheme();
  const [showFilters, setShowFilters] = useState(false);
 const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedPrice, setSelectedPrice] = useState("All");
const [timeLeft, setTimeLeft] = useState({days: 2,hours: 23,minutes: 59,seconds: 59
});
  const [savedItems, setSavedItems] = useState([]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Auto-slide hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSaveItem = (id) => {
    if (savedItems.includes(id)) {
      setSavedItems(savedItems.filter(item => item !== id));
    } else {
      setSavedItems([...savedItems, id]);
    }
  };

  const filteredProducts = saleProducts.filter(p => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (selectedPrice !== "All")
       {
      const price = parseInt(p.price.replace('₹', ''));
      if (selectedPrice === "Under ₹500" && price >= 500) return false;
      if (selectedPrice === "₹500-₹1000" && (price < 500 || price > 1000)) return false;
      if (selectedPrice === "₹1000-₹2000" && (price < 1000 || price > 2000)) return false;
      if (selectedPrice === "Above ₹2000" && price <= 2000) return false;
    }
    return true;
  });

  const totalSavings = saleProducts.reduce((acc, p) => {
    const original = parseInt(p.originalPrice.replace('₹', ''));
    const current = parseInt(p.price.replace('₹', ''));
    return acc + (original - current);
  }, 0);

  return (
<div
  className={`min-h-screen transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 text-black"
  }`}
>  
      {/* Hero Section with Animated Background Images */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Animated Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentHeroIndex].url}
              alt={heroImages[currentHeroIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-orange-800/70 to-yellow-900/70"></div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Sale Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">🛍️</div>
          <div className="absolute bottom-20 right-10 text-8xl opacity-20 animate-pulse">💰</div>
          <div className="absolute top-1/2 left-1/4 text-5xl opacity-15 animate-spin-slow">⭐</div>
          <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-20 animate-bounce delay-1000">🎉</div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Flame className="w-10 h-10 text-yellow-300 fill-yellow-300 animate-pulse" />
                <Tag className="w-10 h-10 text-white" />
                <Percent className="w-10 h-10 text-yellow-300" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
                MEGA SALE! 🔥
              </h1>
              <p className="text-white/95 text-xl max-w-2xl mx-auto mb-6 drop-shadow-lg">
                Up to 75% OFF on everything | Limited time offer
              </p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 min-w-[70px] transform hover:scale-105 transition border border-white/30">
                  <div className="text-3xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">Days</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 min-w-[70px] transform hover:scale-105 transition border border-white/30">
                  <div className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">Hours</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 min-w-[70px] transform hover:scale-105 transition border border-white/30">
                  <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">Mins</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3 min-w-[70px] transform hover:scale-105 transition border border-white/30">
                  <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">Secs</div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Shop Sale Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`transition-all duration-300 ${
                currentHeroIndex === index
                  ? 'w-8 h-2 bg-white rounded-full'
                  : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Statistics Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">₹{totalSavings.toLocaleString()}+</div>
              <div className="text-xs opacity-90">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-xs opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-xs opacity-90">Items Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-xs opacity-90">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sale Benefits Banner */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <div
className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-700"
}`}             >
              <Truck className="w-5 h-5 text-red-500" />
              <span className="text-sm">Free Shipping on ₹999+</span>
            </div>
            <div
className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-700"
}`}            >
              <Gift className="w-5 h-5 text-red-500" />
              <span className="text-sm">Free Gift on ₹1999+</span>
            </div>
            <div
className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-700"
}`}            >
              <Shield className="w-5 h-5 text-red-500" />
              <span className="text-sm">30-Day Returns</span>
            </div>
            <div
className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-700"
}`}            >
              <Zap className="w-5 h-5 text-red-500" />
              <span className="text-sm">Express Delivery</span>
            </div>
            <div
className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-700"
}`}            >
              <CreditCard className="w-5 h-5 text-red-500" />
              <span className="text-sm">COD Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your code remains the same from here... */}
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Filter Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md text-gray-700 hover:shadow-lg transition"
          >
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600">{filteredProducts.length} Products on Sale</span>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-white rounded-xl shadow-lg p-4 mb-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-full text-xs transition ${
                        selectedCategory === cat
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-red-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedPrice(range)}
                      className={`px-3 py-1 rounded-full text-xs transition ${
                        selectedPrice === range
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-red-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
className={`group rounded-2xl shadow-lg ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-black"
}`}            >
              {/* Wishlist Button */}
              <button
                onClick={() => toggleSaveItem(product.id)}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition z-20"
              >
                <Heart className={`w-4 h-4 ${savedItems.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Sale Badges */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
                  {product.discount} OFF
                </div>
                
                {product.isLimited && (
                  <div className="absolute top-3 left-20 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                    <Flame className="w-3 h-3" /> Limited
                  </div>
                )}
                
                {/* Sold Count */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur rounded-lg px-2 py-1 z-10">
                  <div className="text-white text-[10px] flex items-center gap-1">
                    <Users className="w-3 h-3" /> {product.soldCount} sold
                  </div>
                </div>
                
                {/* Stock Indicator */}
                {product.stock < 20 && (
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur rounded-lg p-2">
                    <div className="text-white text-[10px] mb-1">🔥 Only {product.stock} left! Grab it fast</div>
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-1 rounded-full animate-pulse" style={{ width: `${(product.stock / 200) * 100}%` }}></div>
                    </div>
                  </div>
                )}
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-10">
                  <button className="bg-white p-2 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-red-500 font-semibold mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-red-600">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded">Save {product.discount}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
          >
            Load More Products <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Crown className="w-12 h-12 text-white mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-bold text-white mb-2">Exclusive Deal!</h2>
          <p className="text-white/90 mb-4">Use code: <span className="font-bold text-yellow-300 text-xl">SAVE75</span> for extra 10% off</p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-6 py-2">
            <AlertCircle className="w-4 h-4 text-white" />
            <p className="text-white font-semibold text-sm">Minimum order ₹999 | T&C apply</p>
          </div>
        </div>
      </div>

      {/* Flash Sale Tips */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
           <div
  className={`rounded-xl shadow-lg p-4 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white"
  }`}
>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-800">Limited Time</h3>
            </div>
            <p className="text-gray-600 text-sm">Grab your favorites before they're gone! Stock is limited.</p>
          </div>
<div
  className={`rounded-xl shadow-lg p-4 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white"
  }`}
>            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-800">Free Shipping</h3>
            </div>
            <p className="text-gray-600 text-sm">Enjoy free shipping on orders above ₹999. No hidden charges!</p>
          </div>
<div
  className={`rounded-xl shadow-lg p-4 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white"
  }`}
>            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-800">Easy Returns</h3>
            </div>
            <p className="text-gray-600 text-sm">30-day return policy. Shop with confidence!</p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="w-10 h-10 text-white mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Sale Alerts!</h2>
          <p className="text-white/90 mb-6">Be the first to know about our flash sales and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">Notify Me</button>
          </div>
          <p className="text-white/70 text-xs mt-4">No spam, unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
}

