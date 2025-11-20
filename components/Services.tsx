import React from 'react';
import { Grid3X3, User, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Our Curated Chic Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Seasonal Collection Showcase (Featured Card) */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out">
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1543163155-46b5a319f394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" 
                alt="Seasonal Collection Showcase" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex items-end">
                <h3 className="text-4xl font-bold text-white leading-tight">Seasonal Collection Showcase</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">Dive into our latest seasonal collections, meticulously curated to bring you the freshest styles and trends. Discover exclusive pieces that define the fashion landscape.</p>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">Explore Collection</button>
            </div>
          </div>

          {/* Right column on large screens, stacks on smaller screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Product Categories */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Grid3X3 className="text-purple-500 w-10 h-10 mr-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Product Categories</h3>
              </div>
              <p className="text-gray-600 mb-6">Effortlessly browse through our diverse range of product categories, complete with advanced filtering options to find your perfect match.</p>
              <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center group">
                View Categories
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>

            {/* Lookbook Gallery (Image card) */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552346142-d6b3a0e6b8c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" 
                  alt="Lookbook Gallery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex items-end">
                  <h3 className="text-2xl font-bold text-white">Lookbook Gallery</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Get inspired by our curated lookbooks featuring styled outfits for every occasion and mood.</p>
                <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center group">
                  See Outfits
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Style Profiles (Bottom Row, full width for consistency) */}
        <div className="mt-8 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <User className="text-purple-500 w-10 h-10 mr-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Customer Style Profiles & Recommendations</h3>
          </div>
          <p className="text-gray-600 mb-6">Create your personalized style profile and receive tailored fashion recommendations, just for you.</p>
          <a href="#" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">Get Recommendations</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
