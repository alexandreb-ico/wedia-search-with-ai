import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import {
  Bell, Menu, ChevronDown, Search, X,
  SlidersHorizontal, Star, AlignJustify, Columns3, Grid2x2, LayoutGrid,
  RectangleHorizontal, Check, Plus, Ellipsis, Pencil, Flag, Copy,
  CornerUpRight, Trash2, ChevronRight, ArrowRight, RefreshCw, GripVertical,
} from "lucide-react";
import svgPaths from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/svg-qymjkh6ysf";
import imgAsset from "../../imports/HomePage/asset-placeholder.jpg";
import imgLogoDark from "../../imports/HomePage/logo-wedia-dark.svg";
import imgSmartSearchIcon from "../../imports/HomePage/smart-search-icon.svg";

// ─── Types ────────────────────────────────────────────────────────────────────

type Scenario = "zero" | "few" | "many";
type Tab = "classic" | "smart";

const SCENARIO_CONFIG: Record<Scenario, { classicCount: number; label: string; sublabel: string }> = {
  zero:  { classicCount: 0,    label: "0 results",    sublabel: "→ Smart Search tab" },
  few:   { classicCount: 12,   label: "< 20 results", sublabel: "→ Banner" },
  many:  { classicCount: 1000, label: "≥ 20 results", sublabel: "→ Keyword bar" },
};
const SMART_COUNT = 200;
const PURPLE = "#813de0";
const PURPLE_LIGHT = "#b48af6";

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
  return <div className="bg-[#db8234] border-2 border-white rounded-full shrink-0 size-[16px]" />;
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
    <div className="bg-white flex h-[72px] items-center justify-between px-[40px] py-[12px] shrink-0 sticky top-0 w-full z-20">
      {/* Left: logo + inline search */}
      <div className="flex flex-1 gap-[40px] items-center min-w-0 pr-[40px]">
        <Link to="/" className="shrink-0"><Logo /></Link>

        <div className="flex flex-1 gap-[24px] items-center min-w-0">
          <div className="flex flex-1 gap-[12px] items-center min-w-0">
            {/* Search-in selector */}
            <button className="flex items-center gap-[4px] p-[12px] rounded-[4px] shrink-0 hover:bg-[#f8f8f8] transition-colors">
              <span style={{ fontFamily: "'Satoshi-Bold', sans-serif", fontWeight: 700 }} className="text-[#1e1e1e] text-[14px] whitespace-nowrap">All assets</span>
              <ChevronDown size={14} color="#1e1e1e" strokeWidth={2} />
            </button>

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
                placeholder="Find assets by keywords..."
                className="flex-1 bg-transparent outline-none text-[16px] text-[#1e1e1e] min-w-0 placeholder:text-[#646464]"
                style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}
              />
              {query && (
                <button onClick={() => onQueryChange("")} className="shrink-0 p-[8px] rounded hover:bg-[#f8f8f8]">
                  <X size={16} color="#1e1e1e" strokeWidth={1.5} />
                </button>
              )}
            </div>
          </div>

          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[16px] whitespace-nowrap shrink-0">
            {resultCount} results
          </span>
        </div>

        <NavDivider />
      </div>

      {/* Right */}
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

// ─── Filter bar with tabs ─────────────────────────────────────────────────────

const FILTERS = ["Asset type:", "Collection", "Folder", "Keywords", "Languages", "People", "Rights"];

function FilterPill({ label }: { label: string }) {
  return (
    <button className="border border-[#e4e4e4] flex gap-[8px] items-center justify-center p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
      <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] leading-[18px] whitespace-nowrap">{label}</span>
      <ChevronDown size={16} color="#646464" strokeWidth={1.5} />
    </button>
  );
}

interface FilterBarProps {
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
  classicCount: number;
  smartCount: number;
  selectedCount: number;
  onSelectAll: () => void;
  onUnselectAll: () => void;
}

