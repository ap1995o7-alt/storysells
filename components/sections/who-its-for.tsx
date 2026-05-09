import { Check, X } from "lucide-react";

const FOR_LIST = [
  "“Communicate better” is on your last three reviews and you've never been told what that means.",
  "Your idea got nodded at, then repeated by someone else, then funded.",
  "You'd rather fill in a 15-minute framework than read another 300-page book.",
  "You want this for the boardroom and the wedding toast, the LinkedIn post, the apology, and the “tell me about yourself.”",
];

const NOT_FOR_LIST = [
  "You're looking to write fiction, screenplays, or memoir.",
  "You want calls, coaching, community, or hand-holding.",
  "You think you can read a workbook and skip the worksheets.",
  "You think storytelling is fluff and you just need “better data.”",
  "You're hoping AI will do this for you — it can't, and that's the whole point.",
];

export function WhoItsFor() {
  return (
    <section
      aria-label="Who it's for"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 py-20 md:px-6 md:py-[120px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* For */}
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] text-[28px] font-bold text-foreground">
              This is for you if&hellip;
            </h3>
            <ul className="mt-8 space-y-4">
              {FOR_LIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-[5px] h-4 w-4 shrink-0"
                    strokeWidth={2.5}
                    style={{ color: "var(--accent)" }}
                  />
                  <span className="text-[16px] leading-[1.6] text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] text-[28px] font-bold text-muted-foreground">
              This is not for you if&hellip;
            </h3>
            <ul className="mt-8 space-y-4">
              {NOT_FOR_LIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X
                    aria-hidden="true"
                    className="mt-[5px] h-4 w-4 shrink-0 text-muted-foreground"
                    strokeWidth={2.5}
                  />
                  <span className="text-[16px] leading-[1.6] text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
