'use client';

import { L, FONT, MONO } from '@/lib/tokens';
import { Eyebrow } from './Atoms';

export function FoundersNote() {
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
        <Eyebrow>From the founders</Eyebrow>
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
          We were tired of apps that{' '}
          <span style={{ color: L.inkSoft }}>shout for attention.</span>
        </h2>
        <div
          style={{
            fontSize: 18.5,
            lineHeight: 1.65,
            color: L.inkMid,
            letterSpacing: -0.2,
          }}
        >
          <p style={{ marginTop: 0 }}>
            Calendars expect you to plan. Budget apps expect you to log. To-do apps expect you to
            remember to open them. Each one is fine on its own. Together, they&apos;re a tax on
            attention.
          </p>
          <p>
            Buddy is the small, calm assistant we wanted for ourselves &mdash; one that knows your
            meetings, your money and your tasks all at once, and only speaks up when it has
            something useful to say. It looks like an app, but it behaves like a person you trust
            with the boring parts of your life.
          </p>
          <p style={{ color: L.ink }}>
            We&apos;re building it slowly, on iOS first, with a few hundred friends. If you&apos;d
            like an early invite, drop your email below. We&apos;ll be quiet until we have
            something worth showing you.
          </p>
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
              Fady &amp; Omar
            </div>
            <div style={{ fontSize: 13, color: L.inkSoft, letterSpacing: -0.1 }}>
              Co-founders · Cairo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
