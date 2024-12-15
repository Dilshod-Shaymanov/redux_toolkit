import React from "react";

const sections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Brand Center", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Help center",
    links: [
      { name: "Discord Server", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Licensing", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Download",
    links: [
      { name: "iOS", href: "#" },
      { name: "Android", href: "#" },
      { name: "Windows", href: "#" },
      { name: "MacOS", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {section.title}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {section.links.map((link) => (
                  <li className="mb-4" key={link.name}>
                    <a
                      href={link.href}
                      className="hover:underline"
                      aria-label={`Visit our ${link.name} page`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-900 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              { name: "Facebook", icon: "M6.135 3H8V0H6.135..." },
              { name: "Twitter", icon: "M16.942 1.556a16.3 16.3 0 0..." },
              { name: "GitHub", icon: "M10 .333A9.911 9.911 0 0 0..." },
              { name: "Dribbble", icon: "M10 0a10 10 0 1 0 10 10..." },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label={`Visit our ${social.name} page`}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
