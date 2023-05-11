import type { LoaderArgs } from "@remix-run/node";
import { requireUser } from "./services/auth.server";
import { Chat } from "~/components/chat/chat";
import { Outlet, useLoaderData } from "@remix-run/react";
export async function loader({ request }: LoaderArgs) {
  return await requireUser(request);
}
export default function MessagesRoute() {
  return (
    <div>
      Messages
      <Outlet />
    </div>
  );
}
