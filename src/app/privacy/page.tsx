import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy - Obsidio",
  description:
    "Learn how Obsidio collects, uses, and protects the personal data we receive through our site and services, in line with GDPR.",
};

const LAST_UPDATED = "September 24, 2025";

export default function PrivacyPage() {
  return (
    <main className="bg-[#F6F8FB] text-neutral-900">
      <section className="px-6 pt-10 md:px-10 md:pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[28px] bg-white px-6 py-8 shadow-lg ring-1 ring-black/5 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, rgba(184,167,255,0.35), rgba(127,216,190,0.35))" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Privacy Policy
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            How we protect the data you share with us
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-neutral-700 md:text-base">
            We collect only the details we need, handle them with care, and give you straightforward ways to stay in control.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10">
          <Section title="Introduction">
            <p>
              Obsidio ("we", "us" or "our") is committed to protecting your privacy and handling your personal information in a transparent and secure manner. This Privacy Policy explains what personal data we collect from you, how we use it, and your rights under the EU General Data Protection Regulation (GDPR) and other applicable laws. We process personal data in line with core GDPR principles - for example, we only collect data for specific legitimate purposes, not more than necessary, keep it accurate and up to date, store it only as long as needed, and secure it appropriately (see ironcladapp.com). By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <p>
              <strong>Data Controller:</strong> Obsidio, based in Vienna, Austria, is the organization responsible for the processing of your personal data (the "data controller") under this Privacy Policy. If you have any questions or requests regarding your personal data, you can contact us at privacy@obsidio.com.
            </p>
          </Section>

          <Section title="Personal Data We Collect">
            <p>We only collect minimal personal data from you, and always directly from you with your knowledge:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Email Address:</strong> When you request our free e-book, we ask for your email address so we can send it to you. Likewise, if you contact us via our website contact form, we collect your email address (and any other contact details you choose to provide, such as your name or phone number) in order to respond.
              </li>
              <li>
                <strong>Inquiry Details:</strong> If you fill out our contact form, we will receive the information you include in your message (which may contain personal data you provide about your business needs, and similar context). Please only share what is necessary for us to assist you.
              </li>
              <li>
                <strong>Technical Data:</strong> When you visit our website, certain technical data may be collected automatically by our web hosting platform, such as your IP address and browser type, for security and logging purposes. We do not use this data to identify you, but note that information like an IP address can be considered personal data under the GDPR (see europa.eu). This technical data is collected to ensure the website functions properly and to maintain the security of our site.
              </li>
            </ul>
            <p>
              We do not collect any sensitive personal data (such as information on race, political opinions, or health), and we do not create user accounts or allow users to upload content. The personal information described above is the only data we collect about you. We also do not use any cookies or tracking technologies on our site that collect personal data beyond what is outlined in this policy (see the Cookie Preferences section for more detail).
            </p>
          </Section>

          <Section title="Purpose and Legal Basis for Processing">
            <p>We only process your personal data for clear and lawful purposes. In particular:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Providing Requested Materials:</strong> If you provide your email to receive our free e-book, we use your email address to send you the e-book and any accompanying information. The legal basis for this processing is your consent, which you give us by submitting your email for the e-book (Art. 6(1)(a) GDPR).
              </li>
              <li>
                <strong>Responding to Inquiries:</strong> If you contact us via the website (or by email), we will process the personal details you provided (like your email and message) in order to respond to your request and communicate with you. The legal basis for this is our legitimate interest in responding to potential client inquiries and running our business (Art. 6(1)(f) GDPR). When you voluntarily contact us, we understand that you expect us to use your information to reply, which constitutes a legitimate interest that does not override your rights. In some cases, processing your inquiry may also be considered pre-contractual measures at your request (Art. 6(1)(b) GDPR), for example if you ask for a service proposal or quote.
              </li>
              <li>
                <strong>Marketing Communications (Opt-in):</strong> Aside from sending the requested e-book, we will only send you additional marketing emails (such as newsletters or information about our services) if you have given explicit consent to receive such communications. If you do opt in, you can withdraw your consent at any time (for example via an unsubscribe link in our emails), and we will stop sending you emails. We will not spam you or use your email for any purpose you did not agree to.
              </li>
              <li>
                <strong>Site Operation and Security:</strong> As noted, our website may automatically collect some technical data (like IP addresses in server logs) to operate the site and keep it secure. The legal basis for this would be our legitimate interests in maintaining the security and functionality of our website (Art. 6(1)(f) GDPR). This is standard practice to prevent abuse of the site and diagnose technical issues. We do not use this data for marketing or to analyze your behavior, only to ensure the website runs smoothly and safely.
              </li>
            </ul>
            <p>We will not use your personal data for any purpose that is incompatible with the above purposes without asking for your permission first. We do not engage in automated decision-making or profiling with your personal data.</p>
          </Section>

          <Section title="Disclosure of Your Data to Third Parties">
            <p>We value your privacy and do not sell, rent, or trade your personal information to any third parties for marketing or other purposes. We only share your data in very limited scenarios, such as:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Service Providers ("Processors"):</strong> We may share your information with trusted third-party service providers that help us operate our business and website. For example, if we use an email service platform to send out the e-book or newsletters, or a website hosting company to host our contact form submissions, those providers will process personal data on our behalf solely for the purpose of providing their service to us. These providers are bound by contracts (Data Processing Agreements under Art. 28 GDPR) to process your data securely and only according to our instructions. We ensure any such service providers meet high data protection standards.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose personal data if we are legally compelled to do so - for instance, responding to a court order, subpoena, or other lawful request by public authorities. In such cases, we will only disclose the minimum amount of information necessary and only when we have a good-faith belief that the law requires us to do so.
              </li>
              <li>
                <strong>Business Transfers:</strong> If in the future Obsidio is involved in a merger, acquisition, investment due diligence, or sale of all or part of its assets, your personal data may be transferred to the involved third parties (for example, the new owner) as part of that transaction. If that happens, we will ensure that your data remains protected by this Privacy Policy (the acquiring party would have to uphold the same commitments or seek your consent if they plan any materially new uses of the data).
              </li>
              <li>
                <strong>Enforcing Rights and Security:</strong> In rare cases, we may share information as necessary to enforce our legal rights (for example, to assert or defend against legal claims) or to investigate and prevent unlawful activities (such as fraud or security incidents). This could involve sharing data with law enforcement or cybersecurity consultants.
              </li>
            </ul>
            <p>
              Aside from the above, the only parties that have routine access to your personal data are our own staff and contractors who need the information to perform their work (such as responding to you or administering our mailing list). All such personnel are bound by confidentiality and trained on data protection.
            </p>
          </Section>

          <Section title="International Data Transfers">
            <p>
              Obsidio is based in the European Union (Austria), and we primarily process your data within the EU. However, if you are located outside of Austria or if we use a service provider based in another country, your personal data might be transferred across international borders. For example, if we use an email newsletter service or cloud platform headquartered in the United States or another country outside the European Economic Area (EEA), the information you provide (such as your email address) may be transferred to and stored on servers in that country.
            </p>
            <p>
              If we transfer personal data out of the EU or EEA, we will ensure that adequate safeguards are in place as required by GDPR Chapter V. This means we will only transfer data to countries that the European Commission has deemed to have an adequate level of data protection, or we will use approved mechanisms such as Standard Contractual Clauses (SCCs) and implement additional measures if needed. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy, and that no transfer of your personal data takes place to an organization or a country unless appropriate safeguards are in place to protect your information (see sunnen.eu). For instance, our contracts with service providers will include commitments to uphold EU privacy standards for any data transferred outside the EU.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, and to comply with applicable laws. This means:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Email addresses (for e-book or newsletter):</strong> If you provided your email to receive an e-book or to subscribe to communications, we will retain your email address until you unsubscribe or withdraw your consent, or until we no longer send communications. If you never opt in to any ongoing communications, we will use your email only to send the requested e-book and perhaps a short follow-up, and then we may delete or anonymize it. You can request deletion of your email from our list at any time, and we will promptly honor that (except retaining a record of your opt-out, if necessary, to ensure we do not email you again).
              </li>
              <li>
                <strong>Contact form inquiries:</strong> If you contact us with a question or business inquiry, we will retain the correspondence and your contact details for as long as needed to respond fully and follow up. Typically, we may keep such inquiry records for up to one year in case you have additional questions or become a client (or longer if it leads to a contract, or if needed for legal record keeping). If we determine that no further business relationship will occur, we will periodically review and securely delete personal contact information that is no longer needed.
              </li>
              <li>
                <strong>Technical logs:</strong> Our web server logs and security logs that may contain IP addresses are generally kept for a short period (usually a few weeks) for the purpose of monitoring and securing the website, unless a particular log is needed longer for security investigations. These logs are then automatically overwritten or deleted.
              </li>
            </ul>
            <p>
              We also will retain personal data as required by law. For example, if a law requires us to keep certain business correspondence or transaction records for a set period (such as for tax or accounting purposes), we will comply with those retention requirements. In all cases, once the applicable retention period expires, we will erase or anonymize your personal data in a secure manner. We continuously aim to ensure we do not keep personal data longer than necessary for the purpose collected.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              As an individual ("data subject") in the EU or under applicable data protection laws, you have certain rights regarding your personal data that we hold. We are committed to honoring your rights and have processes in place to enable you to exercise them. Your principal data protection rights include:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Right of Access:</strong> You have the right to request confirmation of whether we are processing personal data about you, and if so, to obtain a copy of the data we hold about you, as well as information about how we use it (see europa.eu). This allows you to know and verify what information we have.
              </li>
              <li>
                <strong>Right to Rectification:</strong> If any of your personal data that we have is incorrect or incomplete, you have the right to have it corrected or updated without undue delay. We want to ensure we have accurate information, so please feel free to reach out if you need to update your contact details.
              </li>
              <li>
                <strong>Right to Erasure:</strong> You have the right to request that we delete your personal data in certain circumstances - for example, if the data is no longer needed for the purposes for which it was collected, or if you withdraw consent and we have no other lawful basis to continue processing (see europa.eu). This is sometimes called the "right to be forgotten." We will honor valid erasure requests and will also take steps to inform any third parties processing your data (on our behalf) to delete it as well. Keep in mind there are some exceptions - we might retain minimal information if required for legal obligations or legitimate interests (we will inform you if so).
              </li>
              <li>
                <strong>Right to Restriction of Processing:</strong> You have the right to ask us to restrict (that is, pause) the processing of your personal data in certain situations. For instance, if you contest the accuracy of your data or have objected to processing, you can request a restriction while the issue is resolved. During restriction, we will store your data securely and not use it except to the extent allowed (for example, to protect rights or comply with laws) (see europa.eu).
              </li>
              <li>
                <strong>Right to Object:</strong> You have the right to object to our processing of your personal data when we do so on the legal basis of legitimate interests (Art. 6(1)(f) GDPR). If you lodge an objection, we will review it and unless we have a compelling legitimate reason that overrides your interests or rights, we will stop the processing in question (see europa.eu). You also have an absolute right to object to any processing for direct marketing purposes. In practice, this means if you opt out or unsubscribe from marketing emails, we will cease such use of your data immediately.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> For any personal data you provided to us and which we process by automated means on the basis of your consent or a contract, you have the right to obtain that data from us in a structured, commonly used, machine readable format, and you have the right to have that data transmitted to another controller where technically feasible (see europa.eu). In simpler terms, you can ask for a copy of the data you gave us in a format like CSV or JSON so that you can reuse it elsewhere, or we can send it directly to another company at your request, if applicable.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> If we are processing any of your personal data based on your consent, you have the right to withdraw that consent at any time. For example, if you consented to receive our newsletter, you can unsubscribe at any time and we will treat that as a withdrawal of consent. Withdrawal of consent will not affect the lawfulness of processing we carried out before you withdrew, and it will not affect processing under other bases, but once you withdraw consent we will stop the specific processing that was based on consent. There is no penalty or detriment to you for withdrawing consent.
              </li>
              <li>
                <strong>Right to Lodge a Complaint:</strong> If you believe your data protection rights have been violated or you have serious concerns about how we handle your data, you have the right to lodge a complaint with a supervisory data protection authority. You may do so in the EU Member State where you reside, work, or where the issue occurred. As Obsidio is based in Austria, you can also contact the Austrian Data Protection Authority (Österreichische Datenschutzbehörde). We would, however, appreciate the chance to address your concerns first - so please feel free to contact us directly, and we will do our best to resolve any issues.
              </li>
            </ul>
            <p>
              We will not charge you for exercising your rights (all requests are generally free of charge). In certain cases, we may need to request specific information from you to verify your identity before we fulfill your request - this is to ensure we do not disclose data to an unauthorized person. We will respond to your requests as soon as possible and in any event within the timeframe required by law (typically one month, with the possibility to extend by two further months for complex requests).
            </p>
          </Section>

          <Section title="Cookies and Tracking">
            <p>
              Currently, we do not use any analytics or advertising cookies on our website. In fact, at this time we do not utilize any cookies except those that may be strictly necessary for the basic functioning of the site (for example, if our site uses a session cookie to remember your selections or to enable form submissions, that would fall under necessary cookies). Strictly necessary cookies do not require consent because they are essential to deliver the service you requested (see cambridge.org). Other than such essential technical cookies (if any), our site does not set cookies on your device. We do not use Google Analytics, Facebook pixels, or similar tracking technologies yet. This means when you visit our site, you will not see targeted advertising or analytics scripts gathering data about your behavior.
            </p>
            <p>
              However, we want to be transparent and forward compatible with future improvements. As our company grows, we may decide to implement analytics tools (for example, to understand our website traffic or improve user experience) or other cookies. If we introduce any non essential cookies or trackers, we will update this Privacy Policy and our cookie notices, and obtain your consent before activating such cookies on your device (see cambridge.org). Any future use of cookies that are not strictly necessary will follow applicable law - meaning we will inform you about the types of cookies and data they collect, and you will have the opportunity to choose your preferences. We will never deploy analytics or marketing cookies without your knowledge and consent. For more information, please see our Cookie Preferences page, which explains the types of cookies we might use and how you can manage your preferences.
            </p>
            <p>
              If you prefer, you can always control cookies through your web browser settings as well. Most browsers allow you to delete cookies or prevent them from being stored. You can also usually block third party cookies specifically. Please note that if you disable all cookies, some parts of our site (or any website) might not function properly, especially any essential features (see pwc.com). Since we currently use virtually no cookies, you should not encounter issues on our site, but this is a general reminder for the future.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We take the security of your personal data very seriously. We have implemented a variety of technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. These include industry standard practices such as using secure servers, encryption of data in transit (our website is protected via HTTPS), firewalls, and access controls to our data storage. We limit access to personal data to only those team members and service providers who need it to perform their duties, and they are subject to confidentiality obligations. We also maintain procedures to deal with any suspected data security breach, including processes to notify users and authorities as required by GDPR in the event of a qualifying breach.
            </p>
            <p>
              While we strive to use commercially acceptable means to protect your personal data, please be aware that no method of transmission over the Internet or method of electronic storage is 100 percent secure (see sunnen.eu). We therefore cannot guarantee absolute security of information. However, we continuously update and evaluate our security measures to adapt to new threats and to ensure a high level of protection. You also play a role in keeping your data secure: please do not send sensitive personal information to us via unencrypted email, and notify us immediately if you suspect any unauthorized access to your personal data related to Obsidio.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our website and services are intended for business professionals (such as small and medium business owners) and are not directed at children. We do not knowingly collect personal data from anyone under the age of 16. If you are under 16, please do not submit any personal information to us without verifiable parental consent. In the event we discover that we have collected personal information from a child under 16 without such consent, we will promptly delete it. If you are a parent or guardian and believe your child has provided us with personal data, please contact us so we can take appropriate action.
            </p>
          </Section>

          <Section title="Updates to this Privacy Policy">
            <p>
              We may update or revise this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we do so, we will post the revised Privacy Policy here with a new "Last updated" date. If the changes are significant, we will provide a more prominent notice (such as a banner on our website or an email notification, if appropriate). We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
            <p>
              If we make material changes to the way we process your personal data, we will notify you in advance and, if required by law, obtain your consent. Your continued use of our website or services after any update to this Policy will be considered acceptance of the changes, to the extent permitted by law.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please do not hesitate to contact us. We are here to help and value your feedback. You can reach our privacy team at:
            </p>
            <address className="not-italic text-sm text-neutral-700 md:text-base">
              Obsidio (Attn: Privacy)<br />
              1234 Business Address Rd. (If applicable)<br />
              Vienna, Austria<br />
              Email: <a href="mailto:privacy@obsidio.com" className="text-[#4B64F3] hover:underline">privacy@obsidio.com</a>
            </address>
            <p>We will respond as soon as possible, and in any event within the timeframes required by law. Thank you for entrusting Obsidio with your information - we are dedicated to keeping that trust.</p>
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
