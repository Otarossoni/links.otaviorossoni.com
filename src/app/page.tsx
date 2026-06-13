import Image from "next/image";
import LinksList from "@/components/LinksList";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Profile Header */}
        <div className="animate-5 mb-12 flex flex-col items-center">
          <Image
            src="/images/profile.jpg"
            alt="Otávio Monteiro Rossoni"
            width={144}
            height={144}
            className="rounded-full"
            priority
            quality={100}
          />
          <h1 className="mt-4 text-xl font-semibold">Otávio Monteiro Rossoni</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Backend Software Engineer
          </p>
        </div>

        {/* Links */}
        <div className="animate-7">
          <LinksList />
        </div>
      </div>
    </div>
  );
}
