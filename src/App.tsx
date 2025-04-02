import React, { useState } from 'react';
import { Menu, X, MapPin, Calendar, Users, Phone, Mail, ChevronRight, Shield, Film, Palette, Users2, Briefcase, Clock, HelpCircle, Facebook as BrandFacebook, Instagram as BrandInstagram, GitBranch as BrandTiktok, MessageCircle } from 'lucide-react';
import FAQ from './FAQ';
import Logo from './components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    shift: '16.06 - 20.06 (Спортивний тиждень)'
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className="min-h-screen bg-levcamp-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold text-levcamp-green">LevCamp</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-levcamp-green hover:text-levcamp-orange transition-colors">Про нас</a>
              <a href="#program" className="text-levcamp-green hover:text-levcamp-orange transition-colors">Програма</a>
              <a href="#schedule" className="text-levcamp-green hover:text-levcamp-orange transition-colors">Розклад</a>
              <a href="#pricing" className="text-levcamp-green hover:text-levcamp-orange transition-colors">Вартість</a>
              <button 
                onClick={() => setShowFAQ(true)}
                className="text-levcamp-green hover:text-levcamp-orange transition-colors"
              >
                Часті питання
              </button>
              <a href="#contacts" className="text-levcamp-green hover:text-levcamp-orange transition-colors">Контакти</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-levcamp-green">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#about" className="block px-3 py-2 text-levcamp-green hover:text-levcamp-orange">Про нас</a>
              <a href="#program" className="block px-3 py-2 text-levcamp-green hover:text-levcamp-orange">Програма</a>
              <a href="#schedule" className="block px-3 py-2 text-levcamp-green hover:text-levcamp-orange">Розклад</a>
              <a href="#pricing" className="block px-3 py-2 text-levcamp-green hover:text-levcamp-orange">Вартість</a>
              <button 
                onClick={() => setShowFAQ(true)}
                className="block w-full text-left px-3 py-2 text-levcamp-green hover:text-levcamp-orange"
              >
                Часті питання
              </button>
              <a href="#contacts" className="block px-3 py-2 text-levcamp-green hover:text-levcamp-orange">Контакти</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80"
            alt="Діти на природі"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <Logo className="h-32 w-32" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            LevCamp
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto text-center">
            Літній табір, де кожна дитина знаходить нових друзів, розвивається та весело проводить час
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-levcamp-orange hover:bg-levcamp-green transition-colors duration-200"
            >
              Записатися на зміну
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-levcamp-green mb-12">Про наш табір</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Logo className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-levcamp-orange" />
                <p className="text-lg">Графік: 9:00 - 18:00 (Пн-Пт)</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-levcamp-orange" />
                <p className="text-lg">Локація: навчальна база літніх видів спорту МОУ</p>
              </div>
              <div className="flex items-center space-x-3">
                <Users2 className="h-6 w-6 text-levcamp-orange" />
                <p className="text-lg">Професійні інструктори та педагоги</p>
              </div>
              <p className="text-gray-600 mt-4">
                Наш табір створений для активного відпочинку, розвитку та нових знайомств. Ми поєднуємо спорт, творчість та навчання у захоплюючій атмосфері.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 bg-levcamp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-levcamp-green mb-12">Програма табору</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Спортивні активності",
                description: "Футбол, теніс, естафети та командні ігри",
                icon: <Shield className="h-12 w-12 text-levcamp-orange" />
              },
              {
                title: "Творчі майстер-класи",
                description: "Малювання, рукоділля, музика та танці",
                icon: <Palette className="h-12 w-12 text-levcamp-orange" />
              },
              {
                title: "Командні активності",
                description: "Квести, групові завдання, змагання",
                icon: <Users className="h-12 w-12 text-levcamp-orange" />
              },
              {
                title: "Кінопокази",
                description: "Перегляд та обговорення цікавих фільмів",
                icon: <Film className="h-12 w-12 text-levcamp-orange" />
              },
              {
                title: "Екскурсії",
                description: "Відвідування цікавих місць та пам'яток",
                icon: <Briefcase className="h-12 w-12 text-levcamp-orange" />
              },
              {
                title: "Розвиваючі ігри",
                description: "Інтелектуальні ігри та головоломки",
                icon: <Users2 className="h-12 w-12 text-levcamp-orange" />
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:transform hover:scale-105 transition-transform duration-200">
                <div className="flex justify-center mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-levcamp-green mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-center">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-levcamp-green mb-12">Розклад змін</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { dates: "16.06 - 20.06", theme: "Спортивний тиждень" },
              { dates: "23.06 - 27.06", theme: "Творчий тиждень" },
              { dates: "30.06 - 04.07", theme: "Пригодницький тиждень" },
              { dates: "07.07 - 11.07", theme: "Науковий тиждень" },
              { dates: "14.07 - 18.07", theme: "Екологічний тиждень" },
              { dates: "21.07 - 25.07", theme: "Олімпійський тиждень" }
            ].map((shift, index) => (
              <div key={index} className="bg-levcamp-cream rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-levcamp-green mb-2">
                  {index + 1} зміна
                </h3>
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-levcamp-orange mr-2" />
                  <span>{shift.dates}</span>
                </div>
                <p className="text-gray-600">Тема: {shift.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-levcamp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-levcamp-green mb-12">Вартість</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-2xl font-semibold text-levcamp-green">5 днів (Пн-Пт)</h3>
              <p className="mt-4 text-4xl font-bold text-levcamp-orange">4000 грн</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-levcamp-orange" />
                  <span className="ml-2">Повний день (9:00 - 18:00)</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-levcamp-orange" />
                  <span className="ml-2">Триразове харчування</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-levcamp-orange" />
                  <span className="ml-2">Усі активності та майстер-класи</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-levcamp-orange" />
                  <span className="ml-2">Екскурсії та виїзди</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-levcamp-orange" />
                  <span className="ml-2">Спортивний інвентар</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-levcamp-green">Залишити заявку</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ім'я дитини</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-levcamp-orange focus:ring focus:ring-levcamp-orange focus:ring-opacity-50"
                  placeholder="Введіть ім'я дитини"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Вік дитини</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-levcamp-orange focus:ring focus:ring-levcamp-orange focus:ring-opacity-50"
                  placeholder="Введіть вік"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Телефон батьків</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-levcamp-orange focus:ring focus:ring-levcamp-orange focus:ring-opacity-50"
                  placeholder="+380"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-levcamp-orange focus:ring focus:ring-levcamp-orange focus:ring-opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Оберіть зміну</label>
                <select 
                  name="shift"
                  value={formData.shift}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-levcamp-orange focus:ring focus:ring-levcamp-orange focus:ring-opacity-50"
                >
                  <option>16.06 - 20.06 (Спортивний тиждень)</option>
                  <option>23.06 - 27.06 (Творчий тиждень)</option>
                  <option>30.06 - 04.07 (Пригодницький тиждень)</option>
                  <option>07.07 - 11.07 (Науковий тиждень)</option>
                  <option>14.07 - 18.07 (Екологічний тиждень)</option>
                  <option>21.07 - 25.07 (Олімпійський тиждень)</option>
                </select>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                * Якщо ви вказали номер телефону, ми зателефонуємо вам. Якщо тільки email - надішлемо детальну інформацію на пошту.
              </p>
              <button
                type="submit"
                className="w-full bg-levcamp-orange text-white rounded-md py-2 px-4 hover:bg-levcamp-green transition-colors duration-200"
              >
                Відправити
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {showFAQ && <FAQ onClose={() => setShowFAQ(false)} />}

      {/* Footer */}
      <footer className="bg-levcamp-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Контакти</h4>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:+380970948270" className="hover:text-levcamp-orange transition-colors">
                    +380 (97) 094-82-70
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:info.levcamp@gmail.com" className="hover:text-levcamp-orange transition-colors">
                    info.levcamp@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Навчальна база літніх видів спорту МОУ
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Графік роботи</h4>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Пн-Пт: 9:00 - 18:00
                </p>
                <p className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Перша зміна: 16 червня
                </p>
                <p className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Вік дітей: 7-14 років
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Соціальні мережі</h4>
              <div className="space-y-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=61574904781062&sk=photos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-levcamp-orange transition-colors"
                >
                  <BrandFacebook className="h-5 w-5 mr-2" />
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/levcamp777?igsh=YXRmeng2aGc5dXh6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-levcamp-orange transition-colors"
                >
                  <BrandInstagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@levcamp?_t=ZM-8vBrKbdnDvx&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-levcamp-orange transition-colors"
                >
                  <BrandTiktok className="h-5 w-5 mr-2" />
                  TikTok
                </a>
                <a 
                  href="viber://chat?number=%2B380970948270" 
                  className="flex items-center hover:text-levcamp-orange transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Viber
                </a>
                <a 
                  href="https://t.me/+380970948270" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-levcamp-orange transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;