'use client';

import { L, FONT } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';

export function ManifestoStrip() {
  const { t } = useLang();
  return (
    <section
      style={{
        borderTop: `0.5px solid ${L.line}`,
        borderBottom: `0.5px solid ${L.line}`,
        background: L.surfaceAlt,
      }}
    >
      <div
        className="manifesto-grid"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '36px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 28,
          fontFamily: FONT,
        }}
      >
        {t.manifesto.map(([h, s]) => (
          <div key={h}>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: L.ink,
                letterSpacing: -0.2,
              }}
            >
              {h}
            </div>
            <div
              style={{
                fontSize: 14,
                color: L.inkMid,
                marginTop: 3,
                letterSpacing: -0.1,
              }}
            >
              {s}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
