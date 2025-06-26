import { Behavioral, Case, Emergency, Primary } from "../../app/Content/Caseuse";

export default function Caseuse() {
  return (
    <div className="bg-[#0f172a]">
      <div className="pt-16 pb-12 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-50 lg:px-50 xl:px-50">
        <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center pb-6">
          Case Use
        </div>
        <div className="mt-4 mb-4 font-[400] text-[16px] pl-20">
          See how healthcare providers across specialties are transforming their
          practice with Clin Technologies:
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] xl:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] gap-12 pt-6 pb-6 w-full">
          <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
            <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">
              {Primary.title}
            </p>
            <p className=" mb-2 pr-6 text-left text-[16px] font-[400] mt-4">
              {Primary.des}
            </p>
            <div className="border-l-3 border-[#2A497C] h-auto pl-3 mt-4 mb-4">
              "{Primary.comment}"
            </div>
            <div className="flex justify-end text-[14px] font-[500] text-[#8b8e9f] italic">
              - {Primary.name}
            </div>
          </div>
          <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
            <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">
              {Emergency.title}
            </p>
            <p className="mt-2 mb-2">{Emergency.des}</p>
            <div className="flex justify-end text-[14px] font-[500] text-[#8b8e9f] italic">
              - {Emergency.name}
            </div>
          </div>
          <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
            <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">
              {Behavioral.title}
            </p>
            <div className="border-l-3 border-[#2A497C] h-auto pl-3 mt-4 mb-4">
              "{Behavioral.des}"
            </div>
            <div className="flex justify-end text-[14px] font-[500] italic text-[#8b8e9f]">
              - {Behavioral.name}
            </div>
          </div>
          <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
            <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">
              {Case.title}
            </p>
            <div className="border-l-3 border-[#2A497C] h-auto italic pl-3 mt-4 mb-4">
              "{Case.des}"
            </div>
            <div className="flex justify-end text-[14px] font-[500] italic text-[#8b8e9f]">
              - {Case.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
