import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixtureCard from "@/components/FixtureCard";

const fixtures = [
  {
    homeTeam: "Chelsea",
    awayTeam: "Western Sydney Wanderers",
    homeLogo: "https://i.postimg.cc/yNs5vXxg/CHELSEA.png",
    awayLogo: "https://i.postimg.cc/65fBx2Vt/Western-Sydney-Wanderers-FC.jpg",
    date: "28 July 2026",
    location: "Sydney, Australia",
  },
  {
    homeTeam: "Chelsea",
    awayTeam: "Tottenham Hotspur",
    homeLogo: "https://i.postimg.cc/yNs5vXxg/CHELSEA.png",
    awayLogo: "https://i.postimg.cc/SQD8GDyz/TOTTENHAM-HOTSPUR.png",
    date: "1 August 2026",
    location: "Sydney, Australia",
  },
  {
    homeTeam: "Chelsea",
    awayTeam: "Juventus",
    homeLogo: "https://i.postimg.cc/yNs5vXxg/CHELSEA.png",
    awayLogo: "https://i.postimg.cc/y8h4kJWg/juventus.jpg",
    date: "5 August 2026",
    location: "Hong Kong",
  },
  {
    homeTeam: "Chelsea",
    awayTeam: "AC Milan",
    homeLogo: "https://i.postimg.cc/yNs5vXxg/CHELSEA.png",
    awayLogo: "https://i.postimg.cc/pXJPMhQv/AC-Milan.jpg",
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

          <div className="space-y-6">
            {fixtures.map((fixture, index) => (
              <FixtureCard
                key={index}
                homeTeam={fixture.homeTeam}
                awayTeam={fixture.awayTeam}
                homeLogo={fixture.homeLogo}
                awayLogo={fixture.awayLogo}
                date={fixture.date}
                location={fixture.location}
              />
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
