import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  RefreshCw, 
  Shield, 
  ChevronRight, 
  Mail,
  Phone, 
  MapPin, 
  Clock, 
  Search, 
  User, 
  Menu,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Sparkles,
  TrendingUp,
  Award,
  Crown
} from "lucide-react";
import { useTheme } from "../context/Themecontext.jsx";

// Hero Slider Images
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Summer Collection 2026",
    subtitle: "Feel the breeze with our new arrivals",
    tag: "Summer Sale is Live! 🔥",
    color: "from-pink-500 to-orange-500"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Ethnic Elegance",
    subtitle: "Traditional meets modern",
    tag: "New Arrivals ✨",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    title: "Party Wear Special",
    subtitle: "Stand out from the crowd",
    tag: "Limited Edition 🎉",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
    title: "Casual Comfort",
    subtitle: "Everyday style made easy",
    tag: "Daily Wear 👕",
    color: "from-green-500 to-teal-500"
  }
];

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1499",
    originalPrice: "₹2999",
    discount: "50%",
    rating: 4.5,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1520975922284-9e0ce8277a48",
    isNew: true,
    isTrending: true,
  },
  {
    id: 2,
    name: "Stylish Kurti Set",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50%",
    rating: 4.8,
    reviews: 256,
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    isNew: false,
    isTrending: true,
  },
  {
    id: 3,
    name: "Casual Cotton Top",
    price: "₹699",
    originalPrice: "₹1399",
    discount: "50%",
    rating: 4.3,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    isNew: true,
    isTrending: false,
  },
  {
    id: 4,
    name: "Elegant Party Gown",
    price: "₹2499",
    originalPrice: "₹4999",
    discount: "50%",
    rating: 4.9,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    isNew: false,
    isTrending: true,
  },
  {
    id: 5,
    name: "Printed A-Line Dress",
    price: "₹1299",
    originalPrice: "₹2599",
    discount: "50%",
    rating: 4.6,
    reviews: 167,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    isNew: true,
    isTrending: false,
  },
  {
    id: 6,
    name: "Designer Lehenga",
    price: "₹3999",
    originalPrice: "₹7999",
    discount: "50%",
    rating: 4.9,
    reviews: 423,
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    isNew: false,
    isTrending: true,
  },
  {
    id: 7,
    name: "Office Blazer Set",
    price: "₹2999",
    originalPrice: "₹5999",
    discount: "50%",
    rating: 4.7,
    reviews: 198,
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    isNew: true,
    isTrending: false,
  },
  {
    id: 8,
    name: "Ethnic Wear Set",
    price: "₹1899",
    originalPrice: "₹3799",
    discount: "50%",
    rating: 4.8,
    reviews: 267,
    img: "https://images.unsplash.com/photo-1519428298390-4a14efb9b23f",
    isNew: false,
    isTrending: true,
  },
];

