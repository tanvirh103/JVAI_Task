import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="bg-[#1e293b]">
      <div className="pt-16 pb-16 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-50 lg:px-50 xl:px-50">
        <div className="text-[#60A5FA] font-[700] text-[33px] flex justify-center pb-6">
          Get Started
        </div>
        <div className="flex justify-center text-[16px] font-[400] text-center px-20">
          Ready to transform your clinical documentation process? Contact our
          team to learn how Clin Technologies can be tailored to your specific
          healthcare setting.
        </div>
        <center className="mt-12">
          <div className="rounded-[8px] w-[600px] h-[120px] border-[#2b4161] border">
            <div className="text-[16px] font-[400] text-[#889bb0] mt-16">
              Or reach us directly via email at{" "}
              <Link className="text-[16px] font-[400] text-[#599df4]" href={"mailto:support@clintechso.com"}>
                support@clintechso.com{" "}
              </Link>
            </div>
          </div>
          <div className="flex justify-center pt-12 gap-6 pb-6">
            <Link
              className="border-[#3b82f6] border-2 hover:bg-[#0E1B36] text-[#E5E6E9] font-[400] text-[16px] px-6 py-3 rounded-[24px]"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="bg-[#2D6EEF] text-[#FFFFFF] font-[400] text-[16px] px-6 py-3 rounded-[24px] hover:shadow-[#2d6eefe8] hover:shadow-md hover:transition-all duration-300"
              href={"/signup"}
            >
              Signup
            </Link>
          </div>
        </center>
      </div>
    </div>
  );
}
