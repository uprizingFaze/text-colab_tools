import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

/**
 * Authenticating your Liveblocks application
 * https://liveblocks.io/docs/authentication
 */

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: NextRequest) {
  // Get the current user's unique id from your database
  const userId = Math.floor(Math.random() * 10000);

  // Create a session for the current user
  // userInfo is made available in Liveblocks presence hooks, e.g. useOthers
  const session = liveblocks.prepareSession(`user-${userId}`, {
    userInfo: USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length],
  });

  // Use a naming pattern to allow access to rooms with a wildcard
  session.allow(`liveblocks:examples:*`, session.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}

const USER_INFO = [
  {
    name: "uprizingFaze",
    color: "#D583F0",
    picture: "https://avatars.githubusercontent.com/u/111722885?s=96&v=4",
  },
  {
    name: "El Rincón Del Dev",
    color: "#F08385",
    picture: "https://avatars.githubusercontent.com/u/109598200?s=96&v=4",
  },
  {
    name: "Afor",
    color: "#F0D885",
    picture: "https://avatars.githubusercontent.com/u/43246362?s=96&v=4",
  },
  {
    name: "uprizingFaze",
    color: "#85EED6",
    picture: "https://avatars.githubusercontent.com/u/111722885?s=96&v=4",
  },
  {
    name: "El Rincón Del Dev",
    color: "#85BBF0",
    picture: "https://avatars.githubusercontent.com/u/109598200?s=96&v=4",
  },
  {
    name: "Afor",
    color: "#8594F0",
    picture: "https://avatars.githubusercontent.com/u/43246362?s=96&v=4",
  },
  {
    name: "uprizingFaze",
    color: "#85DBF0",
    picture: "https://avatars.githubusercontent.com/u/111722885?s=96&v=4",
  },
  {
    name: "El Rincón Del Dev",
    color: "#87EE85",
    picture: "https://avatars.githubusercontent.com/u/109598200?s=96&v=4",
  },
];
