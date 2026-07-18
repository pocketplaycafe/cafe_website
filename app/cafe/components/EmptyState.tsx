export default function EmptyState({ query }: { query?: string }) {
  return (
    <div className="menu-empty" role="status">
      <p className="menu-empty-title">No dishes found</p>
      <p className="menu-empty-sub">
        {query
          ? `We couldn&apos;t match &quot;${query}&quot;. Try another dish or category.`
          : 'Try a different category or search term.'}
      </p>
    </div>
  )
}
