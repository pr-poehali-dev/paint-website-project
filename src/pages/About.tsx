import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Образовательный проект',
      description: 'Мы создали этот сайт для учащихся 9 класса в рамках изучения информатики.',
    },
    {
      icon: 'Palette',
      title: 'Любовь к искусству',
      description: 'Наша цель — поделиться красотой живописи и вдохновить на изучение искусства.',
    },
    {
      icon: 'Users',
      title: 'Для всех',
      description: 'Материалы понятны и интересны как начинающим, так и ценителям искусства.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">О нас</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Образовательный проект о живописи для учащихся
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={32} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">О проекте</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Этот сайт создан учениками 9 класса в рамках изучения информатики. 
                    Мы выбрали тему живописи, потому что искусство — это важная часть культуры человечества, 
                    которая помогает нам понять историю, эмоции и красоту мира.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    На страницах сайта вы найдете информацию об истории живописи, познакомитесь с великими художниками 
                    и их шедеврами, узнаете о различных стилях и направлениях в искусстве.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-accent"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={40} className="text-accent" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Свяжитесь с нами</h3>
                  <p className="text-muted-foreground mb-3">
                    Если у вас есть вопросы или предложения по улучшению сайта, мы будем рады услышать вас!
                  </p>
                  <a
                    href="mailto:info@painting-school.ru"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  >
                    <Icon name="Send" size={18} />
                    info@painting-school.ru
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Heart" size={18} className="text-accent" />
            Сделано с любовью к искусству
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
