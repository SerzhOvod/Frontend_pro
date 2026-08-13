export function Navigation() {
  const navigationLinks = [
    {
      href: '/',
      label: 'Головна',
    },

    {
      href: '/contacts',
      label: 'Контакти',
    },
    {
      href: '/about',
      label: 'Про мене',
    },
  ];

  return (
    <>
      <nav className="navigation">
        {navigationLinks.map(item => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
