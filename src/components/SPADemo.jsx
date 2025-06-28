import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      errs.email = "Invalid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((errs) => ({ ...errs, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    // Here you could send data to an API or service
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold text-indigo-600 select-none cursor-default">
            MyLogo
          </div>
          <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
            <a href="#hero" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </nav>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Open menu"
            onClick={() => alert("Mobile menu not implemented")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <section
          id="hero"
          className="text-center mb-20 space-y-6 px-4 sm:px-0"
          aria-label="Hero Section"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Welcome to Our React App
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
            Build fast, accessible, and modern single-page applications with
            React and Tailwind CSS.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </section>

        <section id="contact" aria-label="Contact form section">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Get in Touch
          </h2>
          {submitted && (
            <div
              className="mb-6 p-4 text-green-800 bg-green-100 border border-green-300 rounded"
              role="alert"
            >
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-lg mx-auto bg-white p-8 rounded shadow"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
