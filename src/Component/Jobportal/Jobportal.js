import React from "react";
import { useGetCompaniesQuery } from "../../features/api/companyApiSlice";

const JobPortal = () => {
  const { data: companies, isLoading, isError } = useGetCompaniesQuery();

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Job Listings</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Loading the latest job openings at top companies...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-60 animate-pulse"
              >
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-5 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 w-2/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError)
    return (
      <p className="text-center text-red-500">
        Something went wrong! Unable to fetch job listings.
      </p>
    );

  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Job Listings</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through the latest job openings at top companies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-60"
            >
              <img
                src={company.companyLogo}
                alt={`${company.companyName} Logo`}
                className="w-20 h-20 object-contain mb-4"
              />
              <a
                href={company.companyApplyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {company.companyName}
              </a>
              <p className="text-gray-700 mt-2">
                Join the best teams and accelerate your career!
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">
            Explore more opportunities and grow your career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
