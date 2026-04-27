import svgPaths from "./svg-prfhp5xz05";
import imgProfil1 from "./ec71682e15b40ff993387f86c3a87c46f6edcdb7.png";
import imgProfil2 from "./d0796137cd78b9500b16a63da4cca1110a7d692e.png";
import imgProfil3 from "./5a50740d280265e5a0e12cf2951f45557c478d45.png";
import imgImage from "./3b28960c2fd040109ed801f64717806bc3533702.png";
import imgImage1 from "./f189fbf1ae1a75bab23e5aa0d950db1eb4b72fee.png";
import imgImage2 from "./2e5ef672099a941204ea4177cee493048d7ec671.png";

function Logo() {
  return (
    <div className="h-[21.785px] relative shrink-0 w-[36.889px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8887 21.7852">
        <g id="Logo">
          <g id="Union">
            <path d={svgPaths.p16826000} fill="var(--fill-0, #3C3C3B)" />
            <path d={svgPaths.p16826000} fill="var(--fill-1, black)" fillOpacity="0.2" />
            <path d={svgPaths.p16826000} fill="var(--fill-2, black)" fillOpacity="0.2" />
            <path d={svgPaths.p16826000} fill="var(--fill-3, black)" fillOpacity="0.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wediatransfer() {
  return (
    <div className="h-[13px] relative shrink-0 w-[125.082px]" data-name="Wediatransfer">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.082 13">
        <g clipPath="url(#clip0_1_3106)" id="Wediatransfer">
          <path d={svgPaths.p8f68780} fill="var(--fill-0, #5F34D5)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_3106">
            <rect fill="white" height="13" width="125.082" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Entry() {
  return (
    <div className="content-stretch flex font-['Montserrat:SemiBold',sans-serif] font-semibold gap-[24px] items-center justify-end leading-[normal] relative shrink-0 text-[#1f1f1e] text-[16px] text-center whitespace-nowrap" data-name="Entry">
      <p className="relative shrink-0">Boards</p>
      <p className="relative shrink-0">Upload assets</p>
      <p className="relative shrink-0">Creative Workflow</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon/Navigation/bell-light">
        <div className="absolute inset-[0_6.23%_0_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5055 28">
            <g id="Vector">
              <path d={svgPaths.p3e451300} fill="var(--fill-0, #3C3C3B)" />
              <path d={svgPaths.p3e451300} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3e451300} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3e451300} fill="var(--fill-3, black)" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon/Navigation/bars-light">
        <div className="absolute inset-[15.6%_6.25%_15.65%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 19.25">
            <g id="Vector">
              <path d={svgPaths.p3e7b0500} fill="var(--fill-0, #3C3C3B)" />
              <path d={svgPaths.p3e7b0500} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3e7b0500} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p3e7b0500} fill="var(--fill-3, black)" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[20px] h-[60px] items-center justify-end relative shrink-0" data-name="Icon">
      <Wediatransfer />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C4C4)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Entry />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C4C4)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Icon1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px relative" data-name="Title">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Interface/arrow-left-light">
        <div className="absolute inset-[12.51%_6.26%_12.51%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9977 17.9953">
            <g id="Vector">
              <path d={svgPaths.p35ac80c0} fill="var(--fill-0, #3C3C3B)" />
              <path d={svgPaths.p35ac80c0} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.p35ac80c0} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.p35ac80c0} fill="var(--fill-3, black)" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Montserrat:Bold',sans-serif] font-bold h-full justify-center leading-[0] min-h-px min-w-px relative text-[#1f1f1e] text-[24px]">
        <p className="leading-[normal]">Mountain</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Action">
      <div className="bg-[#1463ff] content-stretch flex gap-[16px] h-[50px] items-center justify-center px-[24px] py-[16px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/plus-light">
          <div className="absolute inset-[9.38%_9.35%_9.38%_9.4%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p226e2c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">Import new assets</p>
        </div>
      </div>
      <div className="bg-[#104fcc] content-stretch flex gap-[16px] h-[50px] items-center justify-center px-[24px] py-[16px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">More actions</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <path d={svgPaths.p1afffb80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionPrimary() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Action Primary">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Title />
      </div>
      <Action />
    </div>
  );
}

