'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Hobbies', id: 'hobbies' },
  { name: 'Blog', id: 'blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // If we are NOT on the home page, let the link redirect naturally to home + hash
    if (pathname !== '/') {
      return; 
    }

    // If we ARE on the home page, prevent reload and scroll smoothly
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center py-6 bg-background/80 backdrop-blur-md">
      <div className="flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.id}
            // If on a sub-page, link to "/#id". If on home, link to "#id"
            href={pathname === '/' ? `#${item.id}` : `/#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className="text-sm tracking-wide text-accent hover:text-foreground transition-colors cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}