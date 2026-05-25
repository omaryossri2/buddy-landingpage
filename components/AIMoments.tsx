'use client';

import { ComponentType } from 'react';
import { L, FONT } from '@/lib/tokens';
import { Eyebrow } from './Atoms';
import { SceneConflict, SceneFinance, SceneAIMove, SceneBooking } from './Scenes';

interface SceneItem {
  tag: string;
  title: string;
  body: string;
  Scene: ComponentType;
  reverse?: boolean;
}

const scenes: SceneItem[] = [
  {
    tag: '01 · Conflict',
    title: 'Asks before it overwrites.',
    body: "When you ask for time that's already taken, Buddy offers three real options — no buried \"are you sure\" dialogs.",
    Scene: SceneConflict,
  },
  {
    tag: '02 · Voice → ledger',
    title: 'Speak a receipt into existence.',
    body: 'Say it in any phrasing. Buddy parses the amount, picks a category, shows your daily total, asks if it got it right.',
    Scene: SceneFinance,
    reverse: true,
  },
  {
    tag: '03 · Focus blocks',
    title: 'Knows when you actually think.',
    body: 'Buddy learns your high-focus window from the times you mark "energy: peak" and only suggests deep work there.',
    Scene: SceneAIMove,
  },
  {
    tag: '04 · Meeting link',
    title: 'Booking, in one sentence.',
    body: 'No separate scheduling app. Three slots, your timezone, their timezone, sent. Buddy holds the slots until they pick one.',
    Scene: SceneBooking,
    reverse: true,
  },
];

function SceneRow({ tag, title, body, Scene, reverse }: SceneItem) {
  return (
    <div
      className="scene-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
        fontFamily: FONT,
      }}
    >
      <div style={{ order: reverse ? 2 : 1 }}>
        <Eyebrow>{tag}</Eyebrow>
        <h3
          style={{
            margin: '12px 0 14px',
            fontSize: 42,
            fontWeight: 600,
            letterSpacing: -1.4,
            lineHeight: 1.04,
            color: L.ink,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 17,
            color: L.inkMid,
            lineHeight: 1.55,
            letterSpacing: -0.2,
            margin: 0,
            maxWidth: 460,
          }}
        >
          {body}
        </p>
      </div>
      <div
        style={{
          order: reverse ? 1 : 2,
          background: L.bg,
          borderRadius: 24,
          padding: 22,
          border: `0.5px solid ${L.line}`,
          boxShadow:
            '0 30px 60px -28px rgba(20,18,14,0.18), 0 12px 24px -16px rgba(20,18,14,0.08)',
        }}
      >
        <Scene />
      </div>
    </div>
  );
}

export function AIMoments() {
  return (
    <section
      id="ai"
      style={{
        background: L.surfaceAlt,
        borderTop: `0.5px solid ${L.line}`,
        borderBottom: `0.5px solid ${L.line}`,
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '120px 40px 100px',
          fontFamily: FONT,
        }}
      >
        <Eyebrow>AI moments</Eyebrow>
        <h2
          style={{
            margin: '14px 0 14px',
            fontSize: 'clamp(44px, 5.4vw, 80px)',
            fontWeight: 600,
            letterSpacing: -2.4,
            lineHeight: 0.98,
            color: L.ink,
            maxWidth: 1000,
          }}
        >
          Four conversations that happen
          <br />
          <span style={{ color: L.inkSoft }}>every week.</span>
        </h2>
        <p
          style={{
            fontSize: 18,
            color: L.inkMid,
            maxWidth: 640,
            letterSpacing: -0.2,
            lineHeight: 1.5,
            marginTop: 0,
          }}
        >
          The AI doesn&apos;t live behind a button. It lives at the bottom of every screen, in the
          data it already has, with all the context you&apos;ve ever given it.
        </p>

        <div style={{ marginTop: 72, display: 'flex', flexDirection: 'column', gap: 96 }}>
          {scenes.map((s, i) => (
            <SceneRow key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
