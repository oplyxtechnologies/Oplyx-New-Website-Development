export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Oplyx Technologies",
            url: "https://www.oplyx.tech",
            logo: "https://www.oplyx.tech/oplyxlogo2.svg", // Replace with actual logo
            sameAs: [
              "https://www.linkedin.com/company/oplyxtech",

              "https://x.com/oplyxtech", // optional
              "https://www.instagram.com/oplyxtechnologies/",
              "https://www.facebook.com/profile.php?id=61572351668846",
            ],
          }),
        }}
      />
    </>
  );
}
