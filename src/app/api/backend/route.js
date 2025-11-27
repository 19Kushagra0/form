import { NextResponse } from "next/server";
let users = [];
export async function POST(req) {
  const data = await req.json();

  // Store user inside array
  users.push(data.createData);

  console.log(users);

  return NextResponse.json({ message: "User created successfully" });
}
