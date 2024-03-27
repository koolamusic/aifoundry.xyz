import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  SunoAILogo,
  LogoWithTextDark,
  PikaLogo,
  OpenAILogo,
  RunwayMLLogo,
} from "./_components/brand";
import { routes } from "@/constants";

import { PageFooter } from "@/app/_components/page-footer";

export default function RouterPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header>
        <DarkSplitHero />
      </header>

      <main>
        {/* Social Proof parallax image */}
        <SocialProofHero />

        <SubstackFeedEmbed />

        {/* Footer */}
        <PageFooter />
      </main>
    </div>
  );
}

function SubstackFeedEmbed() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the Foundry
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Expert insights on maximizing your AI investments and unlocking new
            revenue streams.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            <article>
              <div id="substack-feed-embed"></div>

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                        window.SubstackFeedWidget = {
                          substackUrl: "aifoundry.substack.com",
                          posts: 3,
                          colors: {
                            primary: "#000000",
                            secondary: "#3C3737",
                            background: "#ECECEC",
                          }
                        };

                      `,
                }}
              />
              {/* End Newletter section */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function DarkSplitHero() {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#FFCE00] to-[#FFCE88] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <section className="-ml-3">
            <LogoWithTextDark className="h-24 w-24" />
          </section>

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Get smarter about AI Innovation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join our professional community of content creators, tech
            professionals and business operators who exclusive tips every week
            to boost productivity with AI and unlock new revenue opportunities.
          </p>

          {/* Pre-embed UX Copy */}
          <div className="mt-12 sm:mt-24 lg:mt-8">
            <a href="#" className="inline-flex space-x-6">
              {/* <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-semibold leading-6 text-yellow-400 ring-1 ring-inset ring-yellow-500/20">
                What's new
              </span> */}
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Join other top professionals and creators</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          {/* Begin Newsletter Embed */}
          <div className="mt-10 flex items-center gap-x-6">
            <div id="custom-substack-embed"></div>

            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.CustomSubstackWidget = {
                substackUrl: "prostack.substack.com",
                placeholder: "example@gmail.com",
                buttonText: "Subscribe",
                theme: "orange",

              };

            `,
              }}
            />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"></div>
        </div>
      </div>
    </div>
  );
}

const SocialProofHero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
      <img
        src="/paining.webp"
        alt="in search of curiosity ai foundry"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Join the Foundry Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join our community of AI enthusiasts and industry leaders as we
              expore concepts to monetize AI, learn from each other and forge
              the future of AI together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={routes.whatsapp}
                className=" bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Join the WhatsApp Community
              </a>
              <a
                href={routes.newsletter}
                className="text-sm font-semibold leading-6 text-white"
              >
                Subscribe for $0 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Logo cloud, OpenAI, Heygen, Claude, Taskade, Langchain, Stability, Pika, Suno */}
        <div className="mx-auto hidden max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 md:grid lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <SunoAILogo
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            // src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
            // alt="Transistor"
            width={158}
            height={48}
          />
          <PikaLogo
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            // src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            // alt="Reform"
            width={158}
            height={48}
          />
          <RunwayMLLogo
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            // src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            // alt="Tuple"
            // width={158}
            // height={48}
          />
          <OpenAILogo
            className="col-span-2 max-h-12 w-full object-contain pl-6 sm:col-start-2 lg:col-span-1"
            // src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
            // src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="Heygen"
            width={158}
            height={48}
          />
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};
