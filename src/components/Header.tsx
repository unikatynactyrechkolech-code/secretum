import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          <Image
            src="/logo.jpg"
            alt="Secretum Detective"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