function Profil() {
  return (
    <div className="mr-[-6px] pointer-events-none relative rounded-[20px] shrink-0 size-[40px] z-[7]" data-name="Profil 1">
      <div className="absolute inset-0 overflow-hidden rounded-[20px]">
        <img alt="" className="absolute h-[125%] left-[0.32%] max-w-none top-[-22.5%] w-[99.37%]" src={imgProfil1} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Profil1() {
  return (
    <div className="mr-[-6px] pointer-events-none relative rounded-[20px] shrink-0 size-[40px] z-[6]" data-name="Profil 2">
      <div className="absolute inset-0 overflow-hidden rounded-[20px]">
        <img alt="" className="absolute left-[-6.84%] max-w-none size-[112.56%] top-[2.44%]" src={imgProfil2} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Profil2() {
  return (
    <div className="mr-[-6px] pointer-events-none relative rounded-[20px] shrink-0 size-[40px] z-[5]" data-name="Profil 3">
      <div className="absolute inset-0 overflow-hidden rounded-[20px]">
        <img alt="" className="absolute h-[140%] left-[3.33%] max-w-none top-[-20%] w-[93.33%]" src={imgProfil3} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Add() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex items-center justify-center mr-[-6px] p-[10px] relative rounded-[20px] shrink-0 size-[40px] z-[1]" data-name="Add">
      <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/plus-light">
        <div className="absolute inset-[9.38%_9.35%_9.38%_9.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p226e2c00} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Collaborator() {
  return (
    <div className="content-stretch flex isolate items-start pr-[6px] relative shrink-0" data-name="Collaborator">
      <Profil />
      <Profil1 />
      <Profil2 />
      <Add />
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Action">
      <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div aria-hidden="true" className="absolute border border-[#1463ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Interface/share-nodes-light">
          <div className="absolute inset-[6.23%_6.25%_6.25%_6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.2527">
              <path d={svgPaths.p30aea400} fill="var(--fill-0, #1463FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1463ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Share</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div aria-hidden="true" className="absolute border border-[#1463ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Interface/gear-light">
          <div className="absolute inset-[0_3.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1 14">
              <path d={svgPaths.p2f0a200} fill="var(--fill-0, #1463FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1463ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Settings</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div aria-hidden="true" className="absolute border border-[#1463ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Interface/link-light">
          <div className="absolute inset-[15%_0_14.29%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9.89968">
              <path d={svgPaths.p261e1600} fill="var(--fill-0, #1463FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1463ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Space docs</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div aria-hidden="true" className="absolute border border-[#1463ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Interface/calendar-lines-pen-light">
          <div className="absolute inset-[5%_0_5.58%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12.5183">
              <path d={svgPaths.p321ee480} fill="var(--fill-0, #1463FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1463ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Updates</p>
        </div>
      </div>
    </div>
  );
}

function ActionSecondary() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action Secondary">
      <Collaborator />
      <Action1 />
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Information">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">4 Medias</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="3-Button">
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1463ff] text-[14px] text-center whitespace-nowrap">
          <p className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">Select all</p>
        </div>
      </div>
    </div>
  );
}

function Filter1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter">
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Dropdown">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Asset type</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <g id="Vector">
                <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Dropdown">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Media status</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <g id="Vector">
                <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Dropdown">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Indexing status</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <g id="Vector">
                <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Dropdown">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Created by</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <g id="Vector">
                <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="3-Button">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon/Interface/filter-light">
          <div className="absolute inset-[6.25%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12.25">
              <path d={svgPaths.p1a4e19c0} fill="var(--fill-0, #1463FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1463ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">More</p>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px overflow-clip relative" data-name="Left">
      <Information />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]" data-name="Divider">
            <div className="absolute inset-[-0.5px_-2.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                <path d="M0.5 0.5H24.5" id="Divider" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Filter1 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 size-[30px]" data-name="List">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/list-light">
        <div className="absolute inset-[9.35%_1.57%_9.4%_1.55%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 13">
            <g id="Vector">
              <path d={svgPaths.pa950400} fill="var(--fill-0, #3C3C3B)" />
              <path d={svgPaths.pa950400} fill="var(--fill-1, black)" fillOpacity="0.2" />
              <path d={svgPaths.pa950400} fill="var(--fill-2, black)" fillOpacity="0.2" />
              <path d={svgPaths.pa950400} fill="var(--fill-3, black)" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="bg-[#104fcc] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 size-[30px]" data-name="Grid">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/grid-light">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p4d14780} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex items-start relative rounded-[4px] shrink-0" data-name="Layout">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <List />
      <Grid />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right">
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Dropdown">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Group by :</p>
        </div>
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">None</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <g id="Vector">
                <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Dropdown">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Sort by :</p>
        </div>
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Recently updated</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
          <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
              <g id="Vector">
                <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Layout />
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex gap-[16px] h-[30px] items-center relative shrink-0 w-full" data-name="Filter">
      <Left />
      <Right />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">1-4 of 4 assets</p>
    </div>
  );
}

function Action2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Action">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-left-light">
        <div className="absolute inset-[9.38%_28.12%_9.38%_28.15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99687 12.9969">
            <path d={svgPaths.p1d44c880} fill="var(--fill-0, #C4C4C4)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-right-light">
        <div className="absolute inset-[9.38%_28.12%_9.38%_28.15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99687 12.9969">
            <path d={svgPaths.p3c2d8400} fill="var(--fill-0, #C4C4C4)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Search">
      <div className="content-stretch flex gap-[8px] h-[30px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Search">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/magnifying-glass-light">
          <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9984 15.9984">
              <g id="Vector">
                <path d={svgPaths.p3e0b9100} fill="var(--fill-0, #3C3C3B)" />
                <path d={svgPaths.p3e0b9100} fill="var(--fill-1, black)" fillOpacity="0.2" />
                <path d={svgPaths.p3e0b9100} fill="var(--fill-2, black)" fillOpacity="0.2" />
                <path d={svgPaths.p3e0b9100} fill="var(--fill-3, black)" fillOpacity="0.2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Search</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-end relative shrink-0" data-name="Pagination">
        <Text />
        <Action2 />
      </div>
    </div>
  );
}

