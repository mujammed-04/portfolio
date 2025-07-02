export default function Header() {
  const navItems = [
    {
      label: 'Home',
      href: '/',
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
    <header className="py-6 font-nunito page-width">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-montserrat font-bold text-gray-900">
          &lt;Mujammed /&gt;
        </div>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
