import {ResourceItem} from '@/types/content';

export default function ResourceCard({item}:{item:ResourceItem}) {
  const badge =
    item.type === 'video' ? 'Video' :
    item.type === 'guide' ? 'Guide' : 'Template';

  const meta = item.type === 'video' ? item.duration : `${item.pages ?? '-'}p`;

  return (
    <a
      href={item.url}
      className="group rounded-2xl bg-bg2 border border-border p-4 shadow-[0_1px_2px_rgba(0,0,0,.25)]
                 transition duration-150 ease-[cubic-bezier(.2,0,0,1)]
                 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.35)] focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)] outline-none"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-wide text-accent">{badge}</span>
        <span className="text-xs text-muted">{meta}</span>
      </div>
      <h3 className="text-base font-medium">{item.title}</h3>
      <p className="mt-1 text-sm text-muted">{item.desc}</p>
      <div className="mt-3 text-xs text-muted">Lang: {item.lang.toUpperCase()} • Topic: {item.topic}</div>
    </a>
  );
}
