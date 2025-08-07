import { NextResponse } from "next/server";
import { buttons } from "@/lib/db/buttons";

export async function GET() {
  return NextResponse.json(Array.from(buttons.values()));
}
