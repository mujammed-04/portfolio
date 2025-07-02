import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  const navItems = [
    {
      label: 'Home',
      href: '#home',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Blogs',
      href: '#blogs',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? 'bg-gray-900/70 backdrop-blur-sm' : ''
      }`}
    >
      <div className="py-4 font-nunito page-width">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-montserrat font-bold text-white">
            &lt;Mujammed /&gt;
          </div>
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 text-lg font-montserrat font-bold hover:text-white border-b-2 border-transparent hover:border-gray-300 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
