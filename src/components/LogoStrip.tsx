import { Oswald, Archivo, Baloo_2, Space_Grotesk, Playfair_Display } from "next/font/google";

const acmeFont = Oswald({ subsets: ["latin"] });
const globexFont = Archivo({ subsets: ["latin"] });
const soylentFont = Baloo_2({ subsets: ["latin"] });
const initechFont = Space_Grotesk({ subsets: ["latin"] });
const umbrellaFont = Playfair_Display({ subsets: ["latin"] });

const approvedLogos = [
  { name: "Acme Corp", font: acmeFont },
  { name: "Globex", font: globexFont },
  { name: "Soylent", font: soylentFont },
  { name: "Initech", font: initechFont },
  { name: "Umbrella", font: umbrellaFont },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
          Trusted by top sales teams
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {approvedLogos.map((logo) => (
            <div key={logo.name} className="text-2xl font-bold text-gray-500" style={logo.font.style}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}