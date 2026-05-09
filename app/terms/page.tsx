import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions — Story Sells",
  description: "Terms and conditions for using Story Sells.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Conditions">
      <p className="text-[16px] leading-[1.6] text-muted-foreground">
        Content will be added before launch.
      </p>
    </LegalShell>
  );
}
