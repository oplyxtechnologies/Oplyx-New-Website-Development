import Link from "next/link";
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d12] text-white px-6 md:px-12 py-20">
      <div className="max-w-4xl mt-10 mx-auto space-y-8">
        <div className="text-sm text-white/60 mb-4">
          <Link href="/" className="hover:underline text-white/80">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Privacy Policy</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#7feccf]">
          Terms of Service
        </h2>
        <p className="text-white/70 mb-8">
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of the Oplyx Technologies website and services. By accessing or
          using our platform, you agree to be bound by these Terms.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Eligibility</h2>
            <p className="text-white/70">
              You must be at least 18 years old or the age of majority in your
              jurisdiction to use our services. By using Oplyx, you confirm that
              you meet these requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Services Offered</h2>
            <p className="text-white/70">
              Oplyx Technologies provides digital solutions including website
              development, mobile app development, UI/UX design, branding, and
              consulting. We reserve the right to modify or discontinue services
              at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <p className="text-white/70">
              You agree to provide accurate information, respect all applicable
              laws, and refrain from interfering with the security or
              functionality of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              4. Intellectual Property
            </h2>
            <p className="text-white/70">
              All content, designs, code, trademarks, and branding elements are
              the property of Oplyx Technologies unless otherwise stated.
              Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Confidentiality</h2>
            <p className="text-white/70">
              Any information shared with us during the project or consultation
              phase will be treated with confidentiality and not disclosed to
              third parties without consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              6. Payments and Invoicing
            </h2>
            <p className="text-white/70">
              Payments for services must be made as per the agreed schedule.
              Late payments may incur additional fees or suspension of services.
              All invoices are issued electronically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
            <p className="text-white/70">
              We reserve the right to suspend or terminate your access to our
              services at our discretion if these Terms are violated or in cases
              of abusive or unlawful behavior.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              8. Limitation of Liability
            </h2>
            <p className="text-white/70">
              Oplyx Technologies shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your
              use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Modifications</h2>
            <p className="text-white/70">
              These Terms may be updated occasionally to reflect changes in our
              business or legal requirements. Any updates will be posted on this
              page with a revised date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
            <p className="text-white/70">
              These Terms are governed by the laws of Nepal. Any disputes
              arising under or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts in Kathmandu.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">11. Contact</h2>
            <p className="text-white/70">
              For questions or concerns about these Terms, please contact us at{" "}
              <a
                href="mailto:oplyxtechnologies@gmail.com"
                className="text-[#7feccf] underline"
              >
                oplyxtechnologies@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
