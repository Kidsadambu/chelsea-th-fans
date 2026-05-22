import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AnnouncementsPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="bg-blue-950 text-yellow-500 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black">
            Official Announcements
          </h1>

          <p className="text-blue-100 text-xl mt-8 max-w-3xl leading-8">
            ข่าวสารประชาสัมพันธ์และประกาศอย่างเป็นทางการจาก CHELSEA TH FANs™️
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 space-y-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-black text-yellow-700">
            Chelsea เตรียมประกาศโปรแกรมปรีซีซั่น 2026/27
          </h2>

          <p className="text-slate-700 mt-6 leading-8 text-lg">
            Chelsea ภายใต้การคุมทีมของ ชาบี อลอนโซ่
            เตรียมเดินสายทัวร์เอเชีย-แปซิฟิกครั้งใหญ่
            พร้อมโปรแกรมบิ๊กแมตช์กับหลายสโมสรระดับโลก
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
