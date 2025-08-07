import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import { DashboardMenuProps } from "./types";

export default function DashboardMenu({
  onEdit,
  onDelete,
}: DashboardMenuProps) {
  return (
    <div className="absolute top-10 right-2 w-36 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
      <button
        className="w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 flex items-center gap-2 transition-colors duration-150 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(e);
        }}
      >
        <RiEditLine className="text-base" />
        Edit
      </button>
      <button
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-100 flex items-center gap-2 transition-colors duration-150 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(e);
        }}
      >
        <RiDeleteBin6Line className="text-base" />
        Delete
      </button>
    </div>
  );
}
