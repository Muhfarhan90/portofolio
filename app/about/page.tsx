import { personalInfo } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {personalInfo.about.introduction}
          </p>
        </div>

        {/* Interests */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.about.interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
              >
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalInfo.about.values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Goal */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Career Goal</h2>
          <p className="text-lg leading-relaxed opacity-95">
            {personalInfo.about.careerGoal}
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
