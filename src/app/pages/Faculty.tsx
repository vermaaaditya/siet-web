import { Link } from 'react-router-dom';

export function Faculty() {
  const sections = [
    {
      title: 'Faculty Directory',
      path: '/faculty/directory',
      description: 'Complete list of faculty members and contact information',
    },
    {
      title: 'Recruitment',
      path: '/faculty/recruitment',
      description: 'Faculty positions and application procedures',
    },
    {
      title: 'Research and Publications',
      path: '/faculty/research',
      description: 'Faculty research activities and publications',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="border-b-2 border-[#003366] pb-3 mb-8">
        <h1>Faculty</h1>
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
