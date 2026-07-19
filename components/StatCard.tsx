export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex-1 rounded bg-white px-5 py-5">
      <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent">
        {value}
      </div>
      <div className="text-[13px] font-medium leading-snug text-ink/60">
        {label}
      </div>
    </div>
  );
}
