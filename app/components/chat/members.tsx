import type { TChatMember } from "~/types";
export const Members = ({ members }: { members: TChatMember[] }) => {
  return (
    <div>
      <p>Members</p>
      {members?.map((member) => (
        <div className="flex" key={member.user.id}>
          <p>{member.user.display_name}</p>
        </div>
      ))}
    </div>
  );
};
