import { redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { authenticator } from "../services/auth.server";

export let loader = () => redirect("/");

export let action = ({ request }: ActionArgs) => {
  return authenticator.authenticate("google", request);
};
