import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { House } from "@phosphor-icons/react";

export default function Custom404() {
  return (
    <div>
      <NextSeo
        title="Page not found"
        description="Sorry, we couldn't find the page you're looking for."
      />
      <Navbar />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-44 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-brand-forrest">404</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-neutrals-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-6 flex items-baseline justify-center gap-x-4">
            <div className="flex justify-start items-center">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"/"}
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Go home
                  <House size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
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
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium hover:bg-neutrals-3 border border-neutrals-5"
                >
                  Contact us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}