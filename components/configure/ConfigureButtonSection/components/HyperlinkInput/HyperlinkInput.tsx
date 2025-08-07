import { HyperlinkInputProps } from "./types";

export default function HyperlinkInput({
  value,
  onChange,
  error,
}: HyperlinkInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Link
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="https://example.com or /page"
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
          error ? "border-red-300" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      <p className="mt-1 text-sm text-gray-500">
        Enter the full URL (https://example.com) or the relative path (/page)
      </p>
    </div>
  );
}
