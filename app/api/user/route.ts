import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Define the type of the incoming user object
interface User {
  fullName: string;
  primaryEmailAddress: {
    emailAddress: string;
  };
  imageUrl?: string;
}

export async function POST(req: NextRequest) {
  // Ensure req.json() is handled properly
  const { user }: { user: User } = await req.json();

  // Query the database and type the result
  const userData = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, user?.primaryEmailAddress.emailAddress));

  if (userData.length <= 0) {
    // If not found, insert new user into the database
    const result = await db
      .insert(usersTable)
      .values({
        name: user?.fullName,
        email: user?.primaryEmailAddress.emailAddress,
        image: user?.imageUrl,
      })
      .returning();

    return NextResponse.json(result[0]);
  }

  return NextResponse.json(userData[0]);
}
