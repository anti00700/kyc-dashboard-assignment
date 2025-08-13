export async function GET() {
  const data = {
    totalKYC: {
      new: { count: 1240, change: 8.4 },
      modified: { count: 310, change: -3.2 },
    },
    bar: {
      labels: ["Today", "Yesterday"],
      individual: [400, 350],
      nonIndividual: [120, 100],
    },
    pie: { solicited: 400, received: 320, consumed: 290, pending: 30 },
    panStats: {
      solicited: { total: 420, withImage: 210 },
      received: { total: 360, withImage: 180 },
    },
    categories: {
      individual: { ri: 76, nri: 44 },
      nonIndividual: { ri: 34, nri: 12 },
    },
    statusCards: [
      { label: "KYC Initiated", count: 420, note: "Initiated today" },
      { label: "Under Process", count: 210, note: "In-progress" },
      { label: "Registered", count: 120, note: "Registered" },
      { label: "Validated", count: 980, note: "Validated" },
      { label: "Hold", count: 12, note: "On hold" },
      { label: "Docs Pending", count: 45, note: "Docs pending" },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
