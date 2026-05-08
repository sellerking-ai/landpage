import { createFileRoute } from "@tanstack/react-router";

import {
  MessageCircle,
  CalendarCheck,
  Bot,
  Clock,
  ShieldCheck,
  Sparkles,
  Check,
  Star,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react";

const HOTMART = "https://pay.hotmart.com/H105324518Y?bid=1777465703252";
const HOTMART_PLAN = "https://pay.hotmart.com/H105324518Y";
const WHATSAPP = "https://wa.me/351912345678";
const WHATSAPP_DEMO = "https://wa.me/351964637517";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seller King AI — Atendimento e Marcações 24h no WhatsApp" },
      {
        name: "description",
        content:
          "IA portuguesa que responde no WhatsApp em segundos e agenda clientes 24h por dia. Pare de perder marcações.",
      },
      { property: "og:title", content: "Seller King AI — Marcações automáticas no WhatsApp" },
      {
        property: "og:description",
        content:
          "Responda em segundos, agende automaticamente e nunca mais perca um cliente. Feito em Portugal.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <IdealFor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--royal)] to-[var(--neon)] glow">
            <Bot className="h-4 w-4 text-white" />
          </span>
          Seller King <span className="text-gradient">AI</span>
        </a>
        <a
          href={HOTMART}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--neon)] px-5 py-2 text-sm font-semibold text-white glow hover:opacity-90 transition"
        >
          Quero automatizar agora <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="container relative mx-auto max-w-4xl px-4 py-24 md:py-32 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-[var(--glow)]">
          <Sparkles className="h-3.5 w-3.5" /> Inteligência Artificial · Feita para Portugal
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Pare de perder clientes <br />
          <span className="text-gradient">enquanto não responde.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          A IA do <strong className="text-foreground">Seller King</strong> responde no WhatsApp em
          segundos e agenda os seus clientes <strong>24 horas por dia</strong> — mesmo enquanto
          dorme. Feito para clínicas, salões, estéticas e prestadores de serviços.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={HOTMART}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--neon)] px-7 py-4 text-base font-semibold text-white animate-pulse-glow hover:opacity-95 transition"
          >
            Quero automatizar agora <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_DEMO}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 text-base font-semibold text-foreground hover:bg-card transition"
          >
            <MessageCircle className="h-5 w-5 text-[var(--neon)]" /> Simular no WhatsApp
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--neon)]" /> Sem fidelização</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--neon)]" /> Configuração 100% feita por nós</li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--neon)]" /> API oficial WhatsApp</li>
        </ul>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="container mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { n: "+93%", t: "marcações automáticas" },
          { n: "<5s", t: "tempo médio de resposta" },
          { n: "24/7", t: "atendimento sem pausa" },
          { n: "100%", t: "configurado por nós" },
        ].map((s) => (
          <div key={s.t}>
            <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-20 md:py-28">
      <div className="text-center space-y-4 mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">O Problema</span>
        <h2 className="text-3xl md:text-5xl font-bold">
          O problema não é falta de clientes. <br />
          <span className="text-gradient">É a demora na resposta.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mais de 78% dos clientes escolhem quem responde primeiro. Cada minuto perdido é uma
          marcação que vai para a concorrência.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-premium rounded-2xl p-6 border-l-4 border-l-destructive">
          <div className="text-xs uppercase text-muted-foreground mb-3">Sem Seller King</div>
          <ul className="space-y-3 text-sm">
            <li>❌ Cliente envia mensagem → demora horas a responder</li>
            <li>❌ Ele agenda com outro profissional</li>
            <li>❌ Perde vendas todos os dias sem perceber</li>
            <li>❌ Atendimento parado fora de horas</li>
          </ul>
        </div>
        <div className="card-premium rounded-2xl p-6 border-l-4 border-l-[var(--neon)] glow">
          <div className="text-xs uppercase text-[var(--neon)] mb-3">Com Seller King AI</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Check className="h-5 w-5 text-[var(--neon)] shrink-0" /> Resposta imediata, em segundos</li>
            <li className="flex gap-2"><Check className="h-5 w-5 text-[var(--neon)] shrink-0" /> Cliente agenda sozinho no seu calendário</li>
            <li className="flex gap-2"><Check className="h-5 w-5 text-[var(--neon)] shrink-0" /> Vende 24h por dia, mesmo a dormir</li>
            <li className="flex gap-2"><Check className="h-5 w-5 text-[var(--neon)] shrink-0" /> Foco no que importa: o seu negócio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-card/30 border-y border-border">
      <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">A Solução</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Uma assistente <span className="text-gradient">inteligente</span> que nunca dorme.
          </h2>
          <p className="text-muted-foreground text-lg">
            Treinamos a IA com os dados do seu negócio. Ela esclarece dúvidas, conduz a conversa e
            fecha o agendamento — tudo de forma natural, em português de Portugal.
          </p>
          <a href={HOTMART} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--neon)] px-7 py-4 font-semibold text-white glow hover:opacity-95 transition">
            Quero parar de perder clientes <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="card-premium rounded-3xl p-6 space-y-3">
          <ChatBubble side="left" name="Cliente">Olá, queria marcar um corte para sábado.</ChatBubble>
          <ChatBubble side="right" name="Seller King AI">Olá! Claro 😊 Tenho disponibilidade sábado às 10h, 14h ou 17h. Qual prefere?</ChatBubble>
          <ChatBubble side="left" name="Cliente">Às 14h, por favor.</ChatBubble>
          <ChatBubble side="right" name="Seller King AI">
            Marcado! ✅ Sábado às 14h. Já adicionei ao calendário e enviei confirmação. Até já!
          </ChatBubble>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ side, name, children }: { side: "left" | "right"; name: string; children: React.ReactNode }) {
  const isAI = side === "right";
  return (
    <div className={`flex ${isAI ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${isAI ? "bg-gradient-to-br from-[var(--royal)] to-[var(--neon)] text-white" : "bg-secondary text-foreground"}`}>
        <div className={`text-[10px] uppercase tracking-wider mb-1 ${isAI ? "text-white/70" : "text-muted-foreground"}`}>{name}</div>
        {children}
      </div>
    </div>
  );
}

