import { notFound } from "next/navigation";
import { VALID_IDS } from "@/lib/сonstants";
import { ConfigureButtonSection } from "@/components";

export async function generateStaticParams() {
  return Array.from(VALID_IDS).map((id) => ({ id }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ConfigurePage({ params }: PageProps) {
  const { id } = await params;

  if (!VALID_IDS.has(id)) {
    notFound();
  }

  return <ConfigureButtonSection buttonId={parseInt(id)} />;
}
