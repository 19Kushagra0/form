import { NextResponse } from "next/server";

let users = [];

export async function POST(req) {
  const data = await req.json();

  // Check whether this username is already taken
  const userExists = users.find(
    (user) => user.userName === data.createData.userName
  );

  if (userExists) {
    return NextResponse.json(
      { message: "Username already exists" },
      { status: 400 }
    );
  }

  // Store only user data object
  users.push(data.createData);

  console.log(users);

  return NextResponse.json({ message: "User created successfully" });
}
