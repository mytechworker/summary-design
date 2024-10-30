// ** React Imports
import Image from "next/image";
import React from "react";

// ** Component Imports
import Typography from "../typography";

// ** Utils Imports
import cn from "@/utils/cn";

const Summary: React.FC<SummaryProps> = ({ results }) => {
  const totalScore =
    results.reduce((acc, item) => acc + item.score, 0) / results.length;

  const categoryColors: { [key: string]: string } = {
    Reaction: "bg-red-100 text-red-600",
    Memory: "bg-yellow-100 text-yellow-600",
    Verbal: "bg-green-100 text-green-600",
    Visual: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-50 min-h-screen">
      {/* Result Section */}
      <div className="bg-gradient-to-b from-indigo-500 to-purple-700 text-white rounded-2xl p-8 w-full md:w-1/3 mb-6 md:mb-0 md:mr-6 flex flex-col items-center text-center shadow-lg">
        <Typography
          variant="h2"
          className="text-lg text-slate-300 font-semibold mb-2"
        >
          Your Result
        </Typography>
        <div className="bg-purple-800 rounded-full w-24 h-24 flex flex-col items-center justify-center mb-4 space-y-1">
          <Typography variant="h2">{Math.round(totalScore)}</Typography>
          <Typography variant="p" className="opacity-50">
            of 100
          </Typography>
        </div>
        <Typography variant="h3">Great</Typography>
        <Typography variant="p" className="mt-2">
          You scored higher than 65% of the people who have taken these tests.
        </Typography>
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-2xl p-8 w-full md:w-1/2 shadow-lg">
        <Typography variant="h2" className="text-lg text-black">
          Summary
        </Typography>
        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between p-4 rounded-lg bg-opacity-20",
                `${categoryColors[result.title] || "bg-gray-100 text-gray-600"}`
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={result.icon}
                  alt={`${result.title} icon`}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <span className={`font-medium text-${result.color}`}>
                  {result.title}
                </span>
              </div>
              <span className="font-semibold text-gray-800">{`${result.score} / 100`}</span>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Summary;
