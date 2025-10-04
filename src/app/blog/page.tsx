import Link from "next/link";

import { posts } from "@/data/blog";
import type { BlogPost } from "@/types/content";

export const metadata = {
  title: "Einblicke & Updates - Obsidio",
  description:
    "Kurze, praxisnahe Artikel, die KMU-Teams helfen, KI-Initiativen sicher zu planen, zu starten und zu skalieren.",
};

const suggestedTopics = Array.from(new Set(posts.flatMap((post) => post.tags ?? []))).slice(0, 6);

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const matchesQuery = (post: BlogPost, normalizedQuery: string) => {
  if (!normalizedQuery) return true;

  const searchable = [
    post.title,
    post.title_de ?? "",
    post.excerpt,
    post.excerpt_de ?? "",
    post.lang,
    ...(post.tags ?? []),
  ]
    .join(" ")
    .trim();

  return normalizeText(searchable).includes(normalizedQuery);
};

type BlogPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const orderedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const rawQuery = searchParams?.q;
  const queryValue = Array.isArray(rawQuery) ? rawQuery[0] ?? "" : rawQuery ?? "";
  const trimmedQuery = queryValue.trim();
  const normalizedQuery = trimmedQuery ? normalizeText(trimmedQuery) : "";
  const hasQuery = normalizedQuery.length > 0;

  const filteredPosts = orderedPosts.filter((post) => matchesQuery(post, normalizedQuery));
  const hasResults = filteredPosts.length > 0;
  const resultsSummary = hasQuery
    ? hasResults
      ? `${filteredPosts.length} Treffer fuer "${trimmedQuery}"`
      : `Keine Treffer fuer "${trimmedQuery}". Versuchen Sie ein anderes Stichwort.`
    : null;

  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-14 pb-16 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-sm">
            Einblicke
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Ideen, Playbooks und Datenstories fuer KI-orientierte Teams
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 md:text-base">
            Wir teilen Experimente, Workflows und Compliance-Updates, die zeigen, wie KMU-Betreiber KI sicher einsetzen.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" role="search" method="get">
            <label htmlFor="blog-search" className="sr-only">
              Artikel durchsuchen
            </label>
            <input
              id="blog-search"
              name="q"
              type="search"
              defaultValue={trimmedQuery}
              placeholder="Artikel durchsuchen"
              className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[#4B64F3] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
            >
              Suchen
            </button>
          </form>

          {resultsSummary ? (
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600">{resultsSummary}</p>
          ) : null}

          {!hasQuery && suggestedTopics.length > 0 ? (
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
              <span className="font-semibold text-neutral-600">Vorgeschlagene Themen:</span>
              {suggestedTopics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        {hasResults ? (
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredPosts.map((post) => {
              const coverStyle = post.thumb
                ? {
                    backgroundImage: `url(${post.thumb})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined;
              const tags = post.tags ?? [];
              const containerClasses = [
                "group block h-full overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#4B64F3]/30 hover:shadow-lg",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40",
              ].join(" ");

              return (
                <Link key={post.id} href={post.url} className={containerClasses}>
                  <article className="flex h-full flex-col">
                    <figure className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#B8A7FF]/30 to-[#7FD8BE]/20">
                      {coverStyle ? (
                        <div className="absolute inset-0" style={coverStyle} aria-hidden />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" aria-hidden />
                      )}
                      <span className="sr-only">Titelbild fuer {post.title}</span>
                    </figure>
                    <div className="flex h-full flex-col gap-3 p-5">
                      <div className="flex items-center justify-end text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        <span>{post.lang.toUpperCase()}</span>
                      </div>
                      <h2 className="text-base font-semibold text-neutral-900">{post.title}</h2>
                      <p className="text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
                      {tags.length > 0 ? (
                        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                          {tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-[#7FD8BE]/15 px-3 py-1 text-[#1D2AB6]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B64F3] transition group-hover:gap-3">
                          Artikel lesen
                          <span aria-hidden>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-neutral-300 bg-white/80 px-6 py-12 text-center text-sm text-neutral-600 shadow-sm">
            <p>
              Wir konnten keinen passenden Artikel finden. Schreiben Sie uns, wenn Sie ein bestimmtes Thema sehen moechten.
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
              >
                Wunschthema einreichen
              </Link>
            </div>
          </div>
        )}

        {!hasQuery ? (
          <nav aria-label="Pagination" className="mx-auto mt-12 flex max-w-6xl justify-center">
            <ul className="flex items-center gap-3 text-sm font-semibold text-neutral-600">
              <li>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-400">
                  <span aria-hidden>&lt;</span>
                  <span className="sr-only">Vorherige Seite</span>
                </span>
              </li>
              <li>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4B64F3] text-white shadow-sm">
                  1
                </span>
              </li>
              <li>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-400">
                  <span aria-hidden>&gt;</span>
                  <span className="sr-only">Naechste Seite</span>
                </span>
              </li>
            </ul>
          </nav>
        ) : null}
      </section>
    </main>
  );
}

