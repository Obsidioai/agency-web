'use client';
import {useMemo, useState} from 'react';
import {ResourceItem, ResourceType, Topic, Lang} from '@/types/content';
import ResourceCard from './ResourceCard';
import BlogCard from './BlogCard';
import {posts} from '@/data/blog';

type Props = { resources: ResourceItem[] };

export default function ResourceFilters({resources}: Props) {
  const [q, setQ] = useState('');
  const [type, setType] = useState<ResourceType | 'all'>('all');
  const [topic, setTopic] = useState<Topic | 'all'>('all');
  const [lang, setLang] = useState<Lang | 'all'>('all');
  const [sort, setSort] = useState<'new'|'popular'>('new');

  const filtered = useMemo(() => {
    const base = resources.filter(r => {
      const okQ = !q || (r.title + ' ' + (r.desc ?? '')).toLowerCase().includes(q.toLowerCase());
      const okT = type === 'all' || r.type === type;
      const okTopic = topic === 'all' || r.topic === topic;
      const okLang = lang === 'all' || r.lang === lang;
      return okQ && okT && okTopic && okLang;
    });
    if (sort === 'popular') return base; // placeholder
    return base; // already "new" by array order
  }, [resources, q, type, topic, lang, sort]);

  const featured = resources.filter(r => r.featured);

  return (
    <div className="space-y-10">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 items-center">
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder="Search"
          className="rounded-2xl bg-bg2 border border-border px-3 py-2 text-sm outline-none focus-visible:shadow-[0_0_0_6px_rgba(0,245,160,.18)]"
        />
        <select value={type} onChange={(e)=>setType(e.target.value as ResourceType | 'all')} className="rounded-xl bg-bg2 border border-border px-3 py-2 text-sm">
          <option value="all">Type: All</option>
          <option value="video">Video</option>
          <option value="guide">Guide</option>
          <option value="template">Template</option>
        </select>
        <select value={topic} onChange={(e)=>setTopic(e.target.value as Topic | 'all')} className="rounded-xl bg-bg2 border border-border px-3 py-2 text-sm">
          <option value="all">Topic: All</option>
          <option value="automation">Automation</option>
          <option value="lead-gen">Lead Gen</option>
          <option value="consulting">Consulting</option>
          <option value="saas">SaaS</option>
          <option value="branding">Branding</option>
        </select>
        <select value={lang} onChange={(e)=>setLang(e.target.value as Lang | 'all')} className="rounded-xl bg-bg2 border border-border px-3 py-2 text-sm">
          <option value="all">Language: All</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
        <select value={sort} onChange={(e)=>setSort(e.target.value as 'new' | 'popular')} className="rounded-xl bg-bg2 border border-border px-3 py-2 text-sm">
          <option value="new">Sort: Newest</option>
          <option value="popular">Sort: Most Popular</option>
        </select>
      </div>

      {/* Featured carousel substitute (simple grid for now) */}
      {featured.length ? (
        <div>
          <h3 className="text-xl font-semibold mb-3">Featured</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(r => <ResourceCard key={r.id} item={r} />)}
          </div>
        </div>
      ) : null}

      {/* All resources */}
      <div>
        <h3 className="text-xl font-semibold mb-3">All Free Resources</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(r => <ResourceCard key={r.id} item={r} />)}
          {!filtered.length && (
            <div className="text-muted">No matches. Try different filters.</div>
          )}
        </div>
      </div>

      {/* Newsletter + Request topic */}
      <div className="grid gap-4 md:grid-cols-3">
        <form className="md:col-span-2 rounded-2xl bg-bg2 border border-border p-5">
          <h4 className="font-medium">Monthly DACH AI insights</h4>
          <div className="mt-3 flex gap-2">
            <input className="flex-1 rounded-xl bg-bg0 border border-border px-3 py-2 text-sm" placeholder="Email address" />
            <button className="rounded-xl px-4 py-2 bg-primary text-white hover:-translate-y-0.5 transition">Subscribe</button>
          </div>
          <p className="mt-2 text-xs text-muted">No spam. Unsubscribe anytime.</p>
        </form>
        <form className="rounded-2xl bg-bg2 border border-border p-5">
          <h4 className="font-medium">Request a topic</h4>
          <input className="mt-3 w-full rounded-xl bg-bg0 border border-border px-3 py-2 text-sm" placeholder="What should we cover?" />
          <button className="mt-3 rounded-xl px-4 py-2 border border-accent text-accent hover:bg-[rgba(0,245,160,.06)] transition">Send</button>
        </form>
      </div>

      {/* Divider + Blog */}
      <div className="h-px bg-border" />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => <BlogCard key={p.id} post={p} />)}
        </div>
      </div>
    </div>
  );
}
