import Link from "next/link";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "@phosphor-icons/react";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What is Kreative DocuVet?",
    answer:
      "Kreative DocuVet is an AI powered veterinary scribe that allows small and large animal veterinarians create medical records from raw appointment audio. From the un-edited appointment audio recorded ambiently in the background, our AI can create a complete medical record veterinarians can review in minutes."
  },
  {
    question: "How does Kreative DocuVet work?",
    answer:
      "Our AI understands natural language, veterinary medicine, and animal specific context, so any veterinarian can utilize our platform for their practice. All veterinarians have to do is create an appointment, select a patient, and hit record. When they're done, they hit stop, and our AI pulls out key information and context to produce a medical record they can push to their Patient Management Systems in minutes."
  },
  {
    question: "Does Kreative DocuVet work for small and large animal veterinarians?",
    answer:
      "Yes, our AI understands both small and large animal veterinary medicine. We're currently working on expanding our AI to understand exotic animal medicine as well to ensure Kreative DocuVet is inclusive for all veterinary disciplines."
  },
  {
    question: "What is ambient recording?",
    answer:
      "Ambient recording is the process of recording audio in the background of an appointment. Our AI then processes the audio to pull out key information and context to produce a medical record. This allows veterinarians to focus on their patients and clients, rather than taking notes."
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. All you have to do is book a demo and we'll walk you through how Kreative DocuVet can work for your practice!"
  },
  {
    question: "Does Kreative DocuVet integrate with my Patient Management System?",
    answer:
      "Currently, Kreative DocuVet provides a generated medical record with editing capabilities. We're working on integrating with the most popular Patient Management Systems to allow veterinarians to push their medical records directly to their PM systems."
  },
  {
    question: "Why is Kreative DocuVet better than hiring a scribe?",
    answer:
      "Kreative DocuVet is a fraction of the cost of hiring a scribe. We also provide a more accurate medical record, as our AI is trained to understand veterinary medicine and animal specific context. And, the best part is that you don't have to compromise on your clinic specific template or record format - Kreative DocuVet can be customized to fit your specific clinic's needs."
  },
];

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
          <div className="col-span-12 lg:col-span-7">
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-2xl tracking-tight font-bold leading-7 text-brand-forrest">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <Minus
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Plus
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-lg pt-4">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
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
