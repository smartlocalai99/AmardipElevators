'use client'

import React, { useState, useEffect } from 'react'
import { BUILDING_TYPES, LIFT_TYPES } from '../data/productData.js'
import { FaTimes } from 'react-icons/fa'

const INITIAL_FORM = {
    name: '',
    email: '',
    mobile: '',
    buildingType: BUILDING_TYPES[0],
    liftType: LIFT_TYPES[0],
    message: '',
}

export default function ConsultationModal({ isOpen, onClose }) {
    const [form, setForm] = useState(INITIAL_FORM)
    const [submitted, setSubmitted] = useState(false)
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
        setTimeout(onClose, 300) // Match transition duration
    }

    const handleChange = (field) => (e) => {
        setForm((prev) => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            handleClose()
            setSubmitted(false)
            setForm(INITIAL_FORM)
        }, 3000)
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
                                Priority Support
                            </span>
                            <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
                                Let&apos;s build your<br />
                                <span className="italic text-red-600">dream elevator</span>
                            </h2>
                            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                                Our experts will analyze your building layout, traffic flow, and aesthetic preferences to recommend the perfect vertical mobility solution.
                            </p>
                        </div>
                        
                        <div className="mt-12 space-y-6">
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
                                <p className="text-sm font-medium text-zinc-300">Customized 3D Designs</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-red-500">
                                    ✓
                                </div>
                                <p className="text-sm font-medium text-zinc-300">Transparent Pricing</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative p-6 sm:p-12">
                        <div className="lg:hidden mb-8">
                            <span className="text-xs font-semibold uppercase tracking-widest text-red-500">Book Free Consultation</span>
                            <h2 className="mt-2 text-3xl font-semibold text-white">Expert Guidance</h2>
                        </div>

                        {submitted ? (
                            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-white">Request Sent Successfully!</h3>
                                <p className="mt-4 text-zinc-400">Our elevator specialists will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Full Name</label>
                                        <input required type="text" value={form.name} onChange={handleChange('name')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Mobile Number</label>
                                        <input required type="tel" value={form.mobile} onChange={handleChange('mobile')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="+91 90000 00000" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email Address</label>
                                    <input required type="email" value={form.email} onChange={handleChange('email')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="john@example.com" />
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Building Type</label>
                                        <select value={form.buildingType} onChange={handleChange('buildingType')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {BUILDING_TYPES.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Lift Type</label>
                                        <select value={form.liftType} onChange={handleChange('liftType')} className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition focus:border-red-500 focus:bg-white/10 focus:outline-none">
                                            {LIFT_TYPES.map(opt => <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Additional Details</label>
                                    <textarea value={form.message} onChange={handleChange('message')} rows={3} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition focus:border-red-500 focus:bg-white/10 focus:outline-none" placeholder="Tell us about capacity, floors, or specific requirements..." />
                                </div>

                                <button type="submit" className="mt-4 w-full rounded-full bg-red-600 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:scale-[1.02] hover:bg-red-500">
                                    Request Consultation
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
