'use client';

import { L, FONT, MONO } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
import { Eyebrow } from './Atoms';

export function FoundersNote() {
  const { t } = useLang();
  return (
    <section
      id="founders"
      style={{
        borderTop: `0.5px solid ${L.line}`,
        background: L.bg,
      }}
    >
      <div
        style={{
          maxWidth: 920,
          margin: '0 auto',
          padding: '120px 40px 100px',
          fontFamily: FONT,
        }}
      >
        <Eyebrow>{t.founders.eyebrow}</Eyebrow>
        <h2
          style={{
            margin: '14px 0 28px',
            fontSize: 'clamp(40px, 4.8vw, 64px)',
            fontWeight: 600,
            letterSpacing: -1.8,
            lineHeight: 1.02,
            color: L.ink,
          }}
        >
          {t.founders.h2a}
          <span style={{ color: L.inkSoft }}>{t.founders.h2b}</span>
        </h2>
        <div
          style={{
            fontSize: 18.5,
            lineHeight: 1.65,
            color: L.inkMid,
            letterSpacing: -0.2,
          }}
        >
          <p style={{ marginTop: 0 }}>{t.founders.p1}</p>
          <p>{t.founders.p2}</p>
          <p style={{ color: L.ink }}>{t.founders.p3}</p>
        </div>
        <div
          style={{
            marginTop: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: L.ink,
              color: L.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 0.5,
              fontFamily: MONO,
            }}
          >
            FO
          </div>
          <div>
            <div
              style={{
                fontSize: 14.5,
                fontWeight: 600,
                color: L.ink,
                letterSpacing: -0.1,
              }}
            >
              {t.founders.names}
            </div>
            <div style={{ fontSize: 13, color: L.inkSoft, letterSpacing: -0.1 }}>
              {t.founders.role}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
