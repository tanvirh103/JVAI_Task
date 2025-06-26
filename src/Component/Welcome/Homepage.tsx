import Link from "next/link";

export default function Homepage() {
  return (
    <div className="">
      <div className="my-auto mt-6 pt-6 pb-6 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
        <p className="font-[800] text-[#397EF5] text-[48px] flex justify-center">
          Clin Technologies
        </p>
        <p className="text-[28px] font-[400] text-[#8998AD] text-center">
          Revolutionizing clinical documentation through{" "}
          <span className="text-[#F59E0B] font-[600]">HIPAA COMPLIANT</span>{" "}
          advanced artificial
          <br /> intelligence, giving healthcare providers more time forwhat
          truly matters — patient care. try it for <br />{" "}
          <span className="text-[#F59E0B] font-[600]">FREE</span> today
        </p>

        <div className="mt-6">
          <p className="text-[23px] font-[400] text-[#E2E8F0] text-center">
            Our sophisticated AI platform intelligently processes clinical{" "}
            <br />
            conversations, creating accurate documentation that integrates{" "}
            <br /> with your existing EMR system.
          </p>
        </div>
        <div className="flex justify-center mt-6 gap-6 mb-6">
          <Link
            className="border-[#3b82f6] border-2 hover:bg-[#0E1B36] text-[#E5E6E9] font-[400] text-[16px] px-6 py-3 rounded-[20px]"
            href={"/signup"}
          >
            Login
          </Link>

          <Link
            className="bg-[#2D6EEF] text-[#FFFFFF] font-[400] text-[16px] px-6 py-3 rounded-[20px] hover:shadow-[#2d6eefe8] hover:shadow-2xl hover:transition-all duration-300"
            href={""}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
