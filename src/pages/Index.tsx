import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Hammer',
      title: 'Косметический ремонт',
      description: 'Обновление интерьера без перепланировки',
      price: 'от 2500 ₽/м²'
    },
    {
      icon: 'Home',
      title: 'Капитальный ремонт',
      description: 'Полная реконструкция с заменой коммуникаций',
      price: 'от 8000 ₽/м²'
    },
    {
      icon: 'Paintbrush',
      title: 'Дизайнерский ремонт',
      description: 'Эксклюзивные решения под ваш стиль',
      price: 'от 12000 ₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт под ключ',
      description: 'От проекта до уборки — мы делаем всё',
      price: 'от 6000 ₽/м²'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Отличная работа! Сделали ремонт за 2 месяца, все чисто и аккуратно. Особенно понравился индивидуальный подход.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Профессиональная команда, качественные материалы. Цена соответствует результату. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Очень довольны результатом! Мастера вежливые, всё объясняют. Сделали даже лучше, чем ожидали.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 15 минут'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/30">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">РемонтПро</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            8 (800) 555-35-35
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ремонт квартир под ключ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Воплотим в жизнь квартиру вашей мечты. Гарантия качества, соблюдение сроков и прозрачное ценообразование.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться на консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Портфолио работ
                  <Icon name="Image" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Icon name="Home" size={200} className="text-primary/30" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий вариант ремонта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Icon name="ArrowRight" size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-accent/50 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас?</h2>
              <div className="space-y-6">
                {[
                  { icon: 'Award', title: 'Опыт более 10 лет', desc: 'Выполнили более 500 проектов' },
                  { icon: 'Shield', title: 'Гарантия качества', desc: 'Даём гарантию на все работы до 3 лет' },
                  { icon: 'Clock', title: 'Точные сроки', desc: 'Работаем строго по договору' },
                  { icon: 'Wallet', title: 'Честные цены', desc: 'Без скрытых платежей и наценок' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-primary/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши заказчики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <span className="font-semibold">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Запишитесь на консультацию</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и мы перезвоним в течение 15 минут</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Комментарий (необязательно)</label>
                  <Textarea 
                    placeholder="Расскажите о своих пожеланиях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Записаться на выезд специалиста
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" className="text-primary" size={32} />
                <span className="text-2xl font-bold">РемонтПро</span>
              </div>
              <p className="text-gray-400">Профессиональный ремонт квартир в вашем городе</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-primary transition-colors">Косметический</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Капитальный</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Дизайнерский</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Под ключ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  8 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@remontpro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;