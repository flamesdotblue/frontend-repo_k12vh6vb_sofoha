import { useState } from 'react';
import { Search, Menu, User } from 'lucide-react';

export default function Navbar({ onMenuToggle }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search:', query);
  };

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button
          aria-label="Open menu"
          onClick={onMenuToggle}
          className="p-2 rounded-md hover:bg-black/5 active:bg-black/10 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        <a href="#" className="flex items-center gap-2 font-semibold text-xl">
          <span className="bg-red-600 text-white rounded-md px-2 py-1">Play</span>
          <span className="tracking-tight">Stream</span>
        </a>

        <form onSubmit={handleSubmit} className="flex-1 flex items-center max-w-2xl mx-auto">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-l-full border border-black/10 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500/30"
            />
            <button
              type="submit"
              className="rounded-r-full border border-l-0 border-black/10 bg-black/5 px-4 hover:bg-black/10 active:bg-black/20 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        <button className="ml-auto inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 hover:bg-black/5">
          <User className="w-5 h-5" />
          <span className="hidden sm:inline">Sign in</span>
        </button>
      </div>
    </header>
  );
}
