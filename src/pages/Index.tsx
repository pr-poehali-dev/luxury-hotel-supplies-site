import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/8f56c76c-3ab0-4b22-bb89-7edab4baaf89.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/24663dd9-b922-4c52-971f-c848e477ae32.jpg";
const CATALOG_IMG = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/75566423-9f28-4997-9ca2-ac406e89c8e6.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG_CATEGORIES = [
  { id: 1, name: "Металлопрокат", icon: "Layers", items: 240, description: "Листы, трубы, профили, арматура", tag: "Хит", tagType: "gold" },
  { id: 2, name: "Крепёжные изделия", icon: "Settings", items: 1850, description: "Болты, гайки, шпильки, анкеры", tag: "Новинки", tagType: "muted" },
  { id: 3, name: "Промышленное оборудование", icon: "Cpu", items: 95, description: "Насосы, компрессоры, редукторы", tag: "Опт", tagType: "gold" },
  { id: 4, name: "Электрооборудование", icon: "Zap", items: 420, description: "Кабель, автоматика, щитовое оборудование", tag: "", tagType: "muted" },
  { id: 5, name: "Инструменты", icon: "Wrench", items: 680, description: "Ручной, электрический, пневматический", tag: "Скидки", tagType: "gold" },
  { id: 6, name: "Средства защиты", icon: "Shield", items: 310, description: "СИЗ, спецодежда, защитные экраны", tag: "", tagType: "muted" },
];

const PRICE_TIERS = [
  {
    name: "Розничные",
    subtitle: "от 1 единицы",
    featured: false,
    badge: null,
    conditions: ["Минимальный заказ — 1 ед.", "Отгрузка от 3 рабочих дней", "Оплата по счёту или картой", "Базовая техническая поддержка"],
    discount: null,
  },
  {
    name: "Оптовые",
    subtitle: "от 50 000 ₽",
    featured: true,
    badge: "Популярный",
    conditions: ["Скидка до 18% от прайса", "Персональный менеджер", "Отгрузка от 1 рабочего дня", "Отсрочка платежа 14 дней", "Бесплатная доставка по РФ"],
    discount: "до −18%",
  },
  {
    name: "Дилерские",
    subtitle: "от 500 000 ₽/мес",
    featured: false,
    badge: null,
    conditions: ["Скидка до 32% от прайса", "Эксклюзивные условия", "Отсрочка платежа 30 дней", "Приоритетное резервирование", "Кастомная упаковка и маркировка", "Dedicated account manager"],
    discount: "до −32%",
  },
];

const PORTFOLIO_ITEMS = [
  { id: 1, name: "Нефтеперерабатывающий завод «Восток»", category: "Металлопрокат + КИПиА", value: "84 млн ₽", year: "2024", img: PORTFOLIO_IMG },
  { id: 2, name: "ГК «СтройХолдинг» — 12 объектов", category: "Крепёж + инструмент", value: "31 млн ₽", year: "2023", img: CATALOG_IMG },
  { id: 3, name: "Машиностроительный комплекс «Урал»", category: "Промоборудование", value: "156 млн ₽", year: "2024", img: HERO_IMG },
  { id: 4, name: "Логистический центр «МегаПорт»", category: "Электрооборудование + СИЗ", value: "22 млн ₽", year: "2023", img: PORTFOLIO_IMG },
];

