import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function FooterLinkGroupLabel({ title }: { title: string }) {
  return (
    <p className="text-black font-medium text-sm mb-2 uppercase italic underline">
      {title}
    </p>
  );
}

function FooterLink({
  href,
  title,
  target,
}: {
  href: string;
  title: string;
  target?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="text-2xl lg:text-xl"
        target={target}
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <div>
      <Marquee
        className="bg-gradient-to-r from-brand-forrest to-brand-deepocean pt-14 pb-16"
        autoFill
        speed={75}
        pauseOnHover
      >
        <p className="text-white font-bold tracking-tight text-9xl mx-16 italic hover:underline">
          <Link href="/book-demo">Book a free demo</Link>
        </p>
        <div>
          <svg
            className="h-16"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.9999 24.9922C50.0052 25.8421 49.7472 26.6729 49.2613 27.37C48.7755 28.0672 48.0857 28.5965 47.287 28.8852L33.8393 33.8362L28.8924 47.2846C28.5995 48.0811 28.0695 48.7685 27.3739 49.2541C26.6783 49.7397 25.8507 50 25.0027 50C24.1546 50 23.327 49.7397 22.6314 49.2541C21.9358 48.7685 21.4058 48.0811 21.1129 47.2846L16.153 33.8518L2.71313 28.9008C1.91728 28.6077 1.23045 28.0772 0.745287 27.3811C0.260128 26.6849 0 25.8566 0 25.0078C0 24.1591 0.260128 23.3307 0.745287 22.6346C1.23045 21.9384 1.91728 21.408 2.71313 21.1148L16.1608 16.1638L21.1076 2.71539C21.4006 1.91888 21.9306 1.23147 22.6262 0.745908C23.3217 0.260345 24.1494 0 24.9974 0C25.8455 0 26.6731 0.260345 27.3687 0.745908C28.0643 1.23147 28.5943 1.91888 28.8872 2.71539L33.8341 16.1742L47.2713 21.1252C48.0688 21.4098 48.759 21.9341 49.2474 22.6263C49.7359 23.3185 49.9987 24.1448 49.9999 24.9922Z"
              fill="white"
            />
          </svg>
        </div>
      </Marquee>
      <div className="relative bg-neutrals-3 pt-20 pb-6 z-10">
        <Container>
          <div className="grid grid-cols-12 gap-y-6 sm:gap-y-12 gap-x-4 lg:gap-4">
            <div className="col-span-12 lg:col-span-5">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-brand-forrest">
                To the busy, tired, and passionate veterinarians.{" "}
                <span className="font-bold">We hear you.</span>
              </h3>
              <p className="text-2xl lg:text-xl mb-4">
                We&apos;re on a mission to advance veterinary practice by
                developing tools veterinarians love to use, so they can optimize
                patient outcomes and focus on their life&apos;s work.
              </p>
            </div>
            <div className="col-span-12 hidden lg:block lg:col-span-3" />
            <div className="col-span-12 xs:col-span-6 lg:col-span-2">
              <FooterLinkGroupLabel title="Discover" />
              <div className="flex flex-col items-start space-y-4 lg:space-y-2">
                <FooterLink href="/about" title="Company" />
                <FooterLink href="/our-promise" title="Our Promise" />
                <FooterLink href="/faqs" title="Faqs" />
                <FooterLink href="/contact" title="Contact" />
                <FooterLink href="/brand" title="Brand" />
                <FooterLink
                  href="https://support.kreativeusa.com/docuvet"
                  title="Support"
                />
              </div>
            </div>
            <div className="col-span-12 xs:col-span-6 lg:col-span-2">
              <div className="mb-4">
                <FooterLinkGroupLabel title="Socials" />
                <div className="flex flex-col items-start space-y-3 md:space-y-2">
                  <FooterLink
                    href="https://instagram.com/kreativedocuvet"
                    title="Instagram"
                  />
                  <FooterLink
                    href="https://twitter.com/kreativedocuvet"
                    title="Twitter"
                  />
                  <FooterLink
                    href="https://facebook.com/kreativedocuvet"
                    title="Facebook"
                  />
                  <FooterLink
                    href="https://www.linkedin.com/company/kreativedocuvet"
                    title="LinkedIn"
                  />
                </div>
              </div>
              <div className="mb-6">
                <FooterLinkGroupLabel title="Legal" />
                <div className="flex flex-col items-start space-y-3 md:space-y-2">
                  <FooterLink
                    href="/policies/privacy-policy"
                    title="Privacy Policy"
                  />
                  <FooterLink
                    href="/policies/terms-of-use"
                    title="Terms of Use"
                  />
                  <FooterLink href="/policies/eula" title="EULA" />
                  <FooterLink href="/policies/cookies" title="Cookies Policy" />
                </div>
              </div>
            </div>
          </div>
          <svg
            className="w-full h-auto mt-12 lg:mt-6 mb-12"
            viewBox="0 0 1126 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.2107 95.5993L77.9246 57.3939V55.7806H49.296L22.9042 86.4273V13.8405L0 0V140.114H22.9042V105.602L50.0983 140.114H79.6786V138.501L44.2107 95.5993ZM82.7787 140.114H105.676V98.5034C105.676 84.9513 113.154 77.0493 124.76 77.0493H132.714L138.832 54.3114H126.989C116.336 54.3114 109.313 60.6 105.676 68.042H105.044L103.133 55.7806H82.7787V140.114ZM175.436 141.563C198.177 141.563 211.373 128.182 213.603 113.017H189.889C188.462 116.889 184.484 121.406 175.422 121.406C164.293 121.406 159.364 114.472 159.201 104.634H214.697V95.4414C214.697 72.5388 200.386 54.3114 174.946 54.3114C147.908 54.3114 134.237 74.1452 134.237 98.0159C134.25 122.209 149.2 141.563 175.436 141.563ZM159.378 88.9743C159.853 80.9076 164.463 74.619 174.96 74.619C184.661 74.619 189.237 80.9076 189.747 88.9743H159.378ZM245.352 141.563C255.685 141.563 263.028 137.855 267.61 132.535H268.249V139.146L291.942 140.114V84.6286C291.942 67.0534 278.27 54.3114 255.529 54.3114C231.054 54.3114 219.748 71.3168 219.748 87.1275L242.646 83.6949C242.646 78.5322 247.099 74.3375 254.734 74.3375C263.796 74.3375 267.454 78.8549 267.454 84.6354V91.5762C264.115 90.4435 255.848 89.1528 249.641 89.1528C226.744 89.1528 216.247 99.4508 216.247 115.124C216.247 130.111 226.601 141.563 245.352 141.563ZM251.552 122.209C244.237 122.209 240.423 118.66 240.423 113.827C240.423 109.309 244.556 105.76 252.504 105.76C257.619 105.679 262.701 106.612 267.46 108.506V109.316C267.454 116.243 261.573 122.209 251.552 122.209ZM336.472 141.563C344.263 141.563 350.749 140.114 353.326 139.146V118.495H351.735C349.193 119.457 346.501 119.947 343.787 119.944C336.472 119.944 333.127 116.559 333.127 108.657V76.8914H353.006V55.76H333.127V26.7541H331.543L309.754 34.7384V55.7806H295.124V76.8914H308.639V114.651C308.639 129.953 317.232 141.563 336.472 141.563ZM374.421 47.2127C383.803 47.2127 389.215 41.7204 389.215 32.6994C389.215 23.8295 383.776 18.3441 374.421 18.3441C364.727 18.3441 359.635 23.8363 359.635 32.6994C359.635 41.7273 364.727 47.2127 374.421 47.2127ZM362.021 140.114H386.496V55.76H362.021V140.114ZM418.149 140.114H449.477L475.556 57.3939V55.7806H450.748L434.371 116.751H433.732L416.878 55.7806H391.724V57.3939L418.149 140.114ZM512.819 141.563C535.553 141.563 548.756 128.182 550.979 113.017H527.286C525.858 116.889 521.881 121.406 512.819 121.406C501.683 121.406 496.754 114.472 496.597 104.634H552.094V95.4414C552.094 72.5388 537.817 54.3114 512.343 54.3114C485.305 54.3114 471.633 74.1452 471.633 98.0159C471.633 122.209 486.576 141.563 512.819 141.563ZM496.754 88.9743C497.237 80.9076 501.846 74.619 512.343 74.619C522.037 74.619 526.654 80.9076 527.13 88.9743H496.754Z"
              fill="black"
            />
            <path
              d="M634.898 22.4613L648.488 20.1019V143.922L634.898 141.563V130.86H634.559C629.462 137.486 621.308 143.941 607.379 143.941C585.635 143.941 568.307 126.783 568.307 98.2444C568.307 69.7054 585.635 52.548 607.379 52.548C621.308 52.548 629.462 58.6635 634.559 66.138H634.898V22.4613ZM608.738 132.05C624.876 132.05 634.898 118.629 634.898 98.2444C634.898 77.8594 624.876 64.4393 608.738 64.4393C590.901 64.4393 581.897 81.2569 581.897 98.2444C581.897 115.232 590.901 132.05 608.738 132.05Z"
              fill="url(#paint0_linear_5_1055)"
            />
            <path
              d="M697.594 143.941C671.093 143.941 655.125 125.255 655.125 98.2444C655.125 71.2343 671.093 52.548 697.594 52.548C723.924 52.548 739.893 71.2343 739.893 98.2444C739.893 125.255 723.924 143.941 697.594 143.941ZM697.594 132.05C716.959 132.05 726.303 116.761 726.303 98.2444C726.303 79.728 716.959 64.4393 697.594 64.4393C678.058 64.4393 668.715 79.728 668.715 98.2444C668.715 116.761 678.058 132.05 697.594 132.05Z"
              fill="url(#paint1_linear_5_1055)"
            />
            <path
              d="M810.391 86.1833C809.712 76.6703 803.256 64.4393 785.929 64.4393C765.374 64.4393 757.56 81.9364 757.56 98.2444C757.56 114.552 765.374 132.05 785.929 132.05C803.426 132.05 809.712 119.988 810.391 109.626H823.981C822.792 129.332 807.333 143.941 785.929 143.941C760.618 143.941 743.97 125.424 743.97 98.2444C743.97 71.0644 760.618 52.548 785.929 52.548C807.333 52.548 821.943 66.8175 823.981 86.1833H810.391Z"
              fill="url(#paint2_linear_5_1055)"
            />
            <path
              d="M922.855 54.9263H937.634L961.587 127.973H961.757L985.709 54.9263H1000.49L969.401 141.563H953.942L922.855 54.9263Z"
              fill="url(#paint3_linear_5_1055)"
            />
            <path
              d="M1040.65 132.05C1057.97 132.05 1064.43 120.838 1065.96 114.892H1079.55C1075.13 131.03 1062.73 143.941 1041.16 143.941C1014.82 143.941 998.856 125.424 998.856 98.2444C998.856 69.3657 1015.16 52.548 1040.48 52.548C1067.66 52.548 1080.91 71.0644 1080.91 101.812H1012.45C1012.45 117.44 1021.79 132.05 1040.65 132.05ZM1040.48 64.4393C1024.17 64.4393 1012.45 75.9908 1012.45 89.9205H1067.32C1067.32 75.9908 1056.78 64.4393 1040.48 64.4393Z"
              fill="url(#paint4_linear_5_1055)"
            />
            <path
              d="M1125.7 66.8175H1108.71V118.969C1108.71 128.822 1114.14 130.521 1125.7 129.671V141.563C1122.64 142.242 1119.07 142.582 1115.5 142.582C1103.95 142.582 1095.12 137.995 1095.12 120.328V66.8175H1082.38V54.9263H1095.12V26.0475L1108.71 28.4069V54.9263H1125.7V66.8175Z"
              fill="url(#paint5_linear_5_1055)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M916.161 79.9062C913.384 68.4175 912.012 65.7662 910.207 62.2786C909.776 61.4443 909.319 60.5618 908.812 59.4992C907.432 56.6046 906.431 55.0026 905.651 54.1625C904.567 52.789 902.889 51.9063 901.004 51.9063C897.736 51.9063 895.087 54.5553 895.087 57.8235C895.087 58.5783 895.23 59.2994 895.487 59.963C895.639 60.4971 896.006 61.2399 896.578 62.399C897.182 63.6246 898.017 65.3155 899.07 67.7171C903.845 79.128 904.421 89.3331 904.555 95.6896C905.052 119.292 891.673 134.046 875.782 134.046C859.892 134.046 844.966 116.774 847.009 95.6896C848.659 78.6756 854.406 65.8571 855.764 62.9919C856.287 61.9079 856.586 61.1604 856.808 60.5606C857.165 59.7812 857.447 58.7858 857.447 57.8235C857.447 54.5553 854.797 51.9063 851.529 51.9063C849.986 51.9063 848.582 52.4973 847.528 53.4647C846.906 53.9666 846.569 54.5667 846.268 55.1008C846.224 55.1806 846.179 55.2592 846.135 55.3355C845.222 56.9189 843.219 60.504 842.267 62.69L842.265 62.6939C842.094 63.079 829.395 91.7675 833.779 114.567C835.48 123.414 841.435 131.714 842.317 132.865L842.666 133.322C844.965 136.331 847.27 139.349 851.767 142.315C851.907 142.408 852.069 142.516 852.253 142.64C856.812 145.701 874.676 157.697 895.199 145.935C909.831 137.548 913.23 128.307 915.821 121.264L916.01 120.75C918.209 114.789 920.32 97.1137 916.161 79.9062ZM849.736 132.137C849.59 132.27 849.364 132.26 849.231 132.113L847.251 129.938C847.118 129.791 847.128 129.565 847.274 129.432L849.507 127.396C849.653 127.263 849.879 127.274 850.012 127.42L851.992 129.596C852.125 129.742 852.114 129.968 851.969 130.102L849.736 132.137ZM901.905 127.449C902.038 127.303 902.263 127.292 902.409 127.426L904.642 129.461C904.788 129.594 904.799 129.821 904.665 129.967L902.685 132.143C902.552 132.289 902.326 132.3 902.18 132.167L899.948 130.131C899.802 129.998 899.791 129.771 899.924 129.625L901.905 127.449ZM842.856 111.198C842.906 111.389 842.791 111.584 842.6 111.634L839.752 112.372C839.56 112.421 839.365 112.306 839.315 112.115L838.554 109.191C838.505 109 838.62 108.804 838.811 108.755L841.659 108.017C841.85 107.967 842.046 108.082 842.095 108.273L842.856 111.198ZM912.561 108.856C912.753 108.905 912.868 109.1 912.818 109.291L912.057 112.216C912.007 112.407 911.812 112.522 911.621 112.472L908.773 111.735C908.581 111.685 908.466 111.49 908.516 111.299L909.277 108.374C909.327 108.183 909.522 108.068 909.714 108.118L912.561 108.856ZM913.189 92.5351C913.198 92.7321 913.044 92.8987 912.846 92.9064L909.907 93.0237C909.709 93.0317 909.543 92.8781 909.535 92.6807L909.411 89.6611C909.403 89.464 909.557 89.2972 909.754 89.2896L912.694 89.1724C912.891 89.1644 913.058 89.3182 913.066 89.5157L913.189 92.5351ZM842.208 89.2397C842.405 89.2474 842.559 89.414 842.55 89.611L842.427 92.6304C842.419 92.8277 842.252 92.9817 842.055 92.9737L839.115 92.8564C838.918 92.8487 838.764 92.682 838.772 92.4848L838.896 89.4654C838.904 89.2678 839.07 89.1144 839.268 89.1224L842.208 89.2397ZM847.714 71.1932C847.786 71.0098 847.696 70.8022 847.512 70.7297L844.776 69.6502C844.592 69.5776 844.384 69.6676 844.311 69.8511L843.2 72.6612C843.127 72.8449 843.217 73.0529 843.401 73.1252L846.138 74.2049C846.321 74.2773 846.529 74.1869 846.602 74.0033L847.714 71.1932ZM909.153 73.0066C909.337 72.9342 909.427 72.7265 909.354 72.5432L908.243 69.7331C908.17 69.5495 907.962 69.459 907.778 69.5315L905.042 70.6112C904.858 70.6835 904.767 70.8915 904.84 71.0752L905.952 73.8853C906.025 74.0687 906.233 74.1588 906.417 74.0862L909.153 73.0066Z"
              fill="url(#paint6_linear_5_1055)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_5_1055"
                x1="568.609"
                y1="84.9375"
                x2="691.08"
                y2="-92.2012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13CA93" />
                <stop offset="1" stopColor="#17CAD6" />
              </linearGradient>
            </defs>
          </svg>
          <div>
            <hr className="line" />
            <div className="grid grid-cols-2 gap-4 md:gap-0 mt-6 md:mt-4 mb-1 text-center">
              <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start items-center space-x-3">
                <p className="text-md">
                  © 2023 Kreative DocuVet, inc. All rights reserved.{" "}
                  <Link href="/sitemap.xml" className="text-md underline">
                    Sitemap
                  </Link>
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end items-center">
                <a
                  href="https://kreativedreamflow.com"
                  className="hover:underline text-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Made with ♥ in Ames, IA. Website by Kreative Dreamflow.
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
