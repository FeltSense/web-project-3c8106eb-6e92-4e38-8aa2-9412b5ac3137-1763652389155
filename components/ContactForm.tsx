'use client';

import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage('');

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form.');
      }

      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg mx-auto border border-gray-100 transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out text-gray-800 text-lg shadow-sm"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out text-gray-800 text-lg shadow-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out text-gray-800 text-lg shadow-sm"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out text-gray-800 text-lg resize-y h-36 shadow-sm"
              placeholder="Tell us how we can help you..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 text-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-6 w-6 text-white mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        {isSuccess && (
          <p className="mt-6 text-center text-lg font-medium text-green-600 p-4 bg-green-50 rounded-lg border border-green-200">
            Thank you for your message! We'll be in touch shortly.
          </p>
        )}
        {isError && (
          <p className="mt-6 text-center text-lg font-medium text-red-600 p-4 bg-red-50 rounded-lg border border-red-200">
            Error: {errorMessage} Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
