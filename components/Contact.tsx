import ContactForm from "./ContactForm";

function Contact() {
  return (
		<div className="pt-40 relative text-primary flex flex-col mb-12">
		<div className="h-3 w-32 bg-primary mx-auto relative z-1 mb-12">
			<h2 className="text-5xl tracking-wider absolute -bottom-0 right-2 text-white">
				Contact
			</h2>
		</div>
		<div className="flex flex-col items-center">
		<div className="text-white w-72 sm:w-[36rem]">
			<div >I would love to hear from you! Please send me a message and I will contact you as soon as I can.</div>
			<ContactForm/>

		</div>
		</div>
	</div>
  );
}

export default Contact;
