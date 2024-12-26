import React from 'react';

const JobCard = ({ role, company, location, type }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        {/* Left side - Job details */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">{role}</h2>
          <div className="text-gray-600">
            <span className="text-xl font-medium">{company}</span>
          </div>
        </div>

        {/* Right side - Salary */}
        <div className='flex-col'>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">$30</span>
            <span className="ml-1 text-sm text-gray-600">/hour</span>
          </div>
          {/* Job properties */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
              {type}
            </span>
            <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">
              on-site
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
