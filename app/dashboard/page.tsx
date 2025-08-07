import { DashboardGrid } from "@/components";
import { apiService } from "@/services";
import { ButtonConfig } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const buttonConfigs: ButtonConfig[] = await apiService.getButtonConfigs();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Customizable Dashboard
          </h1>
          <p className="text-gray-600">
            Click on any button to configure or navigate to your saved links
          </p>
        </div>

        <DashboardGrid buttonConfigs={buttonConfigs} />
      </div>
    </div>
  );
}
