import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { House, GooglePlayLogo, AppStoreLogo, Globe } from "@phosphor-icons/react";

export default function Custom500() {
  return (
    <div>
      <NextSeo
        title="Welcome YCombinator!"
        description="Give Kreative DocuVet a whirl!"
      />
      <Navbar />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-44 lg:px-8">
        <div className="text-center w-[50%] flex flex-col items-center justify-center">
          <p className="text-base font-semibold text-brand-forrest">
            Hello YCombinator!
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            We&apos;re excited to have you give Kreative DocuVet a go.
          </h1>
          <p className="mt-6 text-xl leading-7 text-neutrals-8">
            You can try out our web application and mobile applications for both
            iOS and Android.{" "}
            <span className="text-xl leading-7 text-neutrals-8 italic font-bold">
              Your credentials are: yc@kreativedocuvet.com /
              ycsupersecurepassword
            </span>
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
                  href={"https://docuvet.kreativeusa.com/"}
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Sign into Web
                  <Globe size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-start items-center">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={
                    "https://apps.apple.com/us/app/kreative-docuvet/id6478257781"
                  }
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Download iOS app
                  <AppStoreLogo size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-start items-center">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.kreativeusa.docuvetapp"
                  }
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Download Android app
                  <GooglePlayLogo size={20} className="ml-2" />
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
