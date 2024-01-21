import React from "react";

function Contact() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<form
					action="http://localhost:3000/submit-form" // Updated to point to your server
					method="POST"
					className="flex flex-col w-full md:w-7/12"
				>
					<input
						type="text"
						name="name" // Matches the server-side script
						placeholder="Name"
						className="border-2 border-stone-200 rounded-md p-2 mb-2"
					/>
					<input
						type="email"
						name="user_email" // Updated to match the server-side script
						placeholder="Email"
						className="border-2 border-stone-200 rounded-md p-2 mb-2"
					/>
					<textarea
						name="message" // Matches the server-side script
						placeholder="Message"
						className="border-2 border-stone-200 rounded-md p-2 mb-2"
					/>
					<button type="submit" className="bg-stone-900 text-white font-semibold p-2 rounded-md">
						Send
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
