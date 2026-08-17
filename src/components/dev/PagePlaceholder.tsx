export default function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-2 py-24 text-center">
      <h1 className="text-2xl font-bold text-ink">{title}</h1>
      <p className="text-sm text-ink/50">Page en construction</p>
    </div>
  )
}