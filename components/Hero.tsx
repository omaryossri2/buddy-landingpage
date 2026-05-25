'use client';

import { useState } from 'react';
import { L, FONT, MONO, WAITLIST_URL, WAITLIST_EMAIL_ENTRY, WAITLIST_COUNT } from '@/lib/tokens';
import { Chip } from './Atoms';
import { HeroPreview } from './HeroPreview';

function WaitlistForm() {
  const [email, setEmail] = useState('');

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    const url = email
      ? `${WAITLIST_URL}?usp=pp_url&${WAITLIST_EMAIL_ENTRY}=${encodeURIComponent(email)}`
      : WAITLIST_URL;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <form
      onSubmit={handle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: L.surface,
        border: `1px solid ${L.lineStrong}`,
        borderRadius: 30,
        padding: 6,
        paddingLeft: 22,
        maxWidth: 460,
        boxShadow:
          '0 1px 0 rgba(20,18,14,0.02), 0 12px 28px -16px rgba(20,18,14,0.18)',
      }}
    >
      <input
        type="email"
        required
        placeholder="you@elsewhere.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontSize: 16,
          fontFamily: FONT,
          color: L.ink,
          letterSpacing: -0.2,
          minWidth: 0,
          padding: '14px 0',
        }}
      />
      <button
        type="submit"
        style={{
          background: L.ink,
          color: L.bg,
          border: 'none',
          height: 48,
          padding: '0 22px',
          borderRadius: 24,
          fontSize: 14.5,
          fontWeight: 600,
          letterSpacing: -0.1,
          cursor: 'pointer',
          fontFamily: FONT,
          whiteSpace: 'nowrap',
        }}
      >
        Join waitlist →
      </button>
    </form>
  );
}

export function Hero() {
  const avatarColors = [L.ink, L.warm, L.cool, '#7a3d1a'];

  return (
    <section
      id="top"
      className="hero-section"
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '80px 40px 60px',
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gap: 64,
        alignItems: 'center',
        fontFamily: FONT,
      }}
    >
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          <Chip tone="warm">iOS · 2026</Chip>
          <Chip tone="outline">Android, eventually</Chip>
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(64px, 8.4vw, 124px)',
            fontWeight: 600,
            lineHeight: 0.94,
            letterSpacing: -4.5,
            color: L.ink,
          }}
        >
          Your time,
          <br />
          money, and
          <br />
          tasks &mdash;
          <br />
          <span style={{ color: L.inkSoft }}>in one quiet place.</span>
        </h1>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: L.inkMid,
            margin: '28px 0 36px',
            maxWidth: 520,
            letterSpacing: -0.2,
          }}
        >
          Buddy is a calm personal AI that plans your week, watches your spending, and answers in
          plain English. No streaks. No ads. No noise.
        </p>

        <WaitlistForm />

        <div
          style={{
            marginTop: 22,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: L.inkSoft,
            fontSize: 13,
          }}
        >
          <div style={{ display: 'flex' }}>
            {avatarColors.map((c, i) => (
              <div
                key={i}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  background: c,
                  border: `1.5px solid ${L.bg}`,
                  marginLeft: i === 0 ? 0 : -7,
                }}
              />
            ))}
          </div>
          <div>
            <strong
              style={{
                color: L.ink,
                fontWeight: 600,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {WAITLIST_COUNT.toLocaleString()}
            </strong>{' '}
            people on the waitlist
          </div>
        </div>
      </div>

      <div className="hero-preview-col" style={{ position: 'relative' }}>
        <HeroPreview />
        <div
          className="hero-note"
          style={{
            position: 'absolute',
            bottom: -28,
            right: -16,
            background: L.ink,
            color: L.bg,
            borderRadius: 14,
            padding: '12px 16px',
            fontSize: 12.5,
            fontFamily: MONO,
            letterSpacing: -0.1,
            lineHeight: 1.4,
            maxWidth: 220,
            boxShadow: '0 18px 36px -10px rgba(20,18,14,0.25)',
          }}
        >
          <span style={{ color: L.warm }}>buddy</span> moved 1 event, freed 2.5h Friday morning.
        </div>
      </div>
    </section>
  );
}
