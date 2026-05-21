import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { clubLogos } from "@/data/club-logos";

const fixtures = [
  {
    opponent: "Western Sydney Wanderers",
    logo: clubLogos.westernSydney,
    date: "28 July 2026",
    location: "Sydney, Australia",
  },
  {
    opponent: "Tottenham Hotspur",
    logo: clubLogos.tottenham,
    date: "1 August 2026",
    location: "Sydney, Australia",
  },
  {
    opponent: "Juventus",
    logo: clubLogos.juventus,
    date: "5 August 2026",
    location: "Hong Kong",
  },
  {
    opponent: "AC Milan",
    logo: clubLogos.acMilan,
    date: "8 August 2026",
    location: "Jakarta, Indonesia",
  },
];

export default function MensTeamPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="bg-blue-950 text-yellow-500 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black">
            Chelsea Men's Team
          </h1>

          <p className="text-yellow-200 text-xl mt-6 max-w-3xl leading-8">
            โปรแกรมการแข่งขัน ผลการแข่งขัน ตารางคะแนน และข้อมูลทีมชาย Chelsea Football Club
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-black mb-8 text-yellow-700">
            2026/27 Pre-Season Fixtures
          </h2>

          <div className="space-y-5">
            {fixtures.map((fixture, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={fixture.logo}
                    alt={fixture.opponent}
                    className="w-20 h-20 object-contain rounded-full border border-slate-200"
                  />

                  <div>
                    <h3 className="text-2xl font-black text-yellow-700">
                      Chelsea vs {fixture.opponent}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {fixture.location}
                    </p>
                  </div>
                </div>

                <span className="bg-blue-950 text-yellow-500 px-5 py-3 rounded-xl font-bold text-center">
                  {fixture.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">
          <h2 className="text-3xl font-black mb-8 text-yellow-700">
            Team Overview
          </h2>

          <ul className="space-y-5 text-lg text-slate-700 leading-8">
            <li>• Head Coach: Xabi Alonso</li>
            <li>• League: Premier League</li>
            <li>• Home Stadium: Stamford Bridge</li>
            <li>• Country: England</li>
            <li>• Founded: 1905</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
