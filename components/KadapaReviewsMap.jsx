"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ramesh Babu",
    role: "Resident, Housing Board Colony",
    place: "Housing Board Colony, Kadapa",
    time: "2 months ago",
    top: "81%",
    left: "58%",
    text: "Amardip Elevators installed our passenger traction elevator perfectly. The team was extremely professional, completed the installation on schedule, and delivered exceptionally smooth ride quality.",
    img: "/reviewers/ramesh_babu.png",
  },
  {
    name: "Dr. Raja Vengal Reddy",
    role: "Clinic Director, Co-operative Colony",
    place: "Co-operative Colony, Kadapa",
    time: "1 month ago",
    top: "40%",
    left: "63%",
    text: "Highly professional service! We got a passenger traction elevator installed at our clinic. The ride comfort is superb, with silent operation and top-notch safety compliance that our patients appreciate.",
    img: "/reviewers/raja_vengal_reddy.png",
  },
  {
    name: "Usha Devi Hospitals",
    role: "Healthcare Facility, Nagarajupeta",
    place: "Nagarajupeta, Kadapa",
    time: "3 months ago",
    top: "82%",
    left: "55%",
    text: "For a critical hospital passenger elevator, reliability is paramount. Amardip Elevators delivered a spacious, highly efficient elevator that operates 24/7 without any issues. Excellent post-sales support.",
    img: "/reviewers/usha_devi_hospitals.png",
  },
  {
    name: "Ghouse Peer",
    role: "Property Owner, Near Krishna Theatre",
    place: "Near Krishna Theatre, Kadapa",
    time: "4 months ago",
    top: "20%",
    left: "51%",
    text: "The team did an amazing job installing our passenger elevator. The architectural cabin design is premium and modern. The execution was neat, fast, and handled with full technical competence.",
    img: "/reviewers/ghouse_peer.png",
  },
  {
    name: "Venu Gopal",
    role: "Homeowner, Housing Board Colony",
    place: "Housing Board Colony, Kadapa",
    time: "2 weeks ago",
    top: "77%",
    left: "60%",
    text: "We installed a residential passenger elevator in our multi-story residence. It is extremely quiet, runs very smoothly, and is very energy-efficient. The team was very cooperative and polite.",
    img: "/reviewers/venu_gopal.png",
  },
  {
    name: "Dr. Sridhar Reddy",
    role: "Resident, Christian Line",
    place: "Christian Line, Kadapa",
    time: "3 months ago",
    top: "32%",
    left: "48%",
    text: "Very satisfied with the residential passenger elevator. The styling was customized perfectly to match our home interiors. The installation was very clean, and their customer care is excellent.",
    img: "/reviewers/sridhar_reddy.png",
  },
  {
    name: "Lakshmi Towers",
    role: "Apartment Association, Near Bullup Circle",
    place: "Near Bullup Circle, Kadapa",
    time: "5 months ago",
    top: "29%",
    left: "19%",
    text: "Our apartment passenger elevator handles high daily traffic seamlessly. The safety systems are robust, and the cabin finishing feels incredibly premium. Highly recommend Amardip Elevators for apartment complexes.",
    img: "/reviewers/lakshmi_towers.png",
  },
  {
    name: "Siva Ganga Pipes",
    role: "Managing Partner, Chinna Chowk",
    place: "Chinna Chowk, Kadapa",
    time: "2 months ago",
    top: "38%",
    left: "81%",
    text: "Installed a heavy-duty industrial goods elevator at our commercial warehouse. It operates exceptionally well under heavy loads and is built with solid safety mechanisms. Truly robust engineering.",
    img: "/reviewers/siva_ganga_pipes.png",
  }
];

