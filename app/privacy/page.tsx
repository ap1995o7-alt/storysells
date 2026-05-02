import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Story Sells",
  description: "How Story Sells handles your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p className="body-md text-ink-tint">
        Content will be added before launch.
      </p>
    </LegalShell>
  );
}
