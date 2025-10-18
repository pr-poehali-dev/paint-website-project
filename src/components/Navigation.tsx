import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/history', label: 'История', icon: 'BookOpen' },
    { path: '/gallery', label: 'Галерея', icon: 'Image' },
    { path: '/artists', label: 'Художники', icon: 'Palette' },
    { path: '/about', label: 'О нас', icon: 'Info' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Paintbrush" size={28} className="text-accent" />
            <span className="text-2xl font-bold text-primary">Живопись</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-foreground'
                }`}
              >
                <Icon name={link.icon as any} size={18} />
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-accent/10 text-accent'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name={link.icon as any} size={20} />
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
