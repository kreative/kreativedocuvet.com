import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import SplashContainer from "../components/SplashContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { ArrowLineUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

function Accomplishment({ description }: { description: string }): JSX.Element {
  return (
    <div className="flex space-x-4 md:space-x-2">
      <div>
        <svg
          className="w-10 h-auto fill-brand-seafoam"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M229.5,113,166.07,90,143,26.5a16,16,0,0,0-30,0L90,89.93,26.5,113a16,16,0,0,0,0,30l63.43,23L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30Zm-68.93,38a16,16,0,0,0-9.54,9.54L128,223.9l-23-63.33A16,16,0,0,0,95.43,151L32.1,128l63.33-23A16,16,0,0,0,105,95.43L128,32.1l23,63.33a16,16,0,0,0,9.54,9.54l63.33,23Z"></path>
        </svg>
      </div>
      <p className="text-xl">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <NextSeo
        title="About Kreative DocuVet"
        description="We're on a mission to build veterinary tools of the future that veterinarians love to use."
      />
      <Navbar />
      <SplashContainer>
        <Image
          className="w-full"
          src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703571110/kreativedocuvet.com/PNG_to_WEBP_conversion_result_et2o8y.webp"
          alt="AI generated image of a veterinarian looking over a cattle ranch and barn on Kreative DocuVet About Us page"
          width="1440"
          height="466"
        />
      </SplashContainer>
      <Container>
        <div className="pt-16 pb-24 grid grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Kreative DocuVet is building veterinary tools for the future.
            </h1>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fermentum leo vel orci porta non pulvinar neque laoreet
              suspendisse. Sodales neque sodales ut etiam sit amet nisl purus
              in. Fermentum posuere urna nec tincidunt. Placerat duis ultricies
              lacus sed turpis tincidunt.
              <br />
              <br />
              Mauris pellentesque pulvinar pellentesque habitant morbi tristique
              senectus et. Odio euismod lacinia at quis risus sed vulputate
              odio. Sed viverra ipsum nunc aliquet bibendum enim facilisis
              gravida neque. Neque convallis a cras semper auctor neque.
              Ultricies mi quis hendrerit dolor.
              <br />
              <br />
              Placerat duis ultricies lacus sed turpis tincidunt. Mauris
              pellentesque pulvinar pellentesque habitant morbi tristique
              senectus et. Odio euismod lacinia at quis risus sed vulputate
              odio. Sed viverra ipsum nunc aliquet bibendum enim facilisis
              gravida neque. Neque convallis a cras semper auctor neque.
              Ultricies mi quis hendrerit dolor.
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-seafoam-50 py-24">
        <Container>
          <div className="mb-8">
            <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
              Our Accomplishments
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl w-full md:w-[85%] font-medium tracking-tight mb-12">
            We&apos;re proud of what we&apos;ve achieved since starting just two
            months ago
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1 space-y-8">
              <Accomplishment description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              <Accomplishment description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </div>
            <div className="col-span-2 md:col-span-1 space-y-8">
              <Accomplishment description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              <Accomplishment description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </div>
          </div>
          <div className="grid grid-cols-12 px-6 py-4 border-2 border-white bg-white bg-opacity-30 rounded-2xl mt-24 gap-4">
            <div className="col-span-12 lg:col-span-9 flex flex-col lg:flex-row space-x-4 items-center">
              <svg
                className="h-24 w-auto"
                viewBox="0 0 83 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="82"
                  height="82"
                  rx="11.5"
                  fill="url(#pattern0)"
                  stroke="#DDDDDD"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_70_22924"
                      transform="scale(0.00102881)"
                    />
                  </pattern>
                  <image
                    id="image0_70_22924"
                    width="972"
                    height="972"
                    xlinkHref="data:image/png;base64,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AEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAIFgBgAAgEAwAwAAQCCYAQAAIBDMAAAAEAhmAAAACAQzAAAABIIZAAAAAsEMAAAAgWAGAACAQDADAABAIJgBAAAgEMwAAAAQCGYAAAAIBDMAAAAEghkAAAACwQwAAACBYAYAAIBAMAMAAEAgmAEAACAQzAAAABAIZgAAAAgEMwAAAASCGQAAAALBDAAAAMFf/vPPpwIAAAD80qf/BypHjLandtLqAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
              <div className="pt-2 lg:pt-0 text-center lg:text-left">
                <h2 className="text-[32px] font-medium tracking-tight mb-1">
                  We&apos;re a part of the Kreative portfolio
                </h2>
                <p>
                  Built on trust and innovation, DocuVet is designed to serve
                  our veterinarians everywhere.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 flex items-center justify-center lg:justify-start">
              <div className="flex justify-start items-center">
                <motion.div
                  whileHover={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"https://kreativeusa.com"}
                    className="flex items-center rounded-md py-3.5 px-7 md:py-3.5 md:px-7 text-white font-medium bg-neutrals-13 hover:bg-neutrals-12"
                    target="_blank"
                    rel="_noopener"
                  >
                    Discover Kreative
                    <ArrowLineUpRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
