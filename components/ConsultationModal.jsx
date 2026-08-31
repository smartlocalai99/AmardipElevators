'use client'

import React, { useState, useEffect } from 'react'
import { FaTimes, FaPhoneAlt } from 'react-icons/fa'
import {
    FLOOR_OPTIONS,
    PASSENGER_OPTIONS,
    DOOR_TYPE_OPTIONS,
    CABIN_TYPE_OPTIONS,
    MOTOR_TYPE_OPTIONS,
    HEAD_ROOM_OPTIONS,
    DOOR_OPENING_OPTIONS,
    ERP_QUOTE_ENDPOINT,
} from '../data/quoteFormOptions.js'

const INITIAL_FORM = {
    customerName: '',
    mobileNo: '',
    address: '',
    wellWidth: '',
    wellDepth: '',
    noOfFloors: FLOOR_OPTIONS[0],
    noOfPassenger: PASSENGER_OPTIONS[0],
    doorType: DOOR_TYPE_OPTIONS[0],
    cabinType: CABIN_TYPE_OPTIONS[0],
    motorType: MOTOR_TYPE_OPTIONS[0],
    headRoom: HEAD_ROOM_OPTIONS[0],
    doorOpening: DOOR_OPENING_OPTIONS[0],
}

const INPUT_CLASS = "w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm text-black placeholder-black/35 transition focus:border-red-600 focus:bg-white focus:outline-none"
const LABEL_CLASS = "text-xs font-semibold uppercase tracking-wider text-black/50"

function formatRupees(value) {
    if (value === null || value === undefined) return null
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(value)
}

