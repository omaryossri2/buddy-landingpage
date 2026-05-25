'use client';

import { L, FONT, MONO } from '@/lib/tokens';
import { AIBar, Chip, EventRow, Money } from './Atoms';

export function SceneConflict() {
  const options = [
    { k: 'A', t: 'Move dentist to Friday 2pm', sub: 'You have free time' },
    { k: 'B', t: 'Schedule it Thursday 4pm', sub: 'Right after class' },
    { k: 'C', t: "Just add it — I'll resolve later", sub: 'Marked as conflict' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value='"Add a dentist appointment Thursday at 2pm"' />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
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
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            Conflict
          </div>
        </div>
        <div
          style={{
            fontSize: 15.5,
            lineHeight: 1.4,
            color: L.ink,
            letterSpacing: -0.2,
            marginBottom: 14,
          }}
        >
          You already have <strong style={{ fontWeight: 600 }}>Statistics 201</strong> at 2pm
          Thursday. Want me to:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {options.map((o) => (
            <div
              key={o.k}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 12px',
                borderRadius: 12,
                border: `0.5px solid ${L.line}`,
                background: L.bg,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  background: L.surfaceAlt,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 700,
                  color: L.inkMid,
                  fontFamily: MONO,
                  flexShrink: 0,
                }}
              >
                {o.k}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: L.ink, letterSpacing: -0.2 }}>
                  {o.t}
                </div>
                <div style={{ fontSize: 11.5, color: L.inkSoft, marginTop: 1 }}>{o.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SceneFinance() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value='"I just spent 14 bucks on dinner with Sam"' />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: L.cool,
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.coolInk,
              textTransform: 'uppercase',
            }}
          >
            New transaction
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 14,
          }}
        >
          <Money amount={14.0} size={36} isNeg />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 500, color: L.ink }}>Dinner with Sam</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <Chip tone="cool">Food &amp; drink</Chip>
              <Chip tone="neutral">Today</Chip>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 6,
            borderRadius: 3,
            background: L.surfaceAlt,
            overflow: 'hidden',
            position: 'relative',
            marginBottom: 10,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '60%',
              background: L.cool,
              borderRadius: 3,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 12,
            fontFamily: MONO,
            color: L.inkSoft,
          }}
        >
          <span>
            <span style={{ color: L.ink }}>$48</span> of $80 today
          </span>
          <span>$32 left</span>
        </div>
        <div
          style={{
            marginTop: 14,
            paddingTop: 14,
            borderTop: `0.5px solid ${L.line}`,
            display: 'flex',
            gap: 8,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 40,
              borderRadius: 12,
              background: L.ink,
              color: L.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Looks right
          </div>
          <div
            style={{
              height: 40,
              padding: '0 18px',
              borderRadius: 12,
              background: L.surfaceAlt,
              color: L.inkMid,
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Edit
          </div>
        </div>
      </div>
    </div>
  );
}

export function SceneAIMove() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value='"I need 90 min for the lab report this week"' />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
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
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            Found a slot
          </div>
        </div>
        <div
          style={{
            fontSize: 15.5,
            lineHeight: 1.45,
            color: L.ink,
            letterSpacing: -0.2,
            marginBottom: 14,
          }}
        >
          <span style={{ color: L.inkSoft }}>
            Wednesday afternoon is open and matches your
          </span>{' '}
          high-focus window
          <span style={{ color: L.inkSoft }}>.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <EventRow time="11:00" dur="50m" title="BIO 240" sub="Lab · Hall C" locked />
          <div style={{ position: 'relative' }}>
            <EventRow
              time="14:00"
              dur="90m"
              title="Lab report — focused block"
              sub="AI-suggested · matches energy"
              flex
            />
            <div
              style={{
                position: 'absolute',
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                border: `1.5px solid ${L.warm}`,
                borderRadius: 17,
                pointerEvents: 'none',
              }}
            />
          </div>
          <EventRow time="16:30" dur="60m" title="Run · Storgata loop" sub="Personal" />
        </div>
      </div>
    </div>
  );
}

export function SceneBooking() {
  const slots = [
    ['Tue · May 27', '14:00 – 14:30'],
    ['Wed · May 28', '10:00 – 10:30'],
    ['Thu · May 29', '15:30 – 16:00'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value='"Send Maya 3 slots for coffee next week"' />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 14,
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
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            Sharable link
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
          {slots.map(([d, t], i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 14px',
                background: L.bg,
                border: `0.5px solid ${L.line}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: L.ink,
                  letterSpacing: -0.1,
                }}
              >
                {d}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: L.inkMid,
                  fontFamily: MONO,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {t}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 12px 10px 14px',
            borderRadius: 12,
            border: `0.5px solid ${L.lineStrong}`,
            background: L.surfaceAlt,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontFamily: MONO,
              color: L.inkMid,
              flex: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            buddy.app/m/amelia-maya
          </div>
          <Chip tone="warm">Copied</Chip>
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: L.inkSoft,
            marginTop: 10,
            letterSpacing: -0.1,
          }}
        >
          Maya sees the times in{' '}
          <span style={{ color: L.ink, fontWeight: 500 }}>her timezone</span> — Buddy keeps yours
          straight.
        </div>
      </div>
    </div>
  );
}
