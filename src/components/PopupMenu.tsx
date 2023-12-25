import React, { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { Dialog } from "@headlessui/react";

function MenuItem({
  link,
  name,
  target,
  rel,
}: {
  link: string;
  name: string;
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={link}
      target={target}
      rel={rel}
      className="text-2xl py-2 px-1 text-neutrals-13"
    >
      {name}
    </Link>
  );
}

export default function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: any, state: boolean) => {
    e.preventDefault();
    console.log("starting: ", isOpen);
    setIsOpen(state);
    console.log("ending: ", isOpen);
  }

  return (
    <div>
      <div>
        <button
          className={`pr-1 pl-1 py-1 ${isOpen ? "hidden" : "block"}`}
          onClick={(e) => handleToggle(e, true)} // skipcq: JS-0417
          aria-label="Open navigation menu"
        >
          <List size={24} />
        </button>
        <button
          className={`pr-1 pl-1 py-1 ${isOpen ? "block" : "hidden"}`}
          onClick={(e) => handleToggle(e, false)} // skipcq: JS-0417
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)} // skipcq: JS-0417
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-start justify-start p-4 top-[4rem]">
          <Dialog.Panel className="mx-auto min-w-full rounded-lg bg-white bg-opacity-[.95] backdrop-blur-sm border border-neutrals-5">
            <div className="flex flex-col items-start justify-between space-y-1 p-5">
              <MenuItem link={"/"} name={"Home"} />
              <MenuItem link={"/story"} name={"Story"} />
              <MenuItem link={"/faqs"} name={"Faqs"} />
              <MenuItem link={"/about"} name={"About"} />
              <MenuItem link={"/contact"} name={"Contact"} />
              <MenuItem link={"/sign-in"} name={"Sign in"} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
