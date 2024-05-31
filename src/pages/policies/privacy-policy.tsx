import { useEffect } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import TermlyScriptWrapper from "@/components/TermlyScriptWrapper";
import { motion } from "framer-motion";

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
        <TermlyScriptWrapper dataId="d3c01e11-086a-46d9-a515-d1fdc64cd60a" />
      </Container>
      <Container>
        <div className="py-12">
          <p className="font-medium text-xl text-center">If you are not able to view the privacy policy above, there is a
          chance that your browser is blocking the Termly script. We use Termly
          to host and update our policies. You can view the privacy policy
          directly on the Termly website by clicking the button below.</p>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 text-center"
          >
            <a
              className="rounded-md py-4 px-7 md:py-3 md:px-5 font-medium bg-brand-forrest text-white grow"
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=d3c01e11-086a-46d9-a515-d1fdc64cd60a"
              target="_blank"
              rel="noreferrer"
            >
              View Privacy Policy
            </a>
          </motion.div>
        </div>s
      </Container>
      <Footer />
    </div>
  );
}
