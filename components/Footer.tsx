export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl font-black mb-4">
            CHELSEA TH FANs™️
          </h3>

          <p className="text-slate-400 leading-7">
            เว็บไซต์ข่าวสาร Chelsea Football Club
            สำหรับแฟนบอลชาวไทยทั่วโลก
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-yellow-400">
            News
          </h4>

          <ul className="space-y-3 text-slate-300">
            <li><a href="/news">Latest News</a></li>
            <li><a href="/news/interviews">Interviews</a></li>
            <li><a href="/news/story-of-blues">Story Of Blues</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-yellow-400">
            Teams
          </h4>

          <ul className="space-y-3 text-slate-300">
            <li><a href="/mens-team">Men's Team</a></li>
            <li><a href="/womens-team">Women's Team</a></li>
            <li><a href="/mens-team/tables">Tables</a></li>
            <li><a href="/mens-team/fixtures">Fixtures</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-yellow-400">
            Contact
          </h4>

          <ul className="space-y-3 text-slate-300">
            <li>Facebook</li>
            <li>X (Twitter)</li>
            <li>Instagram</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-blue-900 py-6 text-center text-slate-500 text-sm">
        © 2026 CHELSEA TH FANs™️ Karn Krung Nan ©️
      </div>
    </footer>
  );
}