function Features() {
  const items = [
    { icon: Bot, t: "IA Personalizada", d: "Aprende sobre o seu negócio e responde com base nos seus dados." },
    { icon: Clock, t: "Atendimento 24/7", d: "Responde automaticamente aos seus clientes, dia e noite." },
    { icon: CalendarCheck, t: "Agenda Integrada", d: "Marca e cancela agendamentos no seu próprio calendário, 100% automático." },
    { icon: ShieldCheck, t: "API Oficial WhatsApp", d: "Conta verificada e segura. Sem riscos de bloqueio." },
    { icon: Zap, t: "Resposta em Segundos", d: "O cliente nunca espera. Aumenta a taxa de conversão imediatamente." },
    { icon: Sparkles, t: "Painel Próprio", d: "Acompanhe conversas, marcações e desempenho num só lugar." },
  ];
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="text-center mb-14 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Funcionalidades</span>
        <h2 className="text-3xl md:text-5xl font-bold">O que este sistema <span className="text-gradient">faz por si</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="card-premium rounded-2xl p-6 hover:translate-y-[-4px] transition">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--royal)] to-[var(--neon)] mb-4">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Cliente envia mensagem", d: "Pelo WhatsApp, a qualquer hora do dia ou da noite." },
    { n: "02", t: "IA conversa naturalmente", d: "Esclarece dúvidas e percebe o que o cliente precisa." },
    { n: "03", t: "Agendamento confirmado", d: "Marca no seu calendário e envia confirmação automática." },
  ];
  return (
    <section className="bg-card/30 border-y border-border">
      <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Como Funciona</span>
          <h2 className="text-3xl md:text-5xl font-bold">Veja como é <span className="text-gradient">fácil</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card-premium rounded-2xl p-8 relative">
              <div className="font-display text-6xl font-bold text-gradient opacity-80">{s.n}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={WHATSAPP_DEMO} className="inline-flex items-center gap-2 rounded-full border border-[var(--neon)] bg-card/60 px-7 py-4 font-semibold text-foreground hover:bg-card transition">
            <Phone className="h-5 w-5 text-[var(--neon)]" /> Simule uma marcação agora
          </a>
        </div>
      </div>
    </section>
  );
}

