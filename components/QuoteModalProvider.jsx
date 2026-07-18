'use client'

import React, { useEffect, useState } from 'react'
import ConsultationModal from './ConsultationModal'

export const QUOTE_MODAL_EVENT = 'openQuoteModal'

export function openQuoteModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(QUOTE_MODAL_EVENT))
  }
}

export default function QuoteModalProvider() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)

    window.addEventListener(QUOTE_MODAL_EVENT, handleOpen)

    return () => {
      window.removeEventListener(QUOTE_MODAL_EVENT, handleOpen)
    }
  }, [])

  return (
    <ConsultationModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  )
}