export default function ConsultationModal({ isOpen, onClose }) {
    const [form, setForm] = useState(INITIAL_FORM)
    const [status, setStatus] = useState('form') // 'form' | 'loading' | 'result' | 'error'
    const [result, setResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        let timeoutId;
        if (isOpen) {
            timeoutId = setTimeout(() => {
                setIsAnimating(true);
            }, 0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            clearTimeout(timeoutId);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen])

    if (!isOpen && !isAnimating) return null

    const handleClose = () => {
        setIsAnimating(false)
        setTimeout(() => {
            onClose()
            setStatus('form')
            setResult(null)
            setErrorMessage('')
            setForm(INITIAL_FORM)
        }, 300) // Match transition duration
    }

    const handleChange = (field) => (e) => {
        setForm((prev) => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const response = await fetch(ERP_QUOTE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    wellWidth: Number(form.wellWidth),
                    wellDepth: Number(form.wellDepth),
                    noOfPassenger: Number(form.noOfPassenger),
                }),
            })

            const payload = await response.json()

            if (!response.ok || !payload.success) {
                throw new Error(payload?.message || 'Could not submit your request. Please try again.')
            }

            setResult(payload)
            setStatus('result')
        } catch (err) {
            setErrorMessage(err.message || 'Something went wrong. Please try again or call us directly.')
            setStatus('error')
        }
    }

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isOpen && isAnimating ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className={`relative w-full max-w-4xl max-h-[95vh] overflow-y-auto overflow-x-hidden rounded-[32px] sm:rounded-[40px] bg-white shadow-[0_20px_100px_rgba(0,0,0,0.35)] transition-all duration-500 transform ${isOpen && isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black/40 transition-all hover:bg-red-600 hover:text-white sm:right-6 sm:top-6"
                >
                    <FaTimes size={18} />
                </button>

                <div className="grid lg:grid-cols-[2fr_3fr]">

                    {/* Left Side - Info */}
                    <div className="relative hidden flex-col justify-between bg-neutral-50 p-10 lg:flex border-r border-black/5">
                        <div>
                            <span className="inline-flex rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                                Instant Pricing
                            </span>
                            <h2 className="mt-8 text-4xl font-semibold leading-tight text-black">
                                Let&apos;s build your<br />
                                <span className="italic text-red-600">dream elevator</span>
                            </h2>
                            <p className="mt-6 text-sm leading-relaxed text-black/60">
                                Share your project specifications and get a real, calculated price from our
                                engineering team&apos;s own costing system &mdash; the same one our office uses.
                            </p>

                            <a
                                href="tel:+919247932351"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700"
                            >
                                <FaPhoneAlt size={13} />
                                Call for Assistance
                            </a>
                        </div>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-black/70">Real Calculated Pricing</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-black/70">Free Site Inspection</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-black/70">Transparent, No Hidden Costs</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative p-6 sm:p-12">
                        <div className="lg:hidden mb-8">
                            <span className="text-xs font-semibold uppercase tracking-widest text-red-600">Request A Quote</span>
                            <h2 className="mt-2 text-3xl font-semibold text-black">Project Pricing</h2>
                            <a
                                href="tel:+919247932351"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white"
                            >
                                <FaPhoneAlt size={12} />
                                Call for Assistance
                            </a>
                        </div>

                        {status === 'loading' && (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-black/10 border-t-red-600" />
                                <h3 className="text-2xl font-semibold text-black">Calculating Your Price...</h3>
                                <p className="mt-4 max-w-sm text-black/60">This takes about 10 seconds while we run your specifications through our costing system.</p>
                            </div>
                        )}

                        {status === 'result' && (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                {result?.finalPrice ? (
                                    <>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-black/50">Estimated Price</p>
                                        <h3 className="mt-2 text-4xl font-bold text-black">{formatRupees(result.finalPrice)}</h3>
                                        <p className="mt-4 text-black/60">Quotation No. {result.quotationNo}</p>
                                        <p className="mt-4 max-w-sm text-sm text-black/50">Our team will call you shortly to confirm site details and finalize your quotation.</p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-semibold text-black">Request Sent Successfully!</h3>
                                        <p className="mt-4 max-w-sm text-black/60">{result?.message || "Our elevator specialists will contact you shortly with your quote."}</p>
                                    </>
                                )}

                                <button
                                    onClick={handleClose}
                                    className="mt-8 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                                >
                                    Close
                                </button>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
                                    <FaTimes size={28} />
                                </div>
                                <h3 className="text-2xl font-semibold text-black">Couldn&apos;t Submit Your Request</h3>
                                <p className="mt-4 max-w-sm text-black/60">{errorMessage}</p>
                                <button
                                    onClick={() => setStatus('form')}
                                    className="mt-8 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        {status === 'form' && (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Full Name</label>
                                        <input required type="text" value={form.customerName} onChange={handleChange('customerName')} className={INPUT_CLASS} placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Mobile Number</label>
                                        <input required type="tel" value={form.mobileNo} onChange={handleChange('mobileNo')} className={INPUT_CLASS} placeholder="+91 90000 00000" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className={LABEL_CLASS}>Site Address</label>
                                    <input type="text" value={form.address} onChange={handleChange('address')} className={INPUT_CLASS} placeholder="Site / building address" />
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Lift Well Width (mm)</label>
                                        <input required type="number" min="1" value={form.wellWidth} onChange={handleChange('wellWidth')} className={INPUT_CLASS} placeholder="e.g. 1500" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Lift Well Depth (mm)</label>
                                        <input required type="number" min="1" value={form.wellDepth} onChange={handleChange('wellDepth')} className={INPUT_CLASS} placeholder="e.g. 1500" />
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>No. of Floors</label>
                                        <select value={form.noOfFloors} onChange={handleChange('noOfFloors')} className={`${INPUT_CLASS} appearance-none`}>
                                            {FLOOR_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>No. of Passengers</label>
                                        <select value={form.noOfPassenger} onChange={handleChange('noOfPassenger')} className={`${INPUT_CLASS} appearance-none`}>
                                            {PASSENGER_OPTIONS.map(opt => <option key={opt} value={opt}>{opt} Passengers</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Door Type</label>
                                        <select value={form.doorType} onChange={handleChange('doorType')} className={`${INPUT_CLASS} appearance-none`}>
                                            {DOOR_TYPE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Door Opening</label>
                                        <select value={form.doorOpening} onChange={handleChange('doorOpening')} className={`${INPUT_CLASS} appearance-none`}>
                                            {DOOR_OPENING_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Cabin Type</label>
                                        <select value={form.cabinType} onChange={handleChange('cabinType')} className={`${INPUT_CLASS} appearance-none`}>
                                            {CABIN_TYPE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Motor Type</label>
                                        <select value={form.motorType} onChange={handleChange('motorType')} className={`${INPUT_CLASS} appearance-none`}>
                                            {MOTOR_TYPE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className={LABEL_CLASS}>Head Room</label>
                                        <select value={form.headRoom} onChange={handleChange('headRoom')} className={`${INPUT_CLASS} appearance-none`}>
                                            {HEAD_ROOM_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="mt-4 w-full rounded-full bg-red-600 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:scale-[1.02] hover:bg-red-500">
                                    Get My Price
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
