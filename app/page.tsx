export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">

          <img
            src="/logo.png"
            alt="Chelsea TH Fans Logo"
            className="w-16 h-16 rounded-full border-2 border-yellow-400 bg-black object-contain"
          />

          <div>
            <h1 className="text-3xl font-black">
              CHELSEA TH FANs™️
            </h1>

            <p className="text-blue-200">
              Karn Krung Nan News
            </p>
          </div>

        </div>
      </header>

      <section className="bg-blue-950 text-white py-28 text-center">

        <div className="flex justify-center mb-10">
          <img
            src="/logo.png"
            alt="Chelsea TH Fans Logo"
            className="w-56 h-56 rounded-full border-4 border-yellow-400 bg-black object-contain shadow-2xl"
          />
        </div>

        <h2 className="text-6xl font-black mb-6">
          THE BLUES COMMUNITY
        </h2>

        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          ข่าวสาร Chelsea ข่าวซื้อขายนักเตะ
          โปรแกรมการแข่งขัน ตารางคะแนน
          และบทวิเคราะห์ฟุตบอลครบจบในเว็บเดียว
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Latest News
          </button>

          <button className="border border-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition">
            Fixtures
          </button>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">

        <h2 className="text-4xl font-black mb-10">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >

              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                alt="football"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  Chelsea News
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  Chelsea Latest Transfer Update
                </h3>

                <p className="text-slate-600 mt-4 leading-7">
                  อัปเดตข่าวสารล่าสุดเกี่ยวกับ Chelsea
                  พร้อมบทวิเคราะห์แบบเจาะลึก
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      <footer className="bg-black text-white py-10">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h3 className="text-2xl font-black">
            CHELSEA TH FANs™️
          </h3>

          <p className="text-slate-400 mt-3">
            © 2026 Karn Krung Nan News
          </p>

        </div>

      </footer>

    </main>
  );
}