import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Responsible Disclosure - Obsidio",
  description:
    "Learn how to report security vulnerabilities to Obsidio, what systems are in scope, and how we work with researchers.",
};

const LAST_UPDATED = "September 24, 2025";

export default function ResponsibleDisclosurePage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Responsible Disclosure
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Partnering with researchers to keep Obsidio secure
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            This policy explains how to share potential security issues with us, what systems you can test, and how we will
            respond when you report vulnerabilities in good faith.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Introduction and Commitment to Security">
            <p>
              At Obsidio, the security of our systems and the privacy of our clients’ data are top priorities. Despite our
              best efforts to design secure software and maintain a robust infrastructure, vulnerabilities can still occur.
              We appreciate the vital role independent security researchers and our community play in identifying and
              responsibly disclosing issues.
            </p>
            <p>
              This policy outlines how to report suspected security vulnerabilities in Obsidio products, services, or
              websites, and what you can expect in return. If you believe you have found a vulnerability, please inform us
              immediately so we can protect our users and improve our services. We will not pursue legal action against
              researchers who follow this policy in good faith (inspireip.com).
            </p>
            <p>
              Obsidio does not currently operate a public bug bounty program and we do not offer financial rewards for
              disclosures (inspireip.com). With your permission, we are happy to acknowledge your contribution publicly and we
              are grateful for your help in keeping Obsidio secure.
            </p>
          </Section>

          <Section title="Scope">
            <p>This policy covers digital assets owned or operated by Obsidio. In scope are:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>Our public website (www.obsidio.com) and any subdomains under obsidio.com.</li>
              <li>Publicly accessible APIs or services we provide.</li>
              <li>Demo instances of our software or SaaS tools that do not require authentication.</li>
            </ul>
            <p>
              If you are unsure whether a system is in scope, contact us first at
              <a href="mailto:security@obsidio.com" className="text-[#4B64F3] hover:underline"> security@obsidio.com</a>.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Out of scope</h3>
            <p>The following are outside the scope of this policy:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>Physical attacks on our offices or data centers.</li>
              <li>Social engineering or phishing attacks targeting employees, contractors, or customers (revops.io).</li>
              <li>Denial of service attacks or testing that degrades performance or availability (revops.io).</li>
              <li>Spam or business logic issues without a security impact.</li>
              <li>Reports of outdated software versions without an accompanying proof of concept.</li>
              <li>Vulnerabilities in third-party services outside Obsidio’s control.</li>
            </ul>
            <p>
              Please stay within Obsidio-owned assets, avoid disrupting production systems, and do not access other users’
              data. If a test could affect others, use extreme caution or seek guidance first.
            </p>
          </Section>

          <Section title="Guidelines for Ethical Research">
            <p className="font-semibold">When investigating, please:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Do no harm:</strong> Minimize impact to Obsidio, our customers, and employees (inspireip.com). Only target your own
                accounts or test accounts and do not access data that is not yours.
              </li>
              <li>
                <strong>Avoid service disruption:</strong> Do not engage in activities that degrade, interrupt, or disable services, including
                high-volume automated scanning (inspireip.com).
              </li>
              <li>
                <strong>Protect privacy:</strong> Do not intentionally access or exfiltrate personal data. If you encounter PII, stop testing,
                remove any copies, and notify us without sharing the data (inspireip.com).
              </li>
              <li>
                <strong>Use lawful methods:</strong> Avoid social engineering, phishing, or physical attacks and comply with applicable laws
                (inspireip.com).
              </li>
              <li>
                <strong>Maintain confidentiality:</strong> Keep vulnerability details private until we have had reasonable time to remediate,
                aiming for at least 90 days of confidentiality unless we agree otherwise (inspireip.com).
              </li>
            </ul>
            <p>
              Findings derived from behavior outside these guidelines may be deemed ineligible and will not be considered good
              faith discoveries.
            </p>
          </Section>

          <Section title="How to Report a Vulnerability">
            <p>
              Email suspected vulnerabilities to
              <a href="mailto:security@obsidio.com" className="text-[#4B64F3] hover:underline"> security@obsidio.com</a> and include:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Summary:</strong> A high-level description of the vulnerability, affected systems, and potential impact (inspireip.com).
              </li>
              <li>
                <strong>Steps to reproduce:</strong> Detailed, numbered steps with relevant URLs, parameters, roles, or configurations
                (inspireip.com).
              </li>
              <li>
                <strong>Proof of concept:</strong> Optional code snippets, screenshots, or videos demonstrating the issue. Share artifacts
                privately and ensure we can access them.
              </li>
              <li>
                <strong>Impact:</strong> Describe what an attacker could achieve and how it might affect systems or users.
              </li>
              <li>
                <strong>Environment:</strong> Any relevant tooling, browser, or OS details you used (optional).
              </li>
              <li>
                <strong>Contact information:</strong> How we can reach you for updates or clarifications. Pseudonyms are welcome.
              </li>
            </ul>
            <p>
              We typically acknowledge reports within two business days. If you have not heard back within a week, please send
              a polite follow-up. We may request further details during investigation and will keep you informed of our
              progress.
            </p>
          </Section>

          <Section title="Our Pledge to Researchers">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>No legal action:</strong> We will not pursue legal action against researchers who comply with this policy while
                testing in good faith (inspireip.com).
              </li>
              <li>
                <strong>Prompt communication:</strong> We aim to acknowledge reports within 48 hours, request clarification when needed, and
                notify you once remediation is complete.
              </li>
              <li>
                <strong>Transparency:</strong> We will keep you updated on the status of your report and explain if we choose not to act on an
                issue.
              </li>
              <li>
                <strong>Credit (optional):</strong> With your permission we can publicly recognize your contribution after remediation. We also
                respect anonymity.
              </li>
              <li>
                <strong>No compensation:</strong> We currently do not offer monetary rewards. Should a bug bounty launch in the future, this
                policy will be updated.
              </li>
            </ul>
          </Section>

          <Section title="Program Guidelines & Safe Harbor">
            <p>
              For a productive collaboration, please follow these principles:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>Do not disclose vulnerabilities publicly before we have an opportunity to fix them.</li>
              <li>Do not exploit issues beyond what is necessary to demonstrate impact.</li>
              <li>Do not access or exfiltrate sensitive data; stop testing and notify us if you encounter it (inspireip.com).</li>
              <li>Use test accounts, limit traffic, and respect our users and infrastructure.</li>
              <li>Provide sufficient detail for us to reproduce findings quickly.</li>
              <li>Comply with applicable laws; this policy authorizes good-faith testing of in-scope systems only.</li>
            </ul>
            <p>
              Activities consistent with this policy are authorized, and we will defend good-faith research against third-party
              legal action where possible. If actions fall outside this policy—such as exploiting data or attempting extortion—
              safe harbor protections are revoked and we reserve all legal rights.
            </p>
          </Section>

          <Section title="Feedback and Questions">
            <p>
              For questions about this policy, uncertainty about scope, or suggestions for improvement, reach out to
              <a href="mailto:security@obsidio.com" className="text-[#4B64F3] hover:underline"> security@obsidio.com</a> before starting your
              research. We value collaboration with the security community, and together we can keep Obsidio safe and
              trustworthy.
            </p>
            <p>Thank you for helping us keep Obsidio secure!</p>
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