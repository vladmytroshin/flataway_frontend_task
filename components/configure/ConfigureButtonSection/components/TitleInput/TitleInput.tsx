import { TitleInputProps } from "./types";

export default function TitleInput({ error, ...rest }: TitleInputProps) {
  return (
    <div>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        placeholder="Enter button title"
        {...rest}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
