import { DashboardButton } from "./components";
import { DashboardGridProps } from "./types";

export default function DashboardGrid({ buttonConfigs }: DashboardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {buttonConfigs.map((config) => (
        <DashboardButton key={config.id} config={config} />
      ))}
    </div>
  );
}
