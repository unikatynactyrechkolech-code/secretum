import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2">
        <Image
          src="/logo.jpg"
          alt="Secretum Detective"
          width={1086}
          height={830}
          priority
          className="h-16 w-auto object-contain sm:h-24"
        />
      </div>
    </header>
  );
}
