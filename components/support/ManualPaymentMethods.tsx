import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";
import { organization } from "@/lib/organization";
import { cn } from "@/lib/cn";
import type { SupportStrings } from "@/content/i18n/en/support";

interface ManualPaymentMethodsProps {
  strings: SupportStrings["manualGiving"];
  isUrdu: boolean;
}

interface PaymentRowProps {
  label: string;
  value: string;
  copyAriaLabel?: string;
  copyText?: string;
  copiedText?: string;
  isUrdu: boolean;
}

/** One labeled fact row (account holder, number, IBAN, ...), matching FactTable's "stacked" visual language, with an optional copy action for values a visitor is likely to retype elsewhere. */
function PaymentRow({ label, value, copyAriaLabel, copyText, copiedText, isUrdu }: PaymentRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border-soft py-3.5">
      <span className={cn("text-small text-ink-muted", isUrdu && "font-urdu-body text-base")}>{label}</span>
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="truncate text-[0.96875rem] font-medium text-foreground" dir="ltr">
          {value}
        </span>
        {copyAriaLabel && copyText && copiedText ? (
          <CopyButton value={value} ariaLabel={copyAriaLabel} copyText={copyText} copiedText={copiedText} isUrdu={isUrdu} />
        ) : null}
      </div>
    </div>
  );
}

/**
 * V1's actual giving mechanism (CLAUDE.md §22, PRD.md §15): two manual
 * payment methods, not a gateway — a visitor sends support directly via
 * their own Easypaisa app or bank, using the organization's own account
 * details and official QR images (`lib/organization.ts`'s `payments`
 * object), then may confirm with the ministry directly. No amount field,
 * card form, "Pay Now" button, or automated confirmation exists here.
 */
export function ManualPaymentMethods({ strings, isUrdu }: ManualPaymentMethodsProps) {
  const { easypaisa, bankTransfer } = organization.payments;

  return (
    <div id="give-manually" className="scroll-mt-24">
      <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
        {strings.eyebrow}
      </p>
      <h2 className={cn("text-h3 mt-3 text-foreground", isUrdu && "font-urdu-display")}>{strings.heading}</h2>
      <p className={cn("text-body measure mt-3 text-ink-muted", isUrdu && "font-urdu-body")}>{strings.intro}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card topRule="brass" tone="surface" className="flex min-w-0 flex-col">
          <h3 className={cn("text-card-title text-foreground", isUrdu && "font-urdu-display")}>
            {strings.easypaisa.heading}
          </h3>
          <div className="mt-3.5 flex flex-col">
            <PaymentRow label={strings.easypaisa.accountHolderLabel} value={easypaisa.accountHolder} isUrdu={isUrdu} />
            <PaymentRow
              label={strings.easypaisa.numberLabel}
              value={easypaisa.number}
              copyAriaLabel={`${strings.copyLabel} ${strings.easypaisa.numberLabel}`}
              copyText={strings.copyLabel}
              copiedText={strings.copiedLabel}
              isUrdu={isUrdu}
            />
          </div>
          <p className={cn("text-small mt-4 text-ink-body", isUrdu && "font-urdu-body")}>{strings.easypaisa.instruction}</p>
          <div className="mt-5 flex justify-center border border-border-soft bg-surface p-5 dark:bg-background">
            <Image
              src={easypaisa.qrImage}
              alt={strings.easypaisa.qrAlt}
              width={1080}
              height={1180}
              className="h-auto w-full max-w-[260px]"
            />
          </div>
        </Card>

        <Card topRule="navy" tone="surface" className="flex min-w-0 flex-col">
          <h3 className={cn("text-card-title text-foreground", isUrdu && "font-urdu-display")}>
            {strings.bankTransfer.heading}
          </h3>
          <div className="mt-3.5 flex flex-col">
            <PaymentRow label={strings.bankTransfer.accountHolderLabel} value={bankTransfer.accountHolder} isUrdu={isUrdu} />
            <PaymentRow label={strings.bankTransfer.bankLabel} value={bankTransfer.bank} isUrdu={isUrdu} />
            <PaymentRow
              label={strings.bankTransfer.accountNumberLabel}
              value={bankTransfer.accountNumber}
              copyAriaLabel={`${strings.copyLabel} ${strings.bankTransfer.accountNumberLabel}`}
              copyText={strings.copyLabel}
              copiedText={strings.copiedLabel}
              isUrdu={isUrdu}
            />
            <PaymentRow
              label={strings.bankTransfer.ibanLabel}
              value={bankTransfer.iban}
              copyAriaLabel={`${strings.copyLabel} ${strings.bankTransfer.ibanLabel}`}
              copyText={strings.copyLabel}
              copiedText={strings.copiedLabel}
              isUrdu={isUrdu}
            />
            <PaymentRow label={strings.bankTransfer.branchLabel} value={bankTransfer.branch} isUrdu={isUrdu} />
          </div>
          <p className={cn("text-small mt-4 text-ink-body", isUrdu && "font-urdu-body")}>{strings.bankTransfer.instruction}</p>
          <div className="mt-5 flex justify-center border border-border-soft bg-surface p-5 dark:bg-background">
            <Image
              src={bankTransfer.qrImage}
              alt={strings.bankTransfer.qrAlt}
              width={600}
              height={819}
              className="h-auto w-full max-w-[260px]"
            />
          </div>
        </Card>
      </div>

      <p className={cn("text-small measure mt-6 text-ink-faint", isUrdu && "font-urdu-body text-base")}>
        {strings.afterGiving}
      </p>
    </div>
  );
}
