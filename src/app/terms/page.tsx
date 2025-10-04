import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Use - Obsidio",
  description:
    "Understand the conditions that govern how you may access and use Obsidio's website, content, and services.",
};

const LAST_UPDATED = "September 24, 2025";

export default function TermsPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">Terms of Use</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            The rules for visiting and using our website
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            These Terms describe what you can expect from Obsidio's site, what we expect from you, and how we handle changes or issues.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Acceptance of Terms">
            <p>
              Welcome to Obsidio's website. By accessing and using our website (the "Site"), you agree to comply with and be bound by these Terms of Use (the "Terms"). If you do not agree with these Terms, please do not use this website. These Terms apply to your use of our Site and any content, functionality, and services offered on or through the Site.
            </p>
            <p>
              We may update or revise these Terms from time to time at our discretion. We will indicate the date of the latest revision at the top of this page. Your continued use of the Site after any such changes constitutes acceptance of the new Terms, so please check this page periodically for updates. If we make significant changes, we may also provide additional notice (such as a notice on our homepage) (see clarityn.at).
            </p>
          </Section>

          <Section title="About Obsidio">
            <p>
              Obsidio is an AI digital agency based in Vienna, Austria, offering services including AI consulting, workflow automation, SaaS solution development, and chatbot integration. The content on our Site is provided for general information about our company and services to business owners and prospective clients. No offer or contract is made on this Site; any engagement of our services will be subject to a separate agreement. These Terms govern only your use of this Site.
            </p>
          </Section>

          <Section title="Permitted Use of the Site">
            <p>
              We grant you a limited, non exclusive, non transferable license to access and use our Site for your own legitimate personal or internal business purposes (for example, to learn about our services or contact us). You agree to use the Site only for lawful purposes and in accordance with these Terms. In particular, you must not:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Violate laws or rights:</strong> Use of the Site must not violate any applicable law or regulation, or infringe the rights of any person or entity, including intellectual property rights and privacy rights.
              </li>
              <li>
                <strong>Abuse, disrupt, or damage the Site:</strong> You must not introduce malware, attempt to gain unauthorized access, interfere with the proper working of the Site, or attack the Site via denial of service or similar tactics. Such activity may be illegal and will be reported to the appropriate authorities.
              </li>
              <li>
                <strong>Misrepresent or defraud:</strong> You must not pretend to be someone you are not when using the Site or communicating with us. Providing false information through our contact forms or attempting to deceive us or other users is prohibited.
              </li>
              <li>
                <strong>Collect data without permission:</strong> You must not use automated means (such as bots, scrapers, or spiders) to access the Site or collect data without our express permission. You also must not harvest information about other visitors without their and our consent.
              </li>
            </ul>
            <p>
              If the Site includes any interactive features, you agree to use such features only to post content that is proper, relevant, and respectful. We reserve the right to suspend or terminate your access to the Site (or take other appropriate actions) if you violate these acceptable use standards or any other provision of these Terms. You may also be held responsible for any losses or damages incurred by Obsidio as a result of your violation.
            </p>
          </Section>

          <Section title="Intellectual Property Rights">
            <p>
              All content and materials on the Site, including text, graphics, logos, icons, images, audio clips, video, software code, layout, and design, are the property of Obsidio or its licensors and are protected by intellectual property laws. Obsidio retains all rights, title, and interest in and to its content.
            </p>
            <p>
              <strong>Obsidio trademarks:</strong> "Obsidio" and our associated logos and slogans are trademarks or service marks owned by us. You are not granted any license or right to use any Obsidio trademarks displayed on the Site without our prior written permission. All other names or logos on the Site that are not owned by us are the property of their respective owners.
            </p>
            <p>
              <strong>Copyright and limited license:</strong> You may electronically copy or print reasonable portions of the Site content for your personal use or internal business use only, such as for evaluating our services or saving information for reference. However, you must not remove any copyright or proprietary notices from copies of content. Any other use of the content, including reproduction, modification, distribution, republication, public display, or performance, without our prior written consent is strictly prohibited (see clarityn.at). You may not create derivative works from the content or use any illustrations, photographs, video, or audio separately from the accompanying text without permission.
            </p>
            <p>
              If you download any software or files from the Site, the file is licensed to you by Obsidio for your personal use only. You may not redistribute or exploit it commercially. Obsidio reserves all rights not expressly granted in these Terms.
            </p>
          </Section>

          <Section title="Privacy and Data Protection">
            <p>
              Your use of our Site is also subject to our Privacy Policy, which describes how we collect and handle any personal information you may provide to us. Our Privacy Policy is incorporated into these Terms by reference. By using the Site, you consent to our collection and use of information as outlined in the Privacy Policy. Please review the Privacy Policy to understand our practices and contact us if you have any concerns.
            </p>
          </Section>

          <Section title="Disclaimers">
            <p>
              The content on our Site is provided for general informational purposes only and does not constitute technical, financial, or legal advice. You should consult with a qualified professional before relying on information on our Site to make decisions.
            </p>
            <p>
              Obsidio strives to keep the information on this Site accurate, up to date, and useful. However, the Site's content is provided "as is" and "as available", without any warranties of any kind, either express or implied. We make no guarantee that the information is complete, correct, or current (see clarityn.at).
            </p>
            <p>
              Obsidio does not warrant that the Site will be available without interruption or error, that it will be secure or free from viruses or harmful components, or that the content will meet your expectations. Any reliance you place on such information is strictly at your own risk.
            </p>
            <p>
              You agree that your access to and use of the Site is at your own risk. Obsidio and its team members shall not be liable for any damages of any kind arising from or in connection with your use of, or inability to use, this Site or any content on it (see clarityn.at). Some jurisdictions do not allow the exclusion of certain warranties or limitation of certain liabilities, so some of the above disclaimers may not fully apply to you. Nothing in these Terms excludes or limits our liability for any liability that cannot be excluded by law.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, in no event will Obsidio be liable for any damages that exceed the amount you have paid (if any) to use this Site, or EUR 100, whichever is greater. Given that you are using the Site for free, we do not assume any substantive financial liability for your use of the Site. This limitation will not apply to any liability that cannot legally be limited.
            </p>
          </Section>

          <Section title="Indemnification">
            <p>
              You agree to indemnify and hold harmless Obsidio and its affiliates, and each of their respective officers, directors, employees, and agents, from and against any and all claims, liabilities, losses, expenses, damages, and costs (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate with us. This obligation will survive any termination of your use of the Site or these Terms.
            </p>
          </Section>

          <Section title="Third-Party Links and Resources">
            <p>
              Our Site may contain links to third-party websites or resources for your convenience. These links do not imply any endorsement or approval of the third-party sites or their content by Obsidio (see clarityn.at). We have no control over the content of those external sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any third-party website linked from our Site, you do so entirely at your own risk.
            </p>
            <p>
              References to third-party products or services on our Site are for information only and should not be construed as an endorsement. Any dealings you have with advertisers or other third parties found on or through our Site are solely between you and that third party.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              These Terms of Use are effective unless and until terminated by either you or us. You may terminate these Terms at any time by ceasing all use of our Site. We may terminate or suspend your access to the Site without prior notice if we believe you have breached any provision of these Terms or if we decide to discontinue the Site. Upon termination, the disclaimers, limitations of liabilities, and indemnity provisions stated in these Terms will survive.
            </p>
          </Section>

          <Section title="Governing Law and Jurisdiction">
            <p>
              These Terms of Use and any disputes arising out of or related to the Site or these Terms will be governed by and construed in accordance with the laws of Austria, without giving effect to its conflict of laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.
            </p>
            <p>
              Any legal actions, proceedings, or disputes arising in connection with your use of the Site or these Terms shall be brought in the competent courts of Vienna, Austria, and you consent to the exclusive jurisdiction of such courts. If you are using the Site as a consumer, any mandatory consumer protection rights remain unaffected.
            </p>
          </Section>

          <Section title="International Use">
            <p>
              Obsidio operates this Site from Austria. We make no representations that the content on the Site is appropriate or available for use in other locations. If you access the Site from outside Austria, you do so on your own initiative and are responsible for compliance with local laws.
            </p>
          </Section>

          <Section title="Severability">
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be limited to the minimum extent necessary so that the remainder of the Terms will continue in full force and effect.
            </p>
          </Section>

          <Section title="No Waiver">
            <p>
              No failure or delay by Obsidio in exercising any right, power, or privilege under these Terms shall operate as a waiver thereof. Any waiver of any provision of these Terms will be effective only if in writing and signed by an authorized representative of Obsidio.
            </p>
          </Section>

          <Section title="Entire Agreement">
            <p>
              These Terms of Use, together with our Privacy Policy and any other legal notices on the Site, constitute the entire agreement between you and Obsidio regarding your use of the Site, and supersede any prior or contemporaneous understandings and agreements related to the subject matter herein.
            </p>
          </Section>

          <Section title="Contact Information">
            <p>
              This website is operated by Obsidio, Vienna, Austria. If you have any questions or comments regarding the Site or these Terms, please contact us at <a href="mailto:contact@obsidio.com" className="text-[#4B64F3] hover:underline">contact@obsidio.com</a>. You may also reach us by mail at our business address in Vienna (see our Privacy Policy or Impressum for the full address).
            </p>
            <p>Thank you for visiting Obsidio's website and reviewing these Terms of Use.</p>
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
