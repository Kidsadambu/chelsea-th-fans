import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-28 text-center">
          <div className="flex justify-center mb-10">
            <img
              src="/logo.png"
              alt="CHELSEA TH FANs"
              className="w-56 h-56 rounded-full border-4 border-yellow-400 bg-black object-contain shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            CHELSEA TH FANs™️
          </h1>

          <p className="text-blue-100 text-xl mt-8 max-w-3xl mx-auto leading-8">
            ข่าวสาร Chelsea Football Club แบบครบวงจร
            ทั้งทีมชาย ทีมหญิง โปรแกรมการแข่งขัน
            ตารางคะแนน บทวิเคราะห์ และเรื่องราวของ The Blues
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">
            <a
              href="/news"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition"
            >
              Latest News
            </a>

            <a
              href="/mens-team/fixtures"
              className="border border-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-blue-950 transition"
            >
              Fixtures
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black">
            Latest News
          </h2>

          <a href="/news" className="font-bold text-blue-900">
            View All
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <article
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                alt="Chelsea News"
                className="w-full h-60 object-cover"
              />

              <div className="p-7">
                <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-black">
                  Chelsea News
                </span>

                <h3 className="text-2xl font-black mt-5 leading-tight">
                  Chelsea Transfer & Match Update
                </h3>

                <p className="text-slate-600 mt-5 leading-7">
                  อัปเดตข่าวสารล่าสุดของ Chelsea พร้อมบทวิเคราะห์ฟุตบอลพรีเมียร์ลีกแบบเจาะลึก
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-blue-950 text-white rounded-3xl p-10">
              <h2 className="text-4xl font-black mb-8">
                Men's Team
              </h2>

              <ul className="space-y-5 text-lg">
                <li>• Fixtures</li>
                <li>• Results</li>
                <li>• Premier League Tables</li>
                <li>• Player Profiles</li>
              </ul>
            </div>

            <div className="bg-pink-950 text-white rounded-3xl p-10">
              <h2 className="text-4xl font-black mb-8">
                Women's Team
              </h2>

              <ul className="space-y-5 text-lg">
                <li>• Fixtures</li>
                <li>• Results</li>
                <li>• League Tables</li>
                <li>• Player Profiles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
