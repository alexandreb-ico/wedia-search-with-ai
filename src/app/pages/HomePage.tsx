import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import svgPaths from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/svg-qymjkh6ysf";
import imgHeader from "../../imports/HomePage/header-bg.jpg";
import imgLogoWhite from "../../imports/HomePage/logo-wedia-white.svg";
import imgLogoDark from "../../imports/HomePage/logo-wedia-dark.svg";

function Logo() {
  return (
    <div className="h-[21.785px] relative shrink-0 w-[36.889px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8887 21.7852">
        <path d={svgPaths.p16826000} fill="#1E1E1E" />
      </svg>
    </div>
  );
}

function Wediatransfer() {
  return (
    <div className="h-[13px] relative shrink-0 w-[125.082px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.082 13">
        <g clipPath="url(#clip0_home_nav)">
          <path d={svgPaths.p8f68780} fill="#5F34D5" />
        </g>
        <defs>
          <clipPath id="clip0_home_nav">
            <rect fill="white" height="13" width="125.082" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex h-[24px] items-center justify-center shrink-0 w-0">
      <div className="flex-none rotate-90">
        <svg width="24" height="1" fill="none" viewBox="0 0 24 1">
          <line stroke="#E4E4E4" x2="24" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-white flex h-[72px] items-center justify-between px-[40px] py-[12px] shrink-0 sticky top-0 w-full z-10">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex gap-[24px] items-center justify-end shrink-0">
        <Wediatransfer />
        <Divider />
        <div className="flex gap-[24px] items-center shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap" style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}>
          <p>{`Boards & Portals`}</p>
          <p>Upload assets</p>
          <Link to="/workspace" className="hover:text-[#1b55f5] transition-colors">
            Workspaces
          </Link>
        </div>
        <Divider />
        <div className="flex gap-[16px] items-center justify-end shrink-0">
          <Bell size={24} color="#1E1E1E" strokeWidth={1.25} />
          <Menu size={24} color="#1E1E1E" strokeWidth={1.25} />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="bg-[#f8f8f8] flex items-center p-[4px] h-[56px] rounded-[4px] shrink-0 w-[800px] relative z-10">
      {/* Text input */}
      <div className="flex flex-1 items-center gap-[8px] h-full px-[12px] min-w-0">
        <Search size={16} color="#646464" strokeWidth={1.5} className="shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Find assets by keywords..."
          className="flex-1 bg-transparent outline-none text-[16px] text-[#646464] placeholder:text-[#646464] min-w-0"
          style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}
        />
      </div>

      {/* Search in selector */}
      <button className="flex gap-[12px] h-full items-center justify-center pl-[16px] pr-[20px] rounded-[4px] shrink-0">
        <svg width="1" height="24" fill="none" viewBox="0 0 1 24" className="shrink-0">
          <line stroke="#E4E4E4" y2="24" x1="0.5" x2="0.5" />
        </svg>
        <div className="flex gap-[4px] items-center">
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#767676] text-[14px] leading-normal whitespace-nowrap">
            Search in :
          </span>
          <span style={{ fontFamily: "'Satoshi-Bold', sans-serif", fontWeight: 700 }} className="text-[#1e1e1e] text-[14px] leading-normal whitespace-nowrap">
            All assets
          </span>
          <ChevronDown size={14} color="#1e1e1e" strokeWidth={2} />
        </div>
      </button>

      {/* Search button */}
      <button onClick={handleSearch} className="bg-[#1b55f5] flex items-center justify-center self-stretch px-[24px] rounded-[4px] shrink-0 hover:bg-[#1445d4] transition-colors">
        <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[16px] leading-[20px] whitespace-nowrap">
          Search
        </span>
      </button>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen items-start">
      <Navigation />

      {/* Hero */}
      <div className="relative flex flex-col h-[600px] items-center justify-between py-[12px] shrink-0 w-full">
        <img
          alt=""
          className="absolute inset-0 object-cover pointer-events-none size-full z-0"
          src={imgHeader}
        />
        <div className="relative z-10" />
        <SearchBar />
        <div className="flex gap-[8px] items-center relative z-10">
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[14px] leading-normal whitespace-nowrap">
            Powered by
          </span>
          <img alt="Wedia" className="h-[12px] w-[64.8px]" src={imgLogoWhite} />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col items-center justify-end w-full min-h-px">
        <div className="flex gap-[8px] h-[99px] items-center justify-center py-[40px] w-full">
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] whitespace-nowrap">Legal notice</span>
          <Dot />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] whitespace-nowrap">Terms and conditions</span>
          <Dot />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] whitespace-nowrap">Feedback</span>
          <Dot />
          <div className="flex gap-[8px] items-center">
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] whitespace-nowrap">Powered by</span>
            <img alt="Wedia" className="h-[12px] w-[64.8px]" src={imgLogoDark} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className="rounded-full bg-[#646464] size-[3px] shrink-0" />;
}
