export default function Footer(){
    return(
        <div className="bg-[#1e293b] border-t border-[#2b4161] flex justify-between pt-12 pb-6">
            <div className="flex justify-start items-center gap-4 px-12">
                <p className="text-[14px] font-[500] text-[#859fb8] hover:text-[#FFFFFF]">Terms of Use</p>
                <p className="text-[14px] font-[500] text-[#859fb8] hover:text-[#FFFFFF]">Privacy Policy</p>
            </div>
             <div className="flex justify-end items-center gap-4 px-12">
                <p className="text-[14px] font-[500] text-[#859fb8]">© 2025 Clin Technologies. All rights reserved</p>
            </div>
        </div>
    )
}