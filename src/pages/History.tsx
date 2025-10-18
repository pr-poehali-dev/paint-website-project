import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const History = () => {
  const periods = [
    {
      era: 'Первобытное искусство',
      period: '40 000 — 3 000 до н.э.',
      description: 'Наскальная живопись в пещерах Альтамира, Ласко. Первые попытки человека изобразить окружающий мир.',
      icon: 'Mountain',
    },
    {
      era: 'Античность',
      period: '8 век до н.э. — 5 век н.э.',
      description: 'Древнегреческая и римская живопись. Фрески, вазопись, мозаики. Появление перспективы и объёма.',
      icon: 'Columns',
    },
    {
      era: 'Средневековье',
      period: '5 — 15 века',
      description: 'Иконопись, фрески, миниатюры. Религиозная тематика, плоскостное изображение, символизм.',
      icon: 'Church',
    },
    {
      era: 'Возрождение',
      period: '14 — 16 века',
      description: 'Расцвет искусства. Леонардо да Винчи, Микеланджело, Рафаэль. Реалистичность, анатомия, перспектива.',
      icon: 'Sparkles',
    },
    {
      era: 'Барокко',
      period: '17 — 18 века',
      description: 'Динамичность, эмоциональность, контрасты света и тени. Рембрандт, Рубенс, Караваджо.',
      icon: 'Flame',
    },
    {
      era: 'Романтизм',
      period: 'Конец 18 — начало 19 века',
      description: 'Эмоции, драматизм, природа. Делакруа, Тёрнер, Айвазовский. Культ индивидуальности.',
      icon: 'Heart',
    },
    {
      era: 'Импрессионизм',
      period: '1860-е — 1880-е',
      description: 'Передача света и атмосферы. Моне, Ренуар, Дега. Быстрые мазки, яркие цвета, пленэрная живопись.',
      icon: 'Sun',
    },
    {
      era: 'Модернизм',
      period: '20 век',
      description: 'Экспрессионизм, кубизм, абстракционизм. Пикассо, Кандинский, Малевич. Эксперименты с формой.',
      icon: 'Shapes',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">История живописи</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Путешествие через тысячелетия художественного творчества — от первых наскальных рисунков до современного искусства
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>

          <div className="space-y-12">
            {periods.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                <div className="md:w-1/2"></div>
                
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-[7px] mt-6 border-4 border-white shadow-md"></div>

                <Card className="md:w-1/2 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-accent animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon name={item.icon as any} size={24} className="text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{item.era}</CardTitle>
                        <p className="text-sm text-accent font-semibold">{item.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Icon name="Lightbulb" size={32} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Интересный факт</h3>
              <p className="text-muted-foreground leading-relaxed">
                Самая древняя известная картина была обнаружена в пещере Эль-Кастильо в Испании. Её возраст составляет более 40 800 лет! Это простое красное пятно, оставленное рукой древнего человека, стало началом тысячелетней истории изобразительного искусства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
