import Image from "next/image";
import LinksList from "@/components/LinksList";

export default function Home() {
  return (
    <div className="bg-dot-grid flex min-h-dvh w-full flex-col items-center justify-center px-page-margin">
      <main className="animate-fade-up flex w-full max-w-column flex-col gap-profile-gap-mobile sm:gap-profile-gap">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="m-ring-width rounded-full bg-bg p-ring-gap ring-(length:--ring-width) ring-accent">
            <Image
              src="/images/profile.jpg"
              alt="Otávio Monteiro Rossoni"
              width={120}
              height={120}
              className="block size-photo-mobile rounded-full object-cover sm:size-photo"
              preload
            />
          </div>
          <h1 className="mt-name-gap-mobile text-center text-name-mobile font-bold text-text sm:mt-name-gap sm:text-name">
            Otávio Monteiro Rossoni
          </h1>
          <p className="mt-subtitle-gap text-center text-body text-text-secondary">
            Backend Software Engineer
          </p>
        </div>

        {/* Links */}
        <LinksList />
      </main>
    </div>
  );
}
