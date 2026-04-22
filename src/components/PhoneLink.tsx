import { Phone } from "lucide-react";
import {
  buildWhatsAppLink,
  formatPhone,
  type WhatsAppContext,
  type WhatsAppNumberKey,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  number: WhatsAppNumberKey;
  raw: string;
  context: WhatsAppContext;
  className?: string;
  showTel?: boolean;
}

export function PhoneLink({
  number,
  raw,
  context,
  className,
  showTel = true,
}: PhoneLinkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <a
        href={buildWhatsAppLink(context, number)}
        target="_blank"
        rel="noopener"
        aria-label={`Ouvrir WhatsApp avec ${formatPhone(raw)}`}
        className="inline-flex items-center gap-1.5 text-navy hover:text-accent-warm underline-offset-4 hover:underline transition-colors"
      >
        <span className="text-whatsapp" aria-hidden>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
        {formatPhone(raw)}
      </a>
      {showTel && (
        <a
          href={`tel:+${raw}`}
          aria-label={`Appeler ${formatPhone(raw)}`}
          className="text-navy/50 hover:text-navy transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
        </a>
      )}
    </span>
  );
}
