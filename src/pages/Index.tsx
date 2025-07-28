import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-cream-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-beige-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">SACRUM TRIADA</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О мероприятии</a>
            <a href="#program" className="text-foreground hover:text-primary transition-colors">Программа</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/527302f4-8866-4a9a-ad17-a555956851b4.jpg" 
            alt="Retreat atmosphere" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-beige-100/80 to-rose-100/80"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-light text-primary mb-6 leading-tight">
              SACRUM TRIADA
            </h1>
            <p className="text-xl md:text-2xl font-heading font-light text-secondary mb-4">
              Путь к Себе Истинной
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Это больше чем ретрит.. Эксклюзивное трансформационное путешествие для 10 женщин в Grand Hotel, Крым
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-rose-100 text-rose-800">
                <Icon name="MapPin" size={16} className="mr-2" />
                Grand Hotel, Ялта
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-beige-100 text-beige-800">
                <Icon name="Calendar" size={16} className="mr-2" />
                29-31 августа 2025
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-cream-100 text-amber-800">
                <Icon name="Users" size={16} className="mr-2" />
                Только 10 мест
              </Badge>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full animate-float">
              Забронировать место
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-light text-primary mb-8">О мероприятии</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              SACRUM TRIADA — это сакральное пространство трансформации, где каждая женщина обретает свою истинную суть. 
              За три дня вы пройдете путь от освобождения до воплощения новой себя, окруженная заботой команды экспертов 
              в атмосфере абсолютной приватности и роскоши.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-rose-600" />
                </div>
                <CardTitle className="text-xl font-heading">Глубинная трансформация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Работа с истинной сутью через снятие масок и обретение целостности</p>
              </CardContent>
            </Card>

            <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-beige-700" />
                </div>
                <CardTitle className="text-xl font-heading">Премиальный уровень</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Эксклюзивность для 10 женщин с полным сопровождением экспертов</p>
              </CardContent>
            </Card>

            <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-amber-600" />
                </div>
                <CardTitle className="text-xl font-heading">Полное воплощение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">От внутренней работы до внешнего образа — летопись вашей трансформации</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-gradient-to-b from-beige-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-light text-primary mb-8">Программа трансформации</h2>
            <p className="text-lg text-muted-foreground">
              Четыре дня сакрального путешествия к себе истинной
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Day 1 */}
            <Card className="overflow-hidden border-beige-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-white to-beige-50 border-b border-beige-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-beige-300">
                    <span className="text-2xl font-heading font-bold text-beige-700">1</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-primary">День 1 (БЕЛЫЙ): ОСВОБОЖДЕНИЕ</CardTitle>
                    <CardDescription className="text-lg">Встреча с собой</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-beige-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">12:00 - Сакральный ритуал встречи</h4>
                        <p className="text-muted-foreground">Крымский чай, тишина, настройка на глубину под живую музыку Gitanos Group</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-beige-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">18:00 - Глубинная сессия с Дарьей</h4>
                        <p className="text-muted-foreground">"Сними маски, увидь суть" — работа с истинным "Я"</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/img/67035ac1-d55b-4fb0-80ba-8b0c71bbd281.jpg" 
                      alt="Day 1 ceremony" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="overflow-hidden border-beige-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-beige-50 to-rose-50 border-b border-rose-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center border-2 border-beige-400">
                    <span className="text-2xl font-heading font-bold text-beige-700">2</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-primary">День 2 (БЕЖ): ЦЕЛОСТНОСТЬ</CardTitle>
                    <CardDescription className="text-lg">Встреча внутреннего мужчины и женщины</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-rose-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">10:00 - Мастер-класс Наталии</h4>
                        <p className="text-muted-foreground">Этикет как геометрия статусности и самопрезентации</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-rose-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">18:00 - Сессия "Тандем сил"</h4>
                        <p className="text-muted-foreground">Встреча и гармонизация внутренних энергий</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/img/d6e243e3-3411-4ed2-941b-29ae2adcf26c.jpg" 
                      alt="Day 2 elegance" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="overflow-hidden border-rose-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-rose-100 border-b border-rose-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center border-2 border-rose-400">
                    <span className="text-2xl font-heading font-bold text-rose-700">3</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-primary">День 3 (КРАСНЫЙ): СТРАСТЬ И СИЯНИЕ</CardTitle>
                    <CardDescription className="text-lg">Архетипы Евы и Лилит</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-rose-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">10:00 - Королевская походка</h4>
                        <p className="text-muted-foreground">Мастер-класс Наталии по женственности и статусности</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-rose-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">15:00 - Румба "Анатомия Желания"</h4>
                        <p className="text-muted-foreground">Пробуждение жизненной силы через танец страсти</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-rose-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">18:00 - "Код вечной манкости"</h4>
                        <p className="text-muted-foreground">Активация природной притягательности и магнетизма</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Badge className="bg-rose-100 text-rose-800">Архетип Евы</Badge>
                    <Badge className="bg-rose-200 text-rose-900">Архетип Лилит</Badge>
                    <p className="text-muted-foreground text-sm">
                      Разблокировка центра жизненной силы, магнетизма и самоценности через работу с древними женскими архетипами
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 4 */}
            <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-cream-50 to-amber-50 border-b border-amber-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center border-2 border-amber-400">
                    <span className="text-2xl font-heading font-bold text-amber-800">4</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-heading text-primary">День 4 (ЧЕРНОЕ ЗОЛОТО): ВОПЛОЩЕНИЕ</CardTitle>
                    <CardDescription className="text-lg">Твой новый образ — зеркало души</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-amber-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">11:00 - Архитектура образа</h4>
                        <p className="text-muted-foreground">Материализация вашей трансформации в стиле</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-amber-600 mt-1" />
                      <div>
                        <h4 className="font-heading font-semibold mb-2">14:30 - Фотосессия "Живой портрет"</h4>
                        <p className="text-muted-foreground">Запечатление энергии вашего истинного "Я"</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Camera" size={48} className="text-amber-600 mx-auto mb-4" />
                      <p className="text-muted-foreground font-heading">Ваше вещественное доказательство трансформации</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-light text-primary mb-8">Для кого этот ретрит?</h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Heart" size={24} className="text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Устали от ролей "удобной", "сильной", "идеальной"</h3>
                      <p className="text-muted-foreground">Готовы снять маски и встретиться с истинной собой</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Compass" size={24} className="text-beige-600 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Ищете глубокие изменения</h3>
                      <p className="text-muted-foreground">Хотите не просто отдохнуть, а трансформироваться</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Crown" size={24} className="text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Цените эксклюзивность</h3>
                      <p className="text-muted-foreground">Предпочитаете премиальный уровень сервиса и индивидуальный подход</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-100 to-beige-100 rounded-2xl p-8">
                <Icon name="Users" size={64} className="text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-heading font-bold text-primary mb-4">Только 10 мест</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Абсолютная приватность и индивидуальное внимание каждой участнице
                </p>
                <Badge variant="secondary" className="text-lg py-2 px-6 bg-rose-100 text-rose-800">
                  Эксклюзивность гарантирована
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-beige-50 to-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-light text-primary mb-8">Наша команда экспертов</h2>
            <p className="text-lg text-muted-foreground">
              Профессионалы высочайшего уровня для вашей трансформации
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Darya */}
            <Card className="overflow-hidden border-beige-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-rose-100 to-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Heart" size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">Дарья Граматикопуло</h3>
                    <p className="text-lg text-secondary mb-4">Ваш проводник в глубину</p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Полимодальный дипломированный психолог</p>
                      <p>• 4 высших образования, 2 государственные медали</p>
                      <p>• Эксперт по трансформации (АПР, EFPA)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Natalia */}
            <Card className="overflow-hidden border-beige-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-beige-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Crown" size={48} className="text-beige-700" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">Наталия Бережнова</h3>
                    <p className="text-lg text-secondary mb-4">Приглашенная гостья</p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Эксперт по этикету и самопрезентации</p>
                      <p>• Мастер-класс "Королевская походка"</p>
                      <p>• Геометрия статусности и влияния</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="UserCheck" size={32} className="text-amber-600" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Екатерина</h4>
                  <p className="text-sm text-muted-foreground">Организатор. Создает пространство безупречной заботы</p>
                </CardContent>
              </Card>

              <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Camera" size={32} className="text-rose-600" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Татьяна</h4>
                  <p className="text-sm text-muted-foreground">Фотограф. Летопись вашего преображения</p>
                </CardContent>
              </Card>

              <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="ChefHat" size={32} className="text-beige-600" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Шеф Владлен</h4>
                  <p className="text-sm text-muted-foreground">Ресторан "Женева". Изысканная гастрономия</p>
                </CardContent>
              </Card>

              <Card className="text-center border-beige-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Music" size={32} className="text-amber-600" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Gitanos Group</h4>
                  <p className="text-sm text-muted-foreground">Живая музыка глубины и страсти</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-light text-primary mb-8">Локация и даты</h2>
              
              <Card className="border-beige-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-rose-600 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Grand Hotel, Крым | Ялта</h3>
                      <p className="text-muted-foreground">Роскошный отель с видом на море, созданный для незабываемых впечатлений</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-beige-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Calendar" size={24} className="text-beige-600 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">29, 30, 31 августа 2025</h3>
                      <p className="text-muted-foreground">Три дня полного погружения в трансформационный процесс</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-rose-50 to-beige-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Star" size={24} className="text-amber-500" />
                  <h3 className="font-heading font-semibold text-primary">Почему Grand Hotel?</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Эксклюзивная атмосfera для глубокой работы</li>
                  <li>• Ресторан "Женева" с авторским меню</li>
                  <li>• Приватные пространства для церемоний</li>
                  <li>• Захватывающие виды Крыма</li>
                </ul>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/img/d6e243e3-3411-4ed2-941b-29ae2adcf26c.jpg" 
                alt="Grand Hotel atmosphere" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment & CTA */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-beige-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-light text-primary mb-8">Ваша инвестиция в себя</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Самая шикарная и многогранная инвестиция в вашу трансформацию
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-beige-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-xl font-heading">Что включено</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">4 глубинные сессии с Дарьей</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">2 мастер-класса Наталии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">Профессиональная фотосессия</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">Все питание в ресторане "Женева"</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">Живая музыка Gitanos Group</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">Танцевальная терапия</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">Визаж и стайлинг</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-rose-600" />
                  <span className="text-sm">Альбом и видео трансформации</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-lg transition-all duration-300 lg:scale-105">
              <CardHeader className="bg-gradient-to-br from-rose-50 to-beige-50">
                <CardTitle className="text-center text-xl font-heading">Результат</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-6">
                  <Icon name="Sparkles" size={48} className="text-rose-600 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-4">Вы уезжаете:</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-heading font-semibold text-rose-800 mb-2">Обновленной</h4>
                    <p className="text-sm text-muted-foreground">Знающей свою целостность и источник сияния</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-heading font-semibold text-beige-800 mb-2">Вооруженной</h4>
                    <p className="text-sm text-muted-foreground">Инструментами для жизни из глубины</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-heading font-semibold text-amber-800 mb-2">Увиденной</h4>
                    <p className="text-sm text-muted-foreground">С портретом истинной сути</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-beige-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-xl font-heading">Стоимость</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="py-6">
                  <p className="text-2xl font-heading font-bold text-primary mb-2">Зависит от категории номера</p>
                  <p className="text-muted-foreground">Grand Hotel предлагает различные варианты размещения</p>
                </div>
                
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-full py-2 text-center bg-rose-100 text-rose-800">
                    Только 10 мест
                  </Badge>
                  <Badge variant="secondary" className="w-full py-2 text-center bg-beige-100 text-beige-800">
                    Эксклюзивность гарантирована
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Начните путь домой</h3>
              <p className="text-lg text-muted-foreground">
                К самой целостной, сияющей, сильной себе
              </p>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl rounded-full animate-float">
                Забронировать место
                <Icon name="Heart" size={24} className="ml-3" />
              </Button>
              
              <p className="text-muted-foreground">
                Связаться: <span className="font-semibold">+79780177782 (Telegram)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-light text-primary mb-12 text-center">Частые вопросы</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-beige-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:text-primary">
                  Что если я никогда не участвовала в подобных мероприятиях?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Это прекрасно! Наша программа создана специально для женщин, готовых к новому опыту. 
                  Дарья и команда экспертов мягко проведут вас через все этапы трансформации, 
                  создавая безопасное пространство для раскрытия.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-beige-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:text-primary">
                  Какой уровень конфиденциальности гарантируется?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Абсолютная конфиденциальность! Только 10 участниц, подписание соглашения о неразглашении, 
                  приватные пространства Grand Hotel. Ваша трансформация происходит в атмосфере полной безопасности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-beige-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:text-primary">
                  Что включает проживание в Grand Hotel?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Номер категории на ваш выбор, все питание в ресторане "Женева" с авторским меню от шефа, 
                  доступ к spa-зоне отеля, трансфер от аэропорта, персональная встреча организатора.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-beige-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:text-primary">
                  Можно ли отменить участие и вернуть средства?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Да, при отмене за 30 дней - возврат 100%, за 14 дней - 50%. 
                  Мы понимаем, что решение об участии в трансформации - важный шаг, 
                  поэтому предоставляем гибкие условия.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-beige-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:text-primary">
                  Что получу в итоге программы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Профессиональная фотосессия с альбомом, видео-летопись трансформации, 
                  инструменты для поддержания достигнутых результатов, новый гардероб от стилиста, 
                  сертификат участия и самое главное - обновленную себя.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-b from-beige-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-light text-primary mb-4">Начните свой путь</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
              </p>
            </div>

            <Card className="max-w-2xl mx-auto border-beige-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Имя *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Ваше имя" 
                        className="border-beige-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Телефон *
                      </label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (___) ___-__-__" 
                        className="border-beige-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="border-beige-300 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="room" className="block text-sm font-medium text-foreground mb-2">
                      Предпочтительная категория номера
                    </label>
                    <Input 
                      id="room" 
                      placeholder="Стандарт / Делюкс / Люкс" 
                      className="border-beige-300 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о ваших ожиданиях от ретрита..." 
                      rows={4}
                      className="border-beige-300 focus:border-primary"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
                    >
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-heading font-light mb-4">SACRUM TRIADA</h3>
            <p className="text-lg opacity-90 mb-8">Путь к Себе Истинной</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span>Grand Hotel, Ялта, Крым</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span>29-31 августа 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <span>+79780177782</span>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 pt-8">
              <p className="opacity-70">
                © 2025 SACRUM TRIADA. Трансформация с заботой о вашей душе.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}