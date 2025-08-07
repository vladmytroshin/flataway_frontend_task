import { InputHTMLAttributes } from "react";

export interface TitleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
