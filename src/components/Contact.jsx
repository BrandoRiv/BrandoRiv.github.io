import React from "react";

function Contact() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-5">
			<form
				action="http://localhost:3000/submit-form"
				method="POST"
				className="flex flex-col w-full md:w-7/12"
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="border-2 border-stone-200 rounded-md p-2 mb-2"
				/>
				<input
					type="email"
					name="user_email"
					placeholder="Email"
					className="border-2 border-stone-200 rounded-md p-2 mb-2"
				/>
				<textarea
					name="message"
					placeholder="Message"
					className="border-2 border-stone-200 rounded-md p-2 mb-2"
				/>
				<button type="submit" className="bg-stone-900 text-white font-semibold p-2 rounded-md">
					Send
				</button>
			</form>
		</div>
	);
}

export default Contact;
