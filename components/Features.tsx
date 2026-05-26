'use client';

import { ComponentType } from 'react';
import { L, FONT } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
import { Chip, Eyebrow } from './Atoms';
import {
  IllLockedFlex,
  IllAIBar,
  IllMoney,
  IllWidgets,
  IllBooking,
  IllPrivacy,
} from './Illustrations';

const ILLS: ComponentType[] = [
  IllLockedFlex,
  IllAIBar,
  IllMoney,
  IllWidgets,
  IllBooking,
  IllPrivacy,
];

function FeatureTile({
  tag,
  title,
  body,
  Ill,
}: {
  tag: string;
  title: string;
  body: string;
  Ill: ComponentType;
}) {
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
  const { t } = useLang();
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
      <Eyebrow>{t.features.eyebrow}</Eyebrow>
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
        {t.features.h2a}
        <span style={{ color: L.inkSoft }}>{t.features.h2b}</span>
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
        {t.features.items.map((it, i) => (
          <FeatureTile key={i} tag={it.tag} title={it.title} body={it.body} Ill={ILLS[i]} />
        ))}
      </div>
    </section>
  );
}
