import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const highlights = [
    {
      title: 'История живописи',
      description: 'От наскальных рисунков до современного искусства',
      icon: 'BookOpen',
      link: '/history',
    },
    {
      title: 'Галерея картин',
      description: 'Коллекция шедевров мировой живописи',
      icon: 'Image',
      link: '/gallery',
    },
    {
      title: 'Великие художники',
      description: 'Биографии и творчество мастеров',
      icon: 'Palette',
      link: '/artists',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.6)), url('https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/81ab6ae7-1191-49ba-a3c5-10c8610ca989.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Мир живописи
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-in">
            Откройте для себя величайшие произведения искусства всех времён
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 animate-scale-in"
          >
            Посетить галерею
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Link key={index} to={item.link} className="group">
              <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-2 border-2 hover:border-accent">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon name={item.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О живописи</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Живопись — это вид изобразительного искусства, произведения которого создаются с помощью красок, наносимых на какую-либо поверхность. В более широком смысле это художественное произведение, выполненное с помощью красок.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              На протяжении веков живопись развивалась от простых наскальных рисунков до сложнейших техник современного искусства, отражая культуру, историю и душу человечества.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
