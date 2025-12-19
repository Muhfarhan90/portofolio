import { educationData } from "@/data/portfolio";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h1>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            My academic background and journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>

              {/* Education Card */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200">
                {/* Institution & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h2>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2 sm:mt-0">
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Field */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {edu.degree} - {edu.field}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {edu.semester}
                  </p>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                )}

                {/* Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                    Active Student
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                    {edu.field}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Coursework Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Relevant Coursework */}
          {/* <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Relevant Coursework
            </h3>
            <ul className="space-y-2">
              {[
                "Database Management Systems",
                "Web Development",
                "Software Engineering",
                "Data Structures & Algorithms",
                "System Analysis & Design",
                "Mobile Application Development",
              ].map((course, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {course}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Academic Achievements */}
          {/* <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements
            </h3>
            <ul className="space-y-2">
              {[
                "Dean's List Recipient",
                "Best Final Project Award",
                "Programming Competition Finalist",
                "Active in Tech Community",
              ].map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  {achievement}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
