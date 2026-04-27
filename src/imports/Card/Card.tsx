import imgImage from "./3b28960c2fd040109ed801f64717806bc3533702.png";
import imgImage1 from "./f189fbf1ae1a75bab23e5aa0d950db1eb4b72fee.png";
import imgImage2 from "./e0828684046848975b5ffe336b619df350314ff5.png";

function Top() {
  return (
    <div className="content-stretch flex h-[190px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[2px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative w-full" data-name="Bottom">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[2px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImage1} />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[2px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function MediaLayout() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative w-full" data-name="Media Layout">
      <Top />
      <Bottom />
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[16px] relative shrink-0 text-[#1f1f1e] text-center w-full" data-name="Information">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Mountain</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] w-full">
        <span className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal]">Created by</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal]">Emilie</span>
      </p>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] size-full" data-name="Card">
      <MediaLayout />
      <Information />
    </div>
  );
}