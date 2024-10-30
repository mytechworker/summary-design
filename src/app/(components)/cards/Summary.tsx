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
    <div className="flex h-svh max-w-2xl m-auto flex-col justify-between rounded-none bg-white shadow-2xl shadow-[#312ce93b] overflow-hidden md:h-auto md:flex-row md:justify-center md:rounded-3xl">
      {/* Result Section */}
      <div className="flex h-full w-full flex-col items-center justify-around gap-5 bg-gradient-to-b from-[#AEB8FE] via-[#6743ff] via-0% to-[#312ce9] rounded-b-3xl text-center text-white p-8 md:mr-0 md:gap-0 md:w-1/2 md:rounded-3xl md:h-auto">
        <Typography 
          variant="h2" 
          className="mb-2 text-2xl font-semibold text-slate-300"
        >
          Your Result
        </Typography>
        <div className="flex h-full w-full max-w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4a23cc] from-0% to-[#4633ee] to-95% md:max-h-44 md:max-w-44">
          <p className="text-6xl font-bold text-white">76</p>
          <p className="mt-2 text-sm text-white opacity-70">of 100</p>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h3" className="text-3xl">Great</Typography>
          <Typography variant="p" className="mt-2 text-[18px] text-slate-300">
            You scored higher than 65% of the people who have taken these tests.
          </Typography>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full h-full p-8 md:w-1/2 md:h-auto">
        <Typography variant="h2" className="mb-5 text-2xl text-black">
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
        <button className="mt-6 w-full py-3 font-semibold text-white bg-gray-800 rounded-full transition duration-1000 hover:bg-gradient-to-b from-[#AEB8FE] via-[#6743ff] via-0% to-[#312ce9]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Summary;
