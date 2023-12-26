import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { ArrowRight } from "@phosphor-icons/react";

export default function BookDemo() {
  return (
    <div>
      <NextSeo
        title="Book a Demo"
        description="Discover why veterinarians are making the switch to Kreative DocuVet. Schedule your demo to learn how it works, pricing, and answer any questions."
      />
      <Navbar />
      <Container>
        <div className="lg:py-6 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5 pt-20">
            <div className="mb-8">
              <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                Book your free demo
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl w-full md:w-[80%] font-bold tracking-tighter mb-8">
              Discover why veterinarians are making the switch
            </h1>
            <p className="pr-16 text-lg leading-relaxed">
              We&apos;d love to meet you and show you how DocuVet can help reduce
              your medical record workload each week! On our call, we&apos;ll discuss
              product features, how it works, pricing, and any questions you may
              have.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <InlineWidget
              url="https://calendly.com/kreativedocuvet/free-demo"
              styles={{
                height: "1000px",
              }}
            />
          </div>
        </div>
      </Container>
      <div className="bg-neutrals-2 py-36">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8">
              <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                Supercharge your clinic
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl w-full md:w-[60%] font-bold tracking-tighter mb-8 text-center">
              Read our promise to you and the reasons behind why we’re crafting
              Kreative DocuVet
            </h2>
            <div className="flex justify-start items-center">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/story"}
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Read our promise
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
