import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Booking() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChange = (newDate) => {
    setDate(newDate);
    setSelectedTime(null);
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleConfirmBooking = () => {
    if (date && selectedTime && name && email && phone) {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {!showConfirmation ? (
        <div className="rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Book Your Appointment
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Calendar onChange={onChange} value={date} />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Available Time
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg border transition-all ${
                        selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              onClick={handleConfirmBooking}
              className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${
                date && selectedTime && name && email && phone
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!date || !selectedTime || !name || !email || !phone}
            >
              {date && selectedTime && name && email && phone
                ? "Confirm Booking"
                : "Select Date & Time"}
            </button>

            <div className="text-center"></div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thank you for booking with us!
          </h2>
          <p className="text-gray-600 mb-6">
            We will send you an email to confirm your booking time and we will
            see you soon!
          </p>
        </div>
      )}
    </div>
  );
}

export default Booking;
