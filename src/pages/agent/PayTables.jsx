/**
 * PayTables.jsx — Agent reference for all game payouts.
 *
 * Hard-coded content. Not visible in the sidebar during an active
 * drill (filtered out in Layout.jsx) so agents can't use it as a
 * cheat sheet on scored sessions.
 */
import Layout from '../../components/Layout'
import { Coins, Spade, Circle, Club, Heart, Diamond } from 'lucide-react'

// ─── Pay table data ─────────────────────────────────────────────

const GAMES = [
  {
    name: 'Blackjack',
    Icon: Spade,
    accent: '#fbbf24',
    intro: 'Standard payouts. Marriott house rule: dealer hits soft 17, DAS allowed, multi-deck shoe.',
    sections: [
      {
        title: 'Main game',
        rows: [
          { bet: 'Blackjack (natural 21)', payout: '3 : 2',  notes: 'Two-card 21 on the deal' },
          { bet: 'Standard win',           payout: '1 : 1' },
          { bet: 'Push (tie)',             payout: '—',      notes: 'Bet returned' },
          { bet: 'Insurance',              payout: '2 : 1',  notes: 'Side bet; offered when dealer shows Ace' },
          { bet: 'Surrender (where offered)', payout: '½ bet returned', notes: 'Player forfeits hand, gets half back' },
        ],
      },
    ],
  },

  {
    name: 'Roulette (American)',
    Icon: Circle,
    accent: '#ef4444',
    intro: 'American wheel (0 and 00). Bet positions match the V2.0 drill layout.',
    sections: [
      {
        title: 'Inside bets',
        rows: [
          { bet: 'Straight Up (1 number)',    payout: '35 : 1' },
          { bet: 'Split (2 numbers)',          payout: '17 : 1' },
          { bet: 'Street (3 numbers)',         payout: '11 : 1' },
          { bet: 'Corner (4 numbers)',         payout: '8 : 1' },
          { bet: 'Top Line / Basket (0, 00, 1, 2, 3)', payout: '6 : 1', notes: 'American only — worst odds on the table' },
          { bet: 'Six Line (6 numbers)',        payout: '5 : 1' },
        ],
      },
      {
        title: 'Outside bets',
        rows: [
          { bet: 'Column (12 numbers)',         payout: '2 : 1' },
          { bet: 'Dozen (1st / 2nd / 3rd 12)',   payout: '2 : 1' },
          { bet: 'Red / Black',                  payout: '1 : 1' },
          { bet: 'Odd / Even',                   payout: '1 : 1' },
          { bet: '1–18 / 19–36',                 payout: '1 : 1' },
        ],
      },
    ],
  },

  {
    name: 'Three Card Poker',
    Icon: Club,
    accent: '#a78bfa',
    intro: 'Three bet spots — Ante, Play, and Pair Plus side bet. Ante Bonus pays on a strong Ante hand regardless of dealer qualification.',
    sections: [
      {
        title: 'Ante + Play (main game)',
        rows: [
          { bet: 'Ante (player wins)',          payout: '1 : 1' },
          { bet: 'Play (player wins)',          payout: '1 : 1' },
          { bet: 'Dealer does not qualify',      payout: '—',     notes: 'Play pushes, Ante pays 1:1' },
        ],
      },
      {
        title: 'Ante Bonus (auto-paid)',
        rows: [
          { bet: 'Straight',                    payout: '1 : 1' },
          { bet: 'Three of a Kind',              payout: '4 : 1' },
          { bet: 'Straight Flush',                payout: '5 : 1' },
        ],
      },
      {
        title: 'Pair Plus side bet',
        rows: [
          { bet: 'Pair',                        payout: '1 : 1' },
          { bet: 'Flush',                       payout: '4 : 1' },
          { bet: 'Straight',                    payout: '6 : 1' },
          { bet: 'Three of a Kind',              payout: '30 : 1' },
          { bet: 'Straight Flush',                payout: '40 : 1' },
          { bet: 'Mini Royal (A-K-Q suited)',    payout: '50 : 1' },
        ],
      },
    ],
  },

  {
    name: 'Let It Ride',
    Icon: Heart,
    accent: '#f472b6',
    intro: 'Three equal bets ①, ②, $. Players may pull back bets ① and ② based on their hand strength. Final payout based on standard 5-card hand.',
    sections: [
      {
        title: 'Main paytable (per active bet)',
        rows: [
          { bet: 'Royal Flush',                  payout: '1000 : 1' },
          { bet: 'Straight Flush',                payout: '200 : 1' },
          { bet: 'Four of a Kind',                payout: '50 : 1' },
          { bet: 'Full House',                    payout: '11 : 1' },
          { bet: 'Flush',                         payout: '8 : 1' },
          { bet: 'Straight',                      payout: '5 : 1' },
          { bet: 'Three of a Kind',                payout: '3 : 1' },
          { bet: 'Two Pair',                       payout: '2 : 1' },
          { bet: 'Pair of 10s or better',          payout: '1 : 1' },
          { bet: 'Anything less',                  payout: '—',         notes: 'Bet loses' },
        ],
      },
    ],
  },

  {
    name: "Ultimate Texas Hold'em",
    Icon: Diamond,
    accent: '#60a5fa',
    intro: "Player vs. dealer. Ante and Blind are mandatory; Play is the action bet. Trips is an optional side bet that pays on the player's hand regardless of dealer.",
    sections: [
      {
        title: 'Ante + Play (main game)',
        rows: [
          { bet: 'Ante (player wins, dealer qualifies)', payout: '1 : 1' },
          { bet: 'Play (player wins)',                  payout: '1 : 1' },
          { bet: 'Ante push (dealer does not qualify)', payout: '—', notes: 'Ante returned, Play still in action' },
        ],
      },
      {
        title: 'Blind (paid only on a winning hand)',
        rows: [
          { bet: 'Royal Flush',                  payout: '500 : 1' },
          { bet: 'Straight Flush',                payout: '50 : 1' },
          { bet: 'Four of a Kind',                payout: '10 : 1' },
          { bet: 'Full House',                    payout: '3 : 1' },
          { bet: 'Flush',                         payout: '3 : 2' },
          { bet: 'Straight',                      payout: '1 : 1' },
          { bet: 'Less than straight',             payout: '—',     notes: 'Blind pushes' },
        ],
      },
      {
        title: 'Trips side bet (auto-paid on player hand)',
        rows: [
          { bet: 'Royal Flush',                  payout: '50 : 1' },
          { bet: 'Straight Flush',                payout: '40 : 1' },
          { bet: 'Four of a Kind',                payout: '30 : 1' },
          { bet: 'Full House',                    payout: '8 : 1' },
          { bet: 'Flush',                         payout: '6 : 1' },
          { bet: 'Straight',                      payout: '5 : 1' },
          { bet: 'Three of a Kind',                payout: '3 : 1' },
        ],
      },
    ],
  },
]

