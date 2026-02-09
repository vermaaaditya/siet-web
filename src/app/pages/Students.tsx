import { Link } from 'react-router-dom';

export function Students() {
  const sections = [
    {
      title: 'Admissions',
      path: '/students/admissions',
      description: 'Admission procedures and requirements',
    },
    {
      title: 'Academic Calendar',
      path: '/students/academic-calendar',
      description: 'Academic year schedule and important dates',
    },
    {
      title: 'Examinations',
      path: '/students/examinations',
      description: 'Examination schedules and procedures',
    },
    {
      title: 'Scholarships',
      path: '/students/scholarships',
      description: 'Financial aid and scholarship information',
    },
    {
      title: 'Library',
      path: '/students/library',
      description: 'Library facilities and resources',
    },
    {
      title: 'Student Activities',
      path: '/students/student-activities',
      description: 'Co-curricular and extracurricular programs',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="border-b-2 border-[#003366] pb-3 mb-8">
        <h1>Students</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="bg-white border border-gray-300 p-6 rounded hover:border-[#003366] hover:shadow-lg transition-all"
          >
            <h3 className="text-[#003366] mb-3">{section.title}</h3>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
