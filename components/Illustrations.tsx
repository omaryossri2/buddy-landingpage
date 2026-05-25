'use client';

import { L, FONT, MONO } from '@/lib/tokens';

export function IllLockedFlex() {
  return (
    <svg width="100%" height="120" viewBox="0 0 280 120" fill="none" style={{ display: 'block' }}>
      <rect x="20" y="22" width="240" height="20" rx="4" fill={L.ink} />
      <rect x="20" y="22" width="3" height="20" rx="1.5" fill={L.warm} />
      <rect
        x="20"
        y="52"
        width="240"
        height="20"
        rx="4"
        fill="none"
        stroke={L.warm}
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <rect x="20" y="82" width="160" height="20" rx="4" fill={L.ink} />
    </svg>
  );
}

export function IllAIBar() {
  return (
    <svg width="100%" height="120" viewBox="0 0 280 120" fill="none" style={{ display: 'block' }}>
      <rect x="20" y="36" width="240" height="48" rx="24" fill={L.surface} stroke={L.line} />
      <circle cx="36" cy="60" r="3.5" fill={L.warm} />
      <rect x="50" y="56" width="130" height="8" rx="4" fill={L.inkFaint} />
      <circle cx="240" cy="60" r="14" fill={L.surfaceAlt} />
      <rect x="237" y="54" width="6" height="9" rx="3" fill={L.inkMid} />
    </svg>
  );
}

export function IllMoney() {
  return (
    <svg
      width="100%"
      height="120"
      viewBox="0 0 280 120"
      fill="none"
      style={{ display: 'block', fontFamily: MONO }}
    >
      <text
        x="20"
        y="50"
        fill={L.ink}
        style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.8, fontFamily: FONT }}
      >
        $34
      </text>
      <text x="84" y="50" fill={L.inkSoft} style={{ fontSize: 20, fontFamily: FONT }}>
        .20
      </text>
      <text x="140" y="50" fill={L.inkSoft} style={{ fontSize: 13, fontFamily: FONT }}>
        of $80
      </text>
      <rect x="20" y="68" width="240" height="6" rx="3" fill={L.surfaceAlt} />
      <rect x="20" y="68" width="103" height="6" rx="3" fill={L.cool} />
      <text x="20" y="98" fill={L.inkSoft} style={{ fontSize: 12, fontFamily: MONO }}>
        Food · Transit · Misc
      </text>
    </svg>
  );
}

export function IllWidgets() {
  return (
    <svg width="100%" height="120" viewBox="0 0 280 120" fill="none" style={{ display: 'block' }}>
      <rect x="20" y="20" width="110" height="80" rx="14" fill={L.surface} stroke={L.line} />
      <circle cx="32" cy="33" r="2.5" fill={L.warm} />
      <rect x="40" y="30" width="55" height="6" rx="3" fill={L.inkFaint} />
      <rect x="30" y="50" width="70" height="9" rx="3" fill={L.ink} />
      <rect x="30" y="64" width="50" height="6" rx="3" fill={L.inkFaint} />
      <rect x="30" y="84" width="90" height="4" rx="2" fill={L.surfaceAlt} />
      <rect x="30" y="84" width="36" height="4" rx="2" fill={L.cool} />
      <rect x="148" y="20" width="112" height="80" rx="14" fill={L.ink} />
      <text
        x="160"
        y="48"
        fill={L.bg}
        style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, fontFamily: FONT }}
      >
        NEXT · 10:30
      </text>
      <rect x="160" y="58" width="80" height="9" rx="3" fill={L.bg} />
      <rect x="160" y="72" width="50" height="6" rx="3" fill="rgba(250,250,247,0.4)" />
    </svg>
  );
}

export function IllBooking() {
  const dates = ['Tue · May 27', 'Wed · May 28', 'Thu · May 29'];
  const times = ['14:00', '10:00', '15:30'];
  return (
    <svg width="100%" height="120" viewBox="0 0 280 120" fill="none" style={{ display: 'block' }}>
      {[26, 50, 74].map((y, i) => (
        <g key={i}>
          <rect x="20" y={y} width="240" height="22" rx="6" fill={L.bg} stroke={L.line} />
          <text
            x="30"
            y={y + 15}
            fill={L.ink}
            style={{ fontSize: 11, fontWeight: 500, fontFamily: FONT }}
          >
            {dates[i]}
          </text>
          <text
            x="200"
            y={y + 15}
            fill={L.inkMid}
            style={{ fontSize: 11, fontFamily: MONO }}
          >
            {times[i]}
          </text>
        </g>
      ))}
      <rect x="20" y="100" width="100" height="12" rx="4" fill={L.warmSoft} />
      <text
        x="28"
        y="109"
        fill={L.warmInk}
        style={{ fontSize: 9, fontWeight: 600, fontFamily: FONT, letterSpacing: 0.4 }}
      >
        LINK COPIED
      </text>
    </svg>
  );
}

export function IllPrivacy() {
  return (
    <svg width="100%" height="120" viewBox="0 0 280 120" fill="none" style={{ display: 'block' }}>
      <rect x="20" y="28" width="240" height="64" rx="14" fill={L.surface} stroke={L.line} />
      <text
        x="36"
        y="58"
        fill={L.ink}
        style={{ fontSize: 14, fontWeight: 600, fontFamily: FONT, letterSpacing: -0.2 }}
      >
        No streaks. No ads.
      </text>
      <text x="36" y="78" fill={L.inkSoft} style={{ fontSize: 12, fontFamily: FONT }}>
        Your data lives on your device.
      </text>
      <circle cx="244" cy="60" r="8" fill={L.warmSoft} />
      <circle cx="244" cy="60" r="3" fill={L.warm} />
    </svg>
  );
}
