import React from "react";

export default function Contact() {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<section aria-labelledby="contact-section-title" className="py-12">
			<div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
				<h2 id="contact-section-title" className="text-3xl font-bold sm:text-4xl">
					Contact Me
				</h2>
				<p className="mt-4 text-gray-600 text-lg">
					I'd love to hear from you! Please fill out the form below.
				</p>

				<form onSubmit={onSubmit} className="mt-6 space-y-4">
					<div className="flex flex-col">
						<label htmlFor="name" className="sr-only">
							Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="border-2 border-gray-300 rounded-md p-3"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="email" className="sr-only">
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="border-2 border-gray-300 rounded-md p-3"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="phone" className="sr-only">
							Phone
						</label>
						<input
							type="tel"
							name="phone"
							placeholder="Phone Number"
							className="border-2 border-gray-300 rounded-md p-3"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="message" className="sr-only">
							Message
						</label>
						<textarea
							name="message"
							placeholder="Your message"
							className="border-2 border-gray-300 rounded-md p-3"
							required
						/>
					</div>

					<button
						type="submit"
						className="bg-blue-600 text-white font-bold p-3 rounded-md hover:bg-blue-700 transition duration-200"
					>
						Send Message
					</button>
				</form>
				<span className="mt-4 block text-gray-500">{result}</span>
			</div>
		</section>
	);
}
