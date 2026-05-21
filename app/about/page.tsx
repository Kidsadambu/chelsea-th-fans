import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="bg-blue-950 text-white py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black">
            About CHELSEA TH FANs™️
          </h1>

          <p className="text-blue-100 text-xl mt-8 leading-8">
            Community website for Chelsea supporters in Thailand and worldwide.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-slate-700 leading-9 text-lg">
          CHELSEA TH FANs™️ Karn Krung Nan ©️
          เป็นเว็บไซต์ข่าวฟุตบอลที่จัดทำขึ้นสำหรับแฟนบอล Chelsea ชาวไทย
          โดยมุ่งเน้นการนำเสนอข่าวสารฟุตบอลเชลซีทั้งทีมชายและทีมหญิง
          พร้อมบทวิเคราะห์ โปรแกรมการแข่งขัน ตารางคะแนน
          ข้อมูลนักเตะ และเรื่องราวต่าง ๆ ของสโมสร Chelsea Football Club
          อย่างครบถ้วนในรูปแบบที่อ่านง่ายและทันสมัย
        </div>
      </section>

      <Footer />
    </main>
  );
}
