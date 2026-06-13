import { BrandLockup } from "./Brand";

const COLUMNS = [
  {
    title: "Product",
    links: ["Overview", "Integrations", "Pricing", "Changelog", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Customers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API Reference", "Status", "Community"],
  },
];

export default function Footer() {
  return (
    <footer id="blog" className="border-t border-black/[0.06] bg-[#FBFBFC]">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandLockup />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Financial clarity for modern SaaS teams. Connect your accounts and
              know exactly where your money goes.
            </p>
            <p className="mt-5 text-xs text-muted">app.nxrskyaa.ai</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-semibold tracking-tight text-ink">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-muted transition-colors hover:text-ink"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} NXRSkyaa Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-muted transition-colors hover:text-ink"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
