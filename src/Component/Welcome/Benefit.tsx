import Link from "next/link";

export default function Benefit() {
  return (
    <div className="bg-[#1e293b]">
      <div className="pt-16 pb-12 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-50 lg:px-50 xl:px-50">
        <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center pb-6">
          Benefits
        </div>
        <div className="px-20">
          <p className="text-[16px] font-[400]">
            Healthcare providers using Clin Technologies solutions report:
          </p>

          <div className="pt-4 pl-4">
            <li className="py-1">Reduction in documentation time by 40-60%</li>
            <li className="py-1">
              Improved work-life balance with less after-hours charting
            </li>
            <li className="py-1">
              Enhanced patient interaction due to less focus on note-taking
            </li>
            <li className="py-1">
              More comprehensive and consistent clinical documentation
            </li>
            <li className="py-1">
              Reduced risk of documentation errors and omissions
            </li>
          </div>
        </div>
          <div className="flex justify-center pt-8 gap-6 pb-6">
        <Link className="border-[#3b82f6] border-2 hover:bg-[#0E1B36] text-[#E5E6E9] font-[400] text-[16px] px-6 py-3 rounded-[20px]" href={''}>Login</Link>
        <Link className="bg-[#2D6EEF] text-[#FFFFFF] font-[400] text-[16px] px-6 py-3 rounded-[20px] hover:shadow-[#2d6eefe8] hover:shadow-md hover:transition-all duration-300" href={''}>Signup</Link>

      </div>
      </div>
    </div>
  );
}
