import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Exclusive Access to New Collections",
    "Priority Styling Consultations",
    "Personalized Fashion Recommendations",
    "Early Bird Sale Notifications",
    "Complimentary Style Guides & Lookbooks",
    "Dedicated Customer Support",
    "Seamless Returns & Exchanges",
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Unlock Your Style Potential
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Elevate your wardrobe with the Curated Chic Professional Plan. Get exclusive access and personalized services designed to refine your unique style.
        </p>

        {/* Pricing Card Container */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10 transform hover:scale-105 transition-all duration-300 ease-in-out
                          border border-transparent dark:border-gray-700
                          bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-800 dark:to-pink-950
                          overflow-hidden">
            {/* Optional: Subtle gradient overlay or pattern for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-70 blur-3xl -z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Professional Plan
              </h3>
              <div className="flex flex-col items-center justify-center mb-8">
                <span className="text-6xl md:text-7xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  $29
                </span>
                <span className="text-xl text-gray-600 dark:text-gray-300 ml-2">
                  /month
                </span>
              </div>

              <ul className="space-y-4 mb-10 text-gray-700 dark:text-gray-200">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/test_00g5lq0OG2lG2pq144"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-xl font-semibold rounded-full
                           bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg
                           hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl
                           focus:outline-none focus:ring-4 focus:ring-indigo-500/50
                           transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                Get Started - $29/month
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}