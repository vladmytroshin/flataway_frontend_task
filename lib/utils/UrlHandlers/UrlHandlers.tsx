import { URL_PATTERN } from "@/lib/сonstants";

export const validateUrl = (url: string) => {
  if (!url.trim()) {
    return "Link is required";
  }

  const isValidUrl = URL_PATTERN.test(url) || url.startsWith("/");

  if (!isValidUrl) {
    return "Please enter a valid URL (e.g. https://example.com or /page)";
  }

  return "";
};


export const formatHyperlink = (url: string): string => {
   if (
     url.startsWith("http://") ||
     url.startsWith("https://") ||
     url.startsWith("/")
   ) {
     return url;
   }
   return `https://${url}`;
 };