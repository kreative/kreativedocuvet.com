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
      <NextSeo
        title="The Story"
        description="Read our promise to veterinarians and the reasons why we're working hard to craft Kreative DocuVet."
      />
      <Navbar />
      <Container>
        <div className="w-full md:w-[52%] mx-auto pt-20 pb-20">
          <h1 className="text-[44px] text-neutrals-7 tracking-tight font-medium leading-tight w-[75%]">
            Our promise to{" "}
            <span className="font-bold text-neutrals-13">
              everyday veterinarians:
            </span>
          </h1>
          <p className="text-xl py-12">
            We understand that for you, becoming a veterinarian was a calling.
            It wasn&apos;t about the money, but rather about your passion to
            practice medicine for animals that can&apos;t help themselves.
            <br />
            <br />
            We&apos;ve heard first hand the long hours, challenges with
            staffing, and how challenging it is grow your practice. We&apos;ve
            also heard how much you love your patients; every single
            veterinarian we&apos;ve spoken with stated that providing the best
            quality of care was the primary goal of their clinic.
            <br />
            <br />
            And yet, with all this zeal and all of these challenges, the
            technology industry has continued to stagnate for everyday
            veterinarians. We&apos;ve seen the same software, the same features,
            and the same clunky, user experience for the past 20 years.
            We&apos;ve seen the same companies continue to raise prices and buy
            out competitiors, ignoring the needs of veterinarians large and
            small.
          </p>
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703777879/kreativedocuvet.com/Jonatan_Bustos_vet_isnjhj.webp"
            alt="High-quality images of veterinarians helping a dog on kreativedocuvet.com"
            width={400}
            height={250}
            className="w-full"
          />
          <p className="text-xl py-12">
            With a growing labor shortage in the veterinary space for both
            practicing vets and assistants, more hours will be demanded of each
            and every veterinarian. Inflation is rising and the cost of living
            is increasing, strangling the ability for veterinarians to grow
            their practice and provide for their families.
          </p>
          <h2 className="text-[44px] tracking-tight font-bold leading-tight mb-12">
            It&apos;s time for a change
          </h2>
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1703777943/kreativedocuvet.com/PNG_to_WEBP_conversion_4_zfpodk.webp"
            alt="Image of Kreative DocuVet's patient page"
            width={400}
            height={250}
            className="w-full shadow-xl"
          />
          <p className="text-xl py-12">
            We believe that veterinarians deserve better tools and a better
            experience. We&apos;re cofounded by an equine veterinarian who knows
            first hand the potential of technology to help veterinarians build
            great clinics and maximize patient outcomes.
            <br />
            <br />
            The only thing that&apos;s left is to build it and that&apos;s why
            our four person team is working hard to craft Kreative DocuVet to
            bring joy to everyday veterinarians. To stay true to our mission and
            to keep veterinarians first, we&apos;ve establish three principles
            to inform <span className="italic">every decision we make:</span>
          </p>
          <h3 className="text-2xl font-medium mb-4 tracking-tight">
            Veterinarian-specific
          </h3>
          <p className="text-xl mb-12">
            At the forefront of every decision is the veterinarian. We are
            wholly focused on ensuring that each feature we build is designed
            specifically for them.
          </p>
          <h3 className="text-2xl font-medium mb-4 tracking-tight">
            Intuitive and beautiful
          </h3>
          <p className="text-xl mb-12">
            Software should look nice. It should be easy to use. It should be
            fun to use. We will prioritize great user experience of speed of
            releasing new features.
          </p>
          <h3 className="text-2xl font-medium mb-4 tracking-tight">
            Cutting edge, when it makes sense
          </h3>
          <p className="text-xl mb-12">
            New technologies like machine learning and artificial intelligence
            should be in the hands of veterinarians. But, we&apos;ll only use
            them when they will actually solve problems for veterinarians, not
            just for the sake of new technology.
          </p>
          <p className="text-xl pb-12">
            We promise to stick to our mission and principles of building tools
            that truly helps veterinarians focus on their life&apos;s work.
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
