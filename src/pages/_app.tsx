import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.eot",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.eot",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.eot",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.eot",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.eot",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.eot",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://kreativedocuvet.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div className={`${satoshi.variable} font-sans`}>
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | Kreative DocuVet"
        defaultTitle="Kreative DocuVet"
        description="Kreative DocuVet is helping veterinarians get home on time with our AI scribe that turns raw appointment audio into completed medical records in minutes."
        canonical={canonicalUrl}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "icon",
            href: "/favicon-32x32.png",
            sizes: "32x32",
          },
          {
            rel: "icon",
            href: "/favicon-16x16.png",
            sizes: "16x16",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#5bbad5",
          },
        ]}
        additionalMetaTags={[
          {
            name: "ms-application-TileColor",
            content: "#da532c",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
        openGraph={{
          url: "https://kreativedocuvet.com/",
          title: "Kreative DocuVet",
          description:
            "Kreative DocuVet is helping veterinarians get home on time with our AI scribe that turns raw appointment audio into completed medical records in minutes.",
          images: [
            {
              url: "/images/docuvet-profile-cover-sqr.png",
              width: 700,
              height: 700,
              alt: "Kreative DocuVet Square Logo Wordmark",
            },
          ],
        }}
        twitter={{
          handle: "@kreativedocuvet",
          site: "@kreativedocuvet",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
