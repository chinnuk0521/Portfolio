import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Education & Experience
        </h2>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-6">
              <GraduationCap className="text-blue-600" />
              Education
            </h3>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Aug 2019 - May 2023</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  B. Tech in Computer Science & Engineering
                </h4>
                <p className="text-slate-600">Yogi Vemana University</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Jun 2017 - Feb 2019</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  Senior Secondary Education (XII)
                </h4>
                <p className="text-slate-600">Sri Chaitanya Jr College</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Jun 2016 - Mar 2017</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  Secondary Education (X)
                </h4>
                <p className="text-slate-600">APSWRS & Jr College</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Briefcase className="text-blue-600" />
              Work Experience
            </h3>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Jan 2025 - Present</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  PROJECT ASSOCIATE / RESEARCH & DEVELOPMENT
                </h4>
                <p className="text-slate-600">
                  Indian Institute of technology Madras (Onsite)
                </p>
                <ul className="mt-3 space-y-2 text-slate-600 text-justify">
                  <li>
                  • Implemented and optimized distributed ledger technologies, including consensus mechanisms.
                  </li>
                  <li>
                  • Designed, developed, and deployed secure smart contracts for various
                    applications.
                  </li>
                  <li>
                  • Ensured data integrity and security using cryptographic techniques and hashing algorithms.
                  </li>
                  <li>
                  • Explored advancements in Hedera Hashgraph, DLTs, and their practical applications in enterprise solutions.
                  </li>
                  <li>
                  • Worked with cross-functional teams, mentored junior associates, and contributed to knowledge-sharing initiatives.
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>June 2024 - Dec 2024</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  SOFTWARE DEVELOPER
                </h4>
                <p className="text-slate-600">Crystal Lotus Solutions LLP (Onsite)</p>
                <ul className="mt-3 space-y-2 text-slate-600 text-justify">
                  <li>
                  • Developed and customised solutions using Apex, LWC, Visualforce, and Salesforce APIs to enhance platform capabilities.
                  </li>
                  <li>
                  • Implemented triggers, workflows, and automation to streamline business processes and integrated third-party services via REST APIs.
                  </li>
                  <li>
                  • Followed Agile methodologies, including requirement gathering, development, testing, and deployment.
                  </li>
                  <li>
                  • Conducted code reviews, optimized performance, and ensured best practices in software development.
                  </li>
                  <li>
                  • Worked with stakeholders to understand requirements and deliver tailored solutions.
                  </li>
                  <li>
                  • Managed deployments using Bitbucket, Sourcetree, and Postman API testing.
                  </li>
                  <li>
                  • Developed React.js and JavaScript-based components while ensuring efficient database management using Microsoft SQL Server.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Dec 2023 - Feb 2024</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  POWER BI INTERN
                </h4>
                <p className="text-slate-600">Cognifyz Technologies (Remote)</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>
                    • Developed visually compelling reports and dashboards.
                  </li>
                  <li>
                    • Collaborated in data cleansing and identifying trends.
                  </li>
                  <li>
                    • Tailored dashboards to effectively communicate insights.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Sep 2023 - Oct 2023</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  DATA ANALYST INTERN
                </h4>
                <p className="text-slate-600">MeriSKILL (Remote)</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>
                    • Conducted thorough data analysis using Power BI and SQL.
                  </li>
                  <li>• Generated reports and collaborated with teams.</li>
                  <li>• Applied problem-solving to enhance data quality.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Aug 2023 - Sep 2023</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  DATA ANALYST INTERN
                </h4>
                <p className="text-slate-600">Excelerate (Remote)</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Applied advanced Excel functions for data analysis.</li>
                  <li>• Generated clear reports for data-driven insights.</li>
                  <li>• Optimized workflows and collaborated with teams.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Sep 2023 - Oct 2023</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  POWER BI VIRTUAL CASE EXPERIENCE 
                </h4>
                <p className="text-slate-600">PwC Switzerland (Remote)</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>
                    • Created dashboards for client KPIs and responsive
                    solutions.
                  </li>
                  <li>
                    • Improved communication strategies for better
                    collaboration.
                  </li>
                  <li>
                    • Conducted in-depth analysis using Power BI, SQL, and
                    Python.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
