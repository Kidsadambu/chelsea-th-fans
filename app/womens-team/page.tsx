import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixtureCard from "@/components/FixtureCard";

const fixtures = [
  {
    homeTeam: "Chelsea Women",
    awayTeam: "All Stars Women",
    homeLogo: "https://i.postimg.cc/yNs5vXxg/CHELSEA.png",
    awayLogo: "https://i.postimg.cc/SNfmb2Lp/All-Stars-Women-b.jpg",
    date: "18 August 2026",
    location: "London, England",
  },
  {
    homeTeam: "Chelsea Women",
    awayTeam: "Auckland FC",
    homeLogo: "https://i.postimg.cc/yNs5vXxg/CHELSEA.png",
    awayLogo: "https://i.postimg.cc/vHtGwg7G/Auckland-FC.png",
    date: "24 August 2026",
    location: "Auckland, New Zealand",
  }
];

export default function WomensTeamPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="bg-pink-950 text-yellow-500 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black">
            Chelsea Women's Team
          </h1>

          <p className="text-pink-100 text-xl mt-6 max-w-3xl leading-8">
            โปรแกรมการแข่งขัน ผลการแข่งขัน ตารางคะแนน และข้อมูลทีมฟุตบอลหญิง Chelsea FC Women
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-black mb-8 text-yellow-700">
            Women's Fixtures
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
      </section>

      <Footer />
    </main>
  );
}
