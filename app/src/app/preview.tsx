"use client";

import { useState } from "react";

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-sm border border-border-subtle ${className}`} />
      <span className="text-[13px] font-medium">{name}</span>
    </div>
  );
}

export default function Preview() {
  const [brand, setBrand] = useState<"jk" | "am" | "jp">("jk");
  const [mode, setMode] = useState<"light" | "dark">("light");

  const handleBrandChange = (newBrand: "jk" | "am" | "jp") => {
    setBrand(newBrand);
    document.documentElement.setAttribute("data-brand", newBrand);
  };

  const handleModeChange = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.documentElement.setAttribute("data-mode", newMode);
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-primary p-8 transition-colors">
      {/* 테마 컨트롤 */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => handleBrandChange(brand === "jk" ? "am" : brand === "am" ? "jp" : "jk")}
          className="px-4 py-2 rounded-brand-md bg-bg-interactive text-text-inverse font-semibold text-[16px]"
        >
          {brand === "jk" ? "JK → AM" : brand === "am" ? "AM → JP" : "JP → JK"}
        </button>
        <button
          onClick={handleModeChange}
          className="px-4 py-2 rounded-md border border-border-default bg-bg-base text-text-primary font-medium text-[14px]"
        >
          {mode === "light" ? "Dark 모드" : "Light 모드"}
        </button>
      </div>

      {/* 타이틀 */}
      <h1 className="text-[32px] font-bold leading-[40px] tracking-[-0.5px] mb-2">
        JAMS Design System
      </h1>
      <p className="text-text-secondary text-[16px] leading-[22px] mb-12">
        {brand === "jk" ? "JK 브랜드" : brand === "am" ? "AM 브랜드" : "JP 브랜드"} · {mode === "light" ? "Light" : "Dark"} 모드
      </p>

      {/* 컬러 토큰 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Color Tokens
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <ColorSwatch name="bg-brand" className="bg-bg-brand" />
          <ColorSwatch name="bg-brand-subtle" className="bg-bg-brand-subtle" />
          <ColorSwatch name="bg-surface" className="bg-bg-surface" />
          <ColorSwatch name="bg-interactive" className="bg-bg-interactive" />
          <ColorSwatch name="bg-interactive-hover" className="bg-bg-interactive-hover" />
          <ColorSwatch name="bg-interactive-disabled" className="bg-bg-interactive-disabled" />
          <ColorSwatch name="status-danger" className="bg-status-danger" />
          <ColorSwatch name="status-success" className="bg-status-success" />
          <ColorSwatch name="status-warning" className="bg-status-warning" />
          <ColorSwatch name="status-info" className="bg-status-info" />
        </div>
      </section>

      {/* 타이포그래피 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Typography (Pretendard)
        </h2>
        <div className="space-y-3 p-6 rounded-md border border-border-default bg-bg-base">
          <p className="text-[32px] font-bold leading-[40px] tracking-[-0.5px]">Heading/xl 32px Bold</p>
          <p className="text-[28px] font-bold leading-[36px] tracking-[-0.5px]">Heading/lg 28px Bold</p>
          <p className="text-[24px] font-bold leading-[32px] tracking-[-0.5px]">Heading/base 24px Bold</p>
          <p className="text-[20px] font-semibold leading-[28px]">Heading/sm 20px Semibold</p>
          <p className="text-[18px] font-semibold leading-[24px]">Heading/xs 18px Semibold</p>
          <p className="text-[17px] font-normal leading-[24px]">Body/lg 17px Regular</p>
          <p className="text-[16px] font-normal leading-[22px]">Body/base 16px Regular</p>
          <p className="text-[15px] font-normal leading-[22px] text-text-secondary">Body/sm 15px Regular</p>
          <p className="text-[14px] font-normal leading-[20px] text-text-secondary">Body/xs 14px Regular</p>
          <p className="text-[13px] font-medium leading-[18px] tracking-[0.2px] text-text-tertiary">Caption/lg 13px Medium</p>
          <p className="text-[12px] font-medium leading-[18px] tracking-[0.2px] text-text-tertiary">Caption/base 12px Medium</p>
          <p className="text-[11px] font-semibold leading-[18px] text-text-tertiary">Micro/size11 11px Semibold (배지 전용)</p>
        </div>
      </section>

      {/* 버튼 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Buttons
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-medium text-text-tertiary w-16">52px</span>
            <button className="h-[52px] px-4 rounded-brand-md bg-bg-interactive text-text-inverse text-[16px] font-semibold">Primary</button>
            <button className="h-[52px] px-4 rounded-brand-md bg-bg-brand-subtle border border-border-brand-subtle text-text-brand text-[16px] font-semibold">Secondary</button>
            <button className="h-[52px] px-4 rounded-brand-md bg-bg-base border border-border-default text-text-primary text-[16px] font-semibold">Monoline</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-medium text-text-tertiary w-16">48px</span>
            <button className="h-[48px] px-4 rounded-brand-md bg-bg-interactive text-text-inverse text-[16px] font-semibold">Primary</button>
            <button className="h-[48px] px-4 rounded-brand-md bg-bg-brand-subtle border border-border-brand-subtle text-text-brand text-[16px] font-semibold">Secondary</button>
            <button className="h-[48px] px-4 rounded-brand-md bg-bg-base border border-border-default text-text-primary text-[16px] font-semibold">Monoline</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-medium text-text-tertiary w-16">40px</span>
            <button className="h-[40px] px-3 rounded-md bg-bg-interactive text-text-inverse text-[14px] font-medium">Primary</button>
            <button className="h-[40px] px-3 rounded-md bg-bg-brand-subtle border border-border-brand-subtle text-text-brand text-[14px] font-medium">Secondary</button>
            <button className="h-[40px] px-3 rounded-md bg-bg-base border border-border-default text-text-primary text-[14px] font-medium">Monoline</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-medium text-text-tertiary w-16">32px</span>
            <button className="h-[32px] px-2 rounded-brand-sm bg-bg-interactive text-text-inverse text-[13px] font-medium">Primary</button>
            <button className="h-[32px] px-2 rounded-brand-sm bg-bg-brand-subtle border border-border-brand-subtle text-text-brand text-[13px] font-medium">Secondary</button>
            <button className="h-[32px] px-2 rounded-brand-sm bg-bg-base border border-border-default text-text-primary text-[13px] font-medium">Monoline</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-medium text-text-tertiary w-16">disabled</span>
            <button disabled className="h-[48px] px-4 rounded-brand-md bg-bg-interactive-disabled text-text-inverse text-[16px] font-semibold cursor-not-allowed">Primary</button>
            <button disabled className="h-[48px] px-4 rounded-brand-md bg-bg-base border border-border-subtle text-text-disabled text-[16px] font-semibold cursor-not-allowed">Secondary</button>
          </div>
        </div>
      </section>

      {/* 카드 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Cards
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-md border border-border-default bg-bg-base">
            <h3 className="text-[18px] font-semibold leading-[24px] mb-2">표준 카드</h3>
            <p className="text-[15px] leading-[22px] text-text-secondary">border-default + radius-md + padding 24px</p>
          </div>
          <div className="p-6 rounded-brand-md border border-border-brand bg-bg-base">
            <h3 className="text-[18px] font-semibold leading-[24px] text-text-brand mb-2">브랜드 카드</h3>
            <p className="text-[15px] leading-[22px] text-text-secondary">border-brand + radius-brand-md</p>
          </div>
          <div className="p-4 rounded-sm bg-bg-surface">
            <h3 className="text-[18px] font-semibold leading-[24px] mb-2">서피스 카드</h3>
            <p className="text-[15px] leading-[22px] text-text-secondary">bg-surface + radius-sm + padding 16px</p>
          </div>
        </div>
      </section>

      {/* 상태 인디케이터 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Status Indicators
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-status-info bg-[var(--color-blue-50)] text-status-info">
            <span className="text-[15px] font-medium">Info</span>
            <span className="text-[14px]">정보 상태</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-status-success bg-[var(--color-green-50)] text-status-success">
            <span className="text-[15px] font-medium">Success</span>
            <span className="text-[14px]">성공 상태</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-status-warning bg-[var(--color-yellow-50)] text-[var(--color-yellow-800)]">
            <span className="text-[15px] font-medium">Warning</span>
            <span className="text-[14px]">경고 상태</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-status-danger bg-[var(--color-red-50)] text-status-danger">
            <span className="text-[15px] font-medium">Danger</span>
            <span className="text-[14px]">에러 상태</span>
          </div>
        </div>
      </section>

      {/* 아이콘 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Icon Tokens
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 p-4 rounded-md border border-border-default">
            <div className="w-8 h-8 rounded-sm bg-bg-surface flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-primary)"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-medium">icon-primary</p>
              <p className="text-[12px] text-text-tertiary">기본 아이콘</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-md border border-border-default">
            <div className="w-8 h-8 rounded-sm bg-bg-surface flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-secondary)"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-medium">icon-secondary</p>
              <p className="text-[12px] text-text-tertiary">보조 아이콘</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-md border border-border-default">
            <div className="w-8 h-8 rounded-sm bg-bg-surface flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-tertiary)"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-medium">icon-tertiary</p>
              <p className="text-[12px] text-text-tertiary">힌트 아이콘</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-md border border-border-default">
            <div className="w-8 h-8 rounded-sm bg-bg-surface flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-disabled)"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-medium">icon-disabled</p>
              <p className="text-[12px] text-text-tertiary">비활성 아이콘</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-md border border-border-default">
            <div className="w-8 h-8 rounded-sm bg-bg-brand flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-inverse)"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-medium">icon-inverse</p>
              <p className="text-[12px] text-text-tertiary">브랜드 배경 위 아이콘</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-md border border-border-default">
            <div className="w-8 h-8 rounded-sm bg-bg-surface flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-brand)"/></svg>
            </div>
            <div>
              <p className="text-[14px] font-medium">icon-brand</p>
              <p className="text-[12px] text-text-tertiary">브랜드 아이콘 (테마 전환)</p>
            </div>
          </div>
        </div>
        {/* 아이콘 사이즈 스케일 */}
        <h3 className="text-[18px] font-semibold leading-[24px] mt-8 mb-4">Size Scale</h3>
        <div className="flex flex-wrap items-end gap-4">
          {[12, 14, 16, 18, 20, 24, 32, 48].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
                <path d="M11 19V13H5v-2h6V5h2v6h6v2h-6v6h-2z" fill="var(--icon-brand)"/>
              </svg>
              <span className="text-[11px] font-semibold text-text-tertiary">{size}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* 스페이싱 */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Spacing Scale
        </h2>
        <div className="space-y-2">
          {[
            ["spacing-1", "4px", "w-1"],
            ["spacing-2", "8px", "w-2"],
            ["spacing-3", "12px", "w-3"],
            ["spacing-4", "16px", "w-4"],
            ["spacing-6", "24px", "w-6"],
            ["spacing-8", "32px", "w-8"],
            ["spacing-12", "48px", "w-12"],
            ["spacing-16", "64px", "w-16"],
            ["spacing-20", "80px", "w-20"],
          ].map(([name, px, w]) => (
            <div key={name} className="flex items-center gap-3">
              <span className="text-[13px] font-medium text-text-tertiary w-24">{name}</span>
              <div className={`h-3 ${w} bg-bg-brand rounded-xs`} />
              <span className="text-[12px] text-text-tertiary">{px}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section className="mb-12">
        <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.5px] mb-6">
          Border Radius
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            ["xs", "4px", "rounded-xs"],
            ["sm", "8px", "rounded-sm"],
            ["md", "10px", "rounded-md"],
            ["lg", "16px", "rounded-lg"],
            ["xl", "24px", "rounded-xl"],
            ["full", "pill", "rounded-full"],
            ["brand-md", "JK/JP:10 AM:16", "rounded-brand-md"],
          ].map(([name, value, cls]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 bg-bg-brand-subtle border border-border-brand ${cls}`} />
              <span className="text-[12px] font-medium text-text-tertiary">{name}</span>
              <span className="text-[11px] text-text-disabled">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
