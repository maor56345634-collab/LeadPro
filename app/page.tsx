"use client"

import { useState, useEffect, useRef } from "react"
import { Check, ChevronDown, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function MaorLeadsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <HowItWorksSection />
      <WhyMeSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <Footer />
    </main>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-navy/95 backdrop-blur-md border-b border-accent/15 px-4 md:px-8 py-3.5 flex justify-between items-center">
      <div className="font-serif font-black text-xl text-accent">
        מאור <span className="text-white">— לידים לעסקים</span>
      </div>
      <a
        href="#form"
        className="bg-accent text-navy font-bold text-sm px-5 py-2 rounded-lg hover:bg-accent2 transition-colors"
      >
        קבלו ייעוץ חינם
      </a>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen bg-navy relative flex items-center justify-center text-center px-4 pt-28 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(232,177,74,0.14)_0,transparent_70%),radial-gradient(ellipse_50%_40%_at_90%_90%,rgba(26,58,107,0.6)_0,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(232,177,74,0.25)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 pointer-events-none" />
      
      <div className="relative max-w-3xl mx-auto">
        <div className="animate-up-delay-1 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent2 text-sm font-semibold tracking-wide px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
          מומחה לידים לעסקים קטנים בישראל
        </div>
        
        <h1 className="animate-up-delay-2 font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          עסק קטן? הגיע הזמן
          <br />
          שלקוחות <em className="not-italic text-accent relative">יחפשו אותך<span className="absolute bottom-[-4px] right-0 left-0 h-[3px] bg-accent rounded opacity-50" /></em>
        </h1>
        
        <p className="animate-up-delay-3 text-base md:text-lg text-white/65 max-w-xl mx-auto mb-10 leading-relaxed">
          אני מאור, ואני עוזר לעסקים קטנים למשוך לקוחות שמחפשים בדיוק את מה שיש לכם להציע — בלי בזבוז זמן, בלי כסף לאוויר.
        </p>
        
        <div className="animate-up-delay-4 flex gap-4 justify-center flex-wrap">
          <a
            href="#form"
            className="inline-block bg-accent text-navy font-extrabold text-base px-7 py-3.5 rounded-xl hover:bg-accent2 hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(232,177,74,0.35)] hover:shadow-[0_8px_28px_rgba(232,177,74,0.45)]"
          >
            {"רוצה לידים ← השאר פרטים"}
          </a>
          <a
            href="#how"
            className="inline-block bg-transparent text-white/80 font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/50 hover:text-white transition-colors"
          >
            איך זה עובד?
          </a>
        </div>
        
        <div className="animate-up-delay-5 flex flex-col sm:flex-row gap-0 mt-16 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <StatItem value="48h" label="עד הליד הראשון" />
          <StatItem value="100%" label="לידים מסוננים" />
          <StatItem value="0₪" label="ייעוץ ראשון חינם" />
          <StatItem value="אישי" label="ליווי צמוד ממאור" />
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 min-w-[120px] py-5 px-4 text-center border-t sm:border-t-0 sm:border-r border-white/10 first:border-t-0 first:sm:border-r-0">
      <span className="font-serif text-3xl font-black text-accent block">{value}</span>
      <span className="text-xs text-white/45 mt-1 block">{label}</span>
    </div>
  )
}

