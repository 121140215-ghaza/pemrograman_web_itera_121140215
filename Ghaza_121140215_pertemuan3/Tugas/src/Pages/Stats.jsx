import { useBookStats } from "../hooks/useBookStats";

export default function Stats() {
  const stats = useBookStats();

  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {Object.entries(stats).map(([key, value]) => (
        <div
          key={key}
          className="rounded-xl border border-border bg-card p-4 shadow-sm"
        >
          <div className="text-xs text-muted-foreground capitalize mb-1">
            {key}
          </div>
          <div className="text-2xl font-semibold text-foreground">{value}</div>
        </div>
      ))}
    </section>
  );
}
