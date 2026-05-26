'use client';

import { L, FONT, WAITLIST_URL } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
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
  const { t, toggle } = useLang();
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
            {t.nav.features}
          </a>
          <a href="#ai" style={navLink}>
            {t.nav.aiMoments}
          </a>
          <a href="#how" style={navLink}>
            {t.nav.howItWorks}
          </a>
          <a href="#founders" style={navLink}>
            {t.nav.about}
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={toggle}
            aria-label="Switch language"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'transparent',
              color: L.ink,
              height: 40,
              padding: '0 14px',
              borderRadius: 20,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: -0.1,
              cursor: 'pointer',
              fontFamily: FONT,
              border: `1px solid ${L.lineStrong}`,
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
            {t.langToggle}
          </button>
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
              whiteSpace: 'nowrap',
            }}
          >
            {t.nav.joinWaitlist}
          </a>
        </div>
      </div>
    </nav>
  );
}
