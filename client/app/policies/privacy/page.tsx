import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0a0d12] text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mt-10 mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="text-sm text-white/60 mb-4">
          <Link href="/" className="hover:underline text-white/80">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Privacy Policy</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#7feccf]">
          Privacy Policy
        </h2>

        <p className="text-white/70">
          This Privacy Policy explains how Oplyx Technologies collects, uses,
          discloses, and protects information about our clients and visitors. By
          accessing or using our website, you agree to this policy.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              company name, etc.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, clicks,
              and browser/device data.
            </li>
            <li>
              <strong>Cookies:</strong> For enhancing user experience and
              analytics (you may opt-out).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>To provide and maintain our services.</li>
            <li>To respond to inquiries and offer customer support.</li>
            <li>To personalize user experience and content.</li>
            <li>To analyze site performance and improve our offerings.</li>
            <li>
              To send updates, newsletters, and promotional materials (only with
              your consent).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Sharing Your Information
          </h2>
          <p className="text-white/70">
            We never sell your data. We only share data with trusted third-party
            services essential for running our business (e.g., hosting
            providers, analytics tools, payment processors). All partners follow
            strict confidentiality and data protection standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Retention</h2>
          <p className="text-white/70">
            We retain your personal data only as long as necessary for the
            purposes stated in this policy or as required by law. You may
            request deletion of your data anytime by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Request access to your data.</li>
            <li>Request correction or deletion.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request a copy of the data we hold.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Data Security</h2>
          <p className="text-white/70">
            We use industry-standard security measures, including encryption,
            access controls, and firewalls, to protect your data. However, no
            method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Cookies & Tracking</h2>
          <p className="text-white/70">
            We use cookies and tracking tools like Google Analytics to enhance
            your browsing experience and analyze website traffic. You can
            control cookie preferences in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Changes to This Policy
          </h2>
          <p className="text-white/70">
            We may update this Privacy Policy from time to time. Changes will be
            posted here with the updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p className="text-white/70">
            For questions about this policy or to exercise your rights, contact
            us at:
          </p>
          <p className="text-white/70 mt-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@oplyx.tech"
              className="text-[#7feccf] hover:underline"
            >
              hello@oplyx.tech
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
