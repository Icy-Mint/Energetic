import { useEffect, useMemo, useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Gauge,
  Sparkles,
  Coins,
  Users,
  Activity,
} from "lucide-react";

const YEAR_MIN = 2018;
const YEAR_MAX = 2043;

const gameCards = [
  {
    id: "nuclear",
    name: "Nuclear",
    year: 2018,
    cost: 8,
    stability: 14,
    opinion: 5,
    match: {
      headline: "Advanced nuclear pilot gains federal backing",
      date: "2018-06-12",
      link: "https://www.energy.gov/",
    },
    technicalNote:
      "Cost curve anchored to 2018 capital expenditure surveys; includes learning-rate discount on Gen-IV designs.",
  },
  {
    id: "wind",
    name: "Wind",
    year: 2021,
    cost: 4,
    stability: 9,
    opinion: 12,
    match: {
      headline: "Johnson backs Virginia wind project",
      date: "2021-10-14",
      link: "https://www.reuters.com/",
    },
    technicalNote:
      "Assumes offshore capacity factors at 42% with regional grid reinforcement costs factored in.",
  },
  {
    id: "wildfire-smoke",
    name: "Wildfire Smoke",
    year: 2023,
    cost: 2,
    stability: -8,
    opinion: -6,
    match: {
      headline: "Wildfire smoke triggers air quality emergencies",
      date: "2023-06-07",
      link: "https://www.cdc.gov/",
    },
    technicalNote:
      "Health impact multipliers reference EPA AQI guidance; negative stability reflects grid stress events.",
  },
  {
    id: "grid-storage",
    name: "Grid Storage",
    year: 2027,
    cost: 6,
    stability: 15,
    opinion: 8,
    match: {
      headline: "Multi-hour storage wins regional capacity market",
      date: "2027-02-19",
      link: "https://www.nrel.gov/",
    },
    technicalNote:
      "Price parity modeled at $120/kWh by 2027 with recycling incentives from state programs.",
  },
  {
    id: "community-microgrids",
    name: "Community Microgrids",
    year: 2032,
    cost: 5,
    stability: 11,
    opinion: 14,
    match: {
      headline: "City-backed microgrids keep clinics powered",
      date: "2032-09-02",
      link: "https://www.iea.org/",
    },
    technicalNote:
      "Equity credits reduce cost by 15% when paired with community solar participation.",
  },
  {
    id: "green-hydrogen",
    name: "Green Hydrogen",
    year: 2037,
    cost: 7,
    stability: 6,
    opinion: 4,
    match: {
      headline: "Electrolyzer hubs reach industrial scale",
      date: "2037-04-18",
      link: "https://www.irena.org/",
    },
    technicalNote:
      "Assumes 55% utilization and renewable PPAs at 2.2 cents/kWh.",
  },
  {
    id: "carbon-capture",
    name: "Carbon Capture",
    year: 2040,
    cost: 9,
    stability: 7,
    opinion: 3,
    match: {
      headline: "Direct air capture credits expand",
      date: "2040-11-23",
      link: "https://www.noaa.gov/",
    },
    technicalNote:
      "Modeled with $180/ton capture costs and strict permanence verification.",
  },
  {
    id: "net-zero-grid",
    name: "Net-Zero Grid",
    year: 2043,
    cost: 10,
    stability: 18,
    opinion: 16,
    match: {
      headline: "Utilities announce net-zero reliability pact",
      date: "2043-08-30",
      link: "https://www.worldenergy.org/",
    },
    technicalNote:
      "Final milestone aligns reliability index with 99.97% availability targets.",
  },
];

const typeStyles = {
  card: {
    color: "#52B69A",
    glow: "rgba(82, 182, 154, 0.6)",
  },
  event: {
    color: "#D9ED92",
    glow: "rgba(82, 182, 154, 0.6)",
  },
  impact: {
    color: "#184E77",
    glow: "rgba(24, 78, 119, 0.55)",
  },
};

