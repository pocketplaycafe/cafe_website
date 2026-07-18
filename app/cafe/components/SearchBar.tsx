'use client'

export default function SearchBar({
  query,
  onChange,
}: {
  query: string
  onChange: (v: string) => void
}) {
  return (
    <div className="menu-search" role="search">
      <svg
        className="icon w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search your favorite food..."
        aria-label="Search the menu"
        autoComplete="off"
      />
      {query && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="clear"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      )}
    </div>
  )
}
