import VideoCard from './VideoCard';

const mockVideos = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title:
    ['Exploring the Future of Web Development', 'Mastering Tailwind CSS in 10 Minutes', 'React Performance Tips & Tricks', 'Designing Beautiful Dashboards with Framer Motion'][i % 4] +
    ` #${i + 1}`,
  channel: ['CodeCraft', 'UI Studio', 'DevLab', 'Frontend Daily'][i % 4],
  views: [`${(Math.floor(Math.random() * 900) + 100) / 10}K views`][0],
  timeAgo: ['2 hours ago', '1 day ago', '3 days ago', '1 week ago'][i % 4],
  duration: ['12:34', '08:19', '22:05', '04:47'][i % 4],
  thumbnail: `https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW98ZW58MHx8MHx8`,
  avatar: `https://i.pravatar.cc/100?img=${(i % 70) + 1}`,
}));

export default function VideoGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {['All', 'Music', 'Gaming', 'News', 'Live', 'Podcasts', 'Movies', 'Tech'].map((c) => (
          <button
            key={c}
            className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm hover:bg-black/5 active:bg-black/10"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockVideos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}
