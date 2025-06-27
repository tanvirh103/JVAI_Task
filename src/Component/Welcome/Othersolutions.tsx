import { Chartwright, Redactify, TranscriptX, Validation } from "../../app/Content/Othersolution";

export default function Othersolutions(){
    return(
        <div className="bg-[#0f172a]">
            <div className="pt-16 pb-16 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-58 lg:px-54">
                <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center">Other Solutions</div>
                <div className="mt-4 mb-4 flex justify-center font-[400] text-[16px]">Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:</div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] xl:grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] gap-12 pt-6 pb-6 w-full">
                    <div className="bg-[#132247] rounded-[8px] px-8 py-6 border-[#10b981] border-t-3 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(16,185,129,0.1)] mb-5 transition-all duration-300 text-[32px] text-[#10b981] hover:scale-110">✓</div></div>
                        <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">{Validation.title}</p>
                        <p className="pt-4 pb-4 pr-6 text-left">{Validation.des}</p>
                    </div>
                      <div className="bg-[#132247] rounded-[8px] px-8 py-6 border-[#f59e0b] border-t-3 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(245,158,11,0.1)] mb-5 transition-all duration-300 text-[32px] text-[#f59e0b] hover:scale-110">⊘</div></div>
                        <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">{Redactify.title}</p>
                        <p className="pt-4 pb-4">{Redactify.des}</p>
                    </div>
                     <div className="bg-[#132247] rounded-[8px] px-8 py-6 border-[#3b82f6] border-t-3 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(59,130,246,0.1)] mb-5 transition-all duration-300 text-[32px] text-[#3b82f6] hover:scale-110">🗣️</div></div>
                        <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">{TranscriptX.title}</p>
                        <p className="pt-4 pb-4">{TranscriptX.des}</p>
                    </div>
                      <div className="bg-[#132247] rounded-[8px] px-8 py-6 border-[#ec4899] border-t-3 hover:-translate-y-2 transition-all duration-600">
                        <div><div className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[rgba(236,72,153,0.1)] mb-5 transition-all duration-300 text-[32px] text-[#ec4899] hover:scale-110">📝</div></div>
                        <p className="text-[23px] font-[600] text-[#60A5FA] mt-2">{Chartwright.title}</p>
                        <p className="pt-4 pb-4">{Chartwright.des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}