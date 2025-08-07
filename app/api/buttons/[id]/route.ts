import { NextRequest, NextResponse } from "next/server";
import { buttons } from "@/lib/db/buttons";
import { DEFAUL_COLOR } from "@/lib/сonstants";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);
  const button = buttons.get(id);

  if (button) {
    return NextResponse.json(button);
  } else {
    return NextResponse.json("Button not found", { status: 404 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);
  const existingButton = buttons.get(id);

  if (!existingButton) {
    return NextResponse.json("Button not found", { status: 404 });
  }

  const updatedConfig = await request.json();
  const newConfig = { ...existingButton, ...updatedConfig };

  buttons.set(id, newConfig);
  return NextResponse.json(newConfig);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);
  const existingButton = buttons.get(id);

  if (!existingButton) {
    return NextResponse.json("Button not found", { status: 404 });
  }

  const newConfig = {
    ...existingButton,
    color: DEFAUL_COLOR,
    hyperlink: "",
    isConfigured: false,
    title: "",
  };

  buttons.set(id, newConfig);
  return new Response(null, { status: 204 });
}