function TrustBar() {
  const items = [
    "ללא התחייבות לטווח ארוך",
    "תשלום רק על תוצאות",
    "שקיפות מלאה בזמן אמת",
    "ייעוץ ראשון חינם לחלוטין",
  ]
  
  return (
    <div className="bg-off py-4 px-4 border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 md:gap-10 flex-wrap">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <Check className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2.5} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProblemSection() {
  return (
    <div className="bg-navy py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <RevealOnScroll>
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent2 border-b-2 border-accent2 pb-0.5 mb-4">מכיר את זה?</span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-white leading-tight mb-2">הבעיה של כל עסק קטן</h2>
            <ul className="mt-8 space-y-4">
              <PainItem emoji="😤" text="אתה מקצוען בתחום שלך — אבל אין לך זמן לרדוף אחרי לקוחות" />
              <PainItem emoji="💸" text='שילמת על פרסום ולא ראית תוצאות? אתה לא לבד' />
              <PainItem emoji="📞" text="הגיעו לקוחות שלא התכוונו, ביזבזו את הזמן שלך" />
              <PainItem emoji="🔄" text="פה ממליץ, שם לקוח — זה לא עסק, זה מזל" />
            </ul>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="bg-white/5 border border-accent/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <p className="text-accent font-bold text-xs tracking-widest uppercase mb-2">הפתרון שלי</p>
            <SolutionItem num={1} title="לידים חמים בלבד" text="אני שולח אליך רק אנשים שחיפשו אקטיבית את השירות שלך" />
            <SolutionItem num={2} title="מסונן ורלוונטי" text="כל ליד עובר בדיקה — אזור, תקציב, וסוג השירות שמתאים לך" />
            <SolutionItem num={3} title="מגיע ישירות לנייד" text="שם, טלפון, ומה הם צריכים — אתה רק מתקשר וסוגר" />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}

function PainItem({ emoji, text }: { emoji: string; text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/70 text-base leading-relaxed">
      <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/25 flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
        {emoji}
      </div>
      {text}
    </li>
  )
}

function SolutionItem({ num, title, text }: { num: number; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="w-9 h-9 rounded-lg bg-accent text-navy font-black text-sm flex items-center justify-center flex-shrink-0">
        {num}
      </div>
      <div>
        <strong className="text-white text-sm block mb-0.5">{title}</strong>
        <p className="text-white/70 text-sm leading-snug">{text}</p>
      </div>
    </div>
  )
}

function HowItWorksSection() {
  return (
    <section id="how" className="py-20 px-4 max-w-5xl mx-auto">
      <RevealOnScroll>
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-0.5 mb-4">התהליך</span>
        <h2 className="font-serif text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">שלושה צעדים פשוטים</h2>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">בלי בירוקרטיה, בלי המתנה — מהיום הראשון אתה כבר מקבל לידים</p>
      </RevealOnScroll>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <StepCard num="01" title="שיחת היכרות חינמית" text="מדברים 15 דקות — מבינים מה העסק שלך, מי הלקוח האידיאלי שלך, ומה המטרות שלך. אני לא מוכר כלום, רק מקשיב." tag="15 דקות בלבד" />
        <StepCard num="02" title="בניית קמפיין ממוקד" text="אני בונה קמפיין שמגיע בדיוק לאנשים שמחפשים את השירות שלך — לא לכולם, רק לאלו שרלוונטיים." tag="תוך 24-48 שעות" />
        <StepCard num="03" title="לידים ישירות לנייד שלך" text='אתה מקבל התראה עם כל הפרטים — שם, טלפון, וסוג השירות. מה שנותר זה להתקשר ולסגור.' tag="בזמן אמת" />
      </div>
    </section>
  )
}

function StepCard({ num, title, text, tag }: { num: string; title: string; text: string; tag: string }) {
  return (
    <RevealOnScroll>
      <div className="bg-white border-[1.5px] border-border rounded-xl p-6 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 transition-all">
        <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-l from-accent to-accent2" />
        <div className="font-serif text-5xl font-black text-blue/10 leading-none mb-3">{num}</div>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
        <span className="inline-block text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full mt-4">{tag}</span>
      </div>
    </RevealOnScroll>
  )
}

function WhyMeSection() {
  return (
    <section className="bg-off py-20 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-0.5 mb-4">למה מאור?</span>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">ליווי אישי, לא מוקד שירות</h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">אני לא חברה גדולה עם עשרות לקוחות — אני עובד עם מספר מוגבל של עסקים כדי לתת תשומת לב מלאה לכל אח��</p>
        </RevealOnScroll>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <WhyItem icon="🎯" title="לידים מסוננים בלבד" text="לא כמות — איכות. כל ליד שמגיע אליך כבר רוצה את השירות שלך" />
          <WhyItem icon="📍" title="מותאם לאזור שלך" text="לידים מהאזור הגיאוגרפי שבו אתה עובד — לא מכל הארץ" />
          <WhyItem icon="👁️" title="שקיפות מלאה" text="אתה רואה כל ליד, כל תוצאה, בזמן אמת — ללא הפתעות" />
          <WhyItem icon="🤝" title="ללא התחייבות" text="תשלום לפי תוצאות — אם אני לא מביא, אתה לא משלם" />
          <WhyItem icon="📞" title="זמין אישית" text="מדברים ישירות איתי — לא עם נציג, לא עם בוט, איתי" />
          <WhyItem icon="🚀" title="מתחיל מהר" text="תוך 48 שעות מהשיחה הראשונה אתה כבר מקבל לידים" />
        </div>
      </div>
    </section>
  )
}

function WhyItem({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <RevealOnScroll>
      <div className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent/40 hover:bg-white transition-colors">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-lg flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="text-base font-bold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
        </div>
      </div>
    </RevealOnScroll>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-off py-20 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-0.5 mb-4">מה אומרים</span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">לקוחות שכבר בדרך הנכונה</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">חוות דעת אמיתיות מבעלי עסקים שהתחילו לקבל לידים</p>
          </div>
        </RevealOnScroll>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <TestimonialCard
            text="התחלתי לעבוד עם מאור לפני חודשיים. הוא הקשיב, הבין מה אני צריך, ותוך יומיים קיבלתי את הליד הראשון. עד היום סגרתי כמה עסקאות טובות שלא היו מגיעות אלי בכלל."
            name="דוד כ."
            role="בעל חברת שיפוצים, פתח תקוה"
            initial="ד"
            gradientFrom="#1a3a6b"
            gradientTo="#2563eb"
          />
          <TestimonialCard
            text='הייתי סקפטית בהתחלה — ניסיתי כל מיני פרסומות ולא ראיתי תוצאות. עם מאור זה שונה. הלידים שמגיעים אלי באמת מחפשים את השירות שלי ולא סתם "גוללו".'
            name="שירה מ."
            role="מאמנת כושר, תל אביב"
            initial="ש"
            gradientFrom="#be185d"
            gradientTo="#ec4899"
          />
          <TestimonialCard
            text="מה שכי אהבתי זה שמאור זמין. שאלתי שאלה בשעה 9 בערב וקיבלתי תשובה. זה לא מה שרגילים לקבל מחברות פרסום. הלידים טובים והשירות — אחלה."
            name="יוסי ר."
            role="מנהל סלון יופי, ראשון לציון"
            initial="י"
            gradientFrom="#065f46"
            gradientTo="#059669"
          />
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">* חוות הדעת הן של לקוחות אמיתיים. השמות שונו ����פרטיות.</p>
      </div>
    </section>
  )
}

function TestimonialCard({ text, name, role, initial, gradientFrom, gradientTo }: { text: string; name: string; role: string; initial: string; gradientFrom: string; gradientTo: string }) {
  return (
    <RevealOnScroll>
      <div className="bg-white border-[1.5px] border-border rounded-xl p-6 relative hover:shadow-lg hover:border-accent/30 transition-all">
        <div className="absolute top-4 left-4 bg-green/10 text-green text-[10px] font-bold px-2 py-0.5 rounded-full border border-green/20">
          {"✓ לקוח מאומת"}
        </div>
        <div className="text-accent text-base tracking-wider mb-3">{"★★★★★"}</div>
        <p className="text-base text-foreground leading-relaxed italic mb-5 relative pr-5">
          <span className="absolute right-0 top-[-3px] font-serif text-3xl text-accent/40">{'"'}</span>
          {text}
        </p>
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white text-sm flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
          >
            {initial}
          </div>
          <div>
            <div className="font-bold text-sm text-foreground">{name}</div>
            <div className="text-xs text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}

function FAQSection() {
  const faqs = [
    { q: "כמה עולה השירות?", a: "המחיר תלוי בסוג העסק ובכמות הלידים. בשיחת ההיכרות החינמית אנחנו מגדירים יחד מה מתאים לך — ללא הפתעות. אין עלות נסתרת." },
    { q: "כמה זמן לוקח עד שמקבלים לידים?", a: "לרוב תוך 24-48 שעות מהרגע שאנחנו מתחילים לעבוד. יש מקרים שהליד הראשון מגיע עוד ביום הראשון." },
    { q: "מה אם הלידים לא טובים?", a: "אני עובד על שיפור מתמיד. אם ליד לא מתאים — אני רוצה לדעת כדי לשפר. ואם תוצאות לא מגיעות — אין תשלום." },
    { q: "לאיזה סוגי עסקים זה מתאים?", a: 'שיפוצים, קוסמטיקה, כושר, עריכת דין, נדל"ן, מסעדות, חינוך, רפואה ועוד. כמעט כל עסק שנותן שירות ללקוחות פרטיים.' },
    { q: "האם צריך ניסיון קודם עם לידים?", a: "בכלל לא. אני מסביר הכול ומלווה אותך בכל שלב — גם אם זו הפעם הראשונה שאתה עובד עם לידים." },
  ]
  
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <RevealOnScroll>
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent border-b-2 border-accent pb-0.5 mb-4">שאלות נפוצות</span>
        <h2 className="font-serif text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">יש לך שאלות? אני כאן</h2>
      </RevealOnScroll>
      
      <div className="mt-10 flex flex-col gap-3 max-w-2xl">
        {faqs.map((faq, i) => (
          <FAQItem 
            key={i} 
            question={faq.q} 
            answer={faq.a} 
            isOpen={openIndex === i} 
            onClick={() => setOpenIndex(openIndex === i ? null : i)} 
          />
        ))}
      </div>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`border-[1.5px] rounded-xl overflow-hidden transition-colors ${isOpen ? "border-accent/40" : "border-border"}`}>
      <button 
        onClick={onClick}
        className="w-full px-5 py-4 font-semibold text-base text-foreground flex justify-between items-center gap-4 text-right hover:text-blue transition-colors cursor-pointer"
      >
        {question}
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-5 px-5" : "max-h-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

function FormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    console.log("[v0] Initializing EmailJS")
    emailjs.init("cKWF3k5--EFenLoM6")
  }, [])
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formDataObj = new FormData(form)
    const name = formDataObj.get("name") as string
    const phone = formDataObj.get("phone") as string
    const business = formDataObj.get("business") as string
    const notes = formDataObj.get("notes") as string || "לא צוין"
    
    if (!name || !phone || !business) {
      alert("אנא מלא את כל השדות המסומנים ב-*")
      return
    }
    
    setLoading(true)
    console.log("[v0] Starting EmailJS send with data:", { name, phone, business, notes })
    
    try {
      const result = await emailjs.send(
        "service_lowtlws", 
        "template_u9wpz5c", 
        {
          name,
          phone,
          business,
          notes,
        },
        "cKWF3k5--EFenLoM6"
      )
      console.log("[v0] EmailJS success:", result)
      setSubmitted(true)
    } catch (error) {
      console.error("[v0] EmailJS Error:", error)
      alert("שגיאה בשליחה, נסה שוב.")
    } finally {
      setLoading(false)
    }
  }
  
  const businessOptions = [
    "שיפוצים ובנייה",
    "קוסמטיקה ויופי",
    "כושר ואימון אישי",
    "עריכת דין ורואה חשבון",
    'נדל"ן ותיווך',
    "מסעדה ואוכל",
    "חינוך ופרטי",
    "רפואה ובריאות",
    "טכנולוגיה ומחשבים",
    "עיצוב ואדריכלות",
    "אחר",
  ]
  
  return (
    <section id="form" className="bg-navy py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <RevealOnScroll>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent2 border-b-2 border-accent2 pb-0.5 mb-4">בואו נתחיל</span>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-white leading-tight mb-2">ייעוץ ראשון — בחינם לחלוטין</h2>
          <p className="text-base text-white/50 max-w-md mx-auto leading-relaxed">{"השאירו פרטים ואחזור אליכם תוך 24 שעות לשיחה קצרה — ללא לחץ, ללא התחייבות."}</p>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="bg-white rounded-2xl p-6 md:p-8 mt-10 text-right shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">שם מלא *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="ישראל ישראלי"
                    required
                    className="w-full border-[1.5px] border-border rounded-xl px-4 py-3 text-base text-foreground bg-off focus:border-accent focus:ring-2 focus:ring-accent/15 focus:bg-white outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">מספר טלפון *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="050-0000000"
                    required
                    className="w-full border-[1.5px] border-border rounded-xl px-4 py-3 text-base text-foreground bg-off focus:border-accent focus:ring-2 focus:ring-accent/15 focus:bg-white outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">איזה עסק יש לך? *</label>
                  <div className="relative">
                    <select
                      name="business"
                      required
                      className="w-full border-[1.5px] border-border rounded-xl px-4 py-3 text-base text-foreground bg-off focus:border-accent focus:ring-2 focus:ring-accent/15 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>בחר סוג עסק</option>
                      {businessOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">ספר לי קצת על העסק (רשות)</label>
                  <textarea 
                    name="notes"
                    placeholder="כמה לקוחות אתה מחפש? מה האזור שלך?"
                    rows={3}
                    className="w-full border-[1.5px] border-border rounded-xl px-4 py-3 text-base text-foreground bg-off focus:border-accent focus:ring-2 focus:ring-accent/15 focus:bg-white outline-none transition-all resize-y"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-br from-accent to-accent2 text-navy font-extrabold text-lg py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,177,74,0.5)] transition-all tracking-wide disabled:bg-muted disabled:from-muted disabled:to-muted disabled:text-white/60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none cursor-pointer shadow-[0_4px_15px_rgba(232,177,74,0.3)] flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                  <span>{loading ? "שולח..." : "שלח ← רוצה לידים לעסק שלי"}</span>
                </button>
                
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                  {"🔒 הפרטים שלך נשמרים אצלי בלבד — ללא ספאם, ללא שיתוף"}
                </p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-7xl mb-5 animate-pop">🎯</div>
                <h3 className="font-serif text-3xl font-black text-foreground mb-3">קיבלתי! תודה רבה</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  אחזור אליך תוך <strong>24 שעות</strong> לשיחת היכרות קצרה וחינמית.
                  <br />
                  בינתיים — תמשיך לעשות את מה שאתה עושה הכי טוב 💪
                </p>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy2 py-6 px-4 text-center border-t border-white/5">
      <p className="text-sm text-white/30">
        {"© 2025 "}<span className="text-accent">מאור — לידים לעסקים</span>{" — כי כל עסק קטן ראוי ללקוחות טובים"}
      </p>
    </footer>
  )
}

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
    >
      {children}
    </div>
  )
}
