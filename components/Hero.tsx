export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515940428678-e54704e6c387?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Dramatic Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Elevate Your Style. Discover Curated Chic.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 opacity-90">
          Immerse yourself in a world of exquisite fashion, handpicked for the modern connoisseur.
        </p>
        <button className="px-10 py-4 bg-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
          Explore Collections
        </button>
      </div>
    </section>
  );
}
