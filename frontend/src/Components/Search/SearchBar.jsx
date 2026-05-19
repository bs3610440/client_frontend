import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Star, ArrowLeft } from 'lucide-react';

// Complete products array - Saare products yahan add karo
const allProducts = [
  { id: 1, name: "Floral Summer Dress", price: "₹1499", originalPrice: "₹2999", discount: "50%", rating: 4.5, reviews: 128, img: "https://images.unsplash.com/photo-1520975922284-9e0ce8277a48", category: "Dresses", isNew: true },
  { id: 2, name: "Stylish Kurti Set", price: "₹999", originalPrice: "₹1999", discount: "50%", rating: 4.8, reviews: 256, img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03", category: "Kurtis", isNew: false },
  { id: 3, name: "Casual Cotton Top", price: "₹699", originalPrice: "₹1399", discount: "50%", rating: 4.3, reviews: 89, img: "https://images.unsplash.com/photo-1521334884684-d80222895322", category: "Tops", isNew: true },
  { id: 4, name: "Elegant Party Gown", price: "₹2499", originalPrice: "₹4999", discount: "50%", rating: 4.9, reviews: 312, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d", category: "Dresses", isNew: false },
  { id: 5, name: "Printed A-Line Dress", price: "₹1299", originalPrice: "₹2599", discount: "50%", rating: 4.6, reviews: 167, img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446", category: "Dresses", isNew: true },
  { id: 6, name: "Designer Lehenga", price: "₹3999", originalPrice: "₹7999", discount: "50%", rating: 4.9, reviews: 423, img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae", category: "Ethnic", isNew: false },
  { id: 7, name: "Office Blazer Set", price: "₹2999", originalPrice: "₹5999", discount: "50%", rating: 4.7, reviews: 198, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b", category: "Jackets", isNew: true },
  { id: 8, name: "Ethnic Wear Set", price: "₹1899", originalPrice: "₹3799", discount: "50%", rating: 4.8, reviews: 267, img: "https://images.unsplash.com/photo-1519428298390-4a14efb9b23f", category: "Ethnic", isNew: false },
  { id: 9, name: "Oversized Denim Jacket", price: "₹3999", originalPrice: "₹6999", discount: "43%", rating: 4.7, reviews: 189, img: "https://images.unsplash.com/photo-1521223895411-b9c44ffcade6", category: "Jackets", isNew: true },
  { id: 10, name: "Silk Satin Blouse", price: "₹1899", originalPrice: "₹3499", discount: "46%", rating: 4.9, reviews: 456, img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9", category: "Tops", isNew: true },
  { id: 11, name: "Wide Leg Palazzo Pants", price: "₹1599", originalPrice: "₹2999", discount: "47%", rating: 4.6, reviews: 167, img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660", category: "Bottoms", isNew: true },
  { id: 12, name: "Velvet Blazer", price: "₹4499", originalPrice: "₹8999", discount: "50%", rating: 4.8, reviews: 123, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", category: "Jackets", isNew: true },
  { id: 13, name: "Bohemian Crop Top", price: "₹999", originalPrice: "₹1999", discount: "50%", rating: 4.6, reviews: 178, img: "https://images.unsplash.com/photo-1503342219985-d0e36e0a4b67", category: "Tops", isNew: true },
  { id: 14, name: "Pleated Midi Skirt", price: "₹1799", originalPrice: "₹3599", discount: "50%", rating: 4.7, reviews: 234, img: "https://images.unsplash.com/photo-1583496661160-f2b4c2b5e5f7", category: "Bottoms", isNew: true },
  { id: 15, name: "Silk Kimono", price: "₹2799", originalPrice: "₹5599", discount: "50%", rating: 4.9, reviews: 89, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956", category: "Jackets", isNew: true },
  { id: 16, name: "Premium Leather Handbag", price: "₹499", originalPrice: "₹1999", discount: "75%", rating: 4.7, reviews: 3456, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3", category: "Accessories", isNew: false },
];

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      if (query) {
        const filtered = allProducts.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
      setLoading(false);
    }, 300);
  }, [query]);

  // Clear search function
  const clearSearch = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Search Results
              </h1>
              <p className="text-gray-500 text-sm">
                {query ? `Showing results for "${query}"` : 'Enter a search term'}
              </p>
            </div>
          </div>
          
          {/* Search Query Display */}
          {query && (
            <div className="inline-flex items-center gap-2 bg-pink-50 rounded-full px-4 py-2">
              <span className="text-sm text-gray-700">Search:</span>
              <span className="text-sm font-semibold text-pink-600">"{query}"</span>
              <button onClick={clearSearch} className="ml-2 text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
            <p className="text-gray-500 mt-3">Searching...</p>
          </div>
        ) : !query ? (
          // No search query
          <div className="text-center py-12 bg-white rounded-2xl shadow-md">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Search for products</h3>
            <p className="text-gray-500">Type something in the search bar to find products</p>
          </div>
        ) : results.length === 0 ? (
          // No results found
          <div className="text-center py-12 bg-white rounded-2xl shadow-md">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">We couldn't find any products matching "{query}"</p>
            <p className="text-sm text-gray-400">Try searching with different keywords</p>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {['Dress', 'Kurti', 'Saree', 'Jeans', 'Top', 'Jacket'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => window.location.href = `/search-results?q=${suggestion}`}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-pink-100 hover:text-pink-600 transition"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Results found
          <>
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Found <span className="font-semibold text-pink-600">{results.length}</span> products
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <select className="border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:border-pink-500">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                    )}
                    {product.discount && (
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {product.discount} OFF
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="bg-white p-2 rounded-full hover:bg-pink-600 hover:text-white transition transform hover:scale-110">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="bg-white p-2 rounded-full hover:bg-pink-600 hover:text-white transition transform hover:scale-110">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-pink-500 font-semibold mb-1">{product.category}</p>
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
                      <span className="text-xl font-bold text-pink-600">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    
                    <Link to={`/product/${product.id}`}>
                      <button className="w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition transform hover:scale-105">
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}