type FixtureCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string;
  location: string;
};

export default function FixtureCard({
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  date,
  location,
}: FixtureCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 flex items-center justify-between gap-4 shadow-lg hover:-translate-y-1 transition">
      <div className="flex flex-col items-center w-1/3 text-center">
        <img
          src={homeLogo}
          alt={homeTeam}
          className="w-20 h-20 object-contain"
        />

        <p className="mt-4 font-black text-lg text-slate-900 leading-tight">
          {homeTeam}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-1/3 text-center">
        <div className="text-3xl font-black text-yellow-700">
          VS
        </div>

        <p className="mt-4 text-slate-600 font-semibold leading-6">
          {location}
        </p>

        <p className="mt-2 bg-blue-950 text-yellow-500 px-4 py-2 rounded-xl font-black text-sm">
          {date}
        </p>
      </div>

      <div className="flex flex-col items-center w-1/3 text-center">
        <img
          src={awayLogo}
          alt={awayTeam}
          className="w-20 h-20 object-contain"
        />

        <p className="mt-4 font-black text-lg text-slate-900 leading-tight">
          {awayTeam}
        </p>
      </div>
    </div>
  );
}
