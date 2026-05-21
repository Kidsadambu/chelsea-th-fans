import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />

      <section className="bg-blue-950 text-white py-24">
        <div className="max-w-5xl mx-auto px-4">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black text-sm">
            ข่าวสารประชาสัมพันธ์
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mt-8">
            Chelsea เตรียมประกาศโปรแกรมปรีซีซั่น 2026/27 พร้อมทัวร์ใหญ่เอเชีย-แปซิฟิก
          </h1>

          <p className="text-blue-100 text-lg mt-8 leading-8">
            สโมสร Chelsea คาดว่าจะประกาศโปรแกรมปรีซีซั่นฤดูกาล 2026/27 อย่างเป็นทางการในช่วงฤดูใบไม้ผลิปี 2027
            หลังจากก่อนหน้านี้ทีมชายของสโมสรภายใต้การคุมทีมของ ชาบี อลอนโซ่
            เดินสายทัวร์เอเชีย-แปซิฟิกครั้งใหญ่ ซึ่งได้รับความสนใจจากแฟนบอลทั่วโลกอย่างมาก
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop"
            alt="Chelsea Pre Season"
            className="w-full h-[420px] object-cover"
          />

          <div className="p-10">
            <h2 className="text-3xl font-black mb-8">
              โปรแกรมอุ่นเครื่อง Chelsea 2026
            </h2>

            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <div>
                <strong>28 กรกฎาคม 2026</strong><br />
                Western Sydney Wanderers vs Chelsea<br />
                สนาม Accor Stadium, Sydney ประเทศออสเตรเลีย
              </div>

              <div>
                <strong>1 สิงหาคม 2026</strong><br />
                Tottenham Hotspur vs Chelsea<br />
                สนาม Accor Stadium, Sydney ประเทศออสเตรเลีย
              </div>

              <div>
                <strong>5 สิงหาคม 2026</strong><br />
                Juventus vs Chelsea<br />
                รายการ Hong Kong Football Festival<br />
                สนาม Kai Tak Stadium, Hong Kong
              </div>

              <div>
                <strong>8 สิงหาคม 2026</strong><br />
                AC Milan vs Chelsea<br />
                สนาม GBK Stadium, Jakarta ประเทศอินโดนีเซีย
              </div>

              <div>
                <strong>11 สิงหาคม 2026</strong><br />
                Johor Darul Ta'zim vs Chelsea<br />
                สนาม Sultan Ibrahim Stadium, Malaysia
              </div>
            </div>

            <div className="mt-12 border-t pt-8 text-slate-600 leading-8">
              ทัวร์ครั้งนี้ถือเป็นหนึ่งในปรีซีซั่นที่ใหญ่ที่สุดของ Chelsea ในภูมิภาคเอเชีย
              โดยแฟนบอลในออสเตรเลีย ฮ่องกง อินโดนีเซีย และมาเลเซีย
              ต่างให้ความสนใจอย่างมาก พร้อมคาดหวังว่าจะได้เห็นขุมกำลังใหม่ของทีม
              และแนวทางการทำทีมของ ชาบี อลอนโซ่ ก่อนเปิดฤดูกาลพรีเมียร์ลีก
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
