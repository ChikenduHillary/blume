import { Droplets, Battery, Thermometer, Cpu, Wifi, BarChart3, Package, Sprout, Building2 } from "lucide-react";

const coreComponents = [
  { icon: Thermometer,  title: "Soil Moisture Sensors",    desc: "Capacitive sensors at root-zone depth per crop zone. Trigger irrigation only when moisture drops below threshold,no schedule, no guesswork." },
  { icon: Droplets,     title: "Water Level Sensors",      desc: "Ultrasonic sensors on overhead storage tanks and livestock troughs. Automate refill cycles and trigger low-water and overflow alerts." },
  { icon: Cpu,          title: "ESP32 Controller",         desc: "Microcontroller running all automation logic locally. Sensor reading, pump relay control, threshold logic, and cloud sync when connectivity is available." },
  { icon: Battery,      title: "Pump Relay + Solar Power", desc: "Safe relay interface for petrol or electric pump control with dry-run protection. 12V solar panel and battery for off-grid and NEPA-unreliable environments." },
  { icon: BarChart3,    title: "Cloud Data Logging",       desc: "Periodic sync of sensor readings, pump runtime, and water consumption to cloud storage. Historical analytics, trend monitoring, and remote farm data access." },
  { icon: Wifi,         title: "Mobile Dashboard + GSM",   desc: "Lightweight web app on any smartphone,real-time sensors, pump status, threshold config, remote control. GSM module for SMS alerts to any basic phone." },
];

const kits = [
  { icon: Package,   title: "Starter Kit",       desc: "Tank level monitoring + automated pump control. Entry-level for homes and small facilities." },
  { icon: Sprout,    title: "Agriculture Kit",    desc: "Soil moisture sensors + tank monitoring + pump relay + solar power. Core package for smallholder farms." },
  { icon: Building2, title: "Pro Kit",            desc: "Full sensor suite including soil pH and water quality sensors. For farms, schools, hospitals, and commercial users." },
];

function ProductCard({ icon: Icon, title, desc }: { icon: typeof Droplets; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-[#eab308]/20 hover:bg-white/8 transition-colors">
      <div className="w-10 h-10 rounded-full bg-[#102418] flex items-center justify-center text-[#eab308] mb-4">
        <Icon className="w-4 h-4" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-[#a3b8ad]">{desc}</p>
    </div>
  );
}

export default function Products() {
  return (
    <>
      {/* Core components section */}
      <section id="technology" className="relative w-full py-24 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#06120b]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1B3022]/40 rounded-full blur-[120px] animate-breathe" />
        </div>
        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#06120b] to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06120b] to-transparent z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#eab308] mb-4">
              Core System Components
            </h2>
            <p className="text-[#a3b8ad] max-w-2xl mx-auto text-lg">
              Every Blume installation is built from these components,wrapping around
              your existing borehole-pump-tank infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((p) => <ProductCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Kits section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#eab308] mb-4">
            Hardware Kits
          </h2>
          <p className="text-[#a3b8ad] max-w-2xl mx-auto text-lg">
            Buy outright or subscribe monthly. Two purchasing paths to fit every farmer
            and institution,from price-sensitive smallholders to large commercial operations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {kits.map((p) => <ProductCard key={p.title} {...p} />)}
        </div>
      </section>
    </>
  );
}
