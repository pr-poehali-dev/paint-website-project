import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedStyle, setSelectedStyle] = useState('Все');

  const paintings = [
    {
      title: 'Мона Лиза',
      artist: 'Леонардо да Винчи',
      year: '1503-1519',
      style: 'Возрождение',
      image: 'https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/81ab6ae7-1191-49ba-a3c5-10c8610ca989.jpg',
    },
    {
      title: 'Впечатление. Восход солнца',
      artist: 'Клод Моне',
      year: '1872',
      style: 'Импрессионизм',
      image: 'https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/a9f50f30-3c6e-4c53-957d-fd459beae605.jpg',
    },
    {
      title: 'Композиция VIII',
      artist: 'Василий Кандинский',
      year: '1923',
      style: 'Абстракционизм',
      image: 'https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/7bac5e1d-bb48-43bc-90dc-27459bbff1d8.jpg',
    },
    {
      title: 'Звёздная ночь',
      artist: 'Винсент ван Гог',
      year: '1889',
      style: 'Постimpрессионизм',
      image: 'https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/a9f50f30-3c6e-4c53-957d-fd459beae605.jpg',
    },
    {
      title: 'Герника',
      artist: 'Пабло Пикассо',
      year: '1937',
      style: 'Кубизм',
      image: 'https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/7bac5e1d-bb48-43bc-90dc-27459bbff1d8.jpg',
    },
    {
      title: 'Сотворение Адама',
      artist: 'Микеланджело',
      year: '1512',
      style: 'Возрождение',
      image: 'https://cdn.poehali.dev/projects/2a061412-66f1-4d50-ae05-8d7397d9f598/files/81ab6ae7-1191-49ba-a3c5-10c8610ca989.jpg',
    },
  ];

  const styles = ['Все', ...Array.from(new Set(paintings.map((p) => p.style)))];

  const filteredPaintings =
    selectedStyle === 'Все'
      ? paintings
      : paintings.filter((p) => p.style === selectedStyle);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Галерея картин</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Коллекция величайших шедевров мировой живописи
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedStyle === style
                  ? 'bg-accent text-primary shadow-md scale-105'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:scale-105'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaintings.map((painting, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-accent group animate-fade-in"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Badge className="bg-accent text-primary">{painting.style}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{painting.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Icon name="User" size={16} />
                  <p className="font-medium">{painting.artist}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <p className="text-sm">{painting.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPaintings.length === 0 && (
          <div className="text-center py-12">
            <Icon name="ImageOff" size={64} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">Картины не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
