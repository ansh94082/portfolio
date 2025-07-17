import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="flex flex-col items-center">
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Thank you!</h2>
            <p>Your message has been sent successfully.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        
        <input type="hidden" name="form-name" value="contact" />

        
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human:
            <input name="bot-field" />
          </label>
        </p>

        <label className="text-white w-full">
          Name:
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded border border-white"
          />
        </label>

        <label className="text-white w-full">
          Email:
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded border border-white"
          />
        </label>

        <label className="text-white w-full">
          Message:
          <textarea
            name="message"
            required
            className="w-full p-3 rounded min-h-[200px] resize-y border border-white"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
