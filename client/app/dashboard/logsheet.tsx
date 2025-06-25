"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Logsheet() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [checkIn, setCheckIn] = useState("09:00 AM");
  const [checkOut, setCheckOut] = useState("06:00 PM");
  const [dayType, setDayType] = useState<"full" | "half">("full");
  const [halfType, setHalfType] = useState<"first" | "second" | null>(null);
  const [gratitude, setGratitude] = useState<number | null>(null);
  const [badDayReason, setBadDayReason] = useState("");
  const [team, setTeam] = useState<string | null>(null);
  const [hourLogs, setHourLogs] = useState<string[]>(Array(6).fill(""));
  const [githubUrl, setGithubUrl] = useState("");

  const teams = [
    "QA",
    "Graphics Design",
    "UIUX Design",
    "Frontend",
    "Backend",
    "Project Management",
    "WordPress",
    "Mobile Development",
    "Other Management Roles",
  ];

  const handleHourChange = (i: number, val: string) => {
    const updated = [...hourLogs];
    updated[i] = val;
    setHourLogs(updated);
  };

  const isTimeValid = () => {
    const to24 = (time: string) => {
      const [h, m] = time.split(/:| /);
      const suffix = time.slice(-2);
      let hour = parseInt(h, 10);
      if (suffix === "PM" && hour !== 12) hour += 12;
      if (suffix === "AM" && hour === 12) hour = 0;
      return hour * 60 + parseInt(m);
    };
    return to24(checkOut) > to24(checkIn);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !checkIn || !checkOut || !dayType || !team) {
      alert("❌ Please fill all required fields.");
      return;
    }
    if (dayType === "half" && !halfType) {
      alert("❌ Please select which half you worked.");
      return;
    }
    if (!isTimeValid()) {
      alert("❌ Check-out time must be after Check-in time.");
      return;
    }
    if (gratitude !== null && gratitude < 6 && !badDayReason.trim()) {
      alert("❌ Please explain why your day was less positive.");
      return;
    }
    if ((team === "Frontend" || team === "Backend") && !githubUrl.trim()) {
      alert("❌ Please enter your GitHub commit URL.");
      return;
    }

    const payload = {
      date: date ? date.toISOString().split("T")[0] : null,
      checkIn,
      checkOut,
      dayType,
      halfType,
      gratitude,
      team,
      hourLogs: dayType === "half" ? hourLogs.slice(0, 3) : hourLogs,
      githubUrl:
        team === "Frontend" || team === "Backend" ? githubUrl : undefined,
      badDayReason:
        gratitude !== null && gratitude < 6 ? badDayReason : undefined,
    };
    console.log("✅ Logsheet Submitted:", payload);
    alert("✅ Logsheet submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full  p-6 rounded-lg shadow-xl bg-[#121417] border border-[#2a2d31] text-gray-200 space-y-6"
    >
      <h1 className="text-2xl font-semibold text-white">Oplyx Logsheet</h1>

      {/* ✅ Date Picker */}
      <div>
        <label className="block mb-1 text-sm font-medium">Date *</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="MMMM d, yyyy"
          className="w-full rounded border border-[#2a2d31] bg-[#1c1f24] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* ✅ Time Fields */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Check-in Time *
        </label>
        <input
          type="text"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          placeholder="09:00 AM"
          className="w-full rounded border border-[#2a2d31] bg-[#1c1f24] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Check-out Time *
        </label>
        <input
          type="text"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          placeholder="06:00 PM"
          className="w-full rounded border border-[#2a2d31] bg-[#1c1f24] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      {/* ✅ Day Type Toggle */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Did you work half or full day? *
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setDayType("full")}
            className={`px-4 py-2 rounded border ${
              dayType === "full"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border-[#2a2d31] bg-[#1c1f24]"
            }`}
          >
            Full Day
          </button>
          <button
            type="button"
            onClick={() => setDayType("half")}
            className={`px-4 py-2 rounded border ${
              dayType === "half"
                ? "bg-yellow-500 text-black border-yellow-500"
                : "border-[#2a2d31] bg-[#1c1f24]"
            }`}
          >
            Half Day
          </button>
        </div>
      </div>

      {/* ✅ Half Type */}
      {dayType === "half" && (
        <div>
          <label className="block mb-1 text-sm font-medium">
            Which half? *
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setHalfType("first")}
              className={`px-4 py-2 rounded border ${
                halfType === "first"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-[#2a2d31] bg-[#1c1f24]"
              }`}
            >
              First Half
            </button>
            <button
              type="button"
              onClick={() => setHalfType("second")}
              className={`px-4 py-2 rounded border ${
                halfType === "second"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-[#2a2d31] bg-[#1c1f24]"
              }`}
            >
              Second Half
            </button>
          </div>
        </div>
      )}

      {/* ✅ Hour Logs */}
      {(dayType === "full" || halfType) &&
        [...Array(dayType === "full" ? 6 : 3)].map((_, i) => (
          <div key={i}>
            <label className="block mb-1 text-sm font-medium">
              What did you do in your{" "}
              {["First", "Second", "Third", "Fourth", "Fifth", "Sixth"][i]}{" "}
              Hour?
            </label>
            <textarea
              value={hourLogs[i]}
              onChange={(e) => handleHourChange(i, e.target.value)}
              className="w-full rounded border border-[#2a2d31] bg-[#1c1f24] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
        ))}

      {/* ✅ Gratitude */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          How positive were you today? *
        </label>
        <div className="flex flex-wrap gap-2">
          {[...Array(11)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setGratitude(i)}
              className={`w-10 text-center border rounded ${
                gratitude === i
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-[#2a2d31] bg-[#1c1f24]"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Bad Day Reason */}
      {gratitude !== null && gratitude < 6 && (
        <div>
          <label className="block mb-1 text-sm font-medium text-red-400">
            Why was your day less positive? *
          </label>
          <textarea
            value={badDayReason}
            onChange={(e) => setBadDayReason(e.target.value)}
            className="w-full rounded border border-[#2a2d31] bg-[#1c1f24] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
      )}

      {/* ✅ Team Selection */}
      <div>
        <label className="block mb-1 text-sm font-medium">What Team? *</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {teams.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setTeam(t)}
              className={`px-3 py-2 rounded border text-left ${
                team === t
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-[#2a2d31] bg-[#1c1f24]"
              }`}
            >
              {String.fromCharCode(65 + i)}. {t}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ GitHub URL */}
      {(team === "Frontend" || team === "Backend") && (
        <div>
          <label className="block mb-1 text-sm font-medium">
            Last GitHub Commit URL *
          </label>
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className="w-full rounded border border-[#2a2d31] bg-[#1c1f24] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded transition"
      >
        Submit Logsheet
      </button>
    </form>
  );
}
