
import React from "react";
import { signIn } from "next-auth/react";

const SocialSignUp = () => {
	return (
		<>
			<div className="flex gap-4">
				<button onClick={() => signIn("google")}>Sign Up</button>
				<button onClick={() => signIn("github")}>Sign Up</button>
			</div>
		</>
	);
};

export default SocialSignUp;