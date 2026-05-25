'use client';

import { L, FONT, MONO } from '@/lib/tokens';
import { Eyebrow } from './Atoms';

const steps = [
  {
    n: '01',
    title: 'Tell Buddy your week.',
    body: 'Connect your calendar. Mark a few things as locked. Buddy reads the rest.',
  },
  {
    n: '02',
    title: 'Ask. In any phrasing.',
    body: '"Move my essay to Friday." "I spent twenty bucks on lunch." It gets it. Asks when it doesn\'t.',
  },
  {
    n: '03',
    title: 'Open the app less.',
    body: "Widgets, notifications, and a calm morning brief mean you stop checking. That's the goal.",
  },
];

export function HowItWorks() {
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
      <Eyebrow>How it works</Eyebrow>
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
        Three steps.{' '}
        <span style={{ color: L.inkSoft }}>That&apos;s it.</span>
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
        {steps.map((s, i) => (
          <div
            key={i}
            className={i > 0 ? 'how-step-padded' : ''}
            style={{
              padding: '36px 28px 36px 0',
              borderRight: i < 2 ? `0.5px solid ${L.line}` : 'none',
              paddingLeft: i === 0 ? 0 : 28,
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
              {s.n}
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
              {s.title}
            </div>
            <div
              style={{
                fontSize: 15,
                color: L.inkMid,
                lineHeight: 1.5,
                letterSpacing: -0.15,
              }}
            >
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
