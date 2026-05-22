import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="bg-blue-950 text-yellow-500 py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black">
            Contact CHELSEA TH FANs™️
          </h1>

          <p className="text-blue-100 text-xl mt-8 leading-8">
            ติดต่อทีมงานเว็บไซต์และติดตามข่าวสารผ่าน Social Media
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-black text-yellow-700">
            Facebook
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-black text-yellow-700">
            X (Twitter)
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-black text-yellow-700">
            Instagram
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
