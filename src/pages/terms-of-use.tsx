import { useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function TermsOfUse() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <NextSeo
        title="Terms of Use"
        description="Read our terms of use to understand the rules and guidelines for using our website and services."
      />
      <Navbar />
      <Container>
        <div
          className="pb-24"
          name="termly-embed"
          data-id="6f8cbd16-e5a6-4b1e-87f5-e99d8aaeff17"
          data-type="iframe"
        ></div>
      </Container>
      <Footer />
    </div>
  );
}
