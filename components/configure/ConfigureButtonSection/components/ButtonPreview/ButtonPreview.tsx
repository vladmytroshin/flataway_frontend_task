import { FaExternalLinkAlt } from "react-icons/fa";
import { ButtonPreviewProps } from "./types";

export default function ButtonPreview({ color, buttonId }: ButtonPreviewProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Preview
      </label>
      <div
        className="w-full h-32 rounded-lg shadow-md flex items-center justify-center text-white cursor-pointer hover:shadow-lg transition-shadow"
        style={{ backgroundColor: color }}
      >
        <div className="text-center">
          <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
            <FaExternalLinkAlt className="text-xl" />
          </div>
          <span className="text-sm font-medium">Button {buttonId}</span>
        </div>
      </div>
    </div>
  );
}
