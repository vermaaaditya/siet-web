import { Link } from 'react-router-dom';

export function AboutUs() {
  const sections = [
    {
      title: 'Vision and Mission',
      path: '/about/vision-mission',
      description: 'Core values and objectives of the institution',
    },
    {
      title: 'History',
      path: '/about/history',
      description: 'Institutional history and milestones',
    },
    {
      title: 'Governance',
      path: '/about/governance',
      description: 'Administrative structure and leadership',
    },
    {
      title: 'Accreditation',
      path: '/about/accreditation',
      description: 'Quality assurance and regulatory approvals',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="border-b-2 border-[#003366] pb-3 mb-8">
        <h1>About Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="bg-white border border-gray-300 p-8 rounded hover:border-[#003366] hover:shadow-lg transition-all"
          >
            <h2 className="text-[#003366] mb-3">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
