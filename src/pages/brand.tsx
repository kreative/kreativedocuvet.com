import Image from "next/image";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import {
  DownloadSimple,
  Rocket,
  PencilSimpleLine,
  CheckCircle,
  TextT,
  Images,
  Flask,
  Palette,
  ChatCircleDots,
} from "@phosphor-icons/react";

export default function BrandGuidelines() {
  return (
    <div>
      <NextSeo
        title="Brand"
        description="Resources about the Kreative DocuVet brand assets and strategy to stay consistent across all platforms and mediums."
      />
      <Navbar />
      <main>
        <Container>
          <div className="pt-10 md:pt-16 pb-12 gap-0 md:max-w-[75%] mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-center">
                Brand Guidelines
              </h1>
              <p className="text-xl mx-auto text-center mt-4">
                Resources about the brand and strategy to stay consistent
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
                  href="/kreativedocuvet-brand-assets.zip"
                >
                  Download brand assets
                  <DownloadSimple
                    size={20}
                    className="inline-block ml-2 -mt-1"
                    weight="bold"
                  />
                </a>
              </motion.div>
            </div>
            <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <Rocket size={28} className="inline-block" weight="bold" />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Mission and Vision
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600">
                Kreative DocuVet is an organization on a mission to help the
                everyday veterinarian get home on time, one record at a time,
                through our AI powered software that generates medical records
                in minutes. Our vision is to have large, small, and equine
                veterinarians across the globe saving hours each day from
                Kreative DocuVet!
              </p>
            </div>
            {/* <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <ChatCircleDots
                  size={28}
                  className="inline-block"
                  weight="bold"
                />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Slogans
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600 mb-2">
                Our most recognizable slogans across the Horizon in some fun
                word art and gradients!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694297049/kreativehorizon.com/brand-guidelines/go_build_slogan_dvqal7.webp"
                  alt="Kreative Horizon Go Build The Future Of Tomorrow, Today slogan behind white background"
                  width={558}
                  height={558}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694296914/kreativehorizon.com/brand-guidelines/dare_greatly_slogan_vv4qsq.webp"
                  alt="Kreative Horizon Dare Greatly slogan behind white background"
                  width={558}
                  height={558}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694296912/kreativehorizon.com/brand-guidelines/see_the_future_slogan_fgpbzf.webp"
                  alt="Kreative Horizon See The Future For What it Could Be slogan behind white background"
                  width={558}
                  height={558}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
              </div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="col-span-1">
                <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <PencilSimpleLine
                      size={28}
                      className="inline-block"
                      weight="bold"
                    />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Naming
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600">
                    &quot;Kreative DocuVet&quot; are two words and never
                    &quot;KreativeDocuVet&quot;, always spelled with a capital
                    &quot;K&quot; and &quot;H&quot;. It is the brand name of the
                    organization.. When referring to Kreative DocuVet
                    specifically, please use &quot;Kreative DocuVet&quot;.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <CheckCircle
                      size={28}
                      className="inline-block"
                      weight="bold"
                    />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Usage
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600">
                    Ensure there is ample surrounding space for Kreative DocuVet
                    brand assets, allowing them to be either sizable or compact,
                    but always affording them the freedom to breathe. Avoid
                    making them appear confined or overcrowded.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <TextT size={28} className="inline-block" weight="bold" />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Typographic Logo
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                The Kreative DocuVet typographic logo should be used in all
                references to the organization if there is ample room. The black
                and gradient logo is preferred.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603608/kreativedocuvet.com/kdv-long-hybrid_no6xaw.png"
                  alt="Kreative DocuVet primary typographic logo behind white background"
                  width={539}
                  height={222}
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603607/kreativedocuvet.com/kdv-long-black_jmshs7.png"
                  alt="Kreative DocuVet primary typographic in all black logo behind white background"
                  width={539}
                  height="222"
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603607/kreativedocuvet.com/kdv-long-white_b9twco.png"
                  alt="Kreative DocuVet primary typographic logo in all white behind black background"
                  width={539}
                  height={222}
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603607/kreativedocuvet.com/kdv-long-white-hybrid_sm859n.png"
                  alt="Kreative DocuVet primary typographic with white 'kreative' logo behind black background"
                  width={539}
                  height="222"
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <Images size={28} className="inline-block" weight="bold" />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Iconologo
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                The Kreative DocuVet iconologo is for square-first or tight
                layouts. The first iconologo (with the gradient background)
                should only be used in instances like social media or profile
                pictures. The rest can be used in place of the primary
                typographic logo if space is constrained.
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603608/kreativedocuvet.com/kdv-icon-gradient_rt3g9f.png"
                  alt="Kreative DocuVet primary iconologo in white behind gradient background"
                  width={363}
                  height={363}
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603607/kreativedocuvet.com/kdv-icon-grey_tmyyf1.png"
                  alt="Kreative DocuVet primary iconologo in white behind dark grey background"
                  width={539}
                  height={222}
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703603608/kreativedocuvet.com/kdv-icon-white_psckwm.png"
                  alt="Kreative DocuVet primary iconologo in gradient behind white background"
                  width={539}
                  height="222"
                  className="rounded-lg border border-horizon-grey-300 w-full col-span-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="col-span-1">
                <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <Palette size={28} className="inline-block" weight="bold" />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Primary Colors
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                    Besides whites and greys, our brand palette is built off of
                    our special pick of green, blue, and (really) dark green.
                  </p>
                  <div className="flex justify-center items-center p-4 bg-brand-seafoam rounded-lg mb-2">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">Seafoam</p>
                      <p className="text-white text-md">#13CA93</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 bg-brand-medicalblue rounded-lg mb-2">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">
                        Medical Blue
                      </p>
                      <p className="text-white text-md">#17CAD6</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 bg-brand-deepocean rounded-lg mb-2">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">Deep Ocean</p>
                      <p className="text-white text-md">#086268</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 bg-brand-forrest rounded-lg">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">Forrest</p>
                      <p className="text-white text-md">#076448</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-2xl bg-neutrals-2 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <Flask size={28} className="inline-block" weight="bold" />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Gradients
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                    Can be for backgrounds or text. We always go from the left
                    or bottom starting with green and ending with blue.
                  </p>
                  <div className="py-[5rem] bg-gradient-to-b from-brand-seafoam to-brand-medicalblue rounded-lg mb-2" />
                  <div className="py-[5rem] bg-gradient-to-r from-brand-forrest to-brand-deepocean rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