function IdealFor() {
  const items = ["Clínicas", "Salões & Barbearias", "Estéticas & SPA", "Prestadores de Serviços", "Estúdios", "Consultórios"];
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="text-center mb-12 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Ideal para</span>
        <h2 className="text-3xl md:text-5xl font-bold">Feito para o <span className="text-gradient">seu negócio</span></h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((i) => (
          <div key={i} className="card-premium rounded-full px-6 py-3 text-sm font-medium">{i}</div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Alice Ferreira", r: "Clínica Estética", q: "Desde que começámos a usar, deixámos de perder clientes no WhatsApp. Mudou completamente a nossa rotina." },
    { n: "Santiago Santos", r: "Barbearia", q: "As respostas são imediatas e as marcações aumentaram logo na primeira semana." },
    { n: "Maria Martins", r: "Salão de Cabelo", q: "Reduzi bastante o tempo de atendimento e consegui focar-me mais no negócio. O sistema faz mesmo a diferença." },
  ];
  return (
    <section className="bg-card/30 border-y border-border">
      <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold">O que os <span className="text-gradient">clientes dizem</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.map((x) => (
            <div key={x.n} className="card-premium rounded-2xl p-6">
              <div className="flex gap-1 mb-3 text-[var(--neon)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground/90 mb-4">"{x.q}"</p>
              <div>
                <div className="font-semibold">{x.n}</div>
                <div className="text-xs text-muted-foreground">{x.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "IA configurada para o seu negócio",
    "Atendimento automático 24/7",
    "Integração com o seu calendário",
    "API oficial WhatsApp Business",
    "Painel de gestão completo",
    "Suporte dedicado em português",
  ];
  return (
    <section className="container mx-auto max-w-4xl px-4 py-20 md:py-28">
      <div className="text-center mb-10 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Oferta de Lançamento</span>
        <h2 className="text-3xl md:text-5xl font-bold">Comece a <span className="text-gradient">vender hoje</span></h2>
        <p className="text-muted-foreground">Sem fidelização. Cancela quando quiser.</p>
      </div>
      <div className="card-premium rounded-3xl p-8 md:p-12 relative overflow-hidden glow">
        <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--neon)] px-3 py-1 text-xs font-semibold text-white">
          Promoção até 31/05/2026
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-muted-foreground line-through">€97/mês</div>
            <div className="font-display text-5xl md:text-6xl font-bold text-gradient">€47<span className="text-2xl text-muted-foreground">/mês</span></div>
            <p className="mt-2 text-sm text-muted-foreground">Setup completo incluído. Sem fidelização.</p>
            <a href={HOTMART_PLAN} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--neon)] px-7 py-4 font-semibold text-white animate-pulse-glow">
              Quero automatizar agora <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--neon)]/20 text-[var(--neon)]">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Preciso de saber mexer em tecnologia?", a: "Não. Fazemos 100% da configuração por si. Apenas precisa de nos dar acesso ao seu WhatsApp Business e calendário." },
    
    { q: "Posso cancelar a qualquer momento?", a: "Sim. Não há fidelização. Cancela com 1 clique." },
    { q: "Funciona no meu WhatsApp atual?", a: "Sim, usamos a API oficial do WhatsApp Business — segura e sem risco de bloqueio." },
    { q: "Quanto tempo demora a estar a funcionar?", a: "Em média 48h após o pagamento. Tratamos de tudo." },
  ];
  return (
    <section className="bg-card/30 border-y border-border">
      <div className="container mx-auto max-w-3xl px-4 py-20 md:py-28">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Dúvidas</span>
          <h2 className="text-3xl md:text-5xl font-bold">Tire as suas <span className="text-gradient">dúvidas</span></h2>
        </div>
        <div className="space-y-3">
          {qs.map((x) => (
            <details key={x.q} className="card-premium rounded-2xl px-6 py-4 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {x.q}
                <span className="text-[var(--neon)] group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{x.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-24 text-center">
      <div className="card-premium rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -inset-20 bg-[var(--neon)]/10 blur-3xl pointer-events-none" />
        <h2 className="relative text-3xl md:text-5xl font-bold">
          Comece hoje e veja clientes <br />
          <span className="text-gradient">a marcar automaticamente.</span>
        </h2>
        <p className="relative mt-4 text-muted-foreground">Sem fidelização. Tratamos de tudo por si.</p>
        <a href={HOTMART} className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--neon)] px-8 py-5 text-lg font-semibold text-white animate-pulse-glow">
          Quero automatizar agora <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Seller King AI · Feito em Portugal 🇵🇹</div>
        <div className="flex gap-6">
          <a href={WHATSAPP} className="hover:text-[var(--neon)] transition">Contacto</a>
          <a href="#top" className="hover:text-[var(--neon)] transition">Topo</a>
        </div>
      </div>
    </footer>
  );
}
