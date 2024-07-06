import React from 'react';

const ReferralTable = () => {
  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Referral Benefits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Programs</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Referrer Bonus</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="text-left py-3 px-4">{program.name}</td>
                <td className="text-left py-3 px-4">{program.referrerBonus}</td>
                <td className="text-left py-3 px-4">{program.refereeBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralTable;
