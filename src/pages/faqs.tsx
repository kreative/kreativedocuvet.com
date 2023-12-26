import Link from "next/link";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h2 className="text-xl font-medium tracking-tight mb-4 text-brand-forrest">
        {q}
      </h2>
      <p className="text-lg leading-relaxed">{a}</p>
    </div>
  );
}

export default function BookDemo() {
  return (
    <div>
      <NextSeo
        title="Frequently asked questions"
        description="You have questions and we have answers. Review Kreative DocuVet's frequently asked questions to learn more about our product."
      />
      <Navbar />
      <Container>
        <div className="py-24 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="text-4xl md:text-5xl w-full font-bold tracking-tighter mb-8">
              Frequently asked questions
            </h1>
            <p className="pr-16 text-lg leading-relaxed mb-4">
              <span className="font-medium">
                Can&apos;t find what you&apos;re looking?
              </span>{" "}
              Drop us a line and we&apos;ll be in touch (really) soon.
            </p>
            <div className="flex justify-start items-center mb-8 lg:mb-0">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/contact"}
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium border border-neutral-5 hover:bg-neutrals-3"
                  target="_blank"
                  rel="_noopener"
                >
                  Contact us
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 pt-2 space-y-12">
            <FAQ
              q="How many hours does DocuVet usually save veterinarians?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <FAQ
              q="How many hours does DocuVet usually save veterinarians?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <FAQ
              q="How many hours does DocuVet usually save veterinarians?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <FAQ
              q="How many hours does DocuVet usually save veterinarians?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <FAQ
              q="How many hours does DocuVet usually save veterinarians?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
              Discover how Kreative DocuVet is bringing joy to the everyday
              veterinarian.
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
                  href={"/book-demo"}
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Book a free demo
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