function MediaLayout() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex h-[240px] items-center justify-center py-[24px] relative rounded-[2px] shrink-0 w-full" data-name="Media Layout">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Information1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[16px] relative shrink-0 text-[#1f1f1e] text-center w-full" data-name="Information">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Denali.jpg</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] w-full">
        <span className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal]">Updated by</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal]">Emilie</span>
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dropdown State/Icon/Interface/image-light">
        <div className="absolute inset-[6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.p1bc1b600} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FB973B)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">to review</p>
      </div>
    </div>
  );
}

function DropdownState() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/square-poll-horizontal-light">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p37ef8100} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #ED2C30)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Incomplete</p>
      </div>
    </div>
  );
}

function DropdownState1() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State1 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaLayout1() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex h-[240px] items-center justify-center py-[24px] relative rounded-[2px] shrink-0 w-full" data-name="Media Layout">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Information2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[16px] relative shrink-0 text-[#1f1f1e] text-center w-full" data-name="Information">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Matterhorn.jpg</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] w-full">
        <span className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal]">Updated by</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal]">Emilie</span>
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dropdown State/Icon/Interface/image-light">
        <div className="absolute inset-[6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.p1bc1b600} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FB973B)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">to review</p>
      </div>
    </div>
  );
}

function DropdownState2() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State2 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/square-poll-horizontal-light">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p37ef8100} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #ED2C30)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Incomplete</p>
      </div>
    </div>
  );
}

function DropdownState3() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State3 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaLayout2() {
  return (
    <div className="bg-[#e4e4e4] h-[240px] relative rounded-[2px] shrink-0 w-full" data-name="Media Layout">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[56px] relative size-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Information3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[16px] relative shrink-0 text-[#1f1f1e] text-center w-full" data-name="Information">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Kamet.jpg</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] w-full">
        <span className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal]">Updated by</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal]">Emilie</span>
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dropdown State/Icon/Interface/image-light">
        <div className="absolute inset-[6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.p1bc1b600} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FB973B)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">to review</p>
      </div>
    </div>
  );
}

function DropdownState4() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State4 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/square-poll-horizontal-light">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p37ef8100} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #ED2C30)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Incomplete</p>
      </div>
    </div>
  );
}

function DropdownState5() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State5 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaLayout3() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex flex-col h-[240px] items-center justify-center py-[24px] relative rounded-[2px] shrink-0 w-full" data-name="Media Layout">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon/Interface/file-pdf-solid">
        <div className="absolute inset-[0_3.13%_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 32">
            <path d={svgPaths.p6735c40} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Information4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center leading-[0] py-[16px] relative shrink-0 text-[#1f1f1e] text-center w-full" data-name="Information">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[18px] w-full">
        <span className="leading-[normal]">Broad</span>
        <span className="leading-[normal]">-p</span>
        <span className="leading-[normal]">eak</span>
        <span className="leading-[normal]">.pdf</span>
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-full">
        <span className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal]">Updated by</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal]">Emilie</span>
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dropdown State/Icon/Interface/image-light">
        <div className="absolute inset-[6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.p1bc1b600} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #FB973B)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">to review</p>
      </div>
    </div>
  );
}

