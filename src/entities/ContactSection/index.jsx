import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <>
      <div
        className="w-full h-[120px] bg-gray-100"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          background: '#f3f4f6',
          transform: 'rotate(180deg)',
        }}
      />
      <div className="bg-gray-100 py-10" id="contact">
        <div className="page-width flex justify-between gap-10">
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-montserrat  font-bold px-4 bg-[#262626] text-white rounded-lg text-[14px] lg:text-[20px]">
              Contact
            </h4>
            <h1 className="font-montserrat font-bold text-[24px] lg:text-[40px] text-gray-900">
              Let's talk about your project
            </h1>
            <p className="text-gray-900 text-[14px] lg:text-[16px] font-nunito w-3/4">
              We are here to help you with your project. Please fill out the
              form below and we will get back to you as soon as possible.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <Mail />
                <p>contact@example.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin />
                <p>123 Design Street, San Francisco, CA</p>
              </div>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col  w-[475px] p-4 bg-[#262626] rounded-lg"
          >
            <label
              htmlFor="name"
              className="text-white text-[14px] lg:text-[16px] font-montserrat font-bold"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded-lg border border-gray-300 my-3"
            />
            <label
              htmlFor="email"
              className="text-white text-[14px] lg:text-[16px] font-montserrat font-bold"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-lg border border-gray-300 my-3"
            />
            <label
              htmlFor="message"
              className="text-white text-[14px] lg:text-[16px] font-montserrat font-bold"
            >
              Message
            </label>
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded-lg border border-gray-300 h-40 my-3"
            />
            <button
              type="submit"
              className="w-full p-2 rounded-lg bg-white text-gray-900 mt-2"
            >
              Send
            </button>
            <p className="text-white text-[12px] lg:text-[14px] font-nunito text-center mt-2">
              We'll get back to you within 24-48 business hours
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
