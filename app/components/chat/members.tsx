import type { TChatMember } from "~/types";
export const Members = ({ members }: { members: TChatMember[] }) => {
  return (
    <div>
      <div className="flex gap-2 text-gray-500 capitalize">
        {members?.map((member) => (
          <div key={member.user.id}>
            <p>{member.user.display_name}</p>
            <p>
              {member.user.last_seen?.toISOString()
                ? member.user.last_seen.toISOString()
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
