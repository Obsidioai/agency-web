import InfoCards from './_components/InfoCards';
import ContactForm from './_components/ContactForm';

export const metadata = {
  title: 'Kontakt | [Agency Name]',
  description: 'Sagen Sie uns, wobei wir helfen können. Sitz in Wien, tätig im DACH-Raum.'
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="motion-ambient pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 450px at 80% -10%, rgba(110,74,226,.18), transparent 60%)'
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-8">
          <h1 className="text-4xl md:text-5xl font-semibold">Kontakt aufnehmen</h1>
          <p className="mt-2 text-lg text-muted max-w-2xl">
            Erzählen Sie uns, wobei wir Sie unterstützen können. Wofür interessieren Sie sich?
          </p>
          <p className="mt-1 text-sm text-muted">Mit Sitz in Wien, tätig im gesamten DACH-Raum.</p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 items-start lg:items-stretch lg:grid-cols-[minmax(0,580px)_minmax(0,360px)]">
          <ContactForm />
          <InfoCards />
        </div>
      </section>
    </main>
  );
}

