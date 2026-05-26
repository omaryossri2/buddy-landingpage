'use client';

import { L, FONT, MONO } from '@/lib/tokens';
import { useLang } from '@/lib/i18n';
import { AIBar, Chip, EventRow, Money } from './Atoms';

export function SceneConflict() {
  const { t } = useLang();
  const s = t.sceneConflict;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value={s.aiBar} />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: L.warm, flexShrink: 0 }} />
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            {s.label}
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
          {s.textA}
          <strong style={{ fontWeight: 600 }}>{s.textBold}</strong>
          {s.textB}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {s.opts.map((o, i) => (
            <div
              key={i}
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
                {['A', 'B', 'C'][i]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: L.ink, letterSpacing: -0.2 }}>
                  {o[0]}
                </div>
                <div style={{ fontSize: 11.5, color: L.inkSoft, marginTop: 1 }}>{o[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SceneFinance() {
  const { t } = useLang();
  const s = t.sceneFinance;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value={s.aiBar} />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: L.cool, flexShrink: 0 }} />
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.coolInk,
              textTransform: 'uppercase',
            }}
          >
            {s.label}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <Money amount={14.0} size={36} isNeg />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 500, color: L.ink }}>{s.title}</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <Chip tone="cool">{s.chipCat}</Chip>
              <Chip tone="neutral">{s.chipToday}</Chip>
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
            style={{ position: 'absolute', inset: 0, width: '60%', background: L.cool, borderRadius: 3 }}
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
            <span style={{ color: L.ink }}>$48</span>
            {s.ofToday}
          </span>
          <span>{s.left}</span>
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
            {s.ok}
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
            {s.edit}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SceneAIMove() {
  const { t } = useLang();
  const s = t.sceneMove;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value={s.aiBar} />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: L.warm, flexShrink: 0 }} />
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            {s.label}
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
          <span style={{ color: L.inkSoft }}>{s.textA}</span> {s.textHi}
          <span style={{ color: L.inkSoft }}>.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <EventRow time="11:00" dur="50m" title={s.ev1[0]} sub={s.ev1[1]} locked />
          <div style={{ position: 'relative' }}>
            <EventRow time="14:00" dur="90m" title={s.ev2[0]} sub={s.ev2[1]} flex />
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
          <EventRow time="16:30" dur="60m" title={s.ev3[0]} sub={s.ev3[1]} />
        </div>
      </div>
    </div>
  );
}

export function SceneBooking() {
  const { t } = useLang();
  const s = t.sceneBooking;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <AIBar value={s.aiBar} />
      <div
        style={{
          background: L.surface,
          border: `0.5px solid ${L.line}`,
          borderRadius: 18,
          padding: 16,
          fontFamily: FONT,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: L.warm, flexShrink: 0 }} />
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.4,
              color: L.warm,
              textTransform: 'uppercase',
            }}
          >
            {s.label}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
          {s.slots.map((slot, i) => (
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
              <div style={{ fontSize: 13.5, fontWeight: 500, color: L.ink, letterSpacing: -0.1 }}>
                {slot[0]}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: L.inkMid,
                  fontFamily: MONO,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {slot[1]}
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
              direction: 'ltr',
            }}
          >
            buddy.app/m/amelia-maya
          </div>
          <Chip tone="warm">{s.copied}</Chip>
        </div>
        <div style={{ fontSize: 11.5, color: L.inkSoft, marginTop: 10, letterSpacing: -0.1 }}>
          {s.footA}
          <span style={{ color: L.ink, fontWeight: 500 }}>{s.footHi}</span>
          {s.footB}
        </div>
      </div>
    </div>
  );
}
