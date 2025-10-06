import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Enterprise AI Strategy", href: "/services/enterprise-ai-strategy" },
  { name: "Executive AI Training", href: "/services/executive-ai-training" },
  { name: "30-Day AI Sprint", href: "/services/30-day-sprint" },
  { name: "Operations Transformation", href: "/services/operations-transformation" },
  { name: "Revenue Intelligence", href: "/services/revenue-intelligence" },
  { name: "AI Applications", href: "/services/ai-applications" },
  { name: "AI Rescue", href: "/services/ai-rescue" },
  { name: "Team Enablement", href: "/services/team-enablement" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Approach", href: "/approach" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/images/White_Transparent.png"
              alt="Charteris Partners"
              width={180}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Business Technologists Who Build
            </p>
            <p className="text-sm text-primary-foreground/80">
              AI solutions in 30 days, not PowerPoints
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 invisible">Services</h3>
            <ul className="space-y-2">
              {services.slice(4).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Charteris Partners. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-preferences"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Cookie Preferences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
