import svgPaths from "./svg-0gqw7f7baf";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px relative text-[#1f1f1e]" data-name="Text">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">Folder 1</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium h-[16px] justify-center relative shrink-0 text-[0px] w-full">
        <p className="text-[12px]">
          <span className="leading-[normal]">{`Added by `}</span>
          <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal]">Emilie</span>
        </p>
      </div>
    </div>
  );
}

export default function Document() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[6px] size-full" data-name="Document">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon/Interface/rectangle-history-solid">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1d75e180} fill="var(--fill-0, #949494)" id="Vector" />
        </svg>
      </div>
      <Text />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/ellipsis-horizontal-light">
        <div className="absolute inset-[43.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <g id="Vector">
              <path d={svgPaths.pf2a5c00} fill="var(--fill-0, #3C3C3B)" />
              <path d={svgPaths.pf2a5c00} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.pf2a5c00} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.pf2a5c00} fill="var(--fill-3, black)" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}