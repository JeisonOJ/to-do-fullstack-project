import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col  items-center bg-gradient-to-r from-purple-100 to-pink-100 py-8">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
      <div className="bg-purple-600 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-purple-600 border border-current">
            <Link href="/to-do">Go Home</Link>
          </span>
        </div>
      </button>
    </main>
  );
}