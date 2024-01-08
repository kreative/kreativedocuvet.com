import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight, Butterfly, Devices, Heart, FilmReel, Handshake, CloudCheck, Timer, Notepad, HandCoins, Target } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Welcome to Kreative DocuVet"
        description="Kreative DocuVet is an AI-powered scribe helping veterinarians get home on time, one record at a time. Discover why vets are switching, book your demo today."
      />
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
              className="w-full sm:w-[65%] mt-16 mb-12 md:mb-24"
              src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704737033/kreativedocuvet.com/Mockup_hehe_2_hgkrha.webp"
              alt="Kreative DocuVet completed medical record mobile app mockup."
              width={2910}
              height={4200}
            />
            <p className="text-xl font-medium w-[75%] lg:w-[50%] text-center mb-8">
              <span className="font-bold">
                Go from 20 minutes per record to 2.
              </span>{" "}
              Veterinarians are leveraging our AI to cut down on recordkeeping
              and go back to doing what they love.
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
                  Book my demo
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SplashContainer>
      <Container>
        <div className="grid grid-cols-2 pb-24 gap-4">
          <div className="col-span-2 md:col-span-1">
            <div className="rounded-[20px] bg-brand-forrest py-12 px-8 mb-4">
              <span className="text-white px-4 py-[6px] rounded-full border border-white">
                Say goodbye to stress ✌️
              </span>
              <h2 className="text-white text-5xl font-medium mt-4 tracking-tight leading-[3.2rem] pb-8 pt-4">
                We&apos;re helping everyday veterinarians get home on time, one
                record at a time.
              </h2>
              <p className="text-white text-xl">
                Our cross-platform software is helping small and large animal
                veterinarians stress less, save time, stress less, take those
                lunch breaks,{" "}
                <span className="italic underline">
                  all while caring for more patients.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 xs:col-span-1 min-h-[250px] bg-surgeon bg-cover bg-center rounded-[20px]" />
              <div className="col-span-2 xs:col-span-1 rounded-[20px] bg-brand-deepocean py-12 px-8">
                <h2 className="text-white text-7xl sm:text-9xl md:text-8xl lg:text-9xl font-bold tracking-tighter pb-4 text-center">
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
            The problems 😔😡🥱
          </span>
          <h2 className="text-5xl font-bold mt-4 leading-[3.5rem] tracking-tighter pb-24 pt-4 w-full sm:w-3/4 lg:w-1/2">
            If you&apos;re a veterinarian running into issues like...
          </h2>
          <div className="grid grid-cols-3 gap-16 md2:gap-8">
            <div className="col-span-3 md2:col-span-1 grid grid-cols-6 sm:grid-cols-8 md2:grid-cols-5 gap-4">
              <div className="col-span-1 flex justify-center">
                <svg
                  className="h-12 w-auto"
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
              </div>
              <h3 className="col-span-5 md2:col-span-4 text-3xl font-medium pl-4">
                Back to back appointments that go beyond the 8-5
              </h3>
            </div>
            <div className="col-span-3 md2:col-span-1 grid grid-cols-6 sm:grid-cols-8 md2:grid-cols-5 gap-4">
              <div className="col-span-1 hidden sm:block md2:hidden" />
              <div className="col-span-1 flex justify-center">
                <svg
                  className="h-12 w-auto"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#780505" />
                  <path
                    d="M22.68 24.98L12.92 25V23.5L17.58 19.48C19.92 17.46 20.58 16.48 20.58 14.94C20.58 13.12 19.54 12.04 17.8 12.04C16.02 12.04 14.86 13.34 14.82 15.4H12.86C12.92 12.3 14.88 10.28 17.82 10.28C20.72 10.28 22.58 12.04 22.58 14.82C22.58 16.88 21.56 18.34 19 20.56L16 23.16H22.68V24.98Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="col-span-5 md2:col-span-4 text-3xl font-medium pl-4">
                Struggling to get through your medical records
              </h3>
            </div>
            <div className="col-span-3 md2:col-span-1 grid grid-cols-6 sm:grid-cols-8 md2:grid-cols-5 gap-4">
              <div className="col-span-2 hidden sm:block md2:hidden" />
              <div className="col-span-1 flex justify-center">
                <svg
                  className="h-12 w-auto"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#086268" />
                  <path
                    d="M17.12 17.52H15.68V16.22L19.78 12.28H13.28V10.54H22.26V12.12L18.3 15.9C20.76 16.2 22.62 17.86 22.62 20.46C22.62 23.38 20.42 25.24 17.48 25.24C14.64 25.24 12.6 23.5 12.6 20.5H14.54C14.54 22.38 15.7 23.48 17.52 23.48C19.4 23.48 20.62 22.28 20.62 20.42C20.62 18.68 19.42 17.52 17.12 17.52Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="col-span-5 md2:col-span-4 text-3xl font-medium pl-4">
                Stagnant clinic growth and staff experience
              </h3>
            </div>
          </div>
        </Container>
      </div>
      <Marquee className="bg-neutrals-13 py-1" autoFill speed={75}>
        <p className="text-white font-bold text-lg mx-8 italic">
          &quot;I wish I never had to write another medical record again!&quot;
        </p>
        <p className="text-2xl">🥹</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          &quot;No more medical records? I wish.&quot;
        </p>
        <p className="text-2xl">😡</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          &quot;I typically see 15 patients a day, easily 8-10 hour days.&quot;
        </p>
        <p className="text-2xl">🥱</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          &quot;We have high turnover at the clinic and it&apos;s hard to keep
          staff trained.&quot;
        </p>
        <p className="text-2xl">🥹</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          &quot;I don&apos;t think any of us enjoy writing medical records, we
          just have to do it.&quot;
        </p>
        <p className="text-2xl">😡</p>
        <p className="text-white font-bold text-lg mx-8 italic">
          &quot;I&apos;d much rather just see patients, paperwork isn&apos;t why
          I became a veterinarian.&quot;
        </p>
        <p className="text-2xl">🥱</p>
      </Marquee>
      <Container>
        <div className="pt-28 md:pt-44 pb-12">
          <div className="grid grid-cols-2 gap-4 md:gap-8 pb-12">
            <div className="col-span-2 md:col-span-1 w-full min-[700px]:w-3/4 md:w-full">
              <h2 className="text-brand-forrest text-5xl xs:text-[55px] min-[530px]:text-[65px] font-bold tracking-tighter leading-[3.8rem] xs:leading-[4.1rem] min-[530px]:leading-[4.4rem]">
                ...then you need Kreative DocuVet.
              </h2>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-end">
              <p className="text-xl text-neutrals-8">
                Our custom built software is tailored specifically for small and
                large animal veterinarians to reduce the time spent on medical
                records. With our animal-specific AI, we can help vets cut down
                time writing medical records by 92%.
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
                  Select your appointment
                </h3>
                <p className="text-xl">
                  Or, create one from the mobile or web app quickly. All
                  appointments are synced across devices and staff.
                </p>
              </div>
              <div className="flex justify-end sm:justify-center">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704663210/kreativedocuvet.com/step-1-mockup.webp"
                  alt="Kreative DocuVet mobile app mockup of single appointment selection screen."
                  width={704}
                  height={882}
                  className="w-5/6 xs:w-3/4 sm:w-full lg:w-[75%]"
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-[20px] bg-neutrals-2 border border-neutrals-5 pt-0 px-8 pb-8 md:px-12 md:pb-12 flex flex-col items-start justify-between space-y-8">
              <div className="flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703704727/kreativedocuvet.com/Step_2_vks9ug.webp"
                  alt="Kreative DocuVet mobile app mockup of appointment recording screen."
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
                  Click record and start
                </h3>
                <p className="text-xl">
                  During your appoinement, the Kreative DocuVet mobile app will
                  record your appointment ambiently in the background.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-neutrals-2 border border-neutrals-5 pr-0 pl-8 py-12 md:pl-12 flex flex-col sm:flex-row items-end sm:items-center space-x-8">
            <div className="mb-8 sm:mb-0 pr-8 sm:pr-0">
              <div className="pb-3">
                <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                  Voilà! 🎉
                </span>
              </div>
              <h3 className="text-[32px] tracking-tight font-medium pb-2">
                Hit save and review
              </h3>
              <p className="text-xl mb-6">
                Our AI sifts through the audio to pull out key context from your
                appointment. You&apos;ll have a completed medical record ready
                to review in minutes!
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
              src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704664145/kreativedocuvet.com/PNG_to_WEBP_conversion_1_gonslx.webp"
              alt="Kreative DocuVet mobile and website mockup of the completed medical record screens."
              width={2010}
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
                  Discover peace ☺️
                </span>
              </div>
              <h2 className="text-3xl xs:text-[40px] tracking-tighter font-bold leading-9 xs:leading-[3rem] mt-3 mb-8 text-center xs:text-left">
                Learn how you and your staff can find joy with Kreative DocuVet
                today.
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
                    Book my demo
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 flex items-center justify-center xs:justify-end sm:justify-start">
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704222567/kreativedocuvet.com/Gradient_Icon_B_szpkyk.webp"
                alt="Kreative DocuVet logocon, gradient and hybrid version."
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
          <div className="w-full sm:w-3/4 md:w-[50%] mx-auto text-center mb-24">
            <h2 className="text-5xl xs:text-6xl sm:text-[65px] font-bold tracking-tighter leading-[3.2rem] xs:leading-[4rem] mb-6">
              Designed to work the way you do
            </h2>
            <p className="text-neutrals-8 text-xl w-[75%] mx-auto">
              You won&apos;t have to change a thing about how you and your
              clinic works right now.
            </p>
          </div>
          <div className="hidden sm2:grid grid-cols-3 gap-8">
            <div className="col-span-1 space-y-24 pt-32">
              <div className="flex flex-col items-center space-y-6">
                <Devices size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Meets you anywhere.
                  </span>{" "}
                  Whether you&apos;re on an iPhone, Android, or desktop,
                  we&apos;re cross platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <Heart size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Beautiful yet simple.
                  </span>{" "}
                  We promise you won&apos;t find a better looking piece of
                  veterinary software.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704664350/kreativedocuvet.com/PNG_to_WEBP_conversion_2_nnajh1.webp"
                alt="Kreative DocuVet on iPhone 15 Pro Max, mockup of the single appointment page."
                width={470}
                height={1252}
                className="w-[85%] md2:w-[75%] mx-auto pb-16"
              />
              <div className="flex flex-col items-center space-y-6">
                <FilmReel size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Out of the way.
                  </span>{" "}
                  DocuVet listens in the background with no fuss - you
                  won&apos;t even know it&apos;s there.
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
                      Book my demo
                      <ArrowUpRight size={20} className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-24 pt-32">
              <div className="flex flex-col items-center space-y-6">
                <Handshake size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Bring your team.
                  </span>{" "}
                  Keep track of records across the clinic and allow your techs
                  to manage appointments.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <CloudCheck size={84} className="text-brand-forrest" />
                <p className="text-xl text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Forget nothing.
                  </span>{" "}
                  Every appointment, transcript, and medical record in the cloud
                  for you, forever.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm2:hidden">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 flex flex-col items-center justify-end space-y-6">
                <Devices size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Meets you anywhere.
                  </span>{" "}
                  Whether you&apos;re on an iPhone, Android, or desktop,
                  we&apos;re cross platform.
                </p>
              </div>
              <div className="col-span-1">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704664350/kreativedocuvet.com/PNG_to_WEBP_conversion_2_nnajh1.webp"
                  alt="Kreative DocuVet on iPhone 15 Pro Max, mockup of the single appointment page."
                  width={470}
                  height={1252}
                  className="w-[85%] mx-auto"
                />
              </div>
              <div className="col-span-1 flex flex-col justify-end items-center space-y-6">
                <Handshake size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Bring your team.
                  </span>{" "}
                  Keep track of records across the clinic and allow your techs
                  to manage appointments.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="col-span-1 flex flex-col items-center space-y-6">
                <Heart size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Beautiful yet simple.
                  </span>{" "}
                  We promise you won&apos;t find a better looking piece of
                  veterinary software.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center space-y-6">
                <FilmReel size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Out of the way.
                  </span>{" "}
                  DocuVet listens in the background with no fuss - you
                  won&apos;t even know it&apos;s there.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center space-y-6">
                <CloudCheck size={84} className="text-brand-forrest" />
                <p className="text-lg leading-6 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Forget nothing.
                  </span>{" "}
                  Every appointment, transcript, and medical record in the cloud
                  for you, forever.
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
                  Book my demo
                  <ArrowUpRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col items-center justify-start space-y-6">
                <Devices size={84} className="text-brand-forrest" />
                <p className="text-xl leading-7 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Meets you anywhere.
                  </span>{" "}
                  Whether you&apos;re on an iPhone, Android, or desktop,
                  we&apos;re cross platform.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-start space-y-6">
                <Handshake size={84} className="text-brand-forrest" />
                <p className="text-xl leading-7 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Bring your team.
                  </span>{" "}
                  Keep track of records across the clinic and allow your techs
                  to manage appointments.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704664350/kreativedocuvet.com/PNG_to_WEBP_conversion_2_nnajh1.webp"
                alt="Kreative DocuVet on iPhone 15 Pro Max, mockup of the single appointment page."
                width={470}
                height={1252}
                className="w-[60%] mx-auto py-16"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex flex-col items-center justify-start space-y-6">
                <Heart size={84} className="text-brand-forrest" />
                <p className="text-xl leading-7 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Beautiful yet simple.
                  </span>{" "}
                  We promise you won&apos;t find a better looking piece of
                  veterinary software.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-start space-y-6">
                <FilmReel size={84} className="text-brand-forrest" />
                <p className="text-xl leading-7 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Out of the way.
                  </span>{" "}
                  DocuVet listens in the background with no fuss - you
                  won&apos;t even know it&apos;s there.
                </p>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-end space-y-6 w-1/2 mx-auto mt-8">
                <CloudCheck size={84} className="text-brand-forrest" />
                <p className="text-xl leading-7 text-neutrals-8 text-center w-[90%]">
                  <span className="font-bold text-brand-deepocean">
                    Forget nothing.
                  </span>{" "}
                  Every appointment, transcript, and medical record in the cloud
                  for you, forever.
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
                  Book my demo
                  <ArrowUpRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
      <Marquee
        className="bg-neutrals-13 py-2"
        autoFill
        speed={75}
        direction="right"
      >
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;It&apos;s like magic&quot;
        </p>
        <p className="text-2xl">☺️</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;Medical records have become a breeze for our clinic&quot;
        </p>
        <p className="text-2xl">😻</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;It works well and doesn&apos;t get in the way of my
          patients!&quot;
        </p>
        <p className="text-2xl">🥳</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;I wish we had found this years ago!&quot;
        </p>
        <p className="text-2xl">☺️</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;I&apos;ve been able to knock out records in just a few
          minutes&quot;
        </p>
        <p className="text-2xl">😻</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;I&apos:m finally getting to take a full lunch break!&quot;
        </p>
        <p className="text-2xl">🥳</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;Records have become easy for my staff&quot;
        </p>
        <p className="text-2xl">☺️</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;DocuVet&apos;s records are fast and accurate!&quot;
        </p>
        <p className="text-2xl">😻</p>
        <p className="text-white font-bold text-xl mx-8 italic">
          &quot;I don&apos;t have the guilt of unfinished records anymore!&quot;
        </p>
        <p className="text-2xl">🥳</p>
      </Marquee>
      <div className="bg-brand-deepocean pt-32">
        <Container>
          <div className="grid grid-cols-2 gap-12 pb-24">
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <div className="pb-8">
                <span className="text-white px-4 py-[6px] rounded-full border border-white">
                  Benefits for you 🏆
                </span>
              </div>
              <h2 className="text-5xl tracking-tighter font-medium leading-[3rem] mb-6 text-white">
                Efficiency is possible
              </h2>
              <p className="text-xl text-neutrals-4 mb-6 md:mb-12 pr-0 sm:pr-32 md:pr-8">
                The status quo of doing medical records is no longer your only
                way. Kreative DocuVet is your better path forward.
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
                    Book my demo
                    <ArrowUpRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 pt-8 md:pt-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-12 gap-x-8">
                <div className="col-span-1">
                  <Timer
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Save time
                  </h3>
                  <p className="text-neutrals-4">
                    Don&apos;t waste time writing medical records anymore.
                    DocuVet&apos;s got this.
                  </p>
                </div>
                <div className="col-span-1">
                  <Notepad
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Be consistent
                  </h3>
                  <p className="text-neutrals-4">
                    DocuVet formats notes exactly the way you want, every time.
                  </p>
                </div>
                <div className="col-span-1">
                  <HandCoins
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Unlock revenue
                  </h3>
                  <p className="text-neutrals-4">
                    Less time on records = more time with patients, and more
                    revenue.
                  </p>
                </div>
                <div className="col-span-1">
                  <Target
                    size={72}
                    className="text-white p-4 bg-white bg-opacity-15 rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Stay accurate
                  </h3>
                  <p className="text-neutrals-4">
                    DocuVet remembers everything you talk about, so you
                    don&apos;t have to.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704665245/kreativedocuvet.com/Patients_Mockup_vqpuha.webp"
            alt="Kreative DocuVet web application mockup of the patients list screen."
            width={4320}
            height={2386}
            className="hidden md:block w-full h-auto"
          />
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1704229862/kreativedocuvet.com/ezgif.com-png-to-webp-converter_bjacwb.webp"
            alt="Kreative DocuVet mobile application mockup of the patients list screen."
            width={3375}
            height={1257}
            // className="block md:hidden w-full h-auto"
            className="hidden w-full h-auto"
          />
        </Container>
      </div>
      <div className="bg-cta-gradient py-44 bg-left sm:bg-center bg-cover">
        <Container>
          <div className="w-full sm:w-[75%] md2:w-[65%] mx-auto flex flex-col items-center">
            <div className="pb-8">
              <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                Get started for free 👋
              </span>
            </div>
            <h2 className="text-5xl lg:text-[60px] font-bold tracking-tighter text-center leading-[3.8rem] lg:leading-[4.2rem] mb-8">
              Feel the difference with a 14 day free trial, no credit card
              required.
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
                  Book my demo
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
