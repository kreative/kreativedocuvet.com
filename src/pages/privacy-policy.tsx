import { useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function PrivacyPolicy() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <NextSeo
        title="Privacy Policy"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
      />
      <Navbar />
      <Container>
        <div
          className="pb-24"
          name="termly-embed"
          data-id="d3c01e11-086a-46d9-a515-d1fdc64cd60a"
          data-type="iframe"
        ></div>
      </Container>
      <Footer />
    </div>
  );
}
