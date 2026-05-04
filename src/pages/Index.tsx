import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/25101bc3-6aa1-4e15-b437-07ecaebf1c68.jpg";
const IMG_TEXTILE = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/bedc31c4-8011-4fec-9ca4-df7764b3d3e5.jpg";
const IMG_FURNITURE = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/32c141b7-b58a-44c7-a9bd-0261e55a5cf7.jpg";
const IMG_COSMETICS = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/d6053f1e-7e54-4ba0-abfa-d55c282fb2e5.jpg";
const IMG_TURNKEY = "https://cdn.poehali.dev/projects/0e6125a2-855b-4232-beab-eddb67c1c4fd/files/25101bc3-6aa1-4e15-b437-07ecaebf1c68.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contacts", label: "Контакты" },
];

type CatalogTab = "textile" | "furniture" | "cosmetics" | "turnkey";

const CATALOG_TABS: { id: CatalogTab; label: string; icon: string }[] = [
  { id: "textile", label: "Текстиль", icon: "Layers" },
  { id: "furniture", label: "Корпусная мебель", icon: "LayoutDashboard" },
  { id: "cosmetics", label: "Косметика", icon: "Sparkles" },
  { id: "turnkey", label: "Оснащение под ключ", icon: "KeyRound" },
];

const CATALOG_CONTENT: Record<CatalogTab, {
  img: string;
  tagline: string;
  description: string;
  items: { name: string; detail: string; tag?: string }[];
}> = {
  textile: {
    img: IMG_TEXTILE,
    tagline: "Премиальный текстиль для отелей и спа",
    description: "Постельное бельё, полотенца, халаты, скатерти — всё из сертифицированных тканей европейских фабрик. Брендирование и нанесение логотипа.",
    items: [
      { name: "Постельное бельё", detail: "Сатин, перкаль, тенсель", tag: "Хит" },
      { name: "Махровые полотенца", detail: "400–900 г/м², любые размеры" },
      { name: "Халаты & тапочки", detail: "Вафля, велюр, махра", tag: "Новинки" },
      { name: "Скатерти & салфетки", detail: "Жаккард, лён, полиэстер" },
      { name: "Шторы & покрывала", detail: "Блэкаут, декоративные" },
      { name: "Корпоративный текстиль", detail: "Брендирование под заказ", tag: "Опт" },
    ],
  },
  furniture: {
    img: IMG_FURNITURE,
    tagline: "Корпусная мебель для гостиниц и офисов",
    description: "Шкафы, тумбы, стеллажи, ресепшн-стойки. Изготовление по индивидуальным проектам, поставка в комплекте с фурнитурой.",
    items: [
      { name: "Шкафы и гардеробы", detail: "ЛДСП, МДФ, массив", tag: "Хит" },
      { name: "Тумбы и комоды", detail: "Для гостиничных номеров" },
      { name: "Ресепшн-стойки", detail: "Индивидуальный проект", tag: "Проект" },
      { name: "Стеллажи и полки", detail: "Модульные системы хранения" },
      { name: "Мебель для лобби", detail: "Консоли, зеркала, банкетки" },
      { name: "Мебель под заказ", detail: "По чертежам клиента", tag: "Опт" },
    ],
  },
  cosmetics: {
    img: IMG_COSMETICS,
    tagline: "Профессиональная косметика для HoReCa и ритейла",
    description: "Средства для тела, шампуни, кондиционеры, мини-косметика в номер. Брендирование флаконов, Private Label под вашим именем.",
    items: [
      { name: "Косметика в номер", detail: "Шампунь, гель, лосьон, мыло", tag: "Хит" },
      { name: "Уходовые серии", detail: "Для тела и лица" },
      { name: "Спа-косметика", detail: "Обёртывания, скрабы, масла", tag: "Новинки" },
      { name: "Профессиональные линии", detail: "Для салонов красоты" },
      { name: "Private Label", detail: "Под брендом клиента", tag: "Проект" },
      { name: "Экологичная косметика", detail: "Eco & Bio сертификаты" },
    ],
  },
  turnkey: {
    img: IMG_TURNKEY,
    tagline: "Полное оснащение объектов под ключ",
    description: "Комплексная поставка мебели, текстиля, косметики и оборудования для отелей, санаториев и апартаментов. Один договор — полная готовность.",
    items: [
      { name: "Оснащение номерного фонда", detail: "Мебель + текстиль + косметика", tag: "Хит" },
      { name: "Оснащение SPA & wellness", detail: "Оборудование + расходники" },
      { name: "Ресторан и банкет", detail: "Мебель, посуда, текстиль", tag: "Проект" },
      { name: "Административные зоны", detail: "Ресепшн, лобби, коридоры" },
      { name: "Технологическая кухня", detail: "Оборудование + мебель" },
      { name: "Проектное сопровождение", detail: "Дизайн, поставка, монтаж", tag: "Опт" },
    ],
  },
};

