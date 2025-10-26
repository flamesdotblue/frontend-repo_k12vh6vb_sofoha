import { Home, Flame, PlaySquare } from 'lucide-react';

const items = [
  { label: 'Home', icon: Home },
  { label: 'Trending', icon: Flame },
  { label: 'Subscriptions', icon: PlaySquare },
];

export default function Sidebar({ open }) {
  return (
    <aside
      className={`$${''} ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-30 w-64 bg-white/90 backdrop-blur border-r border-black/5 transition-transform duration-200`}
    >
      <nav className="p-4">
        <ul className="space-y-1">
          {items.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-black/5 active:bg-black/10"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