function FilterBar({ activeTab, onTabChange, classicCount, smartCount, selectedCount, onSelectAll, onUnselectAll }: FilterBarProps) {
  const displayCount = activeTab === "classic" ? classicCount : smartCount;

  return (
    <div className="flex flex-col items-start w-full shrink-0">
      {/* Top row: filters */}
      <div className="flex gap-[16px] items-center w-full pb-[24px]">
        <button className="border border-[#e4e4e4] flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
          <SlidersHorizontal size={16} color="#1e1e1e" strokeWidth={1.5} />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">Advanced search</span>
        </button>
        <div className="flex flex-col items-start justify-center shrink-0">
          <div className="h-[20px] w-px bg-[#e4e4e4]" />
        </div>
        <div className="flex flex-1 gap-[8px] items-center overflow-hidden">
          {FILTERS.map((f) => <FilterPill key={f} label={f} />)}
        </div>
        <button className="border border-[#e4e4e4] flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
          <Star size={16} color="#1e1e1e" strokeWidth={1.5} />
          <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">Bookmark search</span>
        </button>
      </div>

      {/* Tab row */}
      <div className="flex items-end w-full border-b border-[#e4e4e4]">
        {/* Classic tab */}
        <button
          onClick={() => onTabChange("classic")}
          className="flex items-center gap-[8px] px-[4px] pb-[10px] mr-[24px] relative"
          style={{ borderBottom: activeTab === "classic" ? "2px solid #1b55f5" : "2px solid transparent", marginBottom: -1 }}
        >
          <span
            style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500, color: activeTab === "classic" ? "#1e1e1e" : "#949494" }}
            className="text-[14px] leading-[18px] whitespace-nowrap transition-colors"
          >
            Classic search
          </span>
          <span
            className="text-[12px] leading-[16px] px-[6px] py-[2px] rounded-full"
            style={{
              fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500,
              background: activeTab === "classic" ? "#e4e4e4" : "#f0f0f0",
              color: activeTab === "classic" ? "#1e1e1e" : "#949494",
            }}
          >
            {classicCount}
          </span>
        </button>

        {/* Smart Search tab */}
        <button
          onClick={() => onTabChange("smart")}
          className="flex items-center gap-[6px] px-[4px] pb-[10px] relative"
          style={{ borderBottom: activeTab === "smart" ? `2px solid ${PURPLE}` : "2px solid transparent", marginBottom: -1 }}
        >
          <img
            src={imgSmartSearchIcon}
            alt=""
            className="size-[14px] shrink-0"
            style={{ filter: activeTab === "smart" ? "none" : "grayscale(1) opacity(0.5)" }}
          />
          <span
            style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500, color: activeTab === "smart" ? PURPLE : PURPLE_LIGHT }}
            className="text-[14px] leading-[18px] whitespace-nowrap transition-colors"
          >
            Smart Search
          </span>
          <span
            className="text-[12px] leading-[16px] px-[6px] py-[2px] rounded-full"
            style={{
              fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500,
              background: activeTab === "smart" ? PURPLE : `${PURPLE_LIGHT}22`,
              color: activeTab === "smart" ? "white" : PURPLE_LIGHT,
            }}
          >
            {smartCount}
          </span>
        </button>
      </div>

      {/* Bottom row: action controls */}
      <div className="flex items-center justify-between w-full pt-[16px]">
        <div className="flex gap-[8px] items-center shrink-0">
          {selectedCount > 0 ? (
            <>
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
                {selectedCount} asset{selectedCount !== 1 ? "s" : ""} selected
              </span>
              <button onClick={onUnselectAll} className="flex items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
                <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1b55f5] text-[14px] leading-[18px] whitespace-nowrap underline">Unselect all</span>
              </button>
              <button onClick={onSelectAll} className="flex items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
                <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1b55f5] text-[14px] leading-[18px] whitespace-nowrap underline">Select all</span>
              </button>
            </>
          ) : (
            <>
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">
                {displayCount} assets
              </span>
              <button onClick={onSelectAll} className="flex items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
                <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#949494] text-[14px] leading-[18px] whitespace-nowrap">Select all</span>
              </button>
            </>
          )}
        </div>

        <div className="flex gap-[8px] items-center shrink-0">
          <div className="flex gap-[8px] items-center min-h-[32px] p-[8px] rounded-[4px]">
            <div className="bg-[#c4c4c4] flex items-center p-[2px] rounded-full w-[22px] shrink-0">
              <div className="bg-white rounded-full size-[10px]" />
            </div>
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">By relevance</span>
          </div>
          <button className="border border-[#e4e4e4] flex gap-[8px] items-center justify-center p-[8px] rounded-[4px] shrink-0 hover:border-[#1b55f5] transition-colors">
            <div className="flex gap-[4px] items-center">
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px] leading-[18px] whitespace-nowrap">Sort by:</span>
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">Most recent</span>
            </div>
            <ChevronDown size={16} color="#646464" strokeWidth={1.5} />
          </button>
          <button className="border border-[#1b55f5] flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px] shrink-0">
            <RectangleHorizontal size={16} color="#1b55f5" strokeWidth={1.5} />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1b55f5] text-[14px] leading-[18px] whitespace-nowrap">Collapse assets</span>
          </button>
          <div className="border border-[#e4e4e4] flex items-start rounded-[4px] shrink-0">
            {[AlignJustify, Columns3, Grid2x2, LayoutGrid].map((Icon, i) => (
              <button key={i} className={`flex items-center justify-center p-[8px] rounded-[4px] ${i === 3 ? "bg-[#1b55f5]" : "hover:bg-[#f8f8f8]"}`}>
                <Icon size={16} color={i === 3 ? "white" : "#1e1e1e"} strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Portals banner ───────────────────────────────────────────────────────────

const PORTALS = [
  { title: "MICHELIN Pilot Sport All-Season 4", count: 80 },
  { title: "Tiny houses", count: 46 },
  { title: "MICHELIN Agilis CrossClimate", count: 10 },
];

function PortalsBanner() {
  return (
    <div className="border border-[#e4e4e4] rounded-[8px] p-[20px] w-full shrink-0">
      <div className="flex items-center justify-between mb-[16px]">
        <div className="flex items-center gap-[8px]">
          <span style={{ fontFamily: "'Satoshi-Bold', sans-serif", fontWeight: 700 }} className="text-[#1e1e1e] text-[16px]">Portals</span>
          <span className="bg-[#e4e4e4] text-[#1e1e1e] text-[12px] px-[6px] py-[2px] rounded-full" style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}>8+</span>
          <button className="flex items-center gap-[4px] text-[#1b55f5] text-[14px]" style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}>
            See all <ChevronRight size={14} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex gap-[8px]">
          <button className="border border-[#e4e4e4] rounded-[4px] p-[6px] hover:border-[#1b55f5] transition-colors">
            <ChevronRight size={16} color="#1e1e1e" strokeWidth={1.5} className="rotate-180" />
          </button>
          <button className="border border-[#e4e4e4] rounded-[4px] p-[6px] hover:border-[#1b55f5] transition-colors">
            <ChevronRight size={16} color="#1e1e1e" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="flex gap-[16px] overflow-hidden">
        {PORTALS.map((p) => (
          <div key={p.title} className="border border-[#e4e4e4] rounded-[8px] overflow-hidden shrink-0 w-[300px]">
            <img alt="" className="w-full h-[100px] object-cover" src={imgAsset} />
            <div className="p-[12px]">
              <p style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] truncate">{p.title}</p>
              <p style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[12px] mt-[4px]">{p.count} assets</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Smart search banner (scenario B) ─────────────────────────────────────────

interface SmartSearchBannerProps {
  onSeeAll: () => void;
}

function SmartSearchBanner({ onSeeAll }: SmartSearchBannerProps) {
  return (
    <div
      className="w-full rounded-[8px] overflow-hidden shrink-0"
      style={{ background: "linear-gradient(100.23deg, rgba(219,228,253,0.4) 0%, rgba(252,224,254,0.4) 100%), white" }}
    >
      <div className="p-[24px]">
        {/* Header row */}
        <div className="flex items-start justify-between mb-[16px]">
          <div>
            <div className="flex items-center gap-[8px] mb-[4px]">
              <img src={imgSmartSearchIcon} alt="" className="size-[16px] shrink-0" />
              <span style={{ fontFamily: "'Satoshi-Bold', sans-serif", fontWeight: 700 }} className="text-[#1e1e1e] text-[16px]">Smart search results</span>
              <span className="text-[12px] px-[6px] py-[2px] rounded-full text-white" style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500, background: PURPLE }}>40+</span>
              <ChevronRight size={16} color={PURPLE} strokeWidth={1.5} />
            </div>
            <p style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[14px]">
              Visual and semantic similarity based search
            </p>
          </div>
          <button
            onClick={onSeeAll}
            className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-[4px] shrink-0 hover:opacity-80 transition-opacity"
            style={{ border: `1px solid ${PURPLE}`, color: PURPLE, fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}
          >
            <span className="text-[14px] whitespace-nowrap">See all results</span>
            <ChevronRight size={14} strokeWidth={1.5} />
          </button>
        </div>

        {/* 6 preview assets */}
        <div className="flex gap-[12px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative rounded-[4px] shrink-0 flex-1 aspect-square overflow-hidden min-w-0" style={{ maxWidth: 120 }}>
              <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
              <div className="absolute top-[8px] right-[8px]">
                <StatusDot />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Keyword refinement bar (scenario C, sticky bottom) ───────────────────────

const AI_KEYWORDS = ["174", "JPO", "beautiful", "nature", "summer"];

interface KeywordRefinementBarProps {
  query: string;
  onTrySmartSearch: () => void;
}

function KeywordRefinementBar({ query, onTrySmartSearch }: KeywordRefinementBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-[0_-5px_15px_rgba(30,30,30,0.08)]">
      <div className="px-[80px] py-[20px] flex items-center justify-between gap-[24px]">

        {/* Left: label + keyword pills */}
        <div className="flex items-center gap-[8px] min-w-0">
          {/* Label */}
          <div className="flex items-center gap-[4px] shrink-0">
            <Search size={16} color="#1e1e1e" strokeWidth={1.5} />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[16px] leading-[20px] whitespace-nowrap">
              Keywords related to your search
            </span>
          </div>

          {/* Blue keyword pills */}
          <div className="flex gap-[4px] items-center">
            {AI_KEYWORDS.map((kw) => (
              <button
                key={kw}
                className="border border-[#1b55f5] flex items-center justify-center min-h-[32px] px-[8px] rounded-[4px] shrink-0 hover:bg-[#f0f4ff] transition-colors"
                style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}
              >
                <span className="text-[#1b55f5] text-[14px] leading-[18px] whitespace-nowrap">{kw}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: gradient AI promotion card */}
        <button
          onClick={onTrySmartSearch}
          className="flex flex-col items-start p-[8px] rounded-[4px] shrink-0 hover:opacity-90 transition-opacity"
          style={{ backgroundImage: "linear-gradient(108.53deg, rgb(219,228,253) 0.23%, rgb(252,224,254) 100%)" }}
        >
          <div className="flex gap-[12px] items-center shrink-0 w-full">
            {/* Icon box */}
            <div
              className="flex items-center justify-center rounded-[4px] shrink-0 size-[28px]"
              style={{ backgroundImage: "linear-gradient(92.75deg, rgba(27,85,245,0.16) 0.23%, rgba(247,62,246,0.16) 100%)" }}
            >
              <img src={imgSmartSearchIcon} alt="" className="size-[16px]" />
            </div>

            {/* Text + arrow */}
            <div className="flex flex-col items-start py-[4px] shrink-0">
              <div className="flex gap-[8px] items-center">
                <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[12px] leading-[15px] whitespace-nowrap">
                  248 AI search results for "{query || "your search"}"
                </span>
                <ArrowRight size={16} color="#1e1e1e" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </button>

      </div>
    </div>
  );
}

// ─── Asset cards ──────────────────────────────────────────────────────────────

function DigitalTemplateBadge() {
  return (
    <button className="bg-[#1b55f5] flex gap-[6px] items-center min-h-[32px] p-[8px] rounded-[4px] shrink-0">
      <Star size={16} color="white" strokeWidth={1.5} fill="white" />
      <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[14px] leading-[18px] whitespace-nowrap">Digital template</span>
    </button>
  );
}

interface AssetCardProps { selected: boolean; onToggle: () => void; }

function AssetCard({ selected, onToggle }: AssetCardProps) {
  if (selected) {
    return (
      <div className="border-[3px] border-[#3377ff] relative rounded-[4px] shrink-0 size-[243px] overflow-hidden cursor-pointer" onClick={onToggle}>
        <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
        <div className="absolute inset-0 flex items-start justify-between p-[16px]">
          <div className="bg-[#1b55f5] flex items-center justify-center rounded-full shrink-0 size-[20px]">
            <Check size={12} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex gap-[8px] items-center">
            <Pencil size={16} color="white" strokeWidth={1.5} />
            <Flag size={16} color="white" strokeWidth={1.5} />
            <Copy size={16} color="white" strokeWidth={1.5} />
            <CornerUpRight size={16} color="white" strokeWidth={1.5} />
            <Trash2 size={16} color="white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="group relative rounded-[4px] shrink-0 size-[243px] overflow-hidden cursor-pointer">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
      <div className="absolute inset-0 flex items-start justify-end p-[16px] group-hover:opacity-0 transition-opacity">
        <StatusDot />
      </div>
      <div className="absolute inset-0 bg-[rgba(30,30,30,0.5)] flex flex-col justify-between p-[16px] rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-[8px] items-start w-full">
          <div className="flex flex-1 gap-[8px] items-center min-w-0">
            <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="border border-white rounded-full shrink-0 size-[20px] hover:bg-white/20 transition-colors" />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[14px] leading-[18px] truncate">Asset name</span>
          </div>
          <StatusDot />
        </div>
        <div className="flex gap-[8px] items-start w-full">
          <button className="bg-white flex flex-1 gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
            <Plus size={16} color="#1e1e1e" strokeWidth={1.5} />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">Add to</span>
          </button>
          <button className="bg-[#646464] flex items-center justify-center p-[8px] rounded-[4px] shrink-0">
            <Ellipsis size={16} color="white" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

interface AssetCardDigitalTemplateProps { selected: boolean; onToggle: () => void; }

function AssetCardDigitalTemplate({ selected, onToggle }: AssetCardDigitalTemplateProps) {
  if (selected) {
    return (
      <div className="border-[3px] border-[#3377ff] relative rounded-[4px] shrink-0 size-[243px] overflow-hidden cursor-pointer" onClick={onToggle}>
        <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
        <div className="absolute inset-0 flex flex-col items-start justify-between p-[16px]">
          <div className="flex items-start justify-between w-full">
            <div className="bg-[#1b55f5] flex items-center justify-center rounded-full shrink-0 size-[20px]">
              <Check size={12} color="white" strokeWidth={2.5} />
            </div>
            <div className="flex gap-[8px] items-center">
              <Pencil size={16} color="white" strokeWidth={1.5} />
              <Flag size={16} color="white" strokeWidth={1.5} />
              <Copy size={16} color="white" strokeWidth={1.5} />
              <CornerUpRight size={16} color="white" strokeWidth={1.5} />
              <Trash2 size={16} color="white" strokeWidth={1.5} />
            </div>
          </div>
          <DigitalTemplateBadge />
        </div>
      </div>
    );
  }
  return (
    <div className="group relative rounded-[4px] shrink-0 size-[243px] overflow-hidden cursor-pointer">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgAsset} />
      <div className="absolute inset-0 flex flex-col items-start justify-between p-[16px] group-hover:opacity-0 transition-opacity">
        <div className="flex w-full justify-end"><StatusDot /></div>
        <DigitalTemplateBadge />
      </div>
      <div className="absolute inset-0 bg-[rgba(30,30,30,0.5)] flex flex-col justify-between p-[16px] rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-[8px] items-start w-full">
          <div className="flex flex-1 gap-[8px] items-center min-w-0">
            <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="border border-white rounded-full shrink-0 size-[20px] hover:bg-white/20 transition-colors" />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-white text-[14px] leading-[18px] truncate">Asset name</span>
          </div>
          <StatusDot />
        </div>
        <div className="flex gap-[8px] items-start w-full">
          <button className="bg-white flex flex-1 gap-[6px] items-center justify-center min-h-[32px] p-[8px] rounded-[4px]">
            <Plus size={16} color="#1e1e1e" strokeWidth={1.5} />
            <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px] leading-[18px] whitespace-nowrap">Add to</span>
          </button>
          <button className="bg-[#646464] flex items-center justify-center p-[8px] rounded-[4px] shrink-0">
            <Ellipsis size={16} color="white" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Floating scenario toolbar ────────────────────────────────────────────────

interface FloatingToolbarProps {
  scenario: Scenario;
  onChange: (s: Scenario) => void;
}

function FloatingScenarioToolbar({ scenario, onChange }: FloatingToolbarProps) {
  const [pos, setPos] = React.useState({ x: 24, y: 0 });
  const [ready, setReady] = React.useState(false);
  const dragging = React.useRef(false);
  const dragStart = React.useRef({ mx: 0, my: 0, px: 0, py: 0 });

  // Init position after mount so we have window height
  const toolbarRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const h = toolbarRef.current?.offsetHeight ?? 240;
    setPos({ x: 24, y: window.innerHeight - h - 24 });
    setReady(true);
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
  }

  React.useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!dragging.current) return;
      const w = toolbarRef.current?.offsetWidth ?? 200;
      const h = toolbarRef.current?.offsetHeight ?? 240;
      setPos({
        x: Math.min(Math.max(0, dragStart.current.px + (e.clientX - dragStart.current.mx)), window.innerWidth - w - 8),
        y: Math.min(Math.max(0, dragStart.current.py + (e.clientY - dragStart.current.my)), window.innerHeight - h - 8),
      });
    }
    function onUp() { dragging.current = false; }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  if (!ready) return null;

  return (
    <div
      ref={toolbarRef}
      className="fixed z-50 bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#e4e4e4] select-none w-[200px]"
      style={{ left: pos.x, top: pos.y }}
    >
      {/* Drag handle */}
      <div
        className="flex items-center gap-[6px] px-[12px] py-[10px] cursor-grab border-b border-[#e4e4e4] rounded-t-[10px] bg-[#f8f8f8]"
        onMouseDown={onMouseDown}
      >
        <GripVertical size={14} color="#949494" strokeWidth={1.5} />
        <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#646464] text-[12px]">
          Demo scenario
        </span>
      </div>

      {/* Options */}
      <div className="p-[8px] flex flex-col gap-[4px]">
        {(Object.entries(SCENARIO_CONFIG) as [Scenario, typeof SCENARIO_CONFIG[Scenario]][]).map(([key, cfg]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`w-full text-left px-[10px] py-[8px] rounded-[6px] transition-colors`}
            style={{ background: scenario === key ? "#f0f4ff" : "transparent" }}
          >
            <div className="flex items-center gap-[6px]">
              <div
                className="size-[8px] rounded-full shrink-0"
                style={{ background: scenario === key ? "#1b55f5" : "#c4c4c4" }}
              />
              <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: scenario === key ? 700 : 500, color: scenario === key ? "#1b55f5" : "#1e1e1e" }} className="text-[13px]">
                {cfg.label}
              </span>
            </div>
            <p style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#949494] text-[11px] pl-[14px] mt-[1px]">
              {cfg.sublabel}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  function Dot() { return <div className="rounded-full bg-[#646464] size-[3px] shrink-0" />; }
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

// ─── Page ─────────────────────────────────────────────────────────────────────

const EXTRA_CARDS = 17;
const ALL_CLASSIC_IDS = [0, 1, ...Array.from({ length: EXTRA_CARDS }, (_, i) => i + 2)];

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = React.useState(searchParams.get("q") ?? "");
  const [scenario, setScenario] = React.useState<Scenario>("zero");
  const [activeTab, setActiveTab] = React.useState<Tab>("smart");
  const [selectedIds, setSelectedIds] = React.useState<Set<number>>(new Set());

  const classicCount = SCENARIO_CONFIG[scenario].classicCount;

  // When scenario changes, set the default tab
  React.useEffect(() => {
    setSelectedIds(new Set());
    setActiveTab(scenario === "zero" ? "smart" : "classic");
  }, [scenario]);

  function handleSearch() {
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  function toggleCard(id: number) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function selectAll() { setSelectedIds(new Set(ALL_CLASSIC_IDS)); }
  function unselectAll() { setSelectedIds(new Set()); }

  function switchToSmartTab() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTab("smart");
  }

  const showKeywordBar = scenario === "many" && activeTab === "classic";

  return (
    <div className={`bg-[#f8f8f8] flex flex-col min-h-screen ${showKeywordBar ? "pb-[60px]" : ""}`}>
      <Navigation
        query={query}
        resultCount={classicCount + SMART_COUNT}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      <div className="flex flex-col gap-[32px] items-start px-[80px] py-[40px] w-full">
        <FilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          classicCount={classicCount}
          smartCount={SMART_COUNT}
          selectedCount={selectedIds.size}
          onSelectAll={selectAll}
          onUnselectAll={unselectAll}
        />

        {/* ── Body content by tab + scenario ── */}

        {activeTab === "classic" ? (
          <>
            {/* Portals only when classic has results */}
            {classicCount > 0 && <PortalsBanner />}

            {/* Classic asset grid */}
            {classicCount > 0 ? (
              <div className="flex flex-wrap gap-[16px] items-start w-full">
                <AssetCard selected={selectedIds.has(0)} onToggle={() => toggleCard(0)} />
                <AssetCardDigitalTemplate selected={selectedIds.has(1)} onToggle={() => toggleCard(1)} />
                {Array.from({ length: Math.min(classicCount - 2, EXTRA_CARDS) }).map((_, i) => (
                  <AssetCard key={i + 2} selected={selectedIds.has(i + 2)} onToggle={() => toggleCard(i + 2)} />
                ))}
              </div>
            ) : (
              /* Scenario A: no classic results — nudge user to Smart Search */
              <div className="flex flex-col items-center justify-center w-full py-[80px] gap-[16px]">
                <img src={imgSmartSearchIcon} alt="" className="size-[40px] opacity-40" />
                <p style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#949494] text-[16px]">No classic results found.</p>
                <button
                  onClick={switchToSmartTab}
                  className="flex items-center gap-[6px] px-[20px] py-[10px] rounded-[4px] text-white text-[14px]"
                  style={{ background: PURPLE, fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}
                >
                  <img src={imgSmartSearchIcon} alt="" className="size-[14px] brightness-[100] invert" />
                  View Smart Search results
                  <ChevronRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            )}

            {/* Scenario B: Smart Search banner */}
            {scenario === "few" && (
              <SmartSearchBanner onSeeAll={switchToSmartTab} />
            )}
          </>
        ) : (
          /* Smart Search tab */
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex flex-wrap gap-[16px] items-start w-full">
              {Array.from({ length: 19 }).map((_, i) => (
                <AssetCard key={i} selected={false} onToggle={() => {}} />
              ))}
            </div>
            <div className="flex justify-center w-full pt-[8px]">
              <button className="flex items-center gap-[8px] px-[20px] py-[10px] border border-[#e4e4e4] rounded-[4px] hover:border-[#1b55f5] transition-colors">
                <RefreshCw size={16} color="#1e1e1e" strokeWidth={1.5} />
                <span style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }} className="text-[#1e1e1e] text-[14px]">Scroll to show more</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />

      {/* Scenario C: sticky keyword refinement bar */}
      {showKeywordBar && (
        <KeywordRefinementBar query={query} onTrySmartSearch={switchToSmartTab} />
      )}

      {/* Dev scenario switcher */}
      <FloatingScenarioToolbar scenario={scenario} onChange={setScenario} />
    </div>
  );
}
