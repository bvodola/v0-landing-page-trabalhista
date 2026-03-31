"use client"

import { MessageCircle } from "lucide-react"
import { handleWhatsAppClick } from "@/lib/track-whatsapp"

export function WhatsAppFloat() {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
      aria-label="Conversar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  )
}
