'use client'

import React, { useState } from 'react'
import { BUILDING_TYPES, LIFT_TYPES } from '../data/productData.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

/* =========================
   FORM FIELD (same file)
========================= */

function FormField({
  label,
  type = 'text',
  placeholder,
  options = [],
  value,
  onChange,
  required
}) {
  const baseClasses = `
    w-full
    bg-transparent
    border-b
    border-black/10
    pb-3
    text-sm
    text-black
    placeholder-black/40
    transition-all
    duration-300
    focus:border-red-600
    focus:outline-none
    md:text-base
  `

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">

      {label && (
        <label className="w-40 flex-shrink-0 text-sm font-semibold text-black md:text-base">
          {label}
        </label>
      )}

      {type === 'select' ? (
        <select
          className={`${baseClasses} appearance-none`}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-white text-black">
              {opt}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          rows={4}
          className={baseClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          className={baseClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}

    </div>
  )
}

/* =========================
   MAIN PAGE
========================= */

const INITIAL_FORM = {
  name: '',
  email: '',
  mobile: '',
  buildingType: BUILDING_TYPES[0],
  liftType: LIFT_TYPES[0],
  message: '',
}

export default function QuotePage() {

  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pt-10">
      <Navbar />
      <main className="px-6 pt-28 pb-24 md:px-10 lg:px-20">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
          Let&apos;s Talk
        </p>

        <h1 className="text-4xl font-extrabold uppercase text-black md:text-5xl lg:text-6xl">
          Request A Quote
        </h1>

        <p className="mt-6 max-w-2xl text-black/60">
          Share your requirements and get a customized elevator solution
          designed with precision, safety, and modern engineering.
        </p>

        {/* FORM CARD */}
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-10">

          <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-12">

            <div className="flex flex-col gap-8">

              <FormField
                label="Name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange('name')}
                required
              />

              <FormField
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange('email')}
                required
              />

              <FormField
                label="Mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={form.mobile}
                onChange={handleChange('mobile')}
                required
              />

              <div className="flex flex-col gap-8 md:flex-row md:gap-16">

                <FormField
                  label="Building Type"
                  type="select"
                  options={BUILDING_TYPES}
                  value={form.buildingType}
                  onChange={handleChange('buildingType')}
                />

                <FormField
                  label="Lift Type"
                  type="select"
                  options={LIFT_TYPES}
                  value={form.liftType}
                  onChange={handleChange('liftType')}
                />

              </div>

              <FormField
                type="textarea"
                placeholder="Tell us about your project requirements..."
                value={form.message}
                onChange={handleChange('message')}
              />

            </div>
          </div>

          {/* BUTTON */}
          <div className="flex flex-col items-center gap-4">

            <button
              type="submit"
              className="w-full max-w-md rounded-full bg-red-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition hover:bg-black"
            >
              Request A Free Quote
            </button>

            {submitted && (
              <p className="text-sm font-semibold text-green-600">
                Thanks! Our team will contact you shortly.
              </p>
            )}

          </div>

        </form>

      </div>

      </main>
      <Footer />
    </div>
  )
}