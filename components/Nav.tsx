'use client';

import { L, FONT, WAITLIST_URL } from '@/lib/tokens';
import { BuddyLogo } from './Atoms';

const navLink = {
  color: L.inkMid,
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: -0.1,
  fontFamily: FONT,
} as const;

export function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,250,247,0.82)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: `0.5px solid ${L.line}`,
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: FONT,
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: L.ink,
            textDecoration: 'none',
          }}
        >
          <BuddyLogo size={28} />
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.4, fontFamily: FONT }}>
            Buddy
          </span>
        </a>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="#features" style={navLink}>
            Features
          </a>
          <a href="#ai" style={navLink}>
            AI moments
          </a>
          <a href="#how" style={navLink}>
            How it works
          </a>
          <a href="#founders" style={navLink}>
            About
          </a>
        </div>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: L.ink,
            color: L.bg,
            height: 40,
            padding: '0 18px',
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: -0.1,
            fontFamily: FONT,
          }}
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
