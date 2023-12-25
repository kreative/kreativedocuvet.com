import Link from "next/link";
import Container from "./Container";
import NavMenu from "./NavMenu";
import PopupMenu from "./PopupMenu";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className={"sticky top-0 pt-1 z-50"}>
      <Container>
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-neutrals-5 py-1.5 px-2 my-3 rounded-[10px] flex items-center justify-between min-[870px]:justify-center space-x-6 w-full min-[870px]:w-auto">
            <Link href="/" aria-label={"Home page"}>
              <svg
                className="h-10 w-auto drop-shadow-md"
                viewBox="0 0 264 264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_57_8)">
                  <rect
                    width="264"
                    height="264"
                    rx="60"
                    fill="url(#paint0_linear_57_8)"
                  />
                </g>
                <rect
                  x="0.5"
                  y="0.5"
                  width="263"
                  height="263"
                  rx="59.5"
                  stroke="#D7D7D7"
                />
                <g filter="url(#filter1_i_57_8)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M200.916 95.3177C196.153 75.4924 193.799 70.9172 190.702 64.8989C189.961 63.4591 189.178 61.9362 188.309 60.1027C185.941 55.1076 184.224 52.343 182.885 50.8935C181.026 48.5233 178.147 47 174.912 47C169.306 47 164.76 51.5713 164.76 57.211C164.76 58.5134 165.005 59.7578 165.447 60.903C165.708 61.8246 166.337 63.1065 167.318 65.1067C168.356 67.2216 169.787 70.1395 171.594 74.2837C179.787 93.9748 180.775 111.585 181.005 122.554C181.857 163.284 158.904 188.743 131.64 188.743C104.378 188.743 78.7704 158.939 82.2765 122.554C85.1063 93.1941 94.9669 71.0741 97.2957 66.1297C98.1942 64.2591 98.7072 62.9693 99.0873 61.9343C99.6995 60.5892 100.183 58.8715 100.183 57.211C100.183 51.5713 95.6374 47 90.031 47C87.3841 47 84.9741 48.0199 83.1669 49.6893C82.0995 50.5554 81.5207 51.5908 81.0055 52.5125C80.9285 52.6502 80.8526 52.786 80.7771 52.9176C79.2104 55.65 75.773 61.8366 74.1395 65.6088L74.1366 65.6155C73.8441 66.28 52.0569 115.786 59.5784 155.13C62.4967 170.397 72.7133 184.718 74.2256 186.705L74.8254 187.494C78.7688 192.687 82.7233 197.894 90.4395 203.013C90.6793 203.172 90.9574 203.36 91.2725 203.573C99.0946 208.856 129.743 229.557 164.954 209.259C190.057 194.787 195.888 178.84 200.333 166.686L200.657 165.8C204.43 155.513 208.051 125.012 200.916 95.3177ZM86.9544 185.449C86.7043 185.679 86.3166 185.661 86.0882 185.409L82.6911 181.654C82.4627 181.401 82.4807 181.011 82.7311 180.781L86.5614 177.268C86.8115 177.039 87.1999 177.057 87.4283 177.309L90.825 181.064C91.0534 181.316 91.0351 181.707 90.7851 181.937L86.9544 185.449ZM176.457 177.36C176.686 177.108 177.073 177.089 177.324 177.319L181.154 180.832C181.404 181.062 181.423 181.452 181.194 181.705L177.797 185.46C177.569 185.712 177.181 185.73 176.93 185.501L173.1 181.987C172.85 181.758 172.832 181.367 173.06 181.115L176.457 177.36ZM75.1507 149.316C75.2368 149.645 75.0396 149.982 74.711 150.068L69.8252 151.341C69.4969 151.427 69.162 151.228 69.0765 150.899L67.7706 145.852C67.6857 145.522 67.8826 145.185 68.2109 145.1L73.0971 143.826C73.425 143.741 73.7606 143.939 73.846 144.269L75.1507 149.316ZM194.741 145.274C195.07 145.359 195.267 145.696 195.18 146.026L193.875 151.073C193.79 151.403 193.455 151.601 193.127 151.515L188.241 150.242C187.912 150.157 187.715 149.819 187.801 149.49L189.106 144.443C189.192 144.113 189.527 143.915 189.855 144L194.741 145.274ZM195.818 117.111C195.832 117.451 195.568 117.738 195.23 117.751L190.186 117.954C189.848 117.968 189.562 117.702 189.548 117.362L189.336 112.151C189.322 111.811 189.586 111.523 189.924 111.51L194.968 111.308C195.306 111.294 195.593 111.559 195.607 111.9L195.818 117.111ZM74.0383 111.424C74.3772 111.437 74.641 111.725 74.6264 112.065L74.4154 117.275C74.4014 117.616 74.1153 117.881 73.777 117.867L68.7332 117.665C68.3946 117.652 68.1308 117.364 68.1446 117.024L68.3568 111.813C68.3708 111.473 68.6563 111.208 68.9949 111.222L74.0383 111.424ZM83.4849 80.2822C83.6098 79.9659 83.455 79.6075 83.1396 79.4825L78.4445 77.6196C78.1291 77.4943 77.7728 77.6496 77.6476 77.9663L75.7402 82.8155C75.6157 83.1324 75.7702 83.4914 76.0859 83.6161L80.7809 85.4793C81.0963 85.6043 81.453 85.4483 81.5781 85.1314L83.4849 80.2822ZM188.893 83.4116C189.209 83.2866 189.363 82.9282 189.239 82.6119L187.332 77.7627C187.207 77.4457 186.85 77.2897 186.535 77.4147L181.839 79.2779C181.524 79.4026 181.369 79.7616 181.494 80.0786L183.401 84.9278C183.526 85.2444 183.883 85.3998 184.198 85.2745L188.893 83.4116Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_57_8"
                    x="0"
                    y="0"
                    width="264"
                    height="264"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="1"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_innerShadow_57_8"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_57_8"
                    />
                  </filter>
                  <filter
                    id="filter1_i_57_8"
                    x="58"
                    y="47"
                    width="147"
                    height="175"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_57_8"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_57_8"
                    x1="0"
                    y1="132"
                    x2="264"
                    y2="132"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13CA93" />
                    <stop offset="1" stopColor="#17CAD6" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div className="hidden min-[870px]:block">
              <NavMenu />
            </div>
            <div className="flex items-center space-x-3 justify-end">
              <motion.div
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href="/book-demo"
                  className="py-2 px-5 bg-brand-forrest text-white rounded-md drop-shadow-md"
                >
                  Book your demo
                </Link>
              </motion.div>
              <div className="block min-[870px]:hidden pr-2">
                <PopupMenu />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
