export interface GameCard {
  id: string;
  name: string;
  category: string[];
  cost?: string;
  impact?: string;
  description: string;
  realWorldCost?: string;
  publicOpinion?: number;
  stability?: number;
}

export interface NewsMatch {
  id: string;
  cardId: string;
  headline: string;
  summary: string;
  source: string;
  url: string;
  date: Date;
  keywords: string[];
  tags: string[];
  gameMetrics?: {
    energyBucks?: number;
    realWorldCost?: string;
    publicOpinion?: number;
    stability?: number;
  };
}

export interface GameUpdate {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
}
