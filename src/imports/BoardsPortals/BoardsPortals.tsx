import svgPaths from "./svg-tw3m0lggxy";
import imgBoardsPortals from "./54ead289e2bd39172799174a7ad56fab2a2819e3.png";

export default function BoardsPortals() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] size-full" data-name="Boards & Portals">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="Media Layout">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px] w-full" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgBoardsPortals} />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Information">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[12px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title">
            <div className="flex flex-[1_0_0] flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1e1e1e] text-[18px] text-ellipsis whitespace-nowrap">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Kitchen - Solana collection 2024</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Interface/lock-keyhole-solid">
              <div className="absolute inset-[0_6.25%]" data-name="Primary">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 14">
                  <path d={svgPaths.p39974b00} fill="var(--fill-0, #1E1E1E)" id="Primary" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Information">
            <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
              <p className="leading-[normal]">1 asset</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}