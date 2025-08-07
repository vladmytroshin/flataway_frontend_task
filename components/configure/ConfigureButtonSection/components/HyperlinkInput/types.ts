import { ChangeEvent } from "react";

export interface HyperlinkInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