const PRICE_TIERS = [
  {
    name: "Стартовые",
    subtitle: "от 1 единицы",
    featured: false,
    badge: null,
    conditions: ["Минимальный заказ — 1 ед.", "Отгрузка от 5 рабочих дней", "Оплата по счёту", "Каталожные цены"],
    discount: null,
  },
  {
    name: "Оптовые",
    subtitle: "от 100 000 ₽",
    featured: true,
    badge: "Популярный",
    conditions: ["Скидка до 22% от прайса", "Персональный менеджер", "Отгрузка от 2 рабочих дней", "Отсрочка платежа 14 дней", "Бесплатная доставка по РФ"],
    discount: "до −22%",
  },
  {
    name: "Проектные",
    subtitle: "от 1 000 000 ₽",
    featured: false,
    badge: null,
    conditions: ["Скидка до 38% от прайса", "Выезд менеджера на объект", "Отсрочка платежа 45 дней", "Поставка под ключ", "Брендирование и Private Label", "Гарантийное обслуживание"],
    discount: "до −38%",
  },
];

const PORTFOLIO_ITEMS = [
  { id: 1, name: "Отель «Горный курорт»", category: "Текстиль + косметика в номер", value: "12 млн ₽", year: "2024", img: IMG_TURNKEY, rooms: "320 номеров" },
  { id: 2, name: "Апарт-отель AURORA", category: "Корпусная мебель под ключ", value: "28 млн ₽", year: "2024", img: IMG_FURNITURE, rooms: "180 апартаментов" },
  { id: 3, name: "Санаторий «Жемчужина»", category: "Оснащение под ключ + СПА", value: "47 млн ₽", year: "2023", img: IMG_HERO, rooms: "450 номеров" },
  { id: 4, name: "Бизнес-отель PRIME", category: "Текстиль + брендирование", value: "9 млн ₽", year: "2023", img: IMG_TEXTILE, rooms: "120 номеров" },
];

