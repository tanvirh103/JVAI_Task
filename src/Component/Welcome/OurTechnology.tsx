import { Learning, Robust, Sophisticated } from "../../app/Content/Technology";

export default function OurTechnology(){
    return(
        <div className="bg-[#0f172a]">
            <div className="pt-16 pb-16 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-50 lg:px-50 xl:px-50">
                <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center">Our Technology</div>
                <div className="mt-4 mb-4 flex justify-center font-[400] text-[16px] px-16">At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions use the latest advancements in natural language processing and machine learning to create a system that truly understands the complexities of medical documentation.</div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-10 pt-6 pb-6">
                    <div className="bg-[#132247] rounded-[8px] p-9 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]"><div className="text-[30px] text-[#60a5fa]">🧠</div></div></div>
                        <p className="text-[28px] font-[600] text-[#60A5FA] mt-2 pb-2 border-b-1 border-[#2a497c]">{Sophisticated.title}</p>
                        <p className="mt-4 mb-2 pr-4 text-left">{Sophisticated.des}</p>
                    </div>
                      <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]"><div className="text-[30px] text-[#60a5fa]">🔄</div></div></div>
                        <p className="text-[28px] font-[600] text-[#60A5FA] mt-2 pb-2 border-b-1 border-[#2a497c]">{Learning .title}</p>
                        <p className="mt-4 mb-2 pr-4 text-left">{Learning .des}</p>
                    </div>
                     <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="inline-flex items-center bg-[rgba(16,185,129,0.1)] py-[6px] px-[15px] rounded-[25px] mb-5 border border-[rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-[rgba(16,185,129,0.2)]"><span className="text-[#10b981] mr-[10px] text-[18px]">🔒</span><span className="text-white font-semibold text-[0.833rem] tracking-[0.05em]">HIPAA COMPLIANT</span></div></div>
                        <div className="pt-4"><div className="inline-flex items-center bg-[rgba(79,70,229,0.1)] py-[6px] px-[15px] rounded-[25px] mb-5 border border-[rgba(79,70,229,0.3)] transition-all duration-300 hover:bg-[rgba(79,70,229,0.2)]"><span className="text-[#818cf8] mr-[10px] text-[18px]">📝</span><span className="text-white font-semibold text-[0.833rem] tracking-[0.05em]">BUSINESS ASSOCIATE AGREEMENT</span></div></div>
                        <p className="text-[28px] font-[600] text-[#60A5FA] mt-2 pb-2 border-b-1 border-[#2a497c]">{Robust .title}</p>
                        <p className="mt-4 mb-2 pr-4 text-left">{Robust .des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}