// ─── Sub-components ─────────────────────────────────────────────

function PayoutRow({ bet, payout, notes }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-4 py-2 items-baseline"
      style={{ borderBottom: '1px solid var(--color-brand-border)' }}>
      <div className="min-w-0">
        <p className="text-sm font-medium" style={{ color: 'var(--color-brand-text)' }}>
          {bet}
        </p>
        {notes && (
          <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand-muted)' }}>
            {notes}
          </p>
        )}
      </div>
      <div className="text-sm font-mono font-bold whitespace-nowrap"
        style={{ color: 'var(--color-brand-gold)' }}>
        {payout}
      </div>
    </div>
  )
}

function GameCard({ game }) {
  const { name, Icon, accent, intro, sections } = game
  return (
    <section
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'var(--color-brand-card)',
        border: '1px solid var(--color-brand-border)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4"
        style={{ borderBottom: '1px solid var(--color-brand-border)' }}>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${accent}1a`, border: `1px solid ${accent}55` }}>
          <Icon size={18} style={{ color: accent }} />
        </div>
        <div className="min-w-0">
          <h2 className="text-base font-bold" style={{ color: 'var(--color-brand-text)' }}>
            {name}
          </h2>
          {intro && (
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand-muted)' }}>
              {intro}
            </p>
          )}
        </div>
      </div>

      {/* Sections */}
      <div className="divide-y" style={{ borderColor: 'var(--color-brand-border)' }}>
        {sections.map((sec, i) => (
          <div key={i} className="px-5 py-4"
            style={{ borderTop: i > 0 ? '1px solid var(--color-brand-border)' : 'none' }}>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'var(--color-brand-muted)' }}>
              {sec.title}
            </p>
            <div>
              {sec.rows.map((r, j) => (
                <PayoutRow key={j} {...r} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Page ───────────────────────────────────────────────────────

export default function PayTables() {
  return (
    <Layout>
      <div className="space-y-5">
        {/* Header */}
        <header className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: 'var(--color-brand-card)',
              border: '1px solid var(--color-brand-border)',
            }}>
            <Coins size={20} style={{ color: 'var(--color-brand-gold)' }} />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold tracking-tight"
              style={{ color: 'var(--color-brand-text)' }}>
              Pay Tables
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-brand-muted)' }}>
              Quick reference for all bet payouts at the Stellaris Casino.
              Hidden from the sidebar during active scored drills.
            </p>
          </div>
        </header>

        {/* Game cards */}
        <div className="space-y-4">
          {GAMES.map(g => <GameCard key={g.name} game={g} />)}
        </div>
      </div>
    </Layout>
  )
}
