'use client';

import { ComponentType } from 'react';
import { L, FONT } from '@/lib/tokens';
import { Chip, Eyebrow } from './Atoms';
import {
  IllLockedFlex,
  IllAIBar,
  IllMoney,
  IllWidgets,
  IllBooking,
  IllPrivacy,
} from './Illustrations';

interface FeatureItem {
  tag: string;
  title: string;
  body: string;
  Ill: ComponentType;
}

const items: FeatureItem[] = [
  {
    tag: 'Time',
    title: 'Locked vs flexible.',
    body: "Class at 10? Locked. Essay block? Flexible. Buddy treats them differently — and moves only the things that can move.",
    Ill: IllLockedFlex,
  },
  {
    tag: 'AI',
    title: 'Inline, not a chatbot.',
    body: 'The input bar sits at the bottom of every screen. Type, tap, or speak — answers appear right where the data lives.',
    Ill: IllAIBar,
  },
  {
    tag: 'Money',
    title: 'Spending it watches.',
    body: 'Link accounts or text receipts. Buddy categorises, sums, and warns gently before you blow the month.',
    Ill: IllMoney,
  },
  {
    tag: 'Glance',
    title: 'Widgets that earn their square.',
    body: "Next event and today's spend on the lock screen. Tiny timeline and budget bar on home. No fluff.",
    Ill: IllWidgets,
  },
  {
    tag: 'Booking',
    title: 'A meeting link that\'s yours.',
    body: 'Pick three slots, share a link. The other side sees their timezone — Buddy keeps yours straight.',
    Ill: IllBooking,
  },
  {
    tag: 'Pledge',
    title: 'No streaks. No ads.',
    body: 'No habit traps, no engagement metrics, no third-party SDKs. Your data lives on your device.',
    Ill: IllPrivacy,
  },
];

function FeatureTile({ tag, title, body, Ill }: FeatureItem) {
  return (
    <div
      style={{
        background: L.surface,
        border: `0.5px solid ${L.line}`,
        borderRadius: 22,
        padding: 24,
        fontFamily: FONT,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <Ill />
      </div>
      <Chip tone="outline" style={{ alignSelf: 'flex-start' }}>
        {tag}
      </Chip>
      <div
        style={{
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: -0.6,
          color: L.ink,
          marginTop: 12,
          lineHeight: 1.15,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 14.5,
          lineHeight: 1.5,
          color: L.inkMid,
          marginTop: 6,
          letterSpacing: -0.15,
        }}
      >
        {body}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '120px 40px 80px',
        fontFamily: FONT,
      }}
    >
      <Eyebrow>What it does</Eyebrow>
      <h2
        style={{
          margin: '14px 0 0',
          fontSize: 'clamp(44px, 5.4vw, 80px)',
          fontWeight: 600,
          letterSpacing: -2.4,
          lineHeight: 0.98,
          color: L.ink,
          maxWidth: 900,
        }}
      >
        Six pieces, designed to feel like{' '}
        <span style={{ color: L.inkSoft }}>one app.</span>
      </h2>
      <div
        className="features-grid"
        style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {items.map((it, i) => (
          <FeatureTile key={i} {...it} />
        ))}
      </div>
    </section>
  );
}
