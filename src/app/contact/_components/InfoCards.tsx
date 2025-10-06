const cardBase = [
  'flex flex-col gap-2.5',
  'rounded-2xl border border-border/60 bg-white p-4 sm:p-5',
  'shadow-[0_12px_24px_rgba(15,23,42,.08)] transition-transform duration-150',
  'hover:-translate-y-0.5 motion-hover:lift'
].join(' ');

export default function InfoCards() {
  const chips = [
    'SaaS-Entwicklung & Implementierung',
    'KI-Beratung für KMU',
    'Automatisierung & Workflow-Design',
    'Virtueller Helpdesk & Chatbots',
    'KI-Potenzialanalyse vor Ort',
    'Branchen-Dashboards & Lead-Systeme'
  ];

  return (
    <div className="grid gap-4">
      <a href="mailto:support@obsidioai.com" className={cardBase}>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Schreiben Sie uns</span>
        <div className="text-lg font-semibold text-text">support@obsidioai.com</div>
        <p className="text-sm text-muted">Wir antworten innerhalb eines Werktags.</p>
      </a>

      <a href="tel:+436605823948" className={cardBase}>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Rufen Sie uns an</span>
        <div className="text-lg font-semibold text-text">+43 660 5823948</div>
      </a>

      <div className={cardBase}>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Reaktionszeit</span>
        <div className="text-lg font-semibold text-text">Unter 24 Stunden</div>
        <p className="text-sm text-muted">Teilen Sie ein paar Eckdaten und wir starten sofort mit der Planung.</p>
      </div>

      <div className={cardBase}>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Leistungen</span>
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border/60 bg-bg1 px-3 py-1 text-xs font-medium text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
