import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 bg-white z-50 shadow-md">
      <div className="flex items-center gap-2">
        <Image src={'/logo.svg'} alt={''} width={20} height={20} />
        <h1 className="text-2xl font-bold">Gyan</h1>
      </div>
    </nav>
  );
}