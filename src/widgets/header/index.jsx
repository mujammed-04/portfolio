export default function Header() {
  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <header className="py-6 font-nunito page-width">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-montserrat font-bold text-gray-900">
          &lt;Mujammed /&gt;
        </div>
        
      </div>
    </header>
  );
}
