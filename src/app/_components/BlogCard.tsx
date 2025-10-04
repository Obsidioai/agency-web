import {BlogPost} from '@/types/content';

export default function BlogCard({post}:{post:BlogPost}) {
  const d = new Date(post.date);
  const date = d.toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric'});
  return (
    <a
      href={post.url}
      className="group rounded-2xl bg-bg2 border border-border p-4 shadow-[0_1px_2px_rgba(0,0,0,.25)]
                 transition duration-150 ease-[cubic-bezier(.2,0,0,1)]
                 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.35)]"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-muted">{date}</span>
        <span className="text-xs text-muted">{post.lang.toUpperCase()}</span>
      </div>
      <h3 className="text-base font-medium">{post.title}</h3>
      <p className="mt-1 text-sm text-muted">{post.excerpt}</p>
      {post.tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {post.tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted">{t}</span>
          ))}
        </div>
      ) : null}
    </a>
  );
}
