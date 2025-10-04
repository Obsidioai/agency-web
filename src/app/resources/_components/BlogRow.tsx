import Link from 'next/link';
import {posts} from '@/data/blog';

export default function BlogRow() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <p className="mt-1 text-muted">A few quick reads.</p>
        </div>
        <Link href="/blog" className="text-accent hover:underline">Go to Blog →</Link>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0,3).map(p => {
          const d = new Date(p.date).toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric'});
          return (
            <a key={p.id}
               href={p.url}
               className="rounded-2xl bg-bg2 border border-border overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,.25)]
                          transition duration-150 hover:-translate-y-0.5 motion-hover:lift">
              <div className="h-28 bg-gradient-to-br from-primary/18 to-accent/18" />
              <div className="p-4">
                <div className="text-xs text-muted">{d}</div>
                <h3 className="mt-1 font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.excerpt}</p>
                <div className="mt-2 text-sm text-accent">Read →</div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
