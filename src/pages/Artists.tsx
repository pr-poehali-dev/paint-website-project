import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Artists = () => {
  const artists = [
    {
      name: 'Леонардо да Винчи',
      period: '1452-1519',
      country: 'Италия',
      style: 'Возрождение',
      description:
        'Гений эпохи Возрождения, художник, скульптор, архитектор, учёный, изобретатель. Автор «Моны Лизы» и «Тайной вечери».',
      icon: 'Brain',
    },
    {
      name: 'Клод Моне',
      period: '1840-1926',
      country: 'Франция',
      style: 'Импрессионизм',
      description:
        'Основатель импрессионизма. Мастер передачи света и атмосферы. Известен серией картин «Кувшинки» и «Стога сена».',
      icon: 'Droplet',
    },
    {
      name: 'Винсент ван Гог',
      period: '1853-1890',
      country: 'Нидерланды',
      style: 'Постимпрессионизм',
      description:
        'Один из самых известных художников в истории. Яркие цвета, экспрессивные мазки. «Звёздная ночь», «Подсолнухи».',
      icon: 'Paintbrush',
    },
    {
      name: 'Пабло Пикассо',
      period: '1881-1973',
      country: 'Испания',
      style: 'Кубизм',
      description:
        'Создатель кубизма, один из самых влиятельных художников XX века. Революционер в искусстве. Автор «Герники».',
      icon: 'Square',
    },
    {
      name: 'Василий Кандинский',
      period: '1866-1944',
      country: 'Россия',
      style: 'Абстракционизм',
      description:
        'Основоположник абстрактного искусства. Соединял живопись с музыкой. Теоретик искусства и педагог.',
      icon: 'Waves',
    },
    {
      name: 'Илья Репин',
      period: '1844-1930',
      country: 'Россия',
      style: 'Реализм',
      description:
        'Величайший русский художник-реалист. Мастер портрета и исторической живописи. «Бурлаки на Волге», «Запорожцы».',
      icon: 'Crown',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Великие художники</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мастера, изменившие мир искусства и оставившие неизгладимый след в истории живописи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={artist.icon as any} size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-1">{artist.name}</CardTitle>
                    <p className="text-sm text-accent font-semibold">{artist.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    {artist.country}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Icon name="Palette" size={14} />
                    {artist.style}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{artist.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-8 max-w-4xl mx-auto border-2 border-accent/20">
          <div className="text-center">
            <Icon name="Sparkles" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Вдохновение в каждом мазке</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Каждый из этих художников создал уникальный стиль, который повлиял на развитие мирового искусства. 
              Их работы продолжают вдохновлять миллионы людей по всему миру.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
