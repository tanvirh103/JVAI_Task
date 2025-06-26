import { Learning, Robust, Sophisticated } from "../../app/Content/Technology";

export default function OurTechnology(){
    return(
        <div className="bg-[#0f172a]">
            <div className="pt-16 pb-16 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-50 lg:px-50 xl:px-50">
                <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center">Our Technology</div>
                <div className="mt-4 mb-4 flex justify-center font-[400] text-[16px] px-16">At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions use the latest advancements in natural language processing and machine learning to create a system that truly understands the complexities of medical documentation.</div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-10 pt-6 pb-6">
                    <div className="bg-[#132247] rounded-[8px] p-9 hover:-translate-y-2 transition-all duration-600">
                        <p className="text-[28px] font-[600] text-[#60A5FA] mt-2 pb-2 border-b-1 border-[#2a497c]">{Sophisticated.title}</p>
                        <p className="mt-4 mb-2 pr-4 text-left">{Sophisticated.des}</p>
                    </div>
                      <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
                        <p className="text-[28px] font-[600] text-[#60A5FA] mt-2 pb-2 border-b-1 border-[#2a497c]">{Learning .title}</p>
                        <p className="mt-4 mb-2 pr-4 text-left">{Learning .des}</p>
                    </div>
                     <div className="bg-[#132247] rounded-[8px] px-8 py-6 hover:-translate-y-2 transition-all duration-600">
                        <p className="text-[28px] font-[600] text-[#60A5FA] mt-2 pb-2 border-b-1 border-[#2a497c]">{Robust .title}</p>
                        <p className="mt-4 mb-2 pr-4 text-left">{Robust .des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}