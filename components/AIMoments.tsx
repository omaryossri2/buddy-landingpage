'use client';

import { ComponentType } from 'react';
import { L, FONT } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
import { Eyebrow } from './Atoms';
import { SceneConflict, SceneFinance, SceneAIMove, SceneBooking } from './Scenes';

const SCENES: ComponentType[] = [SceneConflict, SceneFinance, SceneAIMove, SceneBooking];

function SceneRow({
  tag,
  title,
  body,
  Scene,
  reverse,
}: {
  tag: string;
  title: string;
  body: string;
  Scene: ComponentType;
  reverse?: boolean;
}) {
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
  const { t } = useLang();
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
        <Eyebrow>{t.ai.eyebrow}</Eyebrow>
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
          {t.ai.h2a}
          <br />
          <span style={{ color: L.inkSoft }}>{t.ai.h2b}</span>
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
          {t.ai.intro}
        </p>

        <div style={{ marginTop: 72, display: 'flex', flexDirection: 'column', gap: 96 }}>
          {t.ai.scenes.map((sc, i) => (
            <SceneRow
              key={i}
              tag={sc.tag}
              title={sc.title}
              body={sc.body}
              Scene={SCENES[i]}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
