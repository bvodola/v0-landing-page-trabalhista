/**
 * Dispara evento de conversão do Google Ads e redireciona para o WhatsApp, evitando race condition.
 * Pode ser usado em onClick de links.
 */
export function handleWhatsappConversionClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
) {
    e.preventDefault();
    if (typeof window !== 'undefined' && typeof gtag === 'function') {
        gtag('event', 'conversion', {
            'send_to': 'AW-402647677/Fw7bCMXok4AcEP3U_78B',
            'event_callback': function () {
                window.location.href = href;
            }
        });
        setTimeout(() => {
            window.location.href = href;
        }, 700);
    } else {
        window.location.href = href;
    }
}
