import { experienceData } from "@/data/portfolio";

const typeColors = {
  internship:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  organization:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  freelance:
    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  project:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  course:
    "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  "study independent":
    "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
};

const typeLabels = {
  internship: "Internship",
  organization: "Organization",
  freelance: "Freelance",
  project: "Project",
  course: "Course",
  "study independent": "Study Independent",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h1>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            My professional journey and contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>

              {/* Experience Card */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h2>
                    <h3 className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="mt-2 sm:mt-0 flex flex-col items-start sm:items-end gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        typeColors[exp.type]
                      }`}
                    >
                      {typeLabels[exp.type]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Developed */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills Developed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Full-stack Development",
              "Team Collaboration",
              "Agile Methodology",
              "Code Review",
              "Problem Solving",
              "Technical Leadership",
              "Client Communication",
              "Project Management",
              "Version Control (Git)",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Open for Software Engineering Internship
          </h2>
          <p className="text-lg mb-8 opacity-95">
            I&apos;m actively looking for internship opportunities where I can
            contribute and grow as a software engineer
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
