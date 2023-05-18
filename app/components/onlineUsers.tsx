export const OnlineUsers = ({
	online_users,
	loading_users,
}: {
	online_users: { id: string; display_name: string }[];
	loading_users: boolean;
}) => {
	return (
		<div>
			{!loading_users ? (
				online_users?.map((user) => (
					<div key={user.id}>
						<p>{user.display_name} ONLINE</p>
					</div>
				))
			) : (
				<p>Loading....</p>
			)}
		</div>
	);
};
