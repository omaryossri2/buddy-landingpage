'use client';

import { L, FONT, MONO, WAITLIST_URL, WAITLIST_COUNT } from '@/lib/tokens';

export function FinalCTA() {
  return (
    <section style={{ background: L.ink, color: L.bg }}>
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '120px 40px 120px',
          fontFamily: FONT,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: L.warm,
            letterSpacing: 1.6,
            textTransform: 'uppercase',
          }}
        >
          iOS · 2026
        </div>
        <h2
          style={{
            margin: '18px auto 24px',
            fontSize: 'clamp(56px, 7vw, 108px)',
            fontWeight: 600,
            letterSpacing: -3.6,
            lineHeight: 0.95,
            color: L.bg,
            maxWidth: 1000,
          }}
        >
          One quiet place,
          <br />
          <span style={{ color: 'rgba(242,239,232,0.45)' }}>finally.</span>
        </h2>
        <p
          style={{
            fontSize: 19,
            color: 'rgba(242,239,232,0.65)',
            maxWidth: 540,
            margin: '0 auto 40px',
            letterSpacing: -0.2,
            lineHeight: 1.5,
          }}
        >
          Get on the waitlist. We&apos;ll send one email when Buddy is ready &mdash; nothing else.
        </p>

        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: L.bg,
            color: L.ink,
            height: 60,
            padding: '0 32px',
            borderRadius: 30,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: -0.2,
            textDecoration: 'none',
          }}
        >
          Join the waitlist
          <span style={{ fontFamily: MONO, color: L.warm, fontSize: 14 }}>→</span>
        </a>

        <div
          style={{
            marginTop: 56,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            color: 'rgba(242,239,232,0.45)',
            fontSize: 13,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: L.warm,
              flexShrink: 0,
            }}
          />
          <span>
            <span style={{ color: L.bg, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
              {WAITLIST_COUNT.toLocaleString()}
            </span>{' '}
            people waiting · iOS first, Android later
          </span>
        </div>
      </div>
    </section>
  );
}
