import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      Add a chat!
      <Link to="/messages/chat/add">Here</Link>
    </div>
  );
}
