import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1520975922284-9e0ce8277a48",
  },
  {
    id: 2,
    name: "Stylish Kurti",
    price: "₹999",
    img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
  },
  {
    id: 3,
    name: "Casual Top",
    price: "₹699",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    id: 4,
    name: "Party Gown",
    price: "₹2499",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 z-0">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-100 z-0">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          className="absolute w-full h-full object-cover opacity-70 z-0"
          alt="hero"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            SheSlay Fashion
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            Slay Every Outfit 💃
          </p>
          <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
            Shop Now
          </button>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Dresses", "Kurtis", "Tops", "Party Wear"].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-xl text-center cursor-pointer"
            >
              <p className="font-medium">{cat}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Trending Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                className="w-full h-60 object-cover"
                alt={item.name}
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.price}</p>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="py-16 bg-indigo-600 text-center text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <h2 className="text-3xl font-bold">Flat 50% Off 🎉</h2>
          <p className="mt-2">Limited Time Offer</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© 2026 SheSlay. All rights reserved.</p>
      </footer>
    </div>
  );
}
