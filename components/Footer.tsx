'use client';

import { L, FONT } from '@/lib/tokens';
import { BuddyLogo } from './Atoms';

function FooterCol({ title, links }: { title: string; links: string[] }) {
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
            <span
              style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.4, fontFamily: FONT }}
            >
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
            A calm personal AI for your time, money, and tasks. Made in Cairo.
          </div>
        </div>
        <FooterCol
          title="Product"
          links={['Features', 'AI moments', 'How it works', 'Widgets']}
        />
        <FooterCol title="Follow" links={['Instagram', 'Email us']} />
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
        <span>© 2026 Buddy Labs</span>
        <span style={{ fontFamily: '"SF Mono", ui-monospace, Menlo, monospace' }}>
          iOS · Coming summer 2026
        </span>
      </div>
    </footer>
  );
}
