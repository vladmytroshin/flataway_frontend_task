import Link from "next/link";

import { MdGridOn } from "react-icons/md";
import { RiPaletteLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Flataway Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create your customizable dashboard with a 3x3 grid of configurable
          buttons. Each button can be personalized with custom colors and
          hyperlinks.
        </p>

        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="relative flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-5 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out hover:shadow-lg font-semibold text-center whitespace-nowrap cursor-pointer overflow-hidden"
          >
            Go to Dashboard
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mx-auto mb-2">
                <MdGridOn className="text-blue-600 text-xl" />
              </div>
              <h3 className="font-medium text-gray-900">3x3 Grid</h3>
              <p className="text-sm text-gray-600">Responsive grid layout</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mx-auto mb-2">
                <RiPaletteLine className="text-green-600 text-xl" />
              </div>
              <h3 className="font-medium text-gray-900">Custom Colors</h3>
              <p className="text-sm text-gray-600">Choose from 9 colors</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mx-auto mb-2">
                <IoIosLink className="text-purple-600 text-xl" />
              </div>
              <h3 className="font-medium text-gray-900">Custom Links</h3>
              <p className="text-sm text-gray-600">Set any hyperlink</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
