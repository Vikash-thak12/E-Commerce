import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { user } = await req.json();
    const userData = await db.select().from(usersTable)
        .where((eq(usersTable.email, user?.primaryEmailAddress.emailAddress)))

    if(userData.length<=0){
        //If not then insert new user to the DB
        const result = await db.insert(usersTable).values({
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            image: user?.imageUrl
        }).returning()
        return NextResponse.json(result)
    }

    return NextResponse.json(userData[0]);
}