const STATS = [
  { value: "8+", label: "Лет на рынке" },
  { value: "650+", label: "Объектов HoReCa" },
  { value: "96%", label: "Повторных заказов" },
  { value: "72 ч", label: "Среднее время отгрузки" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<CatalogTab>("textile");
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const tab = CATALOG_CONTENT[activeTab];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-8 h-8 bg-copper flex items-center justify-center">
              <span className="font-display font-bold text-xs text-white tracking-wider">ОП</span>
            </div>
            <span className="font-display text-base font-semibold tracking-widest uppercase text-foreground">ОПТИМА</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`nav-link ${activeSection === item.id ? "active" : ""}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-muted-foreground text-sm font-body">+7 (495) 000-00-00</span>
            <button onClick={() => scrollTo("contacts")} className="btn-copper text-sm px-5 py-2.5">
              Запрос КП
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 pb-4 pt-3 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left py-1.5">{item.label}</button>
            ))}
            <button onClick={() => scrollTo("contacts")} className="btn-copper text-sm w-full justify-center mt-2">Запрос КП</button>
          </div>
        )}
      </nav>

      {/* TICKER */}
      <div className="fixed top-16 left-0 right-0 z-40 overflow-hidden h-7 flex items-center bg-copper">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-white/90 px-8">
              Текстиль для отелей&nbsp;&nbsp;·&nbsp;&nbsp;Корпусная мебель&nbsp;&nbsp;·&nbsp;&nbsp;Косметика HoReCa&nbsp;&nbsp;·&nbsp;&nbsp;Оснащение под ключ&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center" style={{ paddingTop: "92px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(255,248,242,0.97) 0%, rgba(255,245,235,0.92) 45%, rgba(255,240,225,0.6) 70%, transparent 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl">
            <div className="animate-fade-in stagger-1">
              <span className="section-label">Оснащение HoReCa — B2B поставки</span>
            </div>

            <h1 className="font-display leading-[0.88] mt-5 mb-7 animate-fade-in stagger-2 text-foreground" style={{ fontSize: "clamp(44px,6.5vw,88px)" }}>
              КОМПЛЕКТАЦИЯ<br />
              <span className="text-copper">ОТЕЛЕЙ</span><br />
              ПОД КЛЮЧ
            </h1>

            <p className="font-body font-light text-base leading-relaxed animate-fade-in stagger-3" style={{ color: "hsl(20 10% 35%)", maxWidth: "440px" }}>
              Текстиль, корпусная мебель, косметика и полное оснащение объектов.
              Персональный менеджер, оптовые цены, отгрузка от 72 часов.
            </p>

            <div className="flex flex-wrap gap-4 mt-9 animate-fade-in stagger-4">
              <button onClick={() => scrollTo("catalog")} className="btn-copper">
                <Icon name="LayoutGrid" size={16} />
                Открыть каталог
              </button>
              <button onClick={() => scrollTo("contacts")} className="btn-outline-copper">
                <Icon name="FileText" size={16} />
                Запросить прайс
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-copper">{s.value}</div>
                <div className="font-body text-xs mt-1 uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="section-label">Ассортимент</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 line-accent">КАТАЛОГ</h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-xs mt-6 md:mt-0 text-sm leading-relaxed">
              Четыре ключевых направления для полного оснащения вашего объекта.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-0">
            {CATALOG_TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
              >
                <span className="flex items-center gap-2">
                  <Icon name={t.icon} fallback="Package" size={14} />
                  {t.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={tab.img}
                alt={tab.tagline}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,248,242,0.5) 0%, transparent 50%)" }} />
            </div>

            {/* Products */}
            <div>
              <p className="font-display text-2xl font-semibold mb-3 text-foreground">{tab.tagline}</p>
              <p className="font-body text-sm font-light text-muted-foreground mb-8 leading-relaxed">{tab.description}</p>

              <div className="space-y-0 border border-border divide-y divide-border">
                {tab.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-copper-pale transition-colors group cursor-pointer">
                    <div>
                      <div className="font-body text-sm font-medium text-foreground group-hover:text-copper transition-colors">{item.name}</div>
                      <div className="font-body text-xs text-muted-foreground mt-0.5">{item.detail}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.tag && <span className="tag tag-copper">{item.tag}</span>}
                      <Icon name="ChevronRight" size={14} className="text-muted-foreground group-hover:text-copper transition-colors" />
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollTo("contacts")} className="btn-copper mt-6 w-full justify-center">
                <Icon name="Download" size={15} />
                Получить прайс по этой категории
              </button>
            </div>
          </div>

          {/* Price tiers */}
          <div className="mt-20">
            <div className="mb-10">
              <span className="section-label">Условия закупок</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">ПРАЙС-ЛИСТЫ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRICE_TIERS.map((tier) => (
                <div key={tier.name} className={`price-card relative${tier.featured ? " featured" : ""}`}>
                  {tier.badge && (
                    <div className="absolute -top-3 left-8">
                      <span className="bg-copper text-white font-display text-xs font-semibold tracking-widest uppercase px-4 py-1">{tier.badge}</span>
                    </div>
                  )}
                  {tier.discount && <div className="font-display text-4xl font-bold text-copper mb-1">{tier.discount}</div>}
                  <div className="font-display text-2xl font-semibold mb-1">{tier.name}</div>
                  <div className="text-xs text-muted-foreground mb-6 font-body">{tier.subtitle}</div>
                  <div className="divider-copper mb-6" />
                  <ul className="space-y-3 mb-8">
                    {tier.conditions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-body font-light">
                        <Icon name="Check" size={14} className="text-copper mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={tier.featured ? "btn-copper w-full justify-center" : "btn-outline-copper w-full justify-center"}>
                    <Icon name="Download" size={15} />
                    Скачать прайс
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-border bg-white flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border flex items-center justify-center flex-shrink-0 bg-copper-pale" style={{ borderColor: "hsl(25 85% 42% / 0.3)" }}>
                  <Icon name="Calculator" size={18} className="text-copper" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold uppercase tracking-wide">Нужна смета на объект?</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">Подготовим расчёт в течение 4 часов после заявки</div>
                </div>
              </div>
              <button onClick={() => scrollTo("contacts")} className="btn-copper text-sm flex-shrink-0">
                Запросить смету <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="py-5 border-y border-border overflow-hidden bg-white">
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="section-label">Реализованные проекты</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 line-accent">ПОРТФОЛИО</h2>
            </div>
            <p className="font-body font-light text-muted-foreground max-w-xs mt-6 md:mt-0 text-sm leading-relaxed">
              Комплексно оснащаем гостиницы, санатории и апарт-отели по всей России.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div key={item.id} className="bg-white border border-border card-hover cursor-pointer group overflow-hidden">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4">
                    <span className="tag tag-copper">{item.year}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="number-giant">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-copper font-body tracking-wider uppercase mb-2">{item.category}</div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-copper transition-colors">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="font-display text-copper text-lg font-semibold">{item.value}</div>
                      <div className="text-xs text-muted-foreground font-body">{item.rooms}</div>
                    </div>
                    <div className="w-8 h-8 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: "hsl(25 85% 42% / 0.4)" }}>
                      <Icon name="ArrowRight" size={14} className="text-copper" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "Award", title: "Сертификаты качества", desc: "Вся продукция сопровождается сертификатами соответствия ГОСТ и ЕАС" },
              { icon: "Truck", title: "Доставка по РФ", desc: "Собственный склад в Москве, доставка до объекта в любой регион" },
              { icon: "UserCheck", title: "Проектный менеджер", desc: "Персональный куратор ведёт вас от заявки до подписания акта сдачи" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border p-7 flex gap-5 items-start hover:border-copper/30 transition-colors">
                <div className="w-11 h-11 bg-copper-pale flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Info" size={20} className="text-copper" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold mb-1.5">{item.title}</div>
                  <div className="font-body text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Свяжитесь с нами</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-8 line-accent">КОНТАКТЫ</h2>
              <p className="font-body font-light text-muted-foreground leading-relaxed mb-10 text-sm max-w-sm">
                Оставьте заявку — менеджер перезвонит в течение 30 минут и подготовит индивидуальное коммерческое предложение.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "sales@optima-horeca.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, Складочная ул., 3, офис 201" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00 МСК" },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-copper-pale flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} fallback="Info" size={16} className="text-copper" />
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
                      className="w-full bg-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-copper transition-colors"
                      placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Компания</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-copper transition-colors"
                      placeholder="ООО «Отель»" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Телефон</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-copper transition-colors"
                    placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-copper transition-colors"
                    placeholder="ivan@hotel.ru" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest font-body block mb-2">Объект / категория / кол-во</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                    className="w-full bg-white border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-copper transition-colors resize-none"
                    placeholder="Например: отель 200 номеров, нужен текстиль и косметика..." />
                </div>
                <button type="submit" className="btn-copper w-full justify-center mt-2">
                  <Icon name="Send" size={15} />
                  Отправить запрос
                </button>
                <p className="text-xs text-muted-foreground/60 font-body text-center">
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
            <div className="w-7 h-7 bg-copper flex items-center justify-center">
              <span className="font-display font-bold text-[10px] text-white tracking-wider">ОП</span>
            </div>
            <span className="font-display text-sm font-medium tracking-widest uppercase">ОПТИМА HoReCa</span>
          </div>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-xs">{item.label}</button>
            ))}
          </div>
          <div className="text-xs text-muted-foreground font-body">© 2024 ОПТИМА. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}