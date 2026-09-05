/**
 * Verified, locale-invariant organization facts (CLAUDE.md §3). Not
 * translated content, so this lives outside the i18n content system.
 */
export const organization = {
  phone: "+92 344 2316634",
  whatsappUrl: "https://wa.me/923442316634",
  email: "pastornayyer@gmail.com",
  facebookUrl: "https://www.facebook.com/share/1DWWD1SvDz/",
  youtubeUrl: "https://youtube.com/@pastornayyergull?si=sovA1YQ3ali90bZr",
  /**
   * V1 manual payment methods (CLAUDE.md §22, PRD.md §15) — a personal
   * Easypaisa wallet and a personal-name HBL bank account, both explicitly
   * authorized by the organization for this exact purpose. Neither is an
   * approved online payment gateway or registered ministry merchant
   * account; there is no live API, checkout, or webhook anywhere in this
   * project. `qrImage` points at the official QR images supplied by the
   * organization — displayed as-is, never regenerated or re-encoded.
   */
  payments: {
    easypaisa: {
      accountHolder: "NAYER GUL",
      number: "0344 2316634",
      qrImage: "/images/support/easypaisa-qr.png",
    },
    bankTransfer: {
      accountHolder: "Nayyer",
      bank: "HBL",
      accountNumber: "16427900776503",
      iban: "PK52HABB0016427900776503",
      branch: "KARACHI-KORANGI NO.2",
      qrImage: "/images/support/hbl-bank-qr.png",
    },
  },
} as const;
