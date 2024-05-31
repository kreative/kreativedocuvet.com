import { useEffect } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import TermlyScriptWrapper from "@/components/TermlyScriptWrapper";
import { motion } from "framer-motion";

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
        title="End User License Agreement"
        description="Read our end user license agreement to understand the rules and guidelines for using our website and services."
      />
      <Navbar />
      <Container>
        <TermlyScriptWrapper dataId="bb1779a5-3bf8-434a-a9ff-9a47efccdd73" />
      </Container>
      <Container>
        <div className="py-12">
          <p className="font-medium text-xl text-center">
            If you are not able to view the end user license agreement above,
            there is a chance that your browser is blocking the Termly script.
            We use Termly to host and update our policies. You can view the
            privacy policy directly on the Termly website by clicking the button
            below.
          </p>
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
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=bb1779a5-3bf8-434a-a9ff-9a47efccdd73"
              target="_blank"
              rel="noreferrer"
            >
              View EULA
            </a>
          </motion.div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
