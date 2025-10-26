export default function VideoCard({ video }) {
  return (
    <a href="#" className="group block">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-semibold text-white">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={video.avatar}
          alt={video.channel}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="line-clamp-2 font-semibold leading-snug">
            {video.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {video.channel}
          </p>
          <p className="text-xs text-gray-500">
            {video.views} • {video.timeAgo}
          </p>
        </div>
      </div>
    </a>
  );
}
