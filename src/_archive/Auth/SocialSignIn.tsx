
import React from "react";
import { signIn } from "next-auth/react";

const SocialSignIn = () => {
	return (
		<>
			<div className="flex gap-4">
				<button
					onClick={() => signIn("google")}
					className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 bg-primary hover:bg-primary/40 text-white"
				>
					Sign In
					{/* svg omitted */}
				</button>

				<button
					onClick={() => signIn("github")}
					className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 text-white bg-primary hover:bg-primary/40"
				>
					Sign In
				</button>
			</div>
		</>
	);
};

export default SocialSignIn;