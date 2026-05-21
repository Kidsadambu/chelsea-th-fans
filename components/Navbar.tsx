export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-950 border-b border-yellow-700 text-yellow-600">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="CHELSEA TH FANs"
            className="w-14 h-14 rounded-full border-2 border-yellow-500 object-contain bg-black"
          />

          <div>
            <h1 className="text-2xl font-black leading-none text-yellow-500">
              CHELSEA TH FANs™️
            </h1>

            <p className="text-sm text-yellow-700 mt-1">
              Karn Krung Nan ©️
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-yellow-500">
          <a href="/" className="hover:text-yellow-300 transition">
            Home
          </a>

          <a href="/news" className="hover:text-yellow-300 transition">
            News
          </a>

          <a href="/mens-team" className="hover:text-yellow-300 transition">
            Men's Team
          </a>

          <a href="/womens-team" className="hover:text-yellow-300 transition">
            Women's Team
          </a>

          <a href="/announcements" className="hover:text-yellow-300 transition">
            Announcements
          </a>

          <a href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </a>

          <a href="/about" className="hover:text-yellow-300 transition">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
