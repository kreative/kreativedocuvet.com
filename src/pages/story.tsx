import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function Story() {
  return (
    <div>
      <NextSeo title="" description="" />
      <Navbar />
      <Container>
        <div className="w-full md:w-[52%] mx-auto pt-20 pb-20">
          <h1 className="text-[44px] text-neutrals-7 tracking-tight font-medium leading-tight">
            In 2024, veterinarians are stuck with{" "}
            <span className="font-bold text-neutrals-13">
              clunky, boring software.
            </span>
          </h1>
          <p className="text-xl py-12">
            To the everyday veterinarian:
            <br />
            <br />
            We get it. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Image
            src="/images/placeholder.png"
            alt="Placeholder"
            width={400}
            height={250}
            className="w-full"
          />
          <p className="text-xl py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-[44px] tracking-tight font-bold leading-tight mb-12">
            It&apos;s time for a change
          </h2>
          <Image
            src="/images/MockupPlaceholder.png"
            alt="Mockup Placeholder"
            width={400}
            height={250}
            className="w-full shadow-xl"
          />
          <p className="text-xl py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-2xl font-medium mb-4 tracking-tight">
            Veterinarian-clinic
          </h3>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-2xl font-medium mb-4 tracking-tight">
            Intuitive and beautiful
          </h3>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-2xl font-medium mb-4 tracking-tight">
            Cutting edge, when it makes sense
          </h3>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-xl pt-8 pb-12">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-xl pb-20 text-right">
            Cheers,
            <br />
            the Kreative DocuVet Team
          </p>
          <Image
            src="/images/signature-placeholder.png"
            alt="Mockup Placeholder"
            width={400}
            height={100}
            className="w-full"
          />
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
