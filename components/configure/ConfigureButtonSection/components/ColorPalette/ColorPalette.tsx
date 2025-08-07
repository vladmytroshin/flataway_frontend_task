import { colorOptions } from "@/lib/сonstants";
import { FaCheck } from "react-icons/fa";
import { ColorPaletteProps } from "./types";

export default function ColorPalette({
  selected,
  onSelect,
}: ColorPaletteProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Button color
      </label>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            onClick={() => onSelect(color.value)}
            className={`w-full h-16 rounded-lg transition-all hover:scale-105 cursor-pointer ${
              selected === color.value
                ? "ring-4 ring-gray-400 ring-offset-2"
                : "hover:ring-2 hover:ring-gray-300"
            }`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          >
            {selected === color.value && (
              <div className="w-6 h-6 flex items-center justify-center mx-auto">
                <FaCheck className="text-white text-xl" />
              </div>
            )}
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Selected: {colorOptions.find((color) => color.value === selected)?.name}
      </p>
    </div>
  );
}
