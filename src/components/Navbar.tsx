'use client';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Hobbies', id: 'hobbies' },
  { name: 'Blog', id: 'blog' },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Updates the URL hash without reloading the page
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center py-6 bg-background/80 backdrop-blur-md">
      <div className="flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className="text-sm tracking-wide text-accent hover:text-foreground transition-colors cursor-pointer"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}