import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri dodavanju korisnika" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Greška pri dohvatanju korisnika" },
      { status: 500 }
    );
  }
}
