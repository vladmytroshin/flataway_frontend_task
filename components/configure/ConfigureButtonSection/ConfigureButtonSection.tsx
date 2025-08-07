"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ButtonConfig } from "@/lib/types";
import { DEFAUL_COLOR } from "@/lib/сonstants";
import { ConfigureButtonSectionProps } from "./types";
import { useRouter } from "next/navigation";

import {
  ActionButtons,
  ButtonPreview,
  ColorPalette,
  HyperlinkInput,
  TitleInput,
} from "./components";
import { formatHyperlink, validateUrl } from "@/lib/utils";
import { apiService } from "@/services";

export default function ConfigureButtonSection({
  buttonId,
}: ConfigureButtonSectionProps) {
  const router = useRouter();

  const [hyperlink, setHyperlink] = useState("");
  const [selectedColor, setSelectedColor] = useState(DEFAUL_COLOR);
  const [errors, setErrors] = useState<{ hyperlink?: string }>({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      const existingConfig = await apiService.getButtonConfigById(buttonId);
      if (existingConfig) {
        setHyperlink(existingConfig.hyperlink);
        setSelectedColor(existingConfig.color);
        setTitle(existingConfig.title);
      }
    };
    fetchConfig();
  }, [buttonId]);

  const handleSave = async () => {
    const hyperlinkError = validateUrl(hyperlink);

    if (hyperlinkError) {
      setErrors({ hyperlink: hyperlinkError });
      return;
    }

    setErrors({});

    await apiService.updateButtonConfigInStorage(buttonId, {
      color: selectedColor,
      hyperlink: formatHyperlink(hyperlink),
      isConfigured: true,
      title: title,
    });

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <FaArrowLeftLong />
              </div>
              Back to dashboard
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Setting up button {buttonId}
          </h1>

          <div className="space-y-6">
            <HyperlinkInput
              value={hyperlink}
              onChange={(e) => setHyperlink(e.target.value)}
              error={errors.hyperlink}
            />

            <TitleInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <ColorPalette
              selected={selectedColor}
              onSelect={setSelectedColor}
            />

            <ButtonPreview color={selectedColor} buttonId={buttonId} />

            <ActionButtons onSave={handleSave} />
          </div>
        </div>
      </div>
    </div>
  );
}
