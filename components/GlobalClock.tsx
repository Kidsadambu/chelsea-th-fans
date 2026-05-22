"use client";

import { useEffect, useState } from "react";

export default function GlobalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const thailandDate = time.toLocaleDateString("en-GB", {
    timeZone: "Asia/Bangkok",
  });

  const thailandTime = time.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Bangkok",
  });

  const ukDate = time.toLocaleDateString("en-GB", {
    timeZone: "Europe/London",
  });

  const ukTime = time.toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
  });

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-blue-950 text-yellow-500 rounded-2xl shadow-2xl p-4 text-sm font-bold space-y-4 border border-yellow-700 backdrop-blur-sm">
      <div>
        <div className="font-black">🇹🇭 Thailand</div>
        <div>{thailandDate}</div>
        <div>{thailandTime}</div>
      </div>

      <div className="border-t border-yellow-700 pt-3">
        <div className="font-black">🇬🇧 United Kingdom</div>
        <div>{ukDate}</div>
        <div>{ukTime}</div>
      </div>
    </div>
  );
}
