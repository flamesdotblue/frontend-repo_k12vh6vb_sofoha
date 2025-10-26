import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onMenuToggle={() => setSidebarOpen((s) => !s)} />

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-0">
        <Sidebar open={sidebarOpen} />

        <main className="md:min-h-[calc(100vh-4rem)]">
          <VideoGrid />
        </main>
      </div>

      {/* Mobile overlay when sidebar is open */}
      {sidebarOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
        />
      )}
    </div>
  );
}

export default App;
