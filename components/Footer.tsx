'use client';

import { L, FONT } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
import { BuddyLogo } from './Atoms';

function FooterCol({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: L.ink,
          letterSpacing: 1.2,
          textTransform: 'uppercase',
          marginBottom: 14,
          fontFamily: FONT,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: 13.5,
              color: L.inkMid,
              textDecoration: 'none',
              letterSpacing: -0.1,
              fontFamily: FONT,
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer
      style={{
        background: L.bg,
        borderTop: `0.5px solid ${L.line}`,
        fontFamily: FONT,
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '56px 40px 40px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 40,
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
            }}
          >
            <BuddyLogo size={28} />
            <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.4, fontFamily: FONT }}>
              Buddy
            </span>
          </div>
          <div
            style={{
              fontSize: 13.5,
              color: L.inkMid,
              letterSpacing: -0.1,
              maxWidth: 280,
              lineHeight: 1.5,
            }}
          >
            {t.footer.tagline}
          </div>
        </div>
        <FooterCol title={t.footer.productTitle} links={t.footer.product} />
        <FooterCol title={t.footer.followTitle} links={t.footer.follow} />
      </div>
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '20px 40px 40px',
          borderTop: `0.5px solid ${L.line}`,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 12.5,
          color: L.inkSoft,
          letterSpacing: -0.1,
        }}
      >
        <span>{t.footer.copyright}</span>
        <span style={{ fontFamily: '"SF Mono", ui-monospace, Menlo, monospace' }}>
          {t.footer.coming}
        </span>
      </div>
    </footer>
  );
}
