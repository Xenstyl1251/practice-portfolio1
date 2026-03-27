export default function ProjectCard({ title, description, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group flex flex-col
        flex-none w-80
        bg-white/80 dark:bg-white/5 backdrop-blur-md
        border border-white/20 dark:border-white/10
        rounded-2xl shadow-md hover:shadow-xl
        transition-all duration-300 hover:-translate-y-2
        cursor-pointer overflow-hidden
      "
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <button
          className="
            mt-4 inline-flex items-center gap-2
            text-sm font-medium
            text-gray-700 dark:text-gray-300
            border border-gray-300 dark:border-gray-600
            px-4 py-2 rounded-lg
            hover:bg-gray-100 dark:hover:bg-white/10
            transition
          "
        >
          Show more
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
