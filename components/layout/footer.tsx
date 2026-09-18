import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-[7px] bg-orange-500 text-[11px] font-bold text-white">
              Q
            </span>

            <span className="text-sm font-semibold">Quadra</span>
          </div>

          <p className="mt-4 max-w-xs text-xs leading-5 text-muted-foreground">
            Four founders, seven disciplines. Design, code, and AI for teams
            that need it shipped.
          </p>

          <div className="mt-5 flex gap-2">
            {["in", "ig", "x", "dr"].map((social) => (
              <span
                key={social}
                className="grid size-7 place-items-center rounded-full border border-border text-[9px] text-muted-foreground"
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold">Services</h3>

          <div className="mt-4 flex flex-col gap-2 text-[10px] text-muted-foreground">
            <Link href="/services">UI/UX Design</Link>
            <Link href="/services">Graphic Design</Link>
            <Link href="/services">Web Development</Link>
            <Link href="/services">App Development</Link>
            <Link href="/services">WordPress Development</Link>
            <Link href="/services">AI Solutions & Automation</Link>
            <Link href="/services">LinkedIn Profile & Content</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold">Company</h3>

          <div className="mt-4 flex flex-col gap-2 text-[10px] text-muted-foreground">
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold">Get in touch</h3>

          <div className="mt-4 space-y-2 text-[10px] text-muted-foreground">
            <p>hello@quadra.studio</p>
            <p>+1 (312) 555-0188</p>
            <p>Remote-first · GMT-5 & CST</p>
            <p>Replies within 24 hours</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-5 py-5 text-[8px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Quadra Studio. All rights reserved.</p>

        <p>Graphic Design · UI/UX · Web · Apps · AI · WordPress · LinkedIn</p>
      </div>
    </footer>
  );
}