const STATS = [
  { value: "12+", label: "Лет на рынке" },
  { value: "3 400+", label: "Клиентов B2B" },
  { value: "98%", label: "Повторных заказов" },
  { value: "48 ч", label: "Среднее время отгрузки" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="font-display font-bold text-xs text-black tracking-wider">IN</span>
            </div>
            <span className="font-display text-lg font-semibold tracking-widest uppercase text-foreground">INDUS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`nav-link ${activeSection === item.id ? "active" : ""}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-muted-foreground text-sm font-body">+7 (495) 123-45-67</span>
            <button onClick={() => scrollTo("contacts")} className="btn-gold text-sm px-5 py-2.5">
              Запрос КП
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 pb-4 pt-3 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left py-1.5">{item.label}</button>
            ))}
            <button onClick={() => scrollTo("contacts")} className="btn-gold text-sm w-full justify-center mt-2">Запрос КП</button>
          </div>
        )}
      </nav>

      {/* TICKER */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-gold overflow-hidden h-7 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-black px-8">
              Металлопрокат&nbsp;&nbsp;·&nbsp;&nbsp;Оборудование&nbsp;&nbsp;·&nbsp;&nbsp;Крепёж&nbsp;&nbsp;·&nbsp;&nbsp;Электрика&nbsp;&nbsp;·&nbsp;&nbsp;Доставка по РФ&nbsp;&nbsp;·&nbsp;&nbsp;Оптовые условия&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center" style={{ paddingTop: "92px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in stagger-1">
              <span className="section-label">Промышленные поставки — B2B</span>
            </div>

            <h1 className="font-display leading-[0.88] mt-6 mb-8 animate-fade-in stagger-2" style={{ fontSize: "clamp(44px,7vw,96px)" }}>
              НАДЁЖНЫЕ<br />
              <span className="text-gold">ПОСТАВКИ</span><br />
              ДЛЯ БИЗНЕСА
            </h1>

            <p className="font-body font-light text-lg text-white/65 max-w-xl leading-relaxed animate-fade-in stagger-3">
              Более 3 400 B2B-клиентов доверяют нам поставки промышленных материалов.
              Оптовые условия, персональный менеджер, отгрузка от 48 часов.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in stagger-4">
              <button onClick={() => scrollTo("catalog")} className="btn-gold">
                <Icon name="Package" size={16} />
                Смотреть каталог
              </button>
              <button onClick={() => scrollTo("catalog")} className="btn-outline-gold">
                <Icon name="Download" size={16} />
                Скачать прайс
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/65 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-gold">{s.value}</div>
                <div className="font-body text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="section-label">Ассортимент</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 line-accent">КАТАЛОГ</h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-xs mt-6 md:mt-0 text-sm leading-relaxed">
              Более 3 500 наименований в постоянном наличии. Сертифицированная продукция от ведущих производителей.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {CATALOG_CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-background p-8 card-hover cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-300" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <Icon name={cat.icon} fallback="Package" size={20} className="text-gold" />
                  </div>
                  {cat.tag && <span className={`tag tag-${cat.tagType}`}>{cat.tag}</span>}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">{cat.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{cat.description}</p>
                <div className="font-body text-xs text-muted-foreground/60 border-t border-border pt-4 flex items-center justify-between">
                  <span>{cat.items} позиций</span>
                  <Icon name="ArrowRight" size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Price lists */}
          <div className="mt-20">
            <div className="mb-12">
              <span className="section-label">Условия закупок</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">ПРАЙС-ЛИСТЫ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICE_TIERS.map((tier) => (
                <div key={tier.name} className={`price-card relative`} style={tier.featured ? { borderColor: "hsl(43 74% 55%)", background: "hsl(43 30% 7%)" } : {}}>
                  {tier.badge && (
                    <div className="absolute -top-3 left-8">
                      <span className="bg-gold text-black font-display text-xs font-semibold tracking-widest uppercase px-4 py-1">{tier.badge}</span>
                    </div>
                  )}
                  {tier.discount && <div className="font-display text-4xl font-bold text-gold mb-1">{tier.discount}</div>}
                  <div className="font-display text-2xl font-semibold mb-1">{tier.name}</div>
                  <div className="text-xs text-muted-foreground mb-6 font-body">{tier.subtitle}</div>
                  <div className="divider-gold mb-6" />
                  <ul className="space-y-3 mb-8">
                    {tier.conditions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-body font-light">
                        <Icon name="Check" size={14} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={tier.featured ? "btn-gold w-full justify-center" : "btn-outline-gold w-full justify-center"}>
                    <Icon name="Download" size={15} />
                    Скачать прайс
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-border bg-card flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border flex items-center justify-center flex-shrink-0" style={{ borderColor: "hsl(43 74% 55% / 0.3)", background: "hsl(43 74% 55% / 0.08)" }}>
                  <Icon name="FileSpreadsheet" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold uppercase tracking-wide">Нужен индивидуальный расчёт?</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">Пришлём спецпредложение в течение 2 часов</div>
                </div>
              </div>
              <button onClick={() => scrollTo("contacts")} className="btn-gold text-sm flex-shrink-0">
                Запросить КП <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE DIVIDER */}
      <div className="py-5 border-y border-border overflow-hidden bg-card">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="font-display text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground px-8">
              Быстрая отгрузка&nbsp;&nbsp;—&nbsp;&nbsp;Сертифицированная продукция&nbsp;&nbsp;—&nbsp;&nbsp;Персональный менеджер&nbsp;&nbsp;—&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="section-label">Реализованные проекты</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 line-accent">ПОРТФОЛИО</h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-xs mt-6 md:mt-0 text-sm leading-relaxed">
              Работаем с крупнейшими промышленными предприятиями и строительными холдингами России.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div key={item.id} className="bg-background relative overflow-hidden group cursor-pointer">
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="number-giant">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="tag tag-gold">{item.year}</span>
                  </div>
                  <div>
                    <div className="text-xs text-gold font-body tracking-wider uppercase mb-2">{item.category}</div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight mb-3">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="font-display text-gold text-lg font-semibold">{item.value}</div>
                      <div className="w-8 h-8 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: "hsl(43 74% 55% / 0.4)" }}>
                        <Icon name="ArrowRight" size={14} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { icon: "Award", title: "ISO 9001:2015", desc: "Сертифицированная система менеджмента качества" },
              { icon: "Truck", title: "Логистика по РФ", desc: "Собственный автопарк и партнёры по всей России" },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Персональный менеджер на всех этапах сделки" },
            ].map((item) => (
              <div key={item.title} className="bg-card p-8 flex gap-6 items-start hover:bg-card/80 transition-colors">
                <div className="w-12 h-12 border flex items-center justify-center flex-shrink-0" style={{ borderColor: "hsl(43 74% 55% / 0.3)" }}>
                  <Icon name={item.icon} fallback="Info" size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold mb-2">{item.title}</div>
                  <div className="font-body text-sm text-muted-foreground font-light">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Свяжитесь с нами</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-8 line-accent">КОНТАКТЫ</h2>
              <p className="font-body font-light text-muted-foreground leading-relaxed mb-10 text-sm max-w-sm">
                Оставьте заявку — менеджер перезвонит в течение 30 минут и подготовит индивидуальное коммерческое предложение.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", value: "sales@indus-supply.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Промышленная, 18, офис 401" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00 МСК" },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} fallback="Info" size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-0.5">{contact.label}</div>
                      <div className="font-body text-sm text-foreground">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border p-8 bg-background">
              <div className="font-display text-xl font-semibold mb-6 uppercase tracking-wide">Запрос коммерческого предложения</div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Имя</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Компания</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="ООО «Компания»" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Телефон</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="ivan@company.ru" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Сообщение / перечень позиций</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                    className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Опишите потребность или укажите позиции из каталога..." />
                </div>
                <button type="submit" className="btn-gold w-full justify-center mt-2">
                  <Icon name="Send" size={15} />
                  Отправить запрос
                </button>
                <p className="text-xs text-muted-foreground/50 font-body text-center">
                  Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gold flex items-center justify-center">
              <span className="font-display font-bold text-[10px] text-black tracking-wider">IN</span>
            </div>
            <span className="font-display text-sm font-medium tracking-widest uppercase">INDUS Supply</span>
          </div>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-xs">{item.label}</button>
            ))}
          </div>
          <div className="text-xs text-muted-foreground font-body">© 2024 INDUS Supply. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}