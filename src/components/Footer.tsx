import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Paintbrush" size={24} className="text-accent" />
              <span className="text-xl font-bold">Живопись</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Образовательный проект о мировой живописи для учащихся
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="Home" size={16} />
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="BookOpen" size={16} />
                  История
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="Image" size={16} />
                  Галерея
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/artists" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="Palette" size={16} />
                  Художники
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="Info" size={16} />
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@painting-school.ru" className="hover:text-accent transition-colors">
                  info@painting-school.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p className="flex items-center justify-center gap-2">
            © 2024 Живопись. Образовательный проект
            <Icon name="Heart" size={14} className="text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
