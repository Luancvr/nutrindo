import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Utensils,
  CalendarX,
  Sparkles,
  MessagesSquare,
  Truck,
  ClipboardList,
  ShieldCheck,
  Heart,
  Leaf,
  Timer,
  Check,
  Plus,
  Minus,
  Instagram,
  MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import benefitImg from "@/assets/benefit.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* ---------- Brand mark ---------- */
/* ---------- Brand mark ---------- */
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/logo.svg" className="w-32 h-32 object-contain" alt="Logo Nutrindo" />
    </div>
  );
}

/* Extremely subtle organic curve background */
function OrganicBg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      aria-hidden
    >
      <path
        d="M-100 500 C 200 300, 500 700, 800 450 S 1300 200, 1400 500"
        stroke="#2F5D47"
        strokeOpacity="0.05"
        strokeWidth="1.2"
      />
      <path
        d="M-100 600 C 250 400, 600 800, 900 550 S 1300 300, 1400 600"
        stroke="#2F5D47"
        strokeOpacity="0.04"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* Reveal on scroll */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 900ms cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, transform 900ms cubic-bezier(0.2,0.8,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white/70 backdrop-blur-xl">
      <div className="container-editorial flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-graphite-soft md:flex">
          <a href="#como-funciona" className="hover:text-graphite transition-colors">
            Como funciona
          </a>
          <a href="#diagnostico" className="hover:text-graphite transition-colors">
            Diagnóstico
          </a>
          <a href="#depoimentos" className="hover:text-graphite transition-colors">
            Histórias
          </a>
          <a href="#faq" className="hover:text-graphite transition-colors">
            Perguntas
          </a>
        </nav>
        <a href="#diagnostico" className="btn-primary h-11 px-5 text-sm">
          Começar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
   <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gray-900">
  
  {/* 1. IMAGEM DE FUNDO (Sem z-index negativo para não sumir atrás do site) */}
  <img 
    src={heroImg} 
    alt="Refeição Nutrindo pronta" 
    className="absolute inset-0 w-full h-full object-cover"
  />
  
  {/* 2. CAMADA ESCURA (Fica automaticamente em cima da imagem por vir depois dela no HTML) */}
  <div className="absolute inset-0 bg-black/65" />

  {/* 3. O CONTEÚDO (Garante que fica na frente de tudo usando relative e z-10) */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      
      {/* Selo do topo */}
      <span className="text-brand-soft font-semibold tracking-wider uppercase text-sm">
        • Alimentação planejada para você
      </span>
      
      {/* Título Principal */}
      <h1 className="text-5xl sm:text-8xl lg:text-6xl font-bold tracking-tight mt-9 mb-6 text-white">
        Sua rotina já exige demais.
        <br></br>
        Sua alimentação não deveria ser mais uma preocupação.
      </h1>
      
      {/* Subtítulo */}
      <p className="text-lg text-gray-200 mb-8 max-w-xl">
        Nós cuidamos do planejamento, da produção e das entregas para que comer bem seja a parte mais fácil do seu dia.
      </p>
      
      {/* Botões */}
      <div className="mt-5 flex justify-center gap-2 flex-wrap">
            <a href="#final" className="btn-primary">
              Descobrir meu plano ideal
              <ArrowRight size={18} />
            </a>
            <a href="#como-funciona" className="btn-ghost">
              Como funciona
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 text-xs text-left text-brand-soft">
            <div className="flex items-center gap-2">
              <ShieldCheck size={30} className="text-brand" />
              Sem fidelidade
            </div>
            <div className="h-4 w-px bg-line" />
            <div className="flex items-center gap-2">
              <Truck size={30} className="text-brand" />
              Entrega semanal
            </div>
            <div className="h-4 w-px bg-line" />
            <div className="flex items-center gap-2">
              <Heart size={30} className="text-brand" />
              Para você
            </div>
      </div>

    </div>
  </div>

</section>
  );
}