// Enhanced Categories with better design
const categories = [
  { name: "Dresses", icon: "👗", color: "bg-pink-100", hoverColor: "hover:bg-pink-200", items: "245 items", bgImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446" },
  { name: "Kurtis", icon: "👚", color: "bg-orange-100", hoverColor: "hover:bg-orange-200", items: "189 items", bgImage: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03" },
  { name: "Tops", icon: "👕", color: "bg-pink-100", hoverColor: "hover:bg-pink-200", items: "312 items", bgImage: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
  { name: "Party Wear", icon: "💃", color: "bg-orange-100", hoverColor: "hover:bg-orange-200", items: "156 items", bgImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
  { name: "Ethnic Wear", icon: "👘", color: "bg-pink-100", hoverColor: "hover:bg-pink-200", items: "278 items", bgImage: "https://images.unsplash.com/photo-1519428298390-4a14efb9b23f" },
  { name: "Winter Wear", icon: "🧥", color: "bg-orange-100", hoverColor: "hover:bg-orange-200", items: "98 items", bgImage: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6" },
  { name: "Accessories", icon: "👜", color: "bg-pink-100", hoverColor: "hover:bg-pink-200", items: "423 items", bgImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
  { name: "Footwear", icon: "👠", color: "bg-orange-100", hoverColor: "hover:bg-orange-200", items: "167 items", bgImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772" },
];

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹999" },
  { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure transactions" },
  { icon: Clock, title: "Fast Delivery", desc: "Within 3-5 business days" },
  { icon: Award, title: "Premium Quality", desc: "Best quality products" },
  { icon: TrendingUp, title: "Trending Styles", desc: "Latest fashion updates" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "Absolutely love the quality! The dresses are stunning and fit perfectly. Best online shopping experience!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Neha Verma",
    rating: 5,
    comment: "Amazing collection and great customer service. The delivery was super fast! Highly recommend 💕",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    name: "Riya Mehta",
    rating: 4,
    comment: "Beautiful designs at affordable prices. Will definitely shop again!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
];

export default function HomePage() {
  const { darkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
return (
  <div
    className={`min-h-screen transition-all duration-300 ${
      darkMode
        ? "bg-gray-900 text-white"
        : "bg-gradient-to-br from-pink-50 via-white to-orange-50 text-black"
    }`}
  >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-600 to-orange-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="hidden md:block">🎉 Free Shipping on orders above ₹999 | 🎁 Extra 20% off on first order</p>
          <p className="md:hidden text-center w-full">🎉 Limited Time Offer!</p>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:text-pink-200 transition">Track Order</a>
            <a href="#" className="hover:text-pink-200 transition">Help</a>
          </div>
        </div>
      </div>

      {/* Hero Section with Image Slider */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
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
              src={heroSlides[currentSlide].image}
              className="w-full h-full object-cover"
              alt="hero"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].color} mix-blend-multiply opacity-60`}></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full hover:bg-white/40 transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full hover:bg-white/40 transition-all z-10"
        >
          <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
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
        
        <div className="relative h-full flex items-center justify-center">
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm mb-4"
                >
                  {heroSlides[currentSlide].tag}
                </motion.div>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-lg text-white/90 mb-8">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/login">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                    >
                      Shop Now
                    </motion.button>
                  </Link>
                  <Link to="/collections">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold shadow-lg"
                    >
                      View Collection
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronRightIcon className="text-white rotate-90" />
        </div>
      </section>

      {/* Features Section */}
<section
  className={`py-16 ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-pink-600 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600">Find your perfect style from our curated collections</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => navigate('/collections')}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cat.bgImage} 
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl">{cat.icon}</span>
                      <span className="text-white font-bold text-lg">{cat.name}</span>
                    </div>
                    <p className="text-white/80 text-sm">{cat.items}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-yellow-300" />
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">⚡ FLASH SALE ⚡</h2>
            <p className="text-xl text-white/90 mb-6">Up to 70% off + Extra 10% off on prepaid orders</p>
            <div className="flex justify-center gap-4 mb-8">
              {["12", "34", "56", "78"].map((num, i) => (
                <div key={i} className="bg-white rounded-xl p-4 min-w-[80px] shadow-lg">
                  <div className="text-3xl font-bold text-pink-600">{num}</div>
                  <div className="text-xs text-gray-600">{["Hours", "Minutes", "Seconds", "Days"][i]}</div>
                </div>
              ))}
            </div>
            <Link to="/sale">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                Grab Deal Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trending Products */}
<section
  className={`py-16 ${
    darkMode ? "bg-gray-900" : "bg-white"
  }`}
>        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Trending Products 🔥</h2>
              <p className="text-gray-600">Most loved styles this season</p>
            </div>
            <Link to="/trending">
              <button className="text-pink-600 hover:text-orange-500 font-semibold flex items-center gap-2 transition">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
className={`group rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white"
}`}              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.name}
                  />
                  {item.isNew && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">New</span>
                  )}
                  {item.isTrending && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Trending
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="bg-white p-2.5 rounded-full hover:bg-pink-600 hover:text-white transition transform hover:scale-110">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-white p-2.5 rounded-full hover:bg-pink-600 hover:text-white transition transform hover:scale-110">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({item.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-pink-600">{item.price}</span>
                    <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                    <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded">Save {item.discount}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say 💕</h2>
            <p className="text-gray-600">Join 10,000+ happy fashionistas</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.img} className="w-14 h-14 rounded-full object-cover border-2 border-pink-300" alt={testimonial.name} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
<section
  className={`py-16 ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Mail className="w-14 h-14 text-pink-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Get exclusive offers, style tips, and 15% off your first order!</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100 transition"
              />
              <button className="bg-gradient-to-r from-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}