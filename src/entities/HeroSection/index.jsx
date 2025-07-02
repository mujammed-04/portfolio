import { CircleIcon, DownloadIcon, MailIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-[#262626]" id="home">
      <div className="page-width flex items-center flex-col justify-center pt-12 pb-4 h-full relative z-10 gap-16">
        <div className="flex items-center justify-between w-full h-[50dvh]">
          <div>
            <h1 className="text-gray-300 text-[20px] font-nunito mb-4">
              Hello, I'm <br />
              <span className="text-white text-[72px] leading-none font-montserrat font-bold">
                Mukhammed
              </span>
            </h1>
            <p className="text-gray-400 text-[18px] font-nunito mb-4 w-2/3">
              I'm a frontend developer with a passion for creating beautiful and
              functional websites.
            </p>
            <div className="flex items-center gap-8 mt-8">
              <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-montserrat font-bold flex items-center gap-2">
                <MailIcon />
                Contact Me
              </button>
              <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-montserrat font-bold flex items-center gap-2">
                <DownloadIcon />
                Download CV
              </button>
            </div>
          </div>
          <div className="relative w-[500px] h-full">
            <img
              src="/me.png"
              alt="hero"
              style={{
                borderTopLeftRadius: '100px',
                borderBottomRightRadius: '100px',
                borderTopRightRadius: '200px',
                borderBottomLeftRadius: '200px',
              }}
              className="w-full h-full absolute object-[100%_10%] top-0 left-0 object-cover z-[-1]"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-12">
          <div className="flex flex-col items-end border-2 border-gray-200 rounded-lg p-4">
            <div className="text-[20px] text-gray-400 font-montserrat font-semibold">
              Active Users
            </div>
            <div className="text-[72px] text-gray-200 font-montserrat font-bold">
              10k+
            </div>
          </div>
          <div className="flex flex-col items-end border-2 border-gray-200 rounded-lg p-4">
            <div className="text-[20px] text-gray-400 font-montserrat font-semibold">
              Enterprise Clients
            </div>
            <div className="text-[72px] text-gray-200 font-montserrat font-bold">
              200+
            </div>
          </div>
          <div className="flex flex-col items-end border-2 border-gray-200 rounded-lg p-4">
            <div className="text-[20px] text-gray-400 font-montserrat font-semibold">
              Uptime
            </div>
            <div className="text-[72px] text-gray-200 font-montserrat font-bold">
              99.9%
            </div>
          </div>
          <div className="flex flex-col items-end border-2 border-gray-200 rounded-lg p-4">
            <div className="text-[20px] text-gray-400 font-montserrat font-semibold">
              Support
            </div>
            <div className="text-[72px] text-gray-200 font-montserrat font-bold">
              24/7
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CircleIcon className="text-gray-200" />
          <CircleIcon className="text-gray-200" />
          <CircleIcon className="text-gray-200" />
        </div>
      </div>
    </div>
  );
}
