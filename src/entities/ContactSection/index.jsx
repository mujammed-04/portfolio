export default function ContactSection() {
  return (
    <>
      <div
        className="w-full h-[120px] bg-gray-100 mt-10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          background: '#f3f4f6',
          transform: 'rotate(180deg)',
        }}
      />
      <div className="bg-gray-100 py-10">
        <div className="page-width flex justify-between gap-10">
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-montserrat  font-bold px-4 bg-gray-900 text-white rounded-lg text-[14px] lg:text-[20px]">
              Contact
            </h4>
            <h1 className="font-montserrat font-bold text-[24px] lg:text-[40px] text-gray-900">
              Let's talk about your project
            </h1>
            <p className="text-gray-900 text-[14px] lg:text-[16px] font-nunito w-3/4">
              We are here to help you with your project. Please fill out the
              form below and we will get back to you as soon as possible.
            </p>
          </div>
          <form action="" className="flex flex-col gap-4 w-1/3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded-lg border border-gray-300 h-40"
            />
            <button
              type="submit"
              className="w-full p-2 rounded-lg bg-gray-900 text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
