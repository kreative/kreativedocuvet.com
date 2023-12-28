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
          <div className="w-full md:w-[65%] mx-auto flex flex-col items-center">
            <h1 className="text-white text-7xl lg:text-9xl font-bold text-center tracking-tighter">
              Medical records, done for you.
            </h1>
            <Image
              className="w-[60%] mt-16 mb-24"
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
      <Container>
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
      </Container>
      <div className="pt-24 pb-48 bg-gradient-to-b from-white to-neutrals-2">
        <Container>
          <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
            Lorem ipsum right here
          </span>
          <h2 className="text-5xl font-medium mt-4 tracking-tighter pb-12 pt-4 w-1/2">
            If you&apos;re a veterinarian running into issues like...
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 flex space-x-6">
              <svg
                className="h-24 w-auto"
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
              <h3 className="text-3xl font-medium pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </h3>
            </div>
            <div className="col-span-1 flex space-x-6">
              <svg
                className="h-24 w-auto"
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
              <h3 className="text-3xl font-medium pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </h3>
            </div>
            <div className="col-span-1 flex space-x-6">
              <svg
                className="h-24 w-auto"
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
              <h3 className="text-3xl font-medium pt-6">
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
        <div className="pt-44 pb-12">
          <div className="grid grid-cols-2 gap-8 pb-12">
            <div className="col-span-1">
              <h2 className="text-brand-forrest text-[65px] font-bold tracking-tighter leading-[4.2rem]">
                Then, you need Kreative DocuVet.
              </h2>
            </div>
            <div className="col-span-1 flex items-end">
              <p className="text-xl text-neutrals-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 rounded-[20px] bg-neutrals-2 border border-neutrals-5 px-12 pt-12 flex flex-col items-center space-y-8">
              <div>
                <div className="pb-3">
                  <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                    Step 1
                  </span>
                </div>
                <h3 className="text-[32px] tracking-tight font-medium">
                  Another headline here
                </h3>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703704549/kreativedocuvet.com/Step_1_No_Fade_owo2ih.webp"
                alt=""
                width={1056}
                height={1323}
                className="w-[75%]"
              />
            </div>
            <div className="col-span-1 rounded-[20px] bg-neutrals-2 border border-neutrals-5 px-12 pb-12 flex flex-col items-center space-y-8">
              <Image
                src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703704727/kreativedocuvet.com/Step_2_vks9ug.webp"
                alt=""
                width={1056}
                height={1392}
                className="w-[75%]"
              />
              <div>
                <div className="pb-3">
                  <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                    Step 2
                  </span>
                </div>
                <h3 className="text-[32px] tracking-tight font-medium">
                  Another headline here
                </h3>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-neutrals-2 border border-neutrals-5 py-12 pl-12 flex items-center space-x-8">
            <div>
              <div className="pb-3">
                <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                  Step 3
                </span>
              </div>
              <h3 className="text-[32px] tracking-tight font-medium">
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
              className="w-[60%]"
            />
          </div>
        </div>
      </Container>
      <div className="bg-gradient-to-b from-white to-neutrals-2 pt-12 pb-24">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 flex flex-col justify-center">
              <div className="pb-3">
                <span className="text-brand-forrest px-4 py-[6px] rounded-full border border-brand-forrest">
                  Supercharge your clinic
                </span>
              </div>
              <h2 className="text-[40px] tracking-tighter font-bold leading-[3rem] mb-6">
                Discover how Kreative DocuVet is bringing joy to everyday
                veterinarians.
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
            <div className="col-span-4 flex items-center">
              <svg
                className="h-auto w-full"
                viewBox="0 0 332 386"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M322.777 109.068C312.019 64.3162 306.702 53.9886 299.708 40.4033C298.035 37.1533 296.265 33.7157 294.303 29.5769C288.956 18.3014 285.077 12.0609 282.054 8.78884C277.855 3.43845 271.353 0 264.047 0C251.385 0 241.118 10.3188 241.118 23.0494C241.118 25.9894 241.672 28.7984 242.67 31.3835C243.26 33.4638 244.68 36.3574 246.896 40.8724C249.239 45.6464 252.471 52.2331 256.553 61.5877C275.056 106.037 277.288 145.789 277.807 170.549C279.731 262.489 227.892 319.959 166.316 319.959C104.745 319.959 46.9101 252.681 54.8286 170.549C61.2197 104.274 83.4899 54.3427 88.7494 43.1816C90.7788 38.9592 91.9373 36.0476 92.7958 33.7113C94.1785 30.675 95.2708 26.7977 95.2708 23.0494C95.2708 10.3188 85.0042 0 72.342 0C66.364 0 60.9211 2.30225 56.8395 6.07067C54.4288 8.02562 53.1215 10.3629 51.958 12.4434C51.7841 12.7543 51.6127 13.0607 51.442 13.358C47.9038 19.5257 40.1404 33.4909 36.4511 42.0059L36.4445 42.0209C35.784 43.521 -13.4226 155.271 3.56472 244.083C10.1558 278.545 33.23 310.873 36.6456 315.358L38.0001 317.139C46.9064 328.86 55.8377 340.615 73.2647 352.171C73.8064 352.53 74.4344 352.954 75.146 353.434C92.8122 365.36 162.031 412.089 241.555 366.269C298.251 333.601 311.422 297.604 321.459 270.169L322.192 268.168C330.714 244.948 338.891 176.096 322.777 109.068ZM65.3936 312.523C64.8288 313.042 63.953 313.001 63.4372 312.431L55.7649 303.956C55.2491 303.386 55.2898 302.505 55.8553 301.986L64.5061 294.055C65.0709 293.538 65.948 293.578 66.4638 294.148L74.1355 302.624C74.6513 303.193 74.6099 304.075 74.0452 304.594L65.3936 312.523ZM267.536 294.263C268.052 293.694 268.927 293.651 269.493 294.17L278.144 302.1C278.709 302.619 278.75 303.501 278.234 304.071L270.562 312.546C270.046 313.116 269.17 313.156 268.604 312.639L259.954 304.708C259.388 304.19 259.348 303.308 259.864 302.739L267.536 294.263ZM38.7349 230.958C38.9294 231.702 38.4839 232.463 37.7419 232.656L26.7072 235.53C25.9659 235.724 25.2094 235.276 25.0163 234.532L22.067 223.139C21.8753 222.396 22.32 221.634 23.0613 221.441L34.0968 218.567C34.8374 218.373 35.5953 218.822 35.7883 219.566L38.7349 230.958ZM308.829 221.835C309.572 222.028 310.017 222.788 309.822 223.532L306.875 234.924C306.683 235.669 305.926 236.117 305.184 235.923L294.149 233.049C293.407 232.857 292.963 232.095 293.155 231.351L296.104 219.958C296.298 219.214 297.053 218.767 297.795 218.96L308.829 221.835ZM311.262 158.262C311.295 159.029 310.699 159.678 309.933 159.708L298.543 160.165C297.778 160.196 297.133 159.597 297.102 158.829L296.622 147.067C296.591 146.298 297.187 145.649 297.952 145.619L309.343 145.163C310.107 145.132 310.753 145.731 310.785 146.5L311.262 158.262ZM36.2226 145.425C36.988 145.455 37.5839 146.104 37.5508 146.871L37.0743 158.632C37.0426 159.401 36.3964 160.001 35.6323 159.97L24.241 159.513C23.4763 159.483 22.8805 158.834 22.9115 158.065L23.3908 146.304C23.4225 145.535 24.0673 144.937 24.832 144.968L36.2226 145.425ZM57.5578 75.1282C57.8398 74.4141 57.4902 73.6051 56.7778 73.323L46.1741 69.1178C45.4617 68.835 44.657 69.1858 44.3743 69.9005L40.0664 80.8467C39.785 81.5621 40.134 82.3725 40.847 82.654L51.4508 86.8598C52.1631 87.142 52.9686 86.7898 53.2513 86.0744L57.5578 75.1282ZM295.623 82.1923C296.335 81.9101 296.684 81.1011 296.403 80.3871L292.097 69.4409C291.815 68.7254 291.008 68.3733 290.296 68.6554L279.692 72.8613C278.979 73.1427 278.63 73.9532 278.912 74.6686L283.22 85.6147C283.502 86.3295 284.307 86.6803 285.019 86.3974L295.623 82.1923Z"
                  fill="url(#paint0_linear_186_2087)"
                />
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
                  d="M322.777 109.068C312.019 64.3162 306.702 53.9886 299.708 40.4033C298.035 37.1533 296.265 33.7157 294.303 29.5769C288.956 18.3014 285.077 12.0609 282.054 8.78884C277.855 3.43845 271.353 0 264.047 0C251.385 0 241.118 10.3188 241.118 23.0494C241.118 25.9894 241.672 28.7984 242.67 31.3835C243.26 33.4638 244.68 36.3574 246.896 40.8724C249.239 45.6464 252.471 52.2331 256.553 61.5877C275.056 106.037 277.288 145.789 277.807 170.549C279.731 262.489 227.892 319.959 166.316 319.959C104.745 319.959 46.9101 252.681 54.8286 170.549C61.2197 104.274 83.4899 54.3427 88.7494 43.1816C90.7788 38.9592 91.9373 36.0476 92.7958 33.7113C94.1785 30.675 95.2708 26.7977 95.2708 23.0494C95.2708 10.3188 85.0042 0 72.342 0C66.364 0 60.9211 2.30225 56.8395 6.07067C54.4288 8.02562 53.1215 10.3629 51.958 12.4434C51.7841 12.7543 51.6127 13.0607 51.442 13.358C47.9038 19.5257 40.1404 33.4909 36.4511 42.0059L36.4445 42.0209C35.784 43.521 -13.4226 155.271 3.56472 244.083C10.1558 278.545 33.23 310.873 36.6456 315.358L38.0001 317.139C46.9064 328.86 55.8377 340.615 73.2647 352.171C73.8064 352.53 74.4344 352.954 75.146 353.434C92.8122 365.36 162.031 412.089 241.555 366.269C298.251 333.601 311.422 297.604 321.459 270.169L322.192 268.168C330.714 244.948 338.891 176.096 322.777 109.068ZM65.3936 312.523C64.8288 313.042 63.953 313.001 63.4372 312.431L55.7649 303.956C55.2491 303.386 55.2898 302.505 55.8553 301.986L64.5061 294.055C65.0709 293.538 65.948 293.578 66.4638 294.148L74.1355 302.624C74.6513 303.193 74.6099 304.075 74.0452 304.594L65.3936 312.523ZM267.536 294.263C268.052 293.694 268.927 293.651 269.493 294.17L278.144 302.1C278.709 302.619 278.75 303.501 278.234 304.071L270.562 312.546C270.046 313.116 269.17 313.156 268.604 312.639L259.954 304.708C259.388 304.19 259.348 303.308 259.864 302.739L267.536 294.263ZM38.7349 230.958C38.9294 231.702 38.4839 232.463 37.7419 232.656L26.7072 235.53C25.9659 235.724 25.2094 235.276 25.0163 234.532L22.067 223.139C21.8753 222.396 22.32 221.634 23.0613 221.441L34.0968 218.567C34.8374 218.373 35.5953 218.822 35.7883 219.566L38.7349 230.958ZM308.829 221.835C309.572 222.028 310.017 222.788 309.822 223.532L306.875 234.924C306.683 235.669 305.926 236.117 305.184 235.923L294.149 233.049C293.407 232.857 292.963 232.095 293.155 231.351L296.104 219.958C296.298 219.214 297.053 218.767 297.795 218.96L308.829 221.835ZM311.262 158.262C311.295 159.029 310.699 159.678 309.933 159.708L298.543 160.165C297.778 160.196 297.133 159.597 297.102 158.829L296.622 147.067C296.591 146.298 297.187 145.649 297.952 145.619L309.343 145.163C310.107 145.132 310.753 145.731 310.785 146.5L311.262 158.262ZM36.2226 145.425C36.988 145.455 37.5839 146.104 37.5508 146.871L37.0743 158.632C37.0426 159.401 36.3964 160.001 35.6323 159.97L24.241 159.513C23.4763 159.483 22.8805 158.834 22.9115 158.065L23.3908 146.304C23.4225 145.535 24.0673 144.937 24.832 144.968L36.2226 145.425ZM57.5578 75.1282C57.8398 74.4141 57.4902 73.6051 56.7778 73.323L46.1741 69.1178C45.4617 68.835 44.657 69.1858 44.3743 69.9005L40.0664 80.8467C39.785 81.5621 40.134 82.3725 40.847 82.654L51.4508 86.8598C52.1631 87.142 52.9686 86.7898 53.2513 86.0744L57.5578 75.1282ZM295.623 82.1923C296.335 81.9101 296.684 81.1011 296.403 80.3871L292.097 69.4409C291.815 68.7254 291.008 68.3733 290.296 68.6554L279.692 72.8613C278.979 73.1427 278.63 73.9532 278.912 74.6686L283.22 85.6147C283.502 86.3295 284.307 86.6803 285.019 86.3974L295.623 82.1923Z"
                  fill="url(#paint1_linear_186_2087)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_186_2087"
                    x1="0.179938"
                    y1="191.191"
                    x2="207.997"
                    y2="130.477"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13CA93" />
                    <stop offset="1" stopColor="#17CAD6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_186_2087"
                    x1="166"
                    y1="-2.26932e-08"
                    x2="166.443"
                    y2="361.211"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FAFAFA" stopOpacity="0" />
                    <stop offset="1" stopColor="#FAFAFA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="pt-28 pb-32">
          <div className="w-[50%] mx-auto text-center mb-24">
            <h2 className="text-[65px] font-bold tracking-tighter leading-[4rem] mb-6">
              Designed to work the way you do
            </h2>
            <p className="text-neutrals-8 text-xl w-[75%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
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
                className="w-[75%] mx-auto pb-16"
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
          <div className="grid grid-cols-2 gap-8 pb-24">
            <div className="col-span-1 flex flex-col">
              <div className="pb-8">
                <span className="text-white px-4 py-[6px] rounded-full border border-white">
                  Lorem ipsum here
                </span>
              </div>
              <h2 className="text-5xl tracking-tighter font-medium leading-[3rem] mb-6 text-white">
                Efficiency is possible
              </h2>
              <p className="text-xl text-neutrals-4 mb-12">
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
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-y-12 gap-x-4">
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
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703710590/kreativedocuvet.com/PNG_to_WEBP_conversion_3_njhg68.webp"
            alt=""
            width={3375}
            height={1257}
            className="w-full h-auto"
          />
        </Container>
      </div>
      <div className="bg-cta-gradient py-44 bg-center bg-cover">
        <Container>
          <div className="w-[50%] mx-auto flex flex-col items-center">
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
