import { MouseEvent } from "react";

export interface DashboardMenuProps {
  onEdit: (e: MouseEvent) => void;
  onDelete: (e: MouseEvent) => void;
}
