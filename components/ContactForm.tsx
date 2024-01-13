'use client';

import { redirect } from "next/navigation";

function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', 'eb6eac45-5e37-4551-a872-748c188a2040');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      resetForm()
      window.location.assign('https://web3forms.com/success')
      console.log(result);
    }
  }

  function resetForm() {
    const contactForm = document.getElementById(
      'contact_form'
    ) as HTMLFormElement;
    contactForm.reset();
  }

  return (
    <>
      <form
        id="contact_form"
        onSubmit={handleSubmit}
        className="text-white flex flex-col gap-3 mt-12 ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="pl-2 py-1 bg-background-light"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="pl-2 py-1 bg-background-light"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="pl-2 py-1 bg-background-light h-28"></textarea>
        <button
          type="submit"
          className="relative w-32 ml-auto border-b-2 border-secondary bg-transparent py-1 px-5 uppercase text-white 
          transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right 
          before:scale-y-0 before:bg-secondary before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:active:bg-secondary-muted">
          <p>Submit</p>
        </button>
      </form>
    </>
  );
}

export default ContactForm;
