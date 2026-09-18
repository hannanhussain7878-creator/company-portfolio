export function LogoStrip() {
  const clients = [
    "Ledgerline",
    "Orbit Logistics",
    "Kite Health",
    "Northmark",
    "Atlas Supply",
    "Fieldnote",
  ];

  return (
    <section className="border-y border-border bg-[#0c0c0e]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-start gap-x-8 gap-y-4  py-8 lg:px-8">
        <span className="text-sm font-light  text-muted-foreground">
          Built for founders, startups & scaling teams
        </span>

        {clients.map((client) => (
          <span
            key={client}
            className="text-md font-display font-medium text-muted-foreground/70"
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}