'use client';

import { CSSProperties, ReactNode } from 'react';
import { L, FONT, MONO } from '@/lib/tokens';

// ─── BuddyLogo ──────────────────────────────────────────────

export function BuddyLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28">
      <rect x="0" y="0" width="28" height="28" rx="7" fill={L.ink} />
      <path
        d="M9 7 H15.5 A4 4 0 0 1 15.5 14 H9 V7 Z M9 14 H17 A4 4 0 0 1 17 21 H9 V14 Z"
        fill={L.bg}
      />
      <circle cx="20" cy="20.5" r="2" fill={L.warm} />
    </svg>
  );
}

// ─── Chip ────────────────────────────────────────────────────

type ChipTone = 'neutral' | 'warm' | 'cool' | 'over' | 'outline';

const chipTones: Record<ChipTone, { bg: string; fg: string; border?: string }> = {
  neutral: { bg: L.surfaceAlt, fg: L.inkMid },
  warm: { bg: L.warmSoft, fg: L.warmInk },
  cool: { bg: L.coolSoft, fg: L.coolInk },
  over: { bg: L.overSoft, fg: L.over },
  outline: { bg: 'transparent', fg: L.inkMid, border: `0.5px solid ${L.lineStrong}` },
};

export function Chip({
  children,
  tone = 'neutral',
  style = {},
}: {
  children: ReactNode;
  tone?: ChipTone;
  style?: CSSProperties;
}) {
  const tt = chipTones[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: 0.1,
        padding: '3px 9px',
        borderRadius: 99,
        background: tt.bg,
        color: tt.fg,
        border: tt.border,
        fontFamily: FONT,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// ─── AIBar ───────────────────────────────────────────────────

export function AIBar({
  value,
  placeholder = 'Ask Buddy anything…',
  width,
}: {
  value?: string;
  placeholder?: string;
  width?: number | string;
}) {
  return (
    <div
      style={{
        width,
        background: L.surface,
        border: `1px solid ${L.line}`,
        borderRadius: 26,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 8px 0 16px',
        boxShadow: '0 1px 0 rgba(20,18,14,0.02), 0 6px 22px rgba(20,18,14,0.06)',
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: L.warm,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          flex: 1,
          fontSize: 15,
          color: value ? L.ink : L.inkSoft,
          letterSpacing: -0.2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {value || placeholder}
      </div>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          background: L.surfaceAlt,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: L.inkMid,
          flexShrink: 0,
        }}
      >
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <rect x="4" y="1" width="6" height="10" rx="3" />
          <path d="M1 8a6 6 0 0012 0M7 14v3M4 17h6" />
        </svg>
      </div>
    </div>
  );
}

// ─── EventRow ────────────────────────────────────────────────

export function EventRow({
  time,
  dur,
  title,
  sub,
  locked,
  flex,
  cool,
}: {
  time: string;
  dur: string;
  title: string;
  sub: string;
  locked?: boolean;
  flex?: boolean;
  cool?: boolean;
}) {
  return (
    <div
      style={{
        background: L.surface,
        border: `0.5px solid ${L.line}`,
        borderRadius: 16,
        padding: 14,
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        fontFamily: FONT,
      }}
    >
      <div style={{ width: 54, flexShrink: 0 }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: -0.3,
            color: L.ink,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {time}
        </div>
        <div style={{ fontSize: 11, color: L.inkSoft, fontVariantNumeric: 'tabular-nums' }}>
          {dur}
        </div>
      </div>
      <div
        style={{
          width: 3,
          alignSelf: 'stretch',
          borderRadius: 2,
          background: locked ? L.ink : 'transparent',
          border: flex ? `1px dashed ${L.flexBorder}` : 'none',
          marginRight: 2,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 15.5,
            fontWeight: 600,
            letterSpacing: -0.2,
            color: L.ink,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 12.5, color: L.inkSoft, marginTop: 2 }}>{sub}</div>
      </div>
      {flex && <Chip tone="warm">flex</Chip>}
      {locked && <Chip tone="outline">locked</Chip>}
      {cool && <Chip tone="cool">finance</Chip>}
    </div>
  );
}

// ─── Money ───────────────────────────────────────────────────

export function Money({
  amount,
  size = 28,
  weight = 600,
  currency = '$',
  muted,
  faintCents = true,
  isNeg,
}: {
  amount: number;
  size?: number;
  weight?: number;
  currency?: string;
  muted?: boolean;
  faintCents?: boolean;
  isNeg?: boolean;
}) {
  const abs = Math.abs(amount);
  const whole = Math.floor(abs);
  const cents = Math.round((abs - whole) * 100)
    .toString()
    .padStart(2, '0');
  return (
    <span
      style={{
        fontFamily: FONT,
        fontWeight: weight,
        fontSize: size,
        letterSpacing: -size * 0.025,
        color: muted ? L.inkMid : L.ink,
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap',
      }}
    >
      {isNeg && '−'}
      {currency}
      {whole.toLocaleString()}
      {faintCents && (
        <span style={{ opacity: 0.55, fontSize: size * 0.7 }}>
          .{cents}
        </span>
      )}
    </span>
  );
}

// ─── Eyebrow ─────────────────────────────────────────────────

export function Eyebrow({
  children,
  color = L.warm,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 600,
        color,
        letterSpacing: 1.6,
        textTransform: 'uppercase',
        fontFamily: FONT,
      }}
    >
      {children}
    </div>
  );
}
