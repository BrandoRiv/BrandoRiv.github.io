import React from "react";

function Contact() {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex justify-center items-center">
				<form
					action="https://getform.io/slug"
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
						name="email"
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
		</div>
	);
}

export default Contact;
