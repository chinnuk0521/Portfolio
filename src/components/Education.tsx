import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

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
                  <span>June 2024 - Present</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  Software Developer
                </h4>
                <p className="text-slate-600">Crystal Lotus Solutions LLP</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Developed and maintained applications using Apex, JavaScript, Python & SQL.</li>
                  <li>• Automated data migration and improved process efficiency.</li>
                  <li>• Resolved critical bugs and implemented continuous delivery practices.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Dec 2023 - Feb 2024</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  Power BI Intern
                </h4>
                <p className="text-slate-600">Cognifyz Technologies</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Developed visually compelling reports and dashboards.</li>
                  <li>• Collaborated in data cleansing and identifying trends.</li>
                  <li>• Tailored dashboards to effectively communicate insights.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Calendar size={18} />
                  <span>Sep 2023 - Oct 2023</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  Data Analyst Intern
                </h4>
                <p className="text-slate-600">MeriSKILL</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Conducted thorough data analysis using Power BI and SQL.</li>
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
                  Data Analytics Intern
                </h4>
                <p className="text-slate-600">Excelerate</p>
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
                  Power BI Virtual Case Experience
                </h4>
                <p className="text-slate-600">PwC Switzerland</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li>• Created dashboards for client KPIs and responsive solutions.</li>
                  <li>• Improved communication strategies for better collaboration.</li>
                  <li>• Conducted in-depth analysis using Power BI, SQL, and Python.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
