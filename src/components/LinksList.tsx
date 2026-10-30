import Link from "next/link";
import {
  ArrowUpRight,
  At,
  GithubLogo,
  Globe,
  LinkedinLogo,
  NotePencil,
  XLogo,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

const links: { title: string; href: string; icon: Icon }[] = [
  {
    title: "Website",
    href: "https://otaviorossoni.com",
    icon: Globe,
  },
  {
    title: "Blog",
    href: "https://otaviorossoni.com/blog",
    icon: NotePencil,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/otavio-monteiro-rossoni/",
    icon: LinkedinLogo,
  },
  {
    title: "GitHub",
    href: "https://github.com/Otarossoni/",
    icon: GithubLogo,
  },
  {
    title: "X",
    href: "https://x.com/Otarossoni",
    icon: XLogo,
  },
  {
    title: "Email",
    href: "mailto:otarossoni@gmail.com",
    icon: At,
  },
];

const transition =
  "transition-[background-color,color,scale] duration-(--duration-base) ease-standard";

export default function LinksList() {
  return (
    <nav className="flex flex-col gap-links-gap">
      {links.map(({ title, href, icon: LinkIcon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex h-link w-full items-center gap-link-inner-gap rounded-link bg-surface ps-link-start pe-link-end outline-offset-2 outline-accent [-webkit-tap-highlight-color:transparent] hover:bg-surface-elevated focus-visible:outline-2 active:scale-(--scale-pressed) ${transition}`}
        >
          <span
            className={`flex size-icon-box flex-none items-center justify-center rounded-icon bg-surface-elevated text-text-secondary group-hover:bg-accent-tint group-hover:text-accent ${transition}`}
          >
            <LinkIcon aria-hidden className="size-icon-glyph" />
          </span>
          <span className="min-w-0 flex-1 text-link font-medium text-text">
            {title}
          </span>
          <ArrowUpRight
            aria-hidden
            className={`size-arrow-glyph text-text-tertiary group-hover:text-accent ${transition}`}
          />
        </Link>
      ))}
    </nav>
  );
}
