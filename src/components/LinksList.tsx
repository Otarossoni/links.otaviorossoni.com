import Link from "next/link";

const links = [
  {
    title: "Website",
    href: "https://otaviorossoni.com",
  },
  {
    title: "Blog",
    href: "https://otaviorossoni.com/blog",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/otavio-monteiro-rossoni/",
  },
  {
    title: "GitHub",
    href: "https://github.com/Otarossoni/",
  },
  {
    title: "X",
    href: "https://x.com/Otarossoni",
  },
  {
    title: "Email",
    href: "mailto:otarossoni@gmail.com",
  },
];

export default function LinksList() {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full border border-neutral-800 px-4 py-3 text-sm font-semibold text-neutral-300 transition-all duration-200 ease-in-out hover:border-[#8A2BE2] hover:text-white"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
