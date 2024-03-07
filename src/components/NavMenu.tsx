import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu"; // skipcq: JS-C1003
import { trackSignIn } from "../../lib/tracking";

function MenuItem({ link, name }: { link: string; name: string }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          className="text-neutrals-13 hover:underline"
          href={link}
          target={link.startsWith("http") ? "_blank" : "_self"}
          onClick={() => {
            if (link === "https://docuvet.kreativeusa.com") {
              const url = new URL(window.location.href);
              trackSignIn(url.pathname, "navbar");
            }
          }}
        >
          {name}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

export default function NavMenu() {
  return (
    <NavigationMenu.Root orientation="vertical">
      <NavigationMenu.List className="flex justify-center items-center space-x-5">
        <MenuItem link="/our-promise" name="Our Promise" />
        <MenuItem link="/faqs" name="Faqs" />
        <MenuItem link="/about" name="About" />
        <MenuItem link="/contact" name="Contact" />
        <MenuItem link="https://docuvet.kreativeusa.com" name="Sign in" />
        {/* <MenuItem link="/sign-in" name="Sign in" /> */}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
