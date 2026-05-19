import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter, 
  Grid3x3, 
  LayoutList,
  ChevronDown,
  Eye,
  TrendingUp,
  Flame,
  Clock,
  Award,
  Truck,
  Shield,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const trendingProducts = [
  {
    id: 1,
    name: "Trendy Off-Shoulder Top",
    price: "₹1299",
    originalPrice: "₹2599",
    discount: "50%",
    rating: 4.9,
    reviews: 1234,
    img: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6",
    category: "Tops",
    trend: "🔥 Hot",
    soldCount: "2.5k+ sold",
  },
  {
    id: 2,
    name: "High-Waist Flared Jeans",
    price: "₹2499",
    originalPrice: "₹4999",
    discount: "50%",
    rating: 4.8,
    reviews: 892,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    category: "Bottoms",
    trend: "⭐ Bestseller",
    soldCount: "1.8k+ sold",
  },
  {
    id: 3,
    name: "Elegant Bodycon Dress",
    price: "₹2999",
    originalPrice: "₹5999",
    discount: "50%",
    rating: 4.9,
    reviews: 2156,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    category: "Dresses",
    trend: "👑 Top Rated",
    soldCount: "3.2k+ sold",
  },
  {
    id: 4,
    name: "Designer Blazer",
    price: "₹4499",
    originalPrice: "₹8999",
    discount: "50%",
    rating: 4.7,
    reviews: 567,
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Jackets",
    trend: "✨ Trending",
    soldCount: "987+ sold",
  },
  {
    id: 5,
    name: "Printed A-Line Skirt",
    price: "₹1499",
    originalPrice: "₹2999",
    discount: "50%",
    rating: 4.6,
    reviews: 723,
    img: "https://images.unsplash.com/photo-1583496661160-f2b4c2b5e5f7",
    category: "Bottoms",
    trend: "🔥 Hot",
    soldCount: "1.2k+ sold",
  },
  {
    id: 6,
    name: "Silk Saree",
    price: "₹5999",
    originalPrice: "₹11999",
    discount: "50%",
    rating: 4.9,
    reviews: 1845,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    category: "Ethnic",
    trend: "⭐ Bestseller",
    soldCount: "4.1k+ sold",
  },
  {
    id: 7,
    name: "Crop Top + Skirt Set",
    price: "₹1999",
    originalPrice: "₹3999",
    discount: "50%",
    rating: 4.8,
    reviews: 934,
    img: "https://images.unsplash.com/photo-1525373698358-041e3a460346",
    category: "Sets",
    trend: "👑 Top Rated",
    soldCount: "2.1k+ sold",
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: "₹3499",
    originalPrice: "₹6999",
    discount: "50%",
    rating: 4.7,
    reviews: 1456,
    img: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6",
    category: "Jackets",
    trend: "✨ Trending",
    soldCount: "3.4k+ sold",
  },
  {
    id: 9,
    name: "Floral Summer Dress",
    price: "₹1899",
    originalPrice: "₹3799",
    discount: "50%",
    rating: 4.8,
    reviews: 2100,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    category: "Dresses",
    trend: "🔥 Hot",
    soldCount: "5.2k+ sold",
  },
  {
    id: 10,
    name: "Kurti Set",
    price: "₹2299",
    originalPrice: "₹4599",
    discount: "50%",
    rating: 4.7,
    reviews: 1678,
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    category: "Ethnic",
    trend: "⭐ Bestseller",
    soldCount: "2.8k+ sold",
  },
  {
    id: 11,
    name: "Leather Handbag",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50%",
    rating: 4.6,
    reviews: 2345,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Accessories",
    trend: "👑 Top Rated",
    soldCount: "6.7k+ sold",
  },
  {
    id: 12,
    name: "Sunglasses",
    price: "₹599",
    originalPrice: "₹1199",
    discount: "50%",
    rating: 4.5,
    reviews: 3456,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    category: "Accessories",
    trend: "✨ Trending",
    soldCount: "8.9k+ sold",
  },
];

