'use client';

import { L, FONT } from '@/lib/tokens';
import { AIBar, EventRow } from './Atoms';

export function HeroPreview() {
  return (
    <div
      style={{
        background: L.bg,
        borderRadius: 28,
        padding: '28px 24px',
        border: `0.5px solid ${L.line}`,
        boxShadow:
          '0 1px 0 rgba(20,18,14,0.02), 0 30px 60px -20px rgba(20,18,14,0.18), 0 12px 24px -12px rgba(20,18,14,0.08)',
        fontFamily: FONT,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: L.inkSoft,
          letterSpacing: 1.2,
          textTransform: 'uppercase',
        }}
      >
        Thursday · May 22
      </div>
      <h2
        style={{
          margin: '6px 0 18px',
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: -0.9,
          lineHeight: 1.1,
          color: L.ink,
        }}
      >
        Good morning,
        <br />
        <span style={{ color: L.inkMid }}>Amelia.</span>
      </h2>

      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 20,
          padding: '16px 16px 14px',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: L.warm,
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            Buddy&apos;s brief
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            lineHeight: 1.4,
            fontWeight: 500,
            letterSpacing: -0.3,
            color: L.ink,
          }}
        >
          Light day ahead.{' '}
          <span style={{ color: L.inkSoft }}>One class, two essays due Friday, and</span> budget is
          on track at <span style={{ color: L.ink }}>$34 of $80</span>.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
        <EventRow
          time="10:30"
          dur="80m"
          title="Statistics 201"
          sub="Hall B · Prof. Larsen"
          locked
        />
        <EventRow time="13:00" dur="45m" title="Coffee with Maya" sub="Toby's, Storgata" />
        <EventRow
          time="15:30"
          dur="2h"
          title="Essay block — History"
          sub="AI-suggested · flexible"
          flex
        />
      </div>

      <AIBar value="Move my essay block to Friday morning" />
    </div>
  );
}
