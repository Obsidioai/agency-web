import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cookie Preferences - Obsidio",
  description:
    "Understand how Obsidio uses cookies today, how categories differ, and how you can manage your preferences now and in the future.",
};

const LAST_UPDATED = "September 24, 2025";

export default function CookiePreferencesPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Cookie Preferences
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Your choices for cookies on Obsidio.com
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            Learn what cookies are, which ones we currently use (only the essentials), and how you can control future
            categories as we expand our tooling.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Your Privacy and Cookie Preferences">
            <p>
              Obsidio is committed to delivering an excellent user experience while respecting your privacy. This page
              explains what cookies are, how we currently rely on them (minimally), and how you will be able to manage
              preferences for different cookie categories going forward.
            </p>
          </Section>

          <Section title="What Are Cookies?">
            <p>
              Cookies are small text files that websites send to your browser and store on your device. They help websites
              work efficiently, remember preferences, and collect usage insights. Cookies may be set by the site you visit
              (first-party cookies) or by third-party services integrated into that site. Every cookie serves a purpose Â– some
              are essential for basic functionality, while others support personalization, analytics, or advertising.
            </p>
          </Section>

          <Section title="Our Current Cookie Use">
            <p>
              Right now, Obsidio only uses cookies that are strictly necessary for the operation of the site. We do not deploy
              analytics, advertising, or other optional cookies, meaning we are not tracking your behavior for statistics or
              marketing. Aside from essential cookies (if any) that enable core features, nothing else is stored on your
              device without consent. Because of that, you wonÂ’t see an optional-cookie banner today. When we introduce new
              cookie categories in the future (for example, analytics to understand site performance), this page and our
              consent flows will be updated accordingly (cambridge.org).
            </p>
          </Section>

          <Section title="Cookie Categories">
            <p>
              Cookies are typically grouped into categories that you can manage individually. Here is what each category means
              and how Obsidio plans to handle them:
            </p>
            <article className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Strictly Necessary Cookies (Always Active)</h3>
                <p>
                  Essential for the basic functionality and security of the site and cannot be disabled from within our
                  systems (cambridge.org). They respond to actions you take Â– such as submitting a contact form or maintaining
                  a login. They do not store personal information beyond what is required for their function. Blocking them via
                  your browser may break parts of the site. Current status: we may set a minimal session identifier, but no
                  other cookies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Functional Cookies</h3>
                <p>
                  These enable enhanced functionality or personalization, like remembering language preferences or layouts. They
                  can be set by us or by third-party services embedded on the site. Disabling them can reduce convenience or
                  disable certain features. Current status: not in use. If introduced, they will remain optional and require
                  consent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Analytics / Performance Cookies</h3>
                <p>
                  Analytics cookies collect aggregated, anonymous information about how visitors use the site Â– such as popular
                  pages or error rates Â– so we can improve content and performance. They are optional and will only be set if
                  you opt in (cambridge.org). Current status: none deployed. We will request consent before launching any
                  analytics tooling.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Marketing / Advertising Cookies</h3>
                <p>
                  Used to deliver more relevant ads and measure campaign effectiveness. These cookies are typically set by
                  advertising partners and track browsing habits across sites. They are optional and will only activate with
                  explicit consent. Current status: not used today.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Other Third-Party Cookies</h3>
                <p>
                  Some features, such as embedded videos or social sharing tools, may set additional cookies that fall under the
                  categories above. These would only trigger if you interact with the feature, and we will provide clear
                  information and consent options beforehand.
                </p>
              </div>
            </article>
          </Section>

          <Section title="Managing Your Cookie Preferences">
            <p>
              Once we introduce non-essential cookies, you will see a consent banner that lets you enable or disable each
              category (apart from Strictly Necessary, which remain active). You will also have access to a "Cookie Settings"
              link Â– typically in the footer Â– to adjust your choices at any time. We will honor your selections by only
              loading cookies in the categories you approve.
            </p>
            <p>
              <strong>Browser controls:</strong> You can also manage cookies through your browserÂ’s privacy settings (pwc.com). Most browsers
              allow you to block or delete cookies, either broadly or on a per-site basis. Keep in mind that blocking all
              cookies may interfere with essential functions Â– including our ability to remember your preferences Â– because
              that itself relies on a necessary cookie. Consider allowing essential cookies while blocking others until you
              grant consent.
            </p>
            <p>
              <strong>Do Not Track signals:</strong> Some browsers provide a Do Not Track option, but there is no industry consensus on how to
              interpret it. Given our minimal cookie use today, you are effectively not being tracked. If we introduce tracking
              technologies, your explicit preferences set via our consent tool will take precedence, and we will update this
              page if our approach changes.
            </p>
          </Section>

          <Section title="Future Updates and More Information">
            <p>
              We will update this page whenever our cookie practices change Â– for example, if we implement analytics or launch
              advertising campaigns involving cookies. The "Last updated" date will reflect any revisions. We encourage you to
              review this page periodically.
            </p>
            <p>
              Helpful resources:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <a href="https://www.aboutcookies.org" className="text-[#4B64F3] hover:underline">
                  AllAboutCookies (aboutcookies.org)
                </a>
                Â– guides for managing cookies in popular browsers (pwc.com).
              </li>
              <li>
                <a href="https://www.youronlinechoices.eu" className="text-[#4B64F3] hover:underline">
                  YourOnlineChoices.eu
                </a>
                Â– EU-based opt-out portal for many advertising cookies.
              </li>
              <li>
                <a href="https://optout.networkadvertising.org" className="text-[#4B64F3] hover:underline">
                  Network Advertising Initiative opt-out
                </a>
                Â– additional controls for targeted advertising networks.
              </li>
            </ul>
            <p>
              Note: opting out through these services may set an opt-out cookie. If you clear cookies, you may need to repeat
              the process.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              Questions about our cookie use or managing your preferences? Contact us at
              <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline"> privacy@obsidio.com</a> and we will be glad to
              help.
            </p>
            <p>
              Thank you for taking the time to review our Cookie Preferences. As Obsidio grows, we will continue to deploy
              analytics or personalization features thoughtfully, giving you transparent control over your data.
            </p>
            <p>Happy browsing Â– with or without cookies!</p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8 md:py-7">
      <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm text-neutral-700 md:text-base">{children}</div>
    </article>
  );
}