const additionalReviews = [
  {
    name: "DCC Bank",
    elevatorType: "Commercial Passenger Traction Elevator",
    place: "R.S. Road, Kadapa",
    text: "We installed a commercial passenger traction elevator at our R.S. Road branch. The ride is extremely quiet, fast, and handles peak bank hours efficiently. The installation team was highly professional and neat."
  },
  {
    name: "S R Enclave",
    elevatorType: "Apartment Passenger Elevator",
    place: "Housing Board Colony, Kadapa",
    text: "Amardip Elevators provided a highly reliable passenger lift for our apartment complex. The cabin interiors are modern, the operations are smooth, and the residents are very happy with its safety features."
  },
  {
    name: "Thulasi Projects 1",
    elevatorType: "Automatic Passenger Elevator",
    place: "Chalama Reddy Palli, Kadapa",
    text: "The automatic passenger elevator works flawlessly. Amardip's engineering team executed the installation with precision, and their post-installation response is very prompt."
  },
  {
    name: "Reddy Rama Raju",
    elevatorType: "Apartment Passenger Elevator",
    place: "Balaji Nagar, Kadapa",
    text: "Excellent vertical transit solution for our residential building in Balaji Nagar. The lift is quiet, smooth, and has advanced safety sensors that give peace of mind to our families."
  },
  {
    name: "Rajendra Prasad Reddy",
    elevatorType: "Hydraulic Home Elevator",
    place: "Buddha Township, Alankhanpalli, Kadapa",
    text: "Our hydraulic home elevator has been a wonderful addition to our villa in Buddha Township. It operates silently, consumes minimal power, and has a very premium cabin design."
  },
  {
    name: "Blue Diamond Lodge",
    elevatorType: "Hotel Passenger Elevator",
    place: "R.S. Road, Kadapa",
    text: "We needed a stylish and robust elevator for our lodge. Amardip Elevators delivered a gorgeous hotel passenger elevator on time. Our guests frequently praise its smooth operation."
  },
  {
    name: "Vasudha Villas",
    elevatorType: "Apartment Passenger Elevator",
    place: "ITI Circle, Kadapa",
    text: "Very satisfied with the apartment passenger elevator installed at ITI Circle. The design process was collaborative, and the final execution is top-notch. Solid build quality."
  },
  {
    name: "Pankajanabha",
    elevatorType: "Residential Passenger Elevator",
    place: "Vijaya Durga Colony, Kadapa",
    text: "Installed a residential passenger elevator at our multi-story home. It runs silently, feels solid, and is extremely convenient for our elderly family members. High-quality work."
  },
  {
    name: "Asha Latha",
    elevatorType: "Automatic Passenger Elevator",
    place: "Maruthi Nagar, Kadapa",
    text: "Outstanding automatic passenger elevator installation in Maruthi Nagar. The ride quality is premium and smooth. The maintenance service team is highly cooperative."
  },
  {
    name: "Nagoor Basha",
    elevatorType: "Passenger Traction Elevator",
    place: "Mandi Street, Kadapa",
    text: "Amardip's passenger traction elevator is very reliable. We have experienced zero downtime, and the build quality of the doors and cabin is exceptionally robust."
  },
  {
    name: "Prakash",
    elevatorType: "Machine Room-Less Gearless Elevator",
    place: "Akulla Street, Kadapa",
    text: "The MRL gearless elevator has been highly energy-efficient and quiet. It takes up less space and provides a very modern, smooth riding experience. Outstanding engineering!"
  },
  {
    name: "Kiran Kumar",
    elevatorType: "Swing Door Passenger Elevator",
    place: "NGO Colony, Kadapa",
    text: "The swing door passenger elevator at our property in NGO Colony works perfectly. The space-saving design and clean finishing show their craftsmanship."
  },
  {
    name: "Chandra Shekar Reddy",
    elevatorType: "Residential Passenger Elevator",
    place: "Reddy Colony, Kadapa",
    text: "Highly recommend Amardip Elevators for residential solutions. The passenger lift is silent, runs smoothly, and the installation was completed on schedule."
  },
  {
    name: "Pramoda",
    elevatorType: "Commercial Passenger Elevator",
    place: "Near Spencer, Kadapa",
    text: "Excellent commercial passenger elevator. It easily handles daily heavy footfall, operates smoothly, and has modern, stylish interiors. Excellent value for money."
  },
  {
    name: "Balaji Builder",
    elevatorType: "Apartment Passenger Elevator",
    place: "Reddy Colony, Kadapa",
    text: "As builders, we demand quality and timely execution. Amardip Elevators delivered premium apartment passenger lifts that perfectly matched our high construction standards."
  },
  {
    name: "Priya Construction",
    elevatorType: "Apartment Passenger Elevator",
    place: "Near Keshava Reddy School, Kadapa",
    text: "We have partnered with Amardip Elevators for our project near Keshava Reddy School. The apartment passenger elevators are highly reliable, safe, and feature elegant cabin finishes."
  }
];

