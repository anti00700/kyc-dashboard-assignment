export async function GET() {
  const data = {
    totalKYC: {
      new: { count: 3000, change: 12 },
      modified: { count: 456, change: -10 },
      total: 3456,
    },
    bar: {
      today: [360, 300],       // [Individual, Non Individual]
      yesterday: [280, 220],
    },
    pie: { solicited: 3456, received: 3200, consumed: 2900, pending: 256 },
    panStats: {
      solicited: { total: 400, withImage: 250 },
      received: { total: 320, withImage: 220 },
    },
    categories: {
      individual: { ri: 76, nri: 44 },
      nonIndividual: { ri: 34, nri: 12 },
    },
    statusCards: [
      { label: "KYC Initiated", count: 234 },
      { label: "Under Process", count: 350 },
      { label: "Registered", count: 654 },
      { label: "Validated", count: 269 },
      { label: "Hold", count: 100 },
      { label: "Docs Pending", count: 96 },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
