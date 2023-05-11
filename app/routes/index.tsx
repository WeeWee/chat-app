import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Form method="post" action="/logout">
        <button>Logout</button>
      </Form>
    </div>
  );
}
