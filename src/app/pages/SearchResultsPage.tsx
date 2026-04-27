import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import {
  Bell,
  Menu,
  ChevronDown,
  Search,
  X,
  SlidersHorizontal,
  Star,
  AlignJustify,
  Columns3,
  Grid2x2,
  LayoutGrid,
  RectangleHorizontal,
  Check,
  Plus,
  Ellipsis,
} from "lucide-react";
import svgPaths from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/svg-qymjkh6ysf";
import imgAsset from "../../imports/HomePage/asset-placeholder.jpg";
import imgLogoDark from "../../imports/HomePage/logo-wedia-dark.svg";

// ─── Shared primitives ────────────────────────────────────────────────────────

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
        <g clipPath="url(#clip0_results_nav)">
          <path d={svgPaths.p8f68780} fill="#5F34D5" />
        </g>
        <defs>
          <clipPath id="clip0_results_nav">
            <rect fill="white" height="13" width="125.082" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavDivider() {
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

function StatusDot() {
  return (
    <div className="bg-[#db8234] border-2 border-white rounded-full shrink-0 size-[16px]" />
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

interface NavigationProps {
  query: string;
  resultCount: number;
  onQueryChange: (q: string) => void;
  onSearch: () => void;
}

function Navigation({ query, resultCount, onQueryChange, onSearch }: NavigationProps) {
  return (
    <div className="bg-white flex h-[72px] items-center justify-between px-[40px] py-[12px] shrink-0 sticky top-0 w-full z-10">
      {/* Left: logo + inline search */}
      <div className="flex flex-1 gap-[40px] items-center min-w-0 pr-[40px]">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="flex flex-1 gap-[24px] items-center min-w-0">
          {/* Compact search */}
          <div className="flex flex-1 gap-[12px] items-center min-w-0">
            {/* Search-in selector */}
            <button className="flex items-center gap-[4px] p-[12px] rounded-[4px] shrink-0 hover:bg-[#f8f8f8] transition-colors">
              <span style={{ fontFamily: "'Satoshi-Bold', sans-serif", fontWeight: 700 }} className="text-[#1e1e1e] text-[14px] whitespace-nowrap">
                All assets
              </span>
              <ChevronDown size={14} color="#1e1e1e" strokeWidth={2} />
            </button>

            {/* Divider */}
            <div className="flex h-[24px] items-center justify-center w-0 shrink-0">
              <div className="flex-none rotate-90">
                <svg width="24" height="1" fill="none" viewBox="0 0 24 1">
                  <line stroke="#E4E4E4" x2="24" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>

            {/* Search input */}
            <div className="flex flex-1 items-center gap-[8px] h-[40px] px-[12px] min-w-0">
              <Search size={16} color="#646464" strokeWidth={1.5} className="shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
                className="flex-1 bg-transparent outline-none text-[16px] text-[#1e1e1e] min-w-0"
                style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}
              />
              {query && (
                <button onClick={() => onQueryChange("")} className="shrink-0 p-[8px] rounded hover:bg-[#f8f8f8]">
                  <X size={16} color="#1e1e1e" strokeWidth={1.5} />
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[16px] whitespace-nowrap shrink-0">
            {resultCount} results
          </span>
        </div>

        <NavDivider />
      </div>

      {/* Right: wediatransfer + nav links + icons */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Wediatransfer />
        <NavDivider />
        <div className="flex gap-[24px] items-center text-[#1e1e1e] text-[16px] text-center whitespace-nowrap" style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}>
          <p>{`Boards & Portals`}</p>
          <p>Upload assets</p>
          <Link to="/workspace" className="hover:text-[#1b55f5] transition-colors">Workspaces</Link>
        </div>
        <NavDivider />
        <div className="flex gap-[16px] items-center">
          <Bell size={24} color="#1E1E1E" strokeWidth={1.25} />
          <Menu size={24} color="#1E1E1E" strokeWidth={1.25} />
        </div>
      </div>
    </div>
  );
}

// ─── Filter bar ───────────────────────────────────────────────────────────────

const FILTERS = ["Asset type:", "Collection", "Folder", "Keywords", "Languages", "People", "Rights"];

function FilterPill({ label }: { label: string }) {
  return (
    <button className="border border-[#e4e4e4] flex gap-[8px] items-center justify-center p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
      <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] leading-[18px] whitespace-nowrap">
        {label}
      </span>
      <ChevronDown size={16} color="#646464" strokeWidth={1.5} />
    </button>
  );
}

function FilterBar() {
  return (
    <div className="flex flex-col gap-[24px] items-start w-full shrink-0">
      {/* Top row */}
      <div className="flex gap-[16px] items-center w-full">
        {/* Advanced search */}
        <button className="border border-[#e4e4e4] flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
          <SlidersHorizontal size={16} color="#1e1e1e" strokeWidth={1.5} />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
            Advanced search
          </span>
        </button>

        {/* Vertical divider */}
        <div className="flex flex-col items-start justify-center shrink-0">
          <div className="h-[20px] w-px bg-[#e4e4e4]" />
        </div>

        {/* Filter pills */}
        <div className="flex flex-1 gap-[8px] items-center overflow-hidden">
          {FILTERS.map((f) => (
            <FilterPill key={f} label={f} />
          ))}
        </div>

        {/* Bookmark search */}
        <button className="border border-[#e4e4e4] flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
          <Star size={16} color="#1e1e1e" strokeWidth={1.5} />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
            Bookmark search
          </span>
        </button>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between w-full">
        {/* Left: count + select all */}
        <div className="flex gap-[8px] items-center shrink-0">
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
            1000 assets
          </span>
          <button className="flex items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#949494] text-[14px] leading-[18px] whitespace-nowrap">
              Select all
            </span>
          </button>
        </div>

        {/* Right: controls */}
        <div className="flex gap-[8px] items-center shrink-0">
          {/* By relevance toggle */}
          <div className="flex gap-[8px] items-center min-h-[32px] p-[8px] rounded-[4px]">
            <div className="bg-[#c4c4c4] flex items-center p-[2px] rounded-full w-[22px] shrink-0">
              <div className="bg-white rounded-full size-[10px]" />
            </div>
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
              By relevance
            </span>
          </div>

          {/* Sort by */}
          <button className="border border-[#e4e4e4] flex gap-[8px] items-center justify-center p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
            <div className="flex gap-[4px] items-center">
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] leading-[18px] whitespace-nowrap">
                Sort by:
              </span>
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
                Most recent
              </span>
            </div>
            <ChevronDown size={16} color="#646464" strokeWidth={1.5} />
          </button>

          {/* Collapse assets */}
          <button className="border border-[#1b55f5] flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px] shrink-0">
            <RectangleHorizontal size={16} color="#1b55f5" strokeWidth={1.5} />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1b55f5] text-[14px] leading-[18px] whitespace-nowrap">
              Collapse assets
            </span>
          </button>

          {/* View mode */}
          <div className="border border-[#e4e4e4] flex items-start rounded-[4px] shrink-0">
            {[
              { Icon: AlignJustify, active: false },
              { Icon: Columns3, active: false },
              { Icon: Grid2x2, active: false },
              { Icon: LayoutGrid, active: true },
            ].map(({ Icon, active }, i) => (
              <button
                key={i}
                className={`flex items-center justify-center p-[8px] rounded-[4px] ${active ? "bg-[#1b55f5]" : "hover:bg-[#f8f8f8]"}`}
              >
                <Icon size={16} color={active ? "white" : "#1e1e1e"} strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Asset cards ──────────────────────────────────────────────────────────────

function AssetCardSelected() {
  return (
    <div className="border-[3px] border-[#3377ff] flex flex-col items-start relative rounded-[4px] shrink-0 size-[243px] overflow-hidden">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
      <div className="flex flex-1 items-start gap-[8px] p-[16px] relative rounded-[4px] w-full border border-[#f8f8f8]">
        <div className="flex flex-1 items-center gap-[8px] min-w-0">
          <div className="bg-[#1b55f5] flex items-center justify-center p-[3px] rounded-full shrink-0 size-[20px]">
            <Check size={12} color="white" strokeWidth={2.5} />
          </div>
        </div>
        <StatusDot />
      </div>
    </div>
  );
}

function AssetCardHovered() {
  return (
    <div className="flex flex-col items-start relative rounded-[4px] shrink-0 size-[243px] overflow-hidden">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
      <div className="absolute inset-0 bg-[rgba(30,30,30,0.5)] flex flex-col justify-between p-[16px] rounded-[4px]">
        {/* Top row */}
        <div className="flex gap-[8px] items-start w-full">
          <div className="flex flex-1 gap-[8px] items-center min-w-0">
            <div className="border border-white rounded-full shrink-0 size-[20px]" />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[14px] leading-[18px] truncate">
              Asset name
            </span>
          </div>
          <StatusDot />
        </div>
        {/* Bottom row: actions */}
        <div className="flex gap-[8px] items-start w-full">
          <button className="bg-white flex flex-1 gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
            <Plus size={16} color="#1e1e1e" strokeWidth={1.5} />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
              Add to
            </span>
          </button>
          <button className="bg-[#646464] flex items-center justify-center p-[8px] rounded-[4px] shrink-0">
            <Ellipsis size={16} color="white" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

function AssetCardDigitalTemplate() {
  return (
    <div className="flex flex-col items-start relative rounded-[4px] shrink-0 size-[243px] overflow-hidden">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
      <div className="flex flex-col flex-1 items-start justify-between p-[16px] relative rounded-[4px] w-full">
        <div className="flex w-full">
          <div className="flex flex-1 items-center gap-[8px] min-w-0 opacity-0">
            <div className="border border-white rounded-full shrink-0 size-[20px]" />
            <span className="text-white text-[14px] truncate">Asset name</span>
          </div>
          <StatusDot />
        </div>
        <button className="bg-[#1b55f5] flex gap-[6px] items-center min-h-[32px] p-[8px] rounded-[4px] shrink-0">
          <Star size={16} color="white" strokeWidth={1.5} fill="white" />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[14px] leading-[18px] whitespace-nowrap">
            Digital template
          </span>
        </button>
      </div>
    </div>
  );
}

function AssetCardDefault() {
  return (
    <div className="flex items-start justify-end p-[16px] relative rounded-[4px] shrink-0 size-[243px] overflow-hidden">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
      <StatusDot />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function Footer() {
  function Dot() {
    return <div className="rounded-full bg-[#646464] size-[3px] shrink-0" />;
  }
  return (
    <div className="flex gap-[8px] h-[99px] items-center justify-center py-[40px] w-full mt-auto">
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
  );
}

const TOTAL_ASSETS = 17;

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = React.useState(searchParams.get("q") ?? "");

  function handleSearch() {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen">
      <Navigation
        query={query}
        resultCount={533}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      <div className="flex flex-col gap-[32px] items-start px-[80px] py-[40px] w-full">
        <FilterBar />

        {/* Asset grid */}
        <div className="flex flex-wrap gap-[16px] items-start w-full">
          <AssetCardSelected />
          <AssetCardHovered />
          <AssetCardDigitalTemplate />
          {Array.from({ length: TOTAL_ASSETS }).map((_, i) => (
            <AssetCardDefault key={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
