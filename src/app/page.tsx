"use client";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [booking, setBooking] = useState(false);

  const openBooking = () => {
    setBooking(true);
  }

  return (
    <div>
      <NavBar />
      <div className="bg-[url('/backroad.jpg')] py-52">
        <div className="text-white mx-28">
          <h1 className="text-4xl font-semibold">CANYONEERING UTAH</h1>
          <p className="font-semibold mt-2">hike, rappel, & swim through narrow canyons</p>
          <button
            className="bg-green-700 px-6 py-2 mt-6 text-sm hover:bg-green-800"
            onClick={openBooking}
          >
            BOOK TODAY
          </button>
        </div>
      </div>
      <BookingModal
        isOpen={booking}
        onClose={() => setBooking(false)}
      />
    </div>
  )
}
