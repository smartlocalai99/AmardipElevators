'use client'

import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
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
            <div className={`relative w-full max-w-4xl max-h-[95vh] overflow-y-auto overflow-x-hidden rounded-[32px] sm:rounded-[40px] bg-[#0A0A0A] shadow-[0_20px_100px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${isOpen && isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>

                {/* Background Effects */}
                <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-red-600/20 blur-[100px]" />
                <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-red-600 hover:text-white sm:right-6 sm:top-6"
                >
                    <FaTimes size={18} />
                </button>

                <div className="grid lg:grid-cols-[2fr_3fr]">

                    {/* Left Side - Info */}
                    <div className="relative hidden flex-col justify-between bg-zinc-900/50 p-10 lg:flex border-r border-white/5">
                        <div>
                            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-500">
                                Instant Pricing
                            </span>
                            <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
                                Let&apos;s build your<br />
                                <span className="italic text-red-600">dream elevator</span>
                            </h2>
                            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                                Share your project specifications and get a real, calculated price from our
                                engineering team&apos;s own costing system &mdash; the same one our office uses.
                            </p>
                        </div>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-red-500">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-zinc-300">Real Calculated Pricing</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-red-500">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-zinc-300">Free Site Inspection</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-red-500">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-zinc-300">Transparent, No Hidden Costs</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative p-6 sm:p-12">
                        <div className="lg:hidden mb-8">
                            <span className="text-xs font-semibold uppercase tracking-widest text-red-500">Request A Quote</span>
                            <h2 className="mt-2 text-3xl font-semibold text-white">Project Pricing</h2>
                        </div>

                        {status === 'loading' && (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-white/10 border-t-red-600" />
                                <h3 className="text-2xl font-semibold text-white">Calculating Your Price...</h3>
                                <p className="mt-4 max-w-sm text-zinc-400">This takes about 10 seconds while we run your specifications through our costing system.</p>
                            </div>
                        )}

                        {status === 'result' && (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                {result?.finalPrice ? (
                                    <>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Estimated Price</p>
                                        <h3 className="mt-2 text-4xl font-bold text-white">{formatRupees(result.finalPrice)}</h3>
                                        <p className="mt-4 text-zinc-400">Quotation No. {result.quotationNo}</p>
                                        <p className="mt-4 max-w-sm text-sm text-zinc-500">Our team will call you shortly to confirm site details and finalize your quotation.</p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-semibold text-white">Request Sent Successfully!</h3>
                                        <p className="mt-4 max-w-sm text-zinc-400">{result?.message || "Our elevator specialists will contact you shortly with your quote."}</p>
                                    </>
                                )}

                                <button
                                    onClick={handleClose}
                                    className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                                >
                                    Close
                                </button>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                                    <FaTimes size={28} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">Couldn&apos;t Submit Your Request</h3>
                                <p className="mt-4 max-w-sm text-zinc-400">{errorMessage}</p>
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
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Full Name</label>
                                        <input required type="text" value={form.customerName} onChange={handleChange('customerName')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Mobile Number</label>
                                        <input required type="tel" value={form.mobileNo} onChange={handleChange('mobileNo')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="+91 90000 00000" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Site Address</label>
                                    <input type="text" value={form.address} onChange={handleChange('address')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="Site / building address" />
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Lift Well Width (mm)</label>
                                        <input required type="number" min="1" value={form.wellWidth} onChange={handleChange('wellWidth')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="e.g. 1500" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Lift Well Depth (mm)</label>
                                        <input required type="number" min="1" value={form.wellDepth} onChange={handleChange('wellDepth')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="e.g. 1500" />
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">No. of Floors</label>
                                        <select value={form.noOfFloors} onChange={handleChange('noOfFloors')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {FLOOR_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">No. of Passengers</label>
                                        <select value={form.noOfPassenger} onChange={handleChange('noOfPassenger')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {PASSENGER_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt} Passengers</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Door Type</label>
                                        <select value={form.doorType} onChange={handleChange('doorType')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {DOOR_TYPE_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Door Opening</label>
                                        <select value={form.doorOpening} onChange={handleChange('doorOpening')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {DOOR_OPENING_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Cabin Type</label>
                                        <select value={form.cabinType} onChange={handleChange('cabinType')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {CABIN_TYPE_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Motor Type</label>
                                        <select value={form.motorType} onChange={handleChange('motorType')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {MOTOR_TYPE_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Head Room</label>
                                        <select value={form.headRoom} onChange={handleChange('headRoom')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {HEAD_ROOM_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
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
