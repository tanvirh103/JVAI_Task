"use client";
import { useState } from "react";
export default function Action() {
  const [activeTab, setActiveTab] = useState("TranscriptX");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-[#1e293b]">
      <div className="my-auto pt-20 pb-40 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
        <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center pb-6">
          See Our Solutions in Action
        </div>
        <center className="px-42">
          <div className="flex justify-between shrink-0 shadow-2xl">
            <div className="bg-[#0a1022] flex flex-wrap rounded-t-[12px]">
              <div
                onClick={() => handleTabChange("TranscriptX")}
                className={`text-[#94a3ae] text-[16px] font-[500] px-[100px] py-4 rounded-[4px] cursor-pointer ${
                  activeTab === "TranscriptX"
                    ? "bg-[#1e293b] text-[#FFFFFF] border-b-3 border-[#3b82f6] shadow-xl"
                    : "border-[#262d40] border-r-2"
                }`}
              >
                TranscriptX
              </div>
              <div
                onClick={() => handleTabChange("Chartwright")}
                className={`text-[#94a3ae] text-[16px] font-[500] px-[100px] py-4 rounded-[4px]  cursor-pointer ${
                  activeTab === "Chartwright"
                    ? "bg-[#1e293b] text-[#FFFFFF] border-b-3 border-[#3b82f6] shadow-xl"
                    : "border-[#262d40] border-r-2"
                }`}
              >
                Chartwright
              </div>
              <div
                onClick={() => handleTabChange("Redactify")}
                className={`text-[#94a3ae] text-[16px] font-[500] px-[100px] py-4 rounded-[4px]  cursor-pointer ${
                  activeTab === "Redactify"
                    ? "bg-[#1e293b] text-[#FFFFFF] border-b-3 border-[#3b82f6] shadow-xl"
                    : "border-[#262d40] border-r-2"
                }`}
              >
                Redactify
              </div>
              <div
                onClick={() => handleTabChange("Validify")}
                className={`text-[#94a3ae] text-[16px] font-[500] px-[100px] py-4 rounded-[4px] cursor-pointer ${
                  activeTab === "Validify"
                    ? "bg-[#1e293b] text-[#FFFFFF] border-b-3 border-[#3b82f6]"
                    : ""
                }`}
              >
                Validify
              </div>
            </div>
          </div>
          <div className="pr-4">
            <div className=" bg-[#3b82f6] hover:bg-[#2563eb] text-[16px] font-[400] text-center py-3 rounded-b-[12px] cursor-pointer">
              Click to expand comparison
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
