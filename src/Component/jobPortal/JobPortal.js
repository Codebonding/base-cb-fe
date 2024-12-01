import React from "react";
import { jobList } from "../../constant";

const JobPortal = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16 ">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Job Listings</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through the latest job openings at top companies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {jobList.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={job.companyLogo}
                alt={`${job.companyName} Logo`}
                className="w-30 h-30 object-contain mb-4"
              />
              <a
                href={job.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {job.companyName}
              </a>
              <p className="text-gray-700 mt-2">{job.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">Explore more opportunities and grow your career.</p>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
