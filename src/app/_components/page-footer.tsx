import { LogoWithTextDark } from "@/app/_components/brand";
import { routes } from "@/constants";

const footerNavigation = {
  topics: [
    { name: "Monetize AI", href: routes.whatsapp },
    { name: "AI for Professionals", href: routes.whatsapp },
    { name: "Ask Me Anything", href: routes.whatsapp },
    { name: "AI for Software & Design", href: routes.whatsapp },
  ],
  community: [
    { name: "WhatsApp Community", href: routes.whatsapp },
    { name: "Newsletter", href: routes.newsletter },
    { name: "Guides", href: "#" },
  ],
  social: [
    { name: "LinkedIn", href: routes.linkedin },
    { name: "TikTok", href: routes.tiktok },
    { name: "Instagram", href: routes.instagram },
    { name: "Twitter", href: routes.twitter },
  ],
  company: [
    { name: "Partnership", href: "mailto:casts@aifoundry.xyz" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export const PageFooter = () => {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <LogoWithTextDark className="-ml-2 h-28 w-28" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Community
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.community.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Topics
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.topics.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
