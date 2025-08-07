import Link from "next/link";
import { ActionButtonsProps } from "./types";

export default function ActionButtons({ onSave }: ActionButtonsProps) {
  return (
    <div className="flex gap-4 pt-4">
      <button
        onClick={onSave}
        className="relative flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-5 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-101 hover:shadow-lg font-semibold text-center whitespace-nowrap cursor-pointer overflow-hidden"
      >
        Save settings
      </button>
      <Link
        href="/dashboard"
        className="relative flex-1 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-3 px-5 rounded-xl hover:from-gray-300 hover:to-gray-400 transition-all duration-300 ease-in-out transform hover:scale-101 hover:shadow-lg font-semibold text-center whitespace-nowrap cursor-pointer overflow-hidden"
      >
        Cancel
      </Link>
    </div>
  );
}
