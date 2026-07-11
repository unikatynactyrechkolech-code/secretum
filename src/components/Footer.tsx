export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-6">
      <div className="mx-auto max-w-7xl px-6 text-center text-xs tracking-wide text-white/40 lg:px-10">
        © {new Date().getFullYear()} Secretum – Detektivní služby. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