const impactNodes = [
  { id: "impact-stability", label: "Stability", type: "impact" },
  { id: "impact-carbon", label: "Carbon Goal", type: "impact" },
];

export default function App() {
  const [startYear, setStartYear] = useState(YEAR_MIN);
  const [endYear, setEndYear] = useState(YEAR_MAX);
  const [expandedCardId, setExpandedCardId] = useState("wind");
  const [selectedNodeId, setSelectedNodeId] = useState("card-wind");
  const [stability, setStability] = useState(58);
  const listRef = useRef(null);
  const graphRef = useRef(null);
  const graphWrapRef = useRef(null);
  const [graphSize, setGraphSize] = useState({ width: 520, height: 520 });

  const filteredCards = useMemo(
    () =>
      gameCards.filter(
        (card) => card.year >= startYear && card.year <= endYear
      ),
    [startYear, endYear]
  );

  const graphData = useMemo(() => {
    const nodes = [
      ...gameCards.map((card) => ({
        id: `card-${card.id}`,
        label: card.name,
        type: "card",
      })),
      ...gameCards.map((card) => ({
        id: `event-${card.id}`,
        label: card.match.headline,
        type: "event",
      })),
      { id: "event-wind-lull", label: "Wind Lull", type: "event" },
      { id: "event-ira-funding", label: "IRA Funding", type: "event" },
      ...impactNodes,
    ];

    const links = [
      ...gameCards.map((card) => ({
        source: `card-${card.id}`,
        target: `event-${card.id}`,
        polarity: "neutral",
      })),
      ...gameCards.map((card) => ({
        source: `card-${card.id}`,
        target: "impact-stability",
        polarity: card.stability >= 0 ? "positive" : "negative",
      })),
      ...gameCards.map((card) => ({
        source: `card-${card.id}`,
        target: "impact-carbon",
        polarity: card.year >= 2030 ? "positive" : "neutral",
      })),
      {
        source: "card-wind",
        target: "event-wind-lull",
        polarity: "negative",
      },
      {
        source: "card-wind",
        target: "event-ira-funding",
        polarity: "positive",
      },
      {
        source: "event-wind-lull",
        target: "impact-stability",
        polarity: "negative",
      },
      {
        source: "event-ira-funding",
        target: "impact-carbon",
        polarity: "positive",
      },
      {
        source: "event-wildfire-smoke",
        target: "impact-stability",
        polarity: "negative",
      },
    ];

    return { nodes, links };
  }, []);

  const highlightState = useMemo(() => {
    if (!selectedNodeId) {
      return { nodes: new Set(), links: new Set() };
    }
    const connectedNodes = new Set([selectedNodeId]);
    const connectedLinks = new Set();

    graphData.links.forEach((link) => {
      const sourceId =
        typeof link.source === "string" ? link.source : link.source.id;
      const targetId =
        typeof link.target === "string" ? link.target : link.target.id;
      if (sourceId === selectedNodeId || targetId === selectedNodeId) {
        connectedNodes.add(sourceId);
        connectedNodes.add(targetId);
        connectedLinks.add(link);
      }
    });

    return { nodes: connectedNodes, links: connectedLinks };
  }, [graphData.links, selectedNodeId]);

  useEffect(() => {
    const container = graphWrapRef.current;
    if (!container) {
      return undefined;
    }
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setGraphSize({
          width: Math.max(320, Math.floor(width)),
          height: Math.max(360, Math.floor(height)),
        });
      });
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) {
      return undefined;
    }

    const handleScroll = () => {
      const scrollRange = listEl.scrollHeight - listEl.clientHeight;
      const progress = scrollRange > 0 ? listEl.scrollTop / scrollRange : 0;
      const nextValue = Math.round(42 + progress * 48);
      setStability(nextValue);
    };

    handleScroll();
    listEl.addEventListener("scroll", handleScroll);
    return () => listEl.removeEventListener("scroll", handleScroll);
  }, [filteredCards.length]);

  useEffect(() => {
    if (!graphRef.current) {
      return;
    }
    const node = graphData.nodes.find((item) => item.id === selectedNodeId);
    if (!node || !node.x || !node.y) {
      return;
    }
    graphRef.current.centerAt(node.x, node.y, 800);
    graphRef.current.zoom(3.2, 800);
  }, [graphData.nodes, selectedNodeId]);

  const handleCardSelect = (cardId) => {
    setSelectedNodeId(`card-${cardId}`);
  };

  return (
    <div className="min-h-screen bg-white text-[#184e77]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-10 pt-8">
        <header className="glass-panel flex flex-col gap-4 p-6 shadow-glow">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#52b69a]/80">
                Energetic: The Climate Transition Game
              </p>
              <h1 className="text-3xl font-semibold text-[#184e77]">
                Dual-Discovery Engine Preview
              </h1>
              <p className="mt-1 text-sm text-[#184e77]/70">
                Chronological catalog and digital-twin impact graph.
              </p>
            </div>
            <div className="glass-panel flex min-w-[240px] flex-col gap-3 px-4 py-3">
              <div className="flex items-center justify-between text-xs text-[#184e77]/80">
                <span>Stability Meter</span>
                <span className="font-semibold text-[#52b69a]">{stability}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#d9ed92]">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#d9ed92] via-[#52b69a] to-[#184e77] transition-all"
                  style={{ width: `${stability}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-[#184e77]/70">
                <Sparkles className="h-3.5 w-3.5 text-[#52b69a]" />
                Scroll the timeline to simulate stability shifts.
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr,auto] lg:items-center">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-[#184e77]/80">
                <span>Time-Slider</span>
                <span className="font-semibold text-[#184e77]">
                  {startYear} - {endYear}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="range"
                  min={YEAR_MIN}
                  max={YEAR_MAX}
                  value={startYear}
                  onChange={(event) =>
                    setStartYear(
                      Math.min(Number(event.target.value), endYear)
                    )
                  }
                  className="accent-[#52b69a]"
                />
                <input
                  type="range"
                  min={YEAR_MIN}
                  max={YEAR_MAX}
                  value={endYear}
                  onChange={(event) =>
                    setEndYear(
                      Math.max(Number(event.target.value), startYear)
                    )
                  }
                  className="accent-[#52b69a]"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#184e77]/70">
              <Activity className="h-4 w-4 text-[#52b69a]" />
              Filter cards by era to match your policy horizon.
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-6 lg:flex-row">
          <section className="glass-panel flex min-h-[620px] flex-1 flex-col gap-4 p-5 lg:basis-3/5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#184e77]">
                  Chronological Catalog
                </h2>
                <p className="text-xs text-[#184e77]/70">
                  Progressive disclosure cards from 2018 to 2043.
                </p>
              </div>
              <div className="text-xs text-[#184e77]/70">
                {filteredCards.length} cards
              </div>
            </div>
            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto pr-2"
            >
              {filteredCards.map((card) => {
                const isExpanded = expandedCardId === card.id;
                const isSelected = selectedNodeId === `card-${card.id}`;
                return (
                  <article
                    key={card.id}
                    className={`glass-panel flex flex-col gap-4 p-4 transition ${
                      isSelected
                        ? "border-[#52b69a] shadow-glow"
                        : "border-[#52b69a]/40"
                    }`}
                    onClick={() => handleCardSelect(card.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#d9ed92] via-white to-[#52b69a]/40 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white/80 text-xs text-[#184e77]">
                          Game Art
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-[#184e77]/70">
                              {card.year}
                            </p>
                            <h3 className="text-xl font-semibold text-[#184e77]">
                              {card.name}
                            </h3>
                          </div>
                          <button
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-[#52b69a]/50 px-3 py-1 text-xs text-[#184e77] transition hover:border-[#52b69a] hover:text-[#184e77]"
                            onClick={(event) => {
                              event.stopPropagation();
                              setExpandedCardId(isExpanded ? null : card.id);
                            }}
                          >
                            Real-World Match
                            {isExpanded ? (
                              <ChevronUp className="h-3.5 w-3.5" />
                            ) : (
                              <ChevronDown className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                        <div className="mt-3 grid gap-2 text-xs text-[#184e77] sm:grid-cols-3">
                          <div className="flex items-center gap-2">
                            <Coins className="h-4 w-4 text-[#52b69a]" />
                            Cost: {card.cost} EB
                          </div>
                          <div className="flex items-center gap-2">
                            <Gauge className="h-4 w-4 text-[#52b69a]" />
                            Stability: {card.stability}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#184e77]" />
                            Opinion: {card.opinion}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`grid gap-3 overflow-hidden rounded-xl border border-[#52b69a]/40 bg-white/70 p-3 text-xs text-[#184e77] transition-all ${
                        isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[#184e77]/70">Real-World Match</p>
                          <p className="text-sm text-[#184e77]">
                            {card.match.headline}
                          </p>
                          <p className="text-[11px] text-[#184e77]/70">
                            {card.match.date}
                          </p>
                        </div>
                        <a
                          href={card.match.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[#52b69a] hover:text-[#184e77]"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Source <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                      <div className="rounded-lg border border-[#52b69a]/40 bg-[#d9ed92]/60 p-2 text-[11px] text-[#184e77]">
                        <span className="text-[#52b69a]">Technical Note:</span>{" "}
                        {card.technicalNote}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="glass-panel flex min-h-[620px] flex-1 flex-col gap-4 p-5 lg:basis-2/5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#184e77]">
                  Dynamic Impact Graph
                </h2>
                <p className="text-xs text-[#184e77]/70">
                  Digital-twin network of cards, events, and impacts.
                </p>
              </div>
              <div className="text-xs text-[#184e77]/70">
                Click a card to focus the graph
              </div>
            </div>
            <div
              ref={graphWrapRef}
              className="relative flex-1 overflow-hidden rounded-2xl border border-[#52b69a]/40 bg-white/90"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#d9ed9260,transparent_60%)]" />
              <ForceGraph2D
                ref={graphRef}
                width={graphSize.width}
                height={graphSize.height}
                backgroundColor="rgba(255,255,255,0)"
                graphData={graphData}
                nodeRelSize={5}
                linkDirectionalParticles={2}
                linkDirectionalParticleWidth={1.5}
                linkDirectionalParticleSpeed={0.008}
                linkWidth={(link) =>
                  highlightState.links.has(link) ? 2.5 : 1
                }
                linkColor={(link) => {
                  if (!selectedNodeId) {
                    return "rgba(82, 182, 154, 0.25)";
                  }
                  return highlightState.links.has(link)
                    ? "rgba(82, 182, 154, 0.85)"
                    : "rgba(82, 182, 154, 0.2)";
                }}
                nodeCanvasObject={(node, ctx, globalScale) => {
                  const label = node.label || node.id;
                  const fontSize = 12 / globalScale;
                  const style = typeStyles[node.type] || typeStyles.card;
                  const isHighlighted = highlightState.nodes.has(node.id);

                  ctx.beginPath();
                  ctx.arc(node.x, node.y, isHighlighted ? 8 : 6, 0, 2 * Math.PI);
                  ctx.fillStyle = isHighlighted ? style.color : "#d9ed92";
                  ctx.fill();

                  ctx.strokeStyle = style.glow;
                  ctx.lineWidth = isHighlighted ? 2 : 1;
                  ctx.stroke();

                  ctx.font = `${fontSize}px Inter, sans-serif`;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "top";
                  ctx.fillStyle = isHighlighted
                    ? "rgba(24, 78, 119, 0.95)"
                    : "rgba(24, 78, 119, 0.7)";
                  ctx.fillText(label, node.x, node.y + 10);
                }}
                onNodeClick={(node) => setSelectedNodeId(node.id)}
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-[#52b69a]/40 bg-white/80 px-4 py-2 text-[11px] text-[#184e77]">
                <span className="text-[#52b69a]">Card</span>
                <span className="text-[#184e77]">Event</span>
                <span className="text-[#184e77]">System Impact</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
