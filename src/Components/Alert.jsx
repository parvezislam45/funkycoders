import React from "react";
import { twMerge } from "tailwind-merge";

const Alert = ({ children, className, alert = "info"}) => {
  const alerts = {
    info: "text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
    danger:
      "text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
    success:
      "text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
    warning:
      "text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",
    dark: "border border-gray-300 text-white rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800",
  };
  return (
    <div>
      <div
        id="alert-additional-content-2"
        className={twMerge("p-4 mb-4 w-96 mx-auto mt-20", alerts[alert], className)}
        role="alert"
      >
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <h3 class="text-lg font-medium">This is a alert</h3>
        </div>
        <div class="mt-2 mb-4 text-sm">
          More info about this info danger goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>

        {children}
      </div>
    </div>
  );
};

export default Alert;