function DropdownState6() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State6 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start justify-center px-[8px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/square-poll-horizontal-light">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p37ef8100} fill="var(--fill-0, #949494)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function State7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="State">
      <div className="relative shrink-0 size-[10px]" data-name="red">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #ED2C30)" id="red" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Incomplete</p>
      </div>
    </div>
  );
}

function DropdownState7() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[2px]" data-name="Dropdown State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[136px] relative size-full">
          <State7 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Interface/chevron-down-light">
            <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                <g id="Vector">
                  <path d={svgPaths.p1afffb80} fill="var(--fill-0, #3C3C3B)" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-2, black)" fillOpacity="0.2" />
                  <path d={svgPaths.p1afffb80} fill="var(--fill-3, black)" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Asset() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Asset">
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] shrink-0 w-[318px]" data-name="Card">
        <MediaLayout />
        <Information1 />
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon2 />
          <DropdownState />
        </div>
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon3 />
          <DropdownState1 />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] shrink-0 w-[318px]" data-name="Card">
        <MediaLayout1 />
        <Information2 />
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon4 />
          <DropdownState2 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon5 />
          <DropdownState3 />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] shrink-0 w-[318px]" data-name="Card">
        <MediaLayout2 />
        <Information3 />
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon6 />
          <DropdownState4 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon7 />
          <DropdownState5 />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] shrink-0 w-[318px]" data-name="Card">
        <MediaLayout3 />
        <Information4 />
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon8 />
          <DropdownState6 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[30px] items-start min-w-[302px] relative shrink-0 w-[302px]" data-name="Dropdown State">
          <Icon9 />
          <DropdownState7 />
        </div>
      </div>
    </div>
  );
}

function Cartouche() {
  return (
    <div className="bg-white h-[30px] relative rounded-[2px] shrink-0 w-full" data-name="Cartouche">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Publish assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cartouche1() {
  return (
    <div className="bg-white h-[30px] relative rounded-[2px] shrink-0 w-full" data-name="Cartouche">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Add new folder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cartouche2() {
  return (
    <div className="bg-white h-[30px] relative rounded-[2px] shrink-0 w-full" data-name="Cartouche">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#949494] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Ask for approval</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cartouche3() {
  return (
    <div className="bg-white h-[30px] relative rounded-[2px] shrink-0 w-full" data-name="Cartouche">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[8px] relative size-full">
          <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1e] text-[14px] whitespace-nowrap">
            <p>
              <span className="leading-[normal]">{`Approval mode `}</span>
              <span className="leading-[normal] text-[#1463ff]">(4)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownOpen() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] items-start left-[1133px] p-[4px] rounded-[4px] top-[93px] w-[187px]" data-name="Dropdown Open">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_5px_15px_0px_rgba(30,30,30,0.05)]" />
      <Cartouche />
      <Cartouche1 />
      <Cartouche2 />
      <Cartouche3 />
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Body">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pt-[40px] px-[120px] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] h-[106px] items-start justify-center relative shrink-0 w-full" data-name="Action Bar">
            <ActionPrimary />
            <ActionSecondary />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-full left-0 right-0 top-0" data-name="Divider">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1201 1">
                  <path d="M0.5 0.5H1200.5" id="Divider" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Filter Bar">
            <Filter />
            <Search />
          </div>
          <Asset />
          <div className="absolute bg-[#1463ff] content-stretch flex items-center justify-center left-[1788px] px-[6px] rounded-[22px] size-[20px] top-[32px]" data-name="Absolut Action">
            <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-[-2px] pointer-events-none rounded-[24px]" />
            <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">
              <p className="leading-[normal]">4</p>
            </div>
          </div>
          <DropdownOpen />
        </div>
      </div>
    </div>
  );
}

export default function DisabledButton() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col items-center relative size-full" data-name="-> Disabled button">
      <div className="bg-white h-[92px] relative shrink-0 w-full" data-name="Navigation">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[40px] py-[16px] relative size-full">
            <Logo />
            <Icon />
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
}