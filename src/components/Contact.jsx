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
      body: formData
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
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-5">
      <div className="flex flex-col w-full md:w-7/12 border border-stone-300 rounded-md p-5">
        <h1 className="text-2xl font-bold mb-2">Contact Me</h1>
        <h2 className="text-lg mb-4">I'd love to hear from you! Please fill out the form below:</h2>
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-stone-200 rounded-md p-2 mb-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 border-stone-200 rounded-md p-2 mb-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border-2 border-stone-200 rounded-md p-2 mb-2"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-2 border-stone-200 rounded-md p-2 mb-2"
            required
          />
          <button
            type="submit"
            className="bg-stone-900 text-white font-semibold p-2 rounded-md"
          >
            Send
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
