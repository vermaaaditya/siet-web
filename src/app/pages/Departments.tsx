import { Link } from 'react-router-dom';

export function Departments() {
  const departments = [
    {
      title: 'Computer Science',
      path: '/departments/computer-science',
      description: 'Computer Science and Engineering programs',
    },
    {
      title: 'Electronics Engineering',
      path: '/departments/electronics',
      description: 'Electronics and Communication Engineering programs',
    },
    {
      title: 'Mechanical Engineering',
      path: '/departments/mechanical',
      description: 'Mechanical Engineering programs',
    },
    {
      title: 'Civil Engineering',
      path: '/departments/civil',
      description: 'Civil Engineering programs',
    },
    {
      title: 'Electrical Engineering',
      path: '/departments/electrical',
      description: 'Electrical Engineering programs',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="border-b-2 border-[#003366] pb-3 mb-8">
        <h1>Departments</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Link
            key={dept.path}
            to={dept.path}
            className="bg-white border border-gray-300 p-6 rounded hover:border-[#003366] hover:shadow-lg transition-all"
          >
            <h3 className="text-[#003366] mb-3">{dept.title}</h3>
            <p className="text-gray-600">{dept.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
