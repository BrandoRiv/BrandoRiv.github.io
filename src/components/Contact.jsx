import React, { useRef } from "react";
import { useIsVisible } from "./hooks/useIsVisible";

export default function Contact() {
	const [result, setResult] = React.useState("");

	const formRef = useRef();

	const isFormVisible = useIsVisible(formRef);

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
		<section aria-labelledby="contact-section-title" className="pt-12">
			<div
				ref={formRef}
				className={`mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ease-in-out transform ${
					isFormVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
				}`}
			>
				<h2 id="contact-section-title" className="text-3xl font-bold sm:text-4xl">
					Contact Me
				</h2>
				<p className="mt-4 text-lg">
					I'd love to hear from you! Please fill out the form below to send me an email.
				</p>

				<form onSubmit={onSubmit} className="mt-6 space-y-4">
					<div className="flex flex-col text-lg">
						<label htmlFor="name" className="sr-only">
							Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="name"
							className="border-2 text-black border-gray-300 rounded-md p-3 text-base placeholder-gray-500"
							required
						/>
					</div>
					<div className="flex flex-col sm:flex-row sm:space-x-4">
						<div className="flex flex-col w-full">
							<label htmlFor="email" className="sr-only">
								Email
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="border-2 text-black border-gray-300 rounded-md p-3 text-base placeholder-gray-500"
								required
							/>
						</div>

						<div className="flex flex-col w-full mt-4 sm:mt-0">
							<label htmlFor="phone" className="sr-only">
								Phone
							</label>
							<input
								type="tel"
								name="phone"
								placeholder="phone number"
								className="border-2 text-black border-gray-300 rounded-md p-3 text-base placeholder-gray-500"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="message" className="sr-only">
							Message
						</label>
						<textarea
							name="message"
							placeholder="message"
							className="border-2 text-black border-gray-300 rounded-md p-3 text-base placeholder-gray-500 h-40"
							required
						/>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-stone-700 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
						>
							send
						</button>
					</div>
				</form>
				<span className="mt-4 block text-gray-500">{result}</span>
			</div>
		</section>
	);
}
