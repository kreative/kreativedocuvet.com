import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight, Butterfly } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <NextSeo title="Welcome to Kreative DocuVet" description="" />
      <Navbar />
      <SplashContainer>
        <div className="bg-hero-gradient pt-32 pb-44 bg-cover bg-bottom">
          <div className="w-full lg:w-[75%] min-[1370px]:w-[65%] mx-auto flex flex-col items-center">
            <h1 className="text-white text-5xl xs:text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold text-center tracking-tighter">
              Medical records,
              <br />
              done for you.
            </h1>
            <Image
              className="w-[60%] mt-16 mb-12 md:mb-24"
              src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703700395/kreativedocuvet.com/hero-placeholder-1_i8gwly.png"
              alt=""
              width={500}
              height={1200}
            />
            <p className="text-xl font-medium w-[75%] lg:w-[50%] text-center mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <div className="flex justify-start items-center">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book-demo"
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Book your demo
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SplashContainer>
      {/* <Container>
        <div className="grid grid-cols-2 pb-24 gap-4">
          <div className="col-span-1 bg-brand-forrest rounded-[20px] py-12 px-8">
            <span className="text-white px-4 py-[6px] rounded-full border border-white">
              Supercharge your clinic
            </span>
            <h2 className="text-white text-5xl font-medium mt-4 tracking-tight pb-24 pt-4">
              We&apos;re helping everyday veterinarians get home on time, one
              record at a night
            </h2>
            <p className="text-white text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703701466/kreativedocuvet.com/PNG_to_WEBP_conversion_1_kwmilz.webp"
              alt=""
              width="550"
              height="525"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container> */}
      <Container>
        <div className="grid grid-cols-2 pb-24 gap-4">
          <div className="col-span-2 md:col-span-1">
            <div className="rounded-[20px] bg-brand-forrest py-12 px-8 mb-4">
              <span className="text-white px-4 py-[6px] rounded-full border border-white">
                Supercharge your clinic
              </span>
              <h2 className="text-white text-5xl font-medium mt-4 tracking-tight pb-8 pt-4">
                We&apos;re helping everyday veterinarians get home on time, one
                record at a night
              </h2>
              <p className="text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 xs:col-span-1 min-h-[250px] bg-surgeon bg-cover bg-center rounded-[20px]" />
              <div className="col-span-2 xs:col-span-1 rounded-[20px] bg-brand-deepocean py-12 px-8">
                <h2 className="text-white text-7xl sm:text-9xl md:text-8xl lg:text-9xl font-medium tracking-tight pb-4 text-center">
                  7.5
                </h2>
                <p className="text-white text-xl italic text-center">
                  Hours saved weekly
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 bg-female-vet bg-cover bg-center rounded-[20px] min-h-[400px] sm:min-h-[500px]" />
        </div>
      </Container>
      <div className="pt-24 pb-32 sm:pb-48 bg-gradient-to-b from-white to-neutrals-2">
        <Container>
          <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
            Lorem ipsum right here
          </span>
          <h2 className="text-5xl font-bold mt-4 tracking-tighter pb-12 pt-4 w-full sm:w-3/4 lg:w-1/2">
            If you&apos;re a veterinarian running into issues like...
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-1 flex space-x-6">
              <svg
                className="h-20 xs:h-12 md:h-32 lg:h-24 w-auto mt-0 md:-mt-4 lg:mt-0"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#076448" />
                <path
                  d="M17.74 12.3H14.7V10.54H19.62V25H17.74V12.3Z"
                  fill="white"
                />
              </svg>
              <h3 className="text-3xl font-medium pt-4 xs:pt-0 md:pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </h3>
            </div>
            <div className="col-span-3 md:col-span-1 flex space-x-6">
              <svg
                className="h-20 xs:h-12 md:h-32 lg:h-24 w-auto mt-0 md:-mt-4 lg:mt-0"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#086268" />
                <path
                  d="M22.68 24.98L12.92 25V23.5L17.58 19.48C19.92 17.46 20.58 16.48 20.58 14.94C20.58 13.12 19.54 12.04 17.8 12.04C16.02 12.04 14.86 13.34 14.82 15.4H12.86C12.92 12.3 14.88 10.28 17.82 10.28C20.72 10.28 22.58 12.04 22.58 14.82C22.58 16.88 21.56 18.34 19 20.56L16 23.16H22.68V24.98Z"
                  fill="white"
                />
              </svg>
              <h3 className="text-3xl font-medium pt-4 xs:pt-0 md:pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </h3>
            </div>
            <div className="col-span-3 md:col-span-1 flex space-x-6">
              <svg
                className="h-20 xs:h-12 md:h-32 lg:h-24 w-auto mt-0 md:-mt-4 lg:mt-0"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#780505" />
                <path
                  d="M17.12 17.52H15.68V16.22L19.78 12.28H13.28V10.54H22.26V12.12L18.3 15.9C20.76 16.2 22.62 17.86 22.62 20.46C22.62 23.38 20.42 25.24 17.48 25.24C14.64 25.24 12.6 23.5 12.6 20.5H14.54C14.54 22.38 15.7 23.48 17.52 23.48C19.4 23.48 20.62 22.28 20.62 20.42C20.62 18.68 19.42 17.52 17.12 17.52Z"
                  fill="white"
                />
              </svg>
              <h3 className="text-3xl font-medium pt-4 xs:pt-0 md:pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </h3>
            </div>
          </div>
        </Container>
      </div>
      <Marquee className="bg-neutrals-13 py-1" autoFill speed={75}>
        <p className="text-white font-bold text-lg mx-8 italic">
          “I wish I never had to write another medical record again!”
        </p>
        <p className="text-2xl">🥹</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          “No more medical records? I wish.”
        </p>
        <p className="text-2xl">😡</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          “I typically see 15 patients a day, 12 hour days”
        </p>
        <p className="text-2xl">🥱</p>
      </Marquee>
      <Container>
        <div className="pt-28 md:pt-44 pb-12">
          <div className="grid grid-cols-2 gap-4 md:gap-8 pb-12">
            <div className="col-span-2 md:col-span-1 w-full min-[700px]:w-3/4 md:w-full">
              <h2 className="text-brand-forrest text-5xl xs:text-[55px] min-[530px]:text-[65px] font-bold tracking-tighter leading-[3.6rem] xs:leading-[4.1rem] min-[530px]:leading-[4.4rem]">
                Then, you need Kreative DocuVet.
              </h2>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-end">
              <p className="text-xl text-neutrals-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2 sm:col-span-1 rounded-[20px] bg-neutrals-2 border border-neutrals-5 pb-0 px-8 pt-8 md:px-12 md:pt-12 flex flex-col items-start sm:items-center justify-between space-y-8">
              <div className="w-full xs:w-3/4 sm:w-full">
                <div className="pb-3">
                  <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                    Step 1
                  </span>
                </div>
                <h3 className="text-[32px] tracking-tight font-medium pb-2">
                  Another headline here
                </h3>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="flex justify-end sm:justify-center">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703704549/kreativedocuvet.com/Step_1_No_Fade_owo2ih.webp"
                  alt=""
                  width={1056}
                  height={1323}
                  className="w-5/6 xs:w-3/4 sm:w-full lg:w-[75%]"
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-[20px] bg-neutrals-2 border border-neutrals-5 pt-0 px-8 pb-8 md:px-12 md:pb-12 flex flex-col items-center justify-between space-y-8">
              <div className="flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703704727/kreativedocuvet.com/Step_2_vks9ug.webp"
                  alt=""
                  width={1056}
                  height={1392}
                  className="w-full lg:w-[75%]"
                />
              </div>
              <div>
                <div className="pb-3">
                  <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                    Step 2
                  </span>
                </div>
                <h3 className="text-[32px] tracking-tight font-medium pb-2">
                  Another headline here
                </h3>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-neutrals-2 border border-neutrals-5 pr-0 pl-8 py-12 md:pl-12 flex flex-col sm:flex-row items-end sm:items-center space-x-8">
            <div className="mb-8 sm:mb-0 pr-8 sm:pr-0">
              <div className="pb-3">
                <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                  Step 3
                </span>
              </div>
              <h3 className="text-[32px] tracking-tight font-medium pb-2">
                Another headline here
              </h3>
              <p className="text-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="flex justify-start items-center">
                <motion.div
                  whileHover={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/book-demo"
                    className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium border border-neutral-5 hover:bg-neutrals-3"
                    target="_blank"
                    rel="_noopener"
                  >
                    Learn more
                    <ArrowUpRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703705192/kreativedocuvet.com/Step_3_bhaijx.webp"
              alt=""
              width={1896}
              height={2079}
              className="w-full sm:w-[60%]"
            />
          </div>
        </div>
      </Container>
      <div className="bg-gradient-to-b from-white to-neutrals-2 pt-12 pb-12 sm:pb-24">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-8 flex flex-col justify-center items-center xs:items-start">
              <div className="pb-6 xs:pb-3">
                <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                  Supercharge your clinic
                </span>
              </div>
              <h2 className="text-3xl xs:text-[40px] tracking-tighter font-bold leading-9 xs:leading-[3rem] mb-6 text-center xs:text-left">
                Discover how Kreative DocuVet is bringing joy to everyday
                veterinarians.
              </h2>
              <div className="flex justify-center xs:justify-start items-center">
                <motion.div
                  whileHover={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/book-demo"
                    className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                  >
                    Book your demo
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 flex items-center justify-center xs:justify-end sm:justify-start">
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704222567/kreativedocuvet.com/Gradient_Icon_B_szpkyk.webp"
                alt=""
                className="h-auto w-1/2 xs:w-[40%] sm:w-full mt-0 xs:-mt-16 sm:mt-0"
                width={332}
                height={386}
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="pt-28 pb-32">
          <div className="w-full xs:w-3/4 md:w-[50%] mx-auto text-center mb-24">
            <h2 className="text-5xl xs:text-6xl sm:text-[65px] font-bold tracking-tighter leading-[3.2rem] xs:leading-[4rem] mb-6">
              Designed to work the way you do
            </h2>
            <p className="text-neutrals-8 text-xl w-[75%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="hidden sm2:grid grid-cols-3 gap-8">
            <div className="col-span-1 space-y-24 pt-32">
              <div className="flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703705911/kreativedocuvet.com/phoneplaceholder_w8n1jj.png"
                alt=""
                width={470}
                height={1252}
                className="w-[85%] md2:w-[75%] mx-auto pb-16"
              />
              <div className="flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="flex justify-start items-center">
                  <motion.div
                    whileHover={{
                      scale: 0.97,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/book-demo"
                      className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium border border-neutral-5 hover:bg-neutrals-3"
                      target="_blank"
                      rel="_noopener"
                    >
                      Book a demo
                      <ArrowUpRight size={20} className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-24 pt-32">
              <div className="flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm2:hidden">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 flex flex-col items-center justify-end space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-span-1">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703705911/kreativedocuvet.com/phoneplaceholder_w8n1jj.png"
                  alt=""
                  width={470}
                  height={1252}
                  className="w-[85%] mx-auto"
                />
              </div>
              <div className="col-span-1 flex flex-col justify-end items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="col-span-1 flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <motion.div
                whileHover={{
                  scale: 0.97,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book-demo"
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium border border-neutral-5 hover:bg-neutrals-3"
                  target="_blank"
                  rel="_noopener"
                >
                  Book a demo
                  <ArrowUpRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col items-center justify-end space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-end space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703705911/kreativedocuvet.com/phoneplaceholder_w8n1jj.png"
                alt=""
                width={470}
                height={1252}
                className="w-[60%] mx-auto py-16"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col items-center justify-end space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-end space-y-6">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-end space-y-6 w-1/2 mx-auto mt-8">
                <Butterfly size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="flex justify-center items-center mt-8">
                  <motion.div
                    whileHover={{
                      scale: 0.97,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/book-demo"
                      className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium border border-neutral-5 hover:bg-neutrals-3"
                      target="_blank"
                      rel="_noopener"
                    >
                      Book a demo
                      <ArrowUpRight size={20} className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Marquee className="bg-neutrals-13 py-2" autoFill speed={75}>
        <p className="text-white font-bold text-xl mx-8 italic">
          “I wish I never had to write another medical record again!”
        </p>
        <p className="text-2xl">☺️</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          “No more medical records? I wish.”
        </p>
        <p className="text-2xl">😻</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          “I typically see 15 patients a day, 12 hour days”
        </p>
        <p className="text-2xl">🥳</p>
      </Marquee>
      <div className="bg-brand-deepocean pt-32">
        <Container>
          <div className="grid grid-cols-2 gap-12 pb-24">
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <div className="pb-8">
                <span className="text-white px-4 py-[6px] rounded-full border border-white">
                  Lorem ipsum here
                </span>
              </div>
              <h2 className="text-5xl tracking-tighter font-medium leading-[3rem] mb-6 text-white">
                Efficiency is possible
              </h2>
              <p className="text-xl text-neutrals-4 mb-6 md:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <div className="flex justify-start items-center">
                <motion.div
                  whileHover={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/book-demo"
                    className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium border border-neutral-5 hover:bg-[#217277] text-neutrals-3"
                    target="_blank"
                    rel="_noopener"
                  >
                    Book a demo
                    <ArrowUpRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 pt-8 md:pt-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-12 gap-x-8">
                <div className="col-span-1">
                  <Butterfly
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Benefit one
                  </h3>
                  <p className="text-neutrals-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="col-span-1">
                  <Butterfly
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Benefit one
                  </h3>
                  <p className="text-neutrals-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="col-span-1">
                  <Butterfly
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Benefit one
                  </h3>
                  <p className="text-neutrals-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="col-span-1">
                  <Butterfly
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Benefit one
                  </h3>
                  <p className="text-neutrals-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704229466/kreativedocuvet.com/PNG_to_WebP_converter_mjnyhk.webp"
            alt=""
            width={3375}
            height={1257}
            className="hidden md:block w-full h-auto"
          />
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704229862/kreativedocuvet.com/ezgif.com-png-to-webp-converter_bjacwb.webp"
            alt=""
            width={3375}
            height={1257}
            className="block md:hidden w-full h-auto"
          />
        </Container>
      </div>
      <div className="bg-cta-gradient py-44 bg-center bg-cover">
        <Container>
          <div className="w-full sm:w-[75%] md2:w-[50%] mx-auto flex flex-col items-center">
            <div className="pb-8">
              <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                Lorem ipsum here
              </span>
            </div>
            <h2 className="text-[40px] font-bold tracking-tighter text-center leading-[3rem] mb-8">
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
                  href="/book-demo"
                  className="flex items-center rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-medium bg-brand-forrest text-white"
                >
                  Book your demo
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