export default function KadapaReviewsMap() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalAnimating(true), 10);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="w-full bg-[#f6f8fb] px-4 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
            Client Reviews From Kadapa
          </p>

          <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
            Trusted by People Across Kadapa
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Click any location point on the real Kadapa map to view a premium
            Google-style 5-star elevator installation review.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="relative h-[480px] overflow-hidden rounded-[28px] border border-white bg-white shadow-2xl">
            <iframe
              title="Kadapa Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15532.58823268482!2d78.8220!3d14.4715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719157500000!5m2!1sen!2sin"
              className="absolute inset-0 h-[calc(100%+50px)] w-full pointer-events-none"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-slate-950/10" />

            {reviews.map((review, index) => {
              const isSelected = selectedReview?.name === review.name;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedReview(review)}
                  className="absolute z-20 -translate-x-1/2 -translate-y-[85%] transition-all duration-300 hover:scale-110 group focus:outline-none"
                  style={{
                    top: review.top,
                    left: review.left,
                  }}
                  title={review.place}
                >
                  {/* Pulse Effect */}
                  <span className={`absolute left-[14px] top-[8px] block h-5 w-5 rounded-full ${
                    isSelected ? 'bg-red-400/60 animate-ping' : 'bg-red-400/30 group-hover:animate-ping'
                  }`} />
                  
                  <div className="relative h-12 w-12">
                    {/* SVG Map Pin */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`h-full w-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition-all duration-300 ${
                        isSelected 
                          ? 'fill-[#ea4335] scale-105 drop-shadow-[0_0_8px_rgba(234,67,53,0.7)]' 
                          : 'fill-[#ea4335] group-hover:fill-[#d93025]'
                      }`}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    
                    {/* Mini Profile Thumbnail inside Pin */}
                    <div className="absolute left-[14px] top-[8px] h-5 w-5 overflow-hidden rounded-full border border-white bg-slate-100 shadow-inner">
                      <Image
                        src={review.img}
                        alt=""
                        width={20}
                        height={20}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center">
            {selectedReview ? (
              <div className="relative w-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl">
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src={selectedReview.img}
                    alt={selectedReview.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover shadow-md"
                  />

                  <div>
                    <h3 className="text-xl font-extrabold text-[#1a73e8]">
                      {selectedReview.name}
                    </h3>
                    {selectedReview.role && (
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {selectedReview.role}
                      </p>
                    )}

                    <div className="mt-0.5 text-lg tracking-wide text-[#fbbc04]">
                      ★★★★★
                    </div>

                    <p className="mt-0.5 text-xs font-medium text-slate-400">
                      {selectedReview.time}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-700">
                  {selectedReview.text}
                </p>

                <p className="mt-5 rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700">
                  Location: {selectedReview.place}, Andhra Pradesh
                </p>
              </div>
            ) : (
              <div className="w-full rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-xl">
                <h3 className="text-xl font-extrabold text-slate-950">
                  Click Any Location Point
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  A Google-style 5-star elevator customer review will appear
                  here after clicking a 📍 marker.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* View More Reviews Button */}
        <div className="mt-10 text-center">
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none"
          >
            <span>Show More Kadapa Reviews</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Premium Reviews Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
          isModalAnimating ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className={`relative w-full max-w-5xl h-[85vh] flex flex-col rounded-[32px] bg-slate-50 border border-slate-200/50 shadow-[0_20px_100px_rgba(0,0,0,0.3)] transition-all duration-300 transform ${
            isModalAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}>
            
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-slate-200/80 flex items-center justify-between bg-white rounded-t-[32px]">
              <div>
                <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  Customer Testimonials
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  More Customer Reviews from Kadapa
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/60 text-slate-600 transition-all hover:bg-red-500 hover:text-white"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Scrollable Reviews Grid */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#f8fafc]">
              <div className="grid gap-6 md:grid-cols-2">
                {additionalReviews.map((review, index) => (
                  <div key={index} className="rounded-[20px] border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300/80">
                    <div className="flex items-start gap-4">
                      {/* Avatar with initials in a premium gradient circle */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-base font-bold text-white shadow-sm">
                        {review.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-slate-900">
                            {review.name}
                          </h4>
                          <div className="text-amber-500 flex gap-0.5 text-xs">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                          </div>
                        </div>
                        <p className="text-xs font-semibold text-slate-500">
                          {review.elevatorType}
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-400">
                          Location: {review.place}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          &ldquo;{review.text}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-200/80 bg-white rounded-b-[32px] flex items-center justify-between text-xs text-slate-500">
              <span>Showing {additionalReviews.length} additional verified installations in Kadapa</span>
              <button 
                onClick={closeModal}
                className="rounded-full bg-slate-950 px-6 py-2 font-bold text-white hover:bg-amber-600 transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}