function Problem() {
  const items = [
    { icon: Timer, label: "Rotina corrida" },
    { icon: Utensils, label: "Refeições improvisadas" },
    { icon: CalendarX, label: "Falta de planejamento" },
    { icon: Clock, label: "Sem tempo para cozinhar" },
  ];
  return (
    <section className="border-t border-line-soft bg-white py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center ">o problema</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
              A correria não precisa decidir o que você come.
            </h2>
            <p className="mt-6 text-lg text-graphite-soft">
              Trabalho, estudos, academia, filhos, reuniões...

Quando o dia fica cheio, a alimentação costuma ser a primeira coisa a ser deixada para depois.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 80}>
              <div className="card-soft flex h-full flex-col items-start gap-6 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-accent-orange">
                  <it.icon size={20} className="text-cream" />
                </div>
                <div className="text-[15px] font-semibold text-graphite">
                  {it.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Conte como é sua rotina.",
      desc: "Um questionário curto e objetivo.",
    },
    {
      icon: Sparkles,
      title: "Receba uma recomendação.",
      desc: "Entendemos seus objetivos e indicamos a estratégia alimentar mais adequada.",
    },
    {
      icon: MessagesSquare,
      title: "Conversamos pelo WhatsApp.",
      desc: "Ajustamos apenas as informações necessárias antes de iniciar sua assinatura.",
    },
    {
      icon: Truck,
      title: "Receba suas refeições toda semana.",
      desc: "Refeições prontas para apoiar seus objetivos durante toda a semana.",
    },
  ];
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-28">
      <OrganicBg />
      <div className="container-editorial relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Como funciona</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
              Comer bem deveria
              <br></br>
              ser simples.
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-8 right-8 top-6 hidden h-px bg-brand/20 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative flex h-full flex-col">
                <div className="relative z-10 flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/20 bg-white text-sm font-bold text-brand shadow-[var(--shadow-whisper)]">
                    0{i + 1}
                  </div>
                  <s.icon size={21} className="text-brand" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-graphite">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-graphite-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diagnostic() {
  const questions = [
    { q: "Qual seu objetivo?", a: "Comer melhor no dia a dia" },
    { q: "Você prefere almoço ou almoço e jantar?", a: "Almoço e jantar" },
    { q: "Possui alguma restrição alimentar?", a: "Sem lactose" },
  ];
  return (
    <section id="diagnostico" className="bg-white py-28">
      <div className="container-editorial grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <span className="eyebrow">O diagnóstico</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
            Descubra qual plano faz sentido para você.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-graphite-soft">
            Em poucos minutos entendemos sua rotina, seus objetivos e suas restrições alimentares para recomendar o plano mais adequado baseado no seu perfil.
          </p>

          <div className="mt-10 space-y-3">
            {questions.map((q, i) => (
              <Reveal key={q.q} delay={i * 100}>
                <div className="card-soft flex items-start justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-graphite-mute">
                      Pergunta {i + 1}
                    </div>
                    <div className="mt-1 text-[15px] font-semibold text-graphite">
                      {q.q}
                    </div>
                    <div className="mt-1 text-sm text-graphite-soft">{q.a}</div>
                  </div>
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-tint">
                    <Check size={14} className="text-brand" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <a href="#final" className="btn-primary mt-10">
            Iniciar meu diagnóstico
            <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] " />
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Seu perfil</span>
                <span className="rounded-full bg-brand-tint px-3 py-1 text-[11px] font-semibold text-brand">
                  Recomendado
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-1.05 text-graphite">
                Perfil Equilíbrio
              </h3>
              <p className="mt-2 text-sm text-graphite-soft">
                Pensado para quem busca uma alimentação saudável, prática e fácil de manter no dia a dia.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { k: "5", l: "refeições" },
                  { k: "2x", l: "por semana" },
                  { k: "0", l: "preocupação" },
                  { k: "100%", l: "nutritivo" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-line bg-white p-4"
                  >
                    <div className="text-2xl font-bold tracking-tight text-graphite">
                      {s.k}
                    </div>
                    <div className="text-xs text-graphite-mute">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
                <div className="flex items-center gap-2 text-sm text-graphite-soft">
                  <Truck size={16} className="text-brand" />
                  Entrega semanal
                </div>
                <div className="flex items-center gap-2 text-sm text-graphite-soft">
                  <Leaf size={16} className="text-brand-soft" />
                  Equilibrado
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      title: "Confirmamos seu plano",
      text: "Após o diagnóstico, validamos suas informações e iniciamos sua assinatura.",
    },
    {
      title: "Planejamos sua alimentação",
      text: "Nossa equipe organiza uma alimentação alinhada aos seus objetivos e restrições.",
    },
    {
      title: "Produzimos suas refeições",
      text: "Tudo é preparado para que sua semana comece organizada e sem improvisos.",
    },
    {
      title: "Entregamos sua semana",
      text: "Você recebe todas as refeições prontas para consumir durante a semana.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-soft to-white py-28">
      <div className="container-editorial grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1fr]">

        {/* ESQUERDA */}

        <Reveal>

          <span className="eyebrow">Sua jornada</span>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
            Sua semana
            <br />
            começa aqui.
          </h2>

          <p className="mt-6 max-w-lg text-lg text-graphite-soft">
            Você não precisa decidir o que cozinhar,
            fazer compras ou organizar o cardápio da semana.

            A Nutrindo cuida dessa parte para você.
          </p>

          <div className="mt-10 rounded-[2rem] bg-white border border-line p-6">

            <div className="flex items-center gap-3">

              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-tint">

                <Leaf size={20} className="text-brand" />

              </div>

              <div>

                <div className="text-sm text-graphite-mute">
                  Resultado
                </div>

                <div className="font-semibold text-graphite">
                  Sua alimentação deixa de ser uma preocupação.
                </div>

              </div>

            </div>

          </div>

        </Reveal>

        {/* DIREITA */}

        <Reveal delay={150}>

          <div className="space-y-4">

            {steps.map((step, index) => (

              <Reveal key={step.title} delay={index * 100}>

                <div className="card-soft flex gap-5 p-6">

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-tint font-semibold text-brand">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-graphite">

                      {step.title}

                    </h3>

                    <p className="mt-2 text-sm leading-7 text-graphite-soft">

                      {step.text}

                    </p>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </Reveal>

      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: Sparkles,
      t: "Planejamento inteligente",
      d: "Um plano pensado para seus objetivos e restrições alimentares.",
    },
    {
      icon: Clock,
      t: "Mais tempo para você",
      d: "Menos tempo decidindo o que comer. Mais tempo para viver sua rotina.",
    },
    {
      icon: Leaf,
      t: "Refeições equilibradas",
      d: "Preparadas para nutrir seu dia de forma prática e consistente.",
    },
    {
      icon: Truck,
      t: "Entrega semanal",
      d: "Receba todas as refeições da semana em uma única entrega.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="container-editorial grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1fr]">

        {/* Conteúdo */}

        <Reveal>
          <div>

            <span className="eyebrow">
              No dia a dia
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
              Tudo pronto para
              <br />
              acompanhar sua semana.
            </h2>

            <p className="mt-6 max-w-lg text-lg text-graphite-soft">
              Da escolha do plano até a entrega,
              cada detalhe é pensado para tornar a alimentação
              uma parte simples da sua rotina.
            </p>

            <div className="mt-10 space-y-4">

              {items.map((item, index) => (

                <Reveal key={item.t} delay={index * 80}>

                  <div className="card-soft flex items-start gap-4 p-5">

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint">

                      <item.icon
                        size={18}
                        className="text-brand"
                      />

                    </div>

                    <div>

                      <h3 className="text-base font-semibold text-graphite">
                        {item.t}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-graphite-soft">
                        {item.d}
                      </p>

                    </div>

                  </div>

                </Reveal>

              ))}

            </div>

            <a href="#final" className="btn-primary mt-10">
              Descobrir meu Perfil
              <ArrowRight size={18} />
            </a>

          </div>

        </Reveal>

        {/* Imagem */}

        <Reveal delay={150}>

          <div className="relative animate-fade">

            <div className="absolute -inset-6 -z-10 rounded-[2.5rem]" />

            <div
              className="absolute -right-6 -top-6 h-40 w-40 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, #89A95F55, transparent 70%)",
              }}
            />

            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-cream to-brand-soft">

              <img
                src={benefitImg}
                alt="Refeição saudável da Nutrindo pronta para consumo."
                width={1280}
                height={1680}
                className="h-[760px] w-full object-cover"
              />

            </div>

            {/* Badge */}
              <div className="mx-auto flex max-w-2xl flex-col items-center">
                <div className="absolute bottom-4 w-78 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)]">

              <div className="flex items-center gap-3">

                <div className="grid h-12 w-15 place-items-center rounded-full bg-brand-tint">

                  <Sparkles
                    size={18}
                    className="text-brand"
                  />

                </div>

                <div>

                  <div className="text-[11px] uppercase tracking-widest text-graphite-mute">

                    Esta semana

                  </div>

                  <div className="mt-1 text-base font-semibold text-graphite">

                    5 refeições prontas

                  </div>

                  <div className="mt-1 text-sm text-graphite-soft">

                    Organizadas para acompanhar sua rotina.

                  </div>

                </div>

              </div>

            </div>

          </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Recuperei minhas noites. Não penso mais no que vou comer.",
      n: "Marina",
      r: "Advogada, São Paulo",
    },
    {
      q: "Comida de verdade, no ritmo da minha semana. Simples assim.",
      n: "Rafael",
      r: "Product Manager",
    },
    {
      q: "Parece um serviço pensado por gente que entende a rotina.",
      n: "Luiza",
      r: "Médica",
    },
  ];
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-white to-cream py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Histórias</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
              Quem já vive com<br></br>
              a Nutrindo.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.n} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-[var(--shadow-whisper)]">
                <blockquote className="text-lg leading-snug tracking-tight text-graphite">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-tint text-sm font-semibold text-brand">
                    {t.n[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-graphite">{t.n}</div>
                    <div className="text-xs text-graphite-mute">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoutineComparison() {
  const before = [
    "Decidir o que comer todos os dias.",
    "Pedir delivery por impulso.",
    "Ir ao mercado várias vezes na semana.",
    "Cozinhar mesmo quando está cansado.",
  ];

  const after = [
    "Uma semana inteira já organizada.",
    "Refeições alinhadas aos seus objetivos.",
    "Mais tempo para descansar ou produzir.",
    "É só aquecer e aproveitar.",
  ];

  return (
    <section className="bg-white py-28">
      <div className="container-editorial">

        <Reveal>

          <div className="mx-auto max-w-4xl text-center">

            <span className="eyebrow">
              Uma nova rotina
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-graphite sm:text-5xl">
              Quando a alimentação
              <br></br>deixa de ser uma preocupação,
              <br></br>
              outras coisas passam a importar.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-graphite-soft">
              A Nutrindo organiza sua alimentação para que você tenha mais tempo
              para viver sua rotina.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Antes */}

          <Reveal>

            <div className="card-soft h-full p-8">

              <span className="eyebrow text-graphite-mute">
                Antes
              </span>

              <h3 className="mt-5 text-3xl font-semibold text-graphite">
                A alimentação depende da correria.
              </h3>

              <div className="mt-8 space-y-4">

                {before.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-line p-4"
                  >

                    <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-orange-400" />

                    <p className="text-graphite-soft">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

          {/* Depois */}

          <Reveal delay={120}>

            <div className="card-soft h-full border-brand/20 bg-brand-tint p-8">

              <span className="eyebrow text-brand">
                Com a Nutrindo
              </span>

              <h3 className="mt-5 text-3xl font-semibold text-graphite">
                Sua semana começa organizada.
              </h3>

              <div className="mt-8 space-y-4">

                {after.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl bg-white p-4"
                  >

                    <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint">

                      <Check
                        size={14}
                        className="text-brand"
                      />

                    </div>

                    <p className="text-graphite">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "A alimentação é personalizada?",
      a: "A Nutrindo recomenda um plano de acordo com seus objetivos, rotina e restrições alimentares. O cardápio é elaborado para oferecer uma alimentação equilibrada e prática, sem depender de escolhas diárias.",
    },
    {
      q: "Como funciona a entrega?",
      a: "As refeições chegam duas vez por semana, prontas e organizadas para durar até o próximo ciclo.",
    },
    {
      q: "Tenho restrição alimentar. Vocês adaptam?",
      a: "Sim. Restrições como lactose, glúten e alergias são consideradas na montagem do plano.",
    },
    {
      q: "Posso pausar a assinatura?",
      a: "Pode. Não há fidelidade — você pausa ou ajusta pelo WhatsApp quando quiser.",
    },
    {
      q: "Como funciona o acompanhamento?",
      a: "Todo o acompanhamento acontece pelo WhatsApp, do jeito mais simples.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-28">
      <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-graphite sm:text-5xl">
            Tudo que você precisa saber antes de começar.
          </h2>
          <p className="mt-6 max-w-md text-graphite-soft">
            Se preferir, você também pode conversar com a gente diretamente pelo
            WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-line rounded-3xl border border-line bg-white">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={it.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full flex-col px-6 py-6 text-left transition-colors hover:bg-brand-soft/50"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-base font-semibold text-graphite">
                      {it.q}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-graphite-soft transition-colors group-hover:border-brand group-hover:text-brand">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </div>
                  <div
                    className="grid overflow-hidden text-sm text-graphite-soft transition-all duration-500"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? "0.75rem" : 0,
                    }}
                  >
                    <div className="min-h-0 overflow-hidden pr-12 leading-relaxed">
                      {it.a}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="final" className="relative overflow-hidden bg-white pb-32 pt-16">
      <div className="container-editorial">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-graphite to-brand text-white px-8 py-20 text-center text-white sm:px-16 sm:py-28">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 600"
            fill="none"
            aria-hidden
          >
            <path
              d="M-100 400 C 200 200, 500 600, 800 350 S 1300 100, 1400 400"
              stroke="#89A95F"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <path
              d="M-100 500 C 250 300, 600 700, 900 450 S 1300 200, 1400 500"
              stroke="#ffffff"
              strokeOpacity="0.12"
              strokeWidth="1.2"
            />
          </svg>
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Perfil Nutrindo
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-6xl">
              Sua rotina muda quando sua alimentação deixa de
              <br></br>ser uma preocupação.
            </h2>
            <a
              href="https://wa.me/+5573998409163?text=Quero%20descobrir%20meu%20plano%20ideal!"
              className="mt-12 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-9 text-base font-semibold text-dark-green shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Descobrir meu plano ideal
              <ArrowRight size={18} />
            </a>
            <p className="mt-6 text-sm text-white/70">
              Leva menos de 3 minutos. Continuamos pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-white py-16">
      <div className="container-editorial grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-graphite-soft">
            Alimentação personalizada para pessoas com rotina corrida.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-graphite transition-colors hover:border-brand hover:text-brand"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/nutrindoapp"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-graphite transition-colors hover:border-brand hover:text-brand"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </div>
      <div className="container-editorial mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-graphite-mute md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} Nutrindo. Todos os direitos reservados.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-graphite">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-graphite">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Diagnostic />
      <Journey />
      <Benefits />
      <Testimonials />
      <RoutineComparison />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
