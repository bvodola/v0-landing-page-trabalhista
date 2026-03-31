const WHATSAPP_URL =
  "https://wa.me/5511913307306?text=Olá, gostaria de uma avaliação gratuita do meu caso trabalhista."

/**
 * Fires the Google Ads conversion event and then opens WhatsApp.
 * Prevents race conditions by:
 *  1. Blocking the default link navigation
 *  2. Sending the conversion event first
 *  3. Opening WhatsApp via the event_callback (or a 500ms safety timeout)
 */
export function handleWhatsAppClick(e: React.MouseEvent) {
  e.preventDefault()

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")
  }

  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    let hasOpened = false

    const safeOpen = () => {
      if (!hasOpened) {
        hasOpened = true
        openWhatsApp()
      }
    }

    ;(window as any).gtag("event", "conversion", {
      send_to: "AW-402647677/hF-fCIeR-fYbEP3U_78B",
      value: 100.0,
      currency: "BRL",
      event_callback: safeOpen,
    })

    // Safety timeout in case the callback never fires (e.g. ad-blocker)
    setTimeout(safeOpen, 500)
  } else {
    openWhatsApp()
  }
}
