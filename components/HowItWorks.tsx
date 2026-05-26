'use client';

import { L, FONT, MONO } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
import { Eyebrow } from './Atoms';

export function HowItWorks() {
  const { t } = useLang();
  const nums = ['01', '02', '03'];
  return (
    <section
      id="how"
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '120px 40px 100px',
        fontFamily: FONT,
      }}
    >
      <Eyebrow>{t.how.eyebrow}</Eyebrow>
      <h2
        style={{
          margin: '14px 0 64px',
          fontSize: 'clamp(44px, 5.4vw, 80px)',
          fontWeight: 600,
          letterSpacing: -2.4,
          lineHeight: 0.98,
          color: L.ink,
          maxWidth: 900,
        }}
      >
        {t.how.h2a}
        <span style={{ color: L.inkSoft }}>{t.how.h2b}</span>
      </h2>
      <div
        className="how-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: `0.5px solid ${L.lineStrong}`,
        }}
      >
        {t.how.steps.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '36px 28px 36px 0',
              borderInlineEnd: i < 2 ? `0.5px solid ${L.line}` : 'none',
              paddingInlineStart: i === 0 ? 0 : 28,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 13,
                fontWeight: 600,
                color: L.warm,
                letterSpacing: 0.6,
                marginBottom: 16,
              }}
            >
              {nums[i]}
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: -0.8,
                color: L.ink,
                lineHeight: 1.15,
                marginBottom: 10,
              }}
            >
              {s[0]}
            </div>
            <div
              style={{
                fontSize: 15,
                color: L.inkMid,
                lineHeight: 1.5,
                letterSpacing: -0.15,
              }}
            >
              {s[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
