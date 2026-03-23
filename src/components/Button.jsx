import React from "react";

export default function Button({ title, ...props }) {
  return (
    <button
      className="hover:text-white dark:text-white border-2 dark:border-white py-3 px-6 rounded-full hover:bg-black dark:hover:bg-white dark:hover:text-black font-semibold transition-all duration-300"
      {...props}
    >
      {title}
    </button>
  );
}
