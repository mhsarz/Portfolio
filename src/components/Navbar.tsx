'use client';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Blog', href: '#blog' },
];

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center py-6 bg-background/80 backdrop-blur-sm">
      <div className="flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-sm tracking-wide text-accent hover:text-foreground transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}