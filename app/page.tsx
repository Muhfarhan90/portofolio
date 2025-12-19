import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Greeting */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                👋 Hello, I&apos;m
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {personalInfo.name}
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-8">
              {personalInfo.headline}
            </p>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12">
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                4+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies Used
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Check out some of my recent work
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              View All Projects
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