const categories = ["All", "Dresses", "Tops", "Bottoms", "Jackets", "Ethnic", "Accessories", "Sets"];

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Trending Now",
    subtitle: "Most loved styles this season",
  },
  {
    url: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Best Sellers",
    subtitle: "Join the trend",
  },
  {
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    title: "Hot Collection",
    subtitle: "Limited time offers",
  },
];

export default function Trending() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isGridView, setIsGridView] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  const filteredProducts = selectedCategory === "All" 
    ? trendingProducts 
    : trendingProducts.filter(p => p.category === selectedCategory);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      
      {/* Trending Hero Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div
          key={currentBanner}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={bannerImages[currentBanner].url}
            alt="Trending"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-800/70 to-orange-700/70"></div>
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Flame className="w-8 h-8 text-orange-400 fill-orange-400" />
                <TrendingUp className="w-8 h-8 text-pink-400" />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-4">Trending Now 🔥</h1>
              <p className="text-lg md:text-xl mb-6">Discover what everyone's loving this season</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold shadow-lg"
              >
                Shop Trending
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-white fill-white" />
              <div>
                <h3 className="text-white font-bold text-xl">Flash Sale!</h3>
                <p className="text-white/90 text-sm">Up to 70% off on trending items</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center bg-white/20 backdrop-blur rounded-lg px-3 py-1">
                <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-white/80">Hours</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur rounded-lg px-3 py-1">
                <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-white/80">Mins</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur rounded-lg px-3 py-1">
                <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-white/80">Secs</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold text-sm"
            >
              Grab Deal
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm"
              >
                <Filter className="w-3 h-3" />
                <span>Sort</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {showFilter && (
                <motion.div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border z-10">
                  {["trending", "popular", "newest", "price-low", "price-high"].map((opt) => (
                    <button key={opt} className="block w-full text-left px-3 py-2 text-xs hover:bg-pink-50">
                      {opt === "trending" && "Most Trending"}
                      {opt === "popular" && "Most Popular"}
                      {opt === "newest" && "Newest First"}
                      {opt === "price-low" && "Price: Low to High"}
                      {opt === "price-high" && "Price: High to Low"}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="flex bg-white border rounded-lg overflow-hidden">
              <button onClick={() => setIsGridView(true)} className={`p-1.5 px-2 ${isGridView ? 'bg-pink-500 text-white' : 'text-gray-500'}`}>
                <Grid3x3 className="w-3 h-3" />
              </button>
              <button onClick={() => setIsGridView(false)} className={`p-1.5 px-2 ${!isGridView ? 'bg-pink-500 text-white' : 'text-gray-500'}`}>
                <LayoutList className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-pink-500" />
          Showing {filteredProducts.length} trending products
        </div>

        {/* Products Grid */}
        <div className={`grid gap-5 ${isGridView ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Flame className="w-2 h-2" /> {product.trend}
                </span>
                <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                  {product.discount} OFF
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="bg-white p-1.5 rounded-full hover:bg-pink-600 hover:text-white transition"><Heart className="w-3 h-3" /></button>
                  <button className="bg-white p-1.5 rounded-full hover:bg-pink-600 hover:text-white transition"><ShoppingCart className="w-3 h-3" /></button>
                  <button className="bg-white p-1.5 rounded-full hover:bg-pink-600 hover:text-white transition"><Eye className="w-3 h-3" /></button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[10px] text-pink-500 font-semibold">{product.category}</p>
                <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (<Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />))}
                  </div>
                  <span className="text-[10px] text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-base font-bold text-pink-600">{product.price}</span>
                  <span className="text-[10px] text-gray-400 line-through">{product.originalPrice}</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-2">📦 {product.soldCount}</p>
                <button className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-1.5 rounded-lg text-xs font-semibold hover:shadow-lg transition">Quick Shop</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full font-semibold text-sm">Load More</motion.button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-pink-600 to-orange-500 py-10 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-8 h-8 text-white mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-white mb-2">Stay Updated with Trends!</h2>
          <p className="text-white/90 text-sm mb-5">Get exclusive offers & trending products</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-full focus:outline-none text-sm" />
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold text-sm">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}