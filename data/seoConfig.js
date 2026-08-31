// Centralized content for services, service-area (location), and blog pages,
// plus schema.org JSON-LD generators for local SEO / AEO / GEO.
import PassengerElevator from "../assets/Passenger_Elevators.webp"
import HospitalElevator from "../assets/Hospital_Elevator.webp"
import Modernization from "../assets/Modernization.webp"
import Maintenance from "../assets/Maintenance.webp"
import GearedTraction from "../assets/Geared_Traction.webp"

export const BUSINESS_DETAILS = {
  name: "Amardip Elevators",
  phone: "+91 9247932351",
  alternatePhone: "+91 9247932352",
  email: "amardipelevators@gmail.com",
  address: {
    streetAddress: "Brand No. 9, Corporation Complex, B.S. Road",
    addressLocality: "Kadapa",
    addressRegion: "Andhra Pradesh",
    postalCode: "516001",
    addressCountry: "IN",
  },
  geo: {
    latitude: 14.464968,
    longitude: 78.821583,
  },
  openingHours: "Mo-Sa 09:00-19:00",
  socials: [
    "https://www.instagram.com/amardip.elevators/",
    "https://www.youtube.com/@amardipelevators3458/",
  ],
  website: "https://www.amardipelevators.com",
}

export const SERVICES_DATA = [
  {
    id: "home-elevators",
    name: "Home Elevators",
    title: "Premium Home Elevators & Lifts Installation in Kadapa",
    metaDescription: "Install premium, energy-efficient home elevators in Kadapa and Andhra Pradesh. Custom designs with advanced safety features. Get a free quote today!",
    shortDesc: "Custom-designed lifts that blend seamlessly into your home's aesthetics while providing ultimate safety and convenience.",
    image: PassengerElevator,
    keywords: ["home lifts in Kadapa", "residential elevators Kadapa", "home elevators Andhra Pradesh"],
    geoContent: {
      intro: "Amardip Elevators is a leading provider of elegant, space-saving home elevators in Kadapa. Our residential lifts are engineered for luxury, quiet operation, and high safety.",
      whyChooseUs: [
        "No deep pit or headroom required — perfect for existing villas and duplexes.",
        "Single-phase power operation for maximum energy efficiency.",
        "Custom cabin finishes: premium glass panels, stainless steel, or wood veneer.",
        "Equipped with an Automatic Rescue Device (ARD) for peace of mind during power cuts.",
      ],
      process: "We start with a detailed site measurement, consult on styling options, and complete installation in 3-4 weeks with minimal masonry work.",
    },
  },
  {
    id: "passenger-lifts",
    name: "Passenger Lifts",
    title: "High-Speed Passenger Lifts in Kadapa | Amardip Elevators",
    metaDescription: "Looking for high-performance passenger lifts in Kadapa? We design, install, and maintain safe passenger elevators for buildings of all sizes.",
    shortDesc: "Engineered for high-traffic buildings, offering smooth acceleration, deceleration, and high energy efficiency.",
    image: PassengerElevator,
    keywords: ["passenger lifts Kadapa", "passenger elevators", "lift installation in Kadapa"],
    geoContent: {
      intro: "Our passenger lifts combine high-traffic capacity with smooth motion control. Widely installed across apartments and corporate towers in Kadapa.",
      whyChooseUs: [
        "Intelligent group control systems to minimize waiting times.",
        "VVVF drive technology for significant energy savings.",
        "Robust build with aesthetic design choices.",
        "Compliance with national elevator safety standards.",
      ],
      process: "Tailored layout planning, rapid structural assembly, and comprehensive load-testing verification before launch.",
    },
  },
  {
    id: "hospital-lifts",
    name: "Hospital Lifts",
    title: "Safe & Reliable Hospital Lifts in Kadapa | Amardip Elevators",
    metaDescription: "Specially designed stretcher and hospital lifts in Kadapa. Safe, hygienic, smooth leveling, and emergency override features. Contact Amardip Elevators.",
    shortDesc: "Critical-care medical elevators built for stretcher, patient, and instrument transport with precise smooth leveling.",
    image: HospitalElevator,
    keywords: ["hospital lifts Kadapa", "stretcher lifts Kadapa", "medical elevators Kadapa"],
    geoContent: {
      intro: "Hospital lifts require precise leveling and absolute dependability. Amardip Elevators provides medical-grade lifts featuring hygienic interiors and emergency override options.",
      whyChooseUs: [
        "Extended cabin depth to comfortably accommodate stretchers, patients, and life-support machinery.",
        "Precise leveling to prevent any jolts during wheeling.",
        "Priority medical override key switch for emergency calls.",
        "Smooth start and deceleration to prevent patient discomfort.",
      ],
      process: "Prioritized deployment, strict adherence to healthcare safety regulations, and 24/7 priority maintenance backup.",
    },
  },
  {
    id: "goods-lifts",
    name: "Goods Lifts",
    title: "Heavy-Duty Goods & Freight Lifts in Kadapa | Amardip Elevators",
    metaDescription: "Heavy-duty goods and cargo lifts in Kadapa. Durable structural designs built to transport heavy materials safely in warehouses and retail units.",
    shortDesc: "Heavy-duty cargo lifts designed to withstand rough loading conditions and transport heavy goods efficiently.",
    image: GearedTraction,
    keywords: ["goods lifts Kadapa", "freight elevators Kadapa", "industrial lifts Kadapa"],
    geoContent: {
      intro: "Built for tough industrial and warehouse environments, our goods lifts in Kadapa offer high loading capacity and durable structural framing.",
      whyChooseUs: [
        "Reinforced steel platform and wear-resistant cabin walls.",
        "Variable speed control to prevent cargo displacement.",
        "Highly reliable geared traction engines for heavy load lifting.",
        "Dual gate configurations for easy loading and unloading.",
      ],
      process: "Structural analysis of the shaft, custom weight-capacity configuration, and rigorous stress testing.",
    },
  },
  {
    id: "capsule-lifts",
    name: "Capsule Lifts",
    title: "Panoramic Glass Capsule Lifts in Kadapa | Amardip Elevators",
    metaDescription: "Elevate your building's architecture with panoramic glass capsule lifts in Kadapa. Beautiful views, smooth rides, and premium craftsmanship.",
    shortDesc: "Architectural glass lifts that give passengers panoramic views while upgrading your building's design.",
    image: PassengerElevator,
    keywords: ["capsule lifts Kadapa", "glass elevators Kadapa", "panoramic lifts Kadapa"],
    geoContent: {
      intro: "Transform your commercial complex, hotel, or premium residence in Kadapa with our glass capsule elevators.",
      whyChooseUs: [
        "High-transparency laminated safety glass panels.",
        "Custom exterior shapes: circular, semi-circular, or square glass cabins.",
        "Sleek LED illumination and under-car accent lights.",
        "Smooth, noiseless operation that enhances the rider experience.",
      ],
      process: "Custom design rendering, glass-framework integration, and precision alignment with external architectural features.",
    },
  },
  {
    id: "elevator-maintenance",
    name: "Elevator Maintenance",
    title: "Professional Lift & Elevator Maintenance Services in Kadapa",
    metaDescription: "Keep your lifts running safely with preventative elevator maintenance in Kadapa. 24/7 emergency response, expert technicians, and genuine parts.",
    shortDesc: "Preventative checkups, safety audits, and rapid-response repair services by experienced elevator engineers.",
    image: Maintenance,
    keywords: ["elevator maintenance Kadapa", "lift repair Kadapa", "24/7 lift service Kadapa"],
    geoContent: {
      intro: "Amardip Elevators provides proactive, routine maintenance schedules to eliminate downtime and keep passengers safe across Kadapa.",
      whyChooseUs: [
        "Regular safety and performance checklist inspections.",
        "24/7 emergency rescue and breakdown response across Kadapa.",
        "Well-stocked inventory of genuine spare parts for fast replacement.",
        "Experienced, trained technician crew.",
      ],
      process: "Routine scheduled visits, service reporting, and on-demand priority repair ticketing.",
    },
  },
  {
    id: "amc-services",
    name: "Annual Maintenance Contracts (AMC)",
    title: "Elevator AMC Services in Kadapa | Amardip Elevators",
    metaDescription: "Get the best elevator AMC plans in Kadapa. Comprehensive and non-comprehensive contracts covering regular audits, genuine spares, and 24/7 support.",
    shortDesc: "Comprehensive and non-comprehensive AMC packages tailored to your budget for round-the-clock safety and care.",
    image: Maintenance,
    keywords: ["elevator AMC Kadapa", "lift AMC charges Kadapa", "annual maintenance contracts lifts"],
    geoContent: {
      intro: "Our Annual Maintenance Contracts (AMC) in Kadapa give building owners complete peace of mind by preventing unexpected failure.",
      whyChooseUs: [
        "Comprehensive AMC: includes repair services, parts replacement, and breakdown checks.",
        "Non-Comprehensive AMC: covers regular lubrication, testing, and service calls (spares billed extra).",
        "Fixed yearly pricing with no hidden fees.",
        "Priority scheduling for all emergency calls.",
      ],
      process: "Contract setup after a free initial safety audit, recurring scheduled maintenance visits, and detailed service logs.",
    },
  },
  {
    id: "lift-modernization",
    name: "Lift Modernization",
    title: "Elevator Modernization & Safety Upgrades in Kadapa",
    metaDescription: "Upgrade your aging lifts with modern control systems, VVVF drives, and premium cabin designs. High performance and safety at a fraction of the cost of a new lift.",
    shortDesc: "Upgrade control panels, cabin interiors, and mechanical setups to bring older lifts to modern standards.",
    image: Modernization,
    keywords: ["lift modernization Kadapa", "elevator upgrade Kadapa", "lift safety upgrades"],
    geoContent: {
      intro: "Don't replace your whole lift. Our modernization services in Kadapa upgrade control boards, cabins, and drives for improved speed, look, and safety.",
      whyChooseUs: [
        "Replacement of old control units with modern control systems.",
        "Integration of modern gearless drives to reduce power consumption.",
        "Modern interior redesign (SS cabin finishes, LED lights, touch panels).",
        "Addition of modern safety sensors, door light curtains, and voice announcements.",
      ],
      process: "Condition assessment, custom modular upgrade plan, execution with minimal building disruption, and final re-certification.",
    },
  },
  {
    id: "commercial-elevators",
    name: "Commercial Elevators",
    title: "High-Traffic Commercial Elevators & Lifts in Kadapa",
    metaDescription: "Premium commercial elevator installation in Kadapa. High-performance, smart controls, and durable designs for offices, retail, and shopping centers.",
    shortDesc: "Robust, heavy-duty elevator systems optimized for high-traffic office buildings, retail spaces, and hotels.",
    image: PassengerElevator,
    keywords: ["commercial lifts Kadapa", "office elevators Kadapa", "commercial elevator installation"],
    geoContent: {
      intro: "Amardip Elevators offers heavy-traffic, intelligent elevator systems designed to keep commerce moving smoothly in Kadapa.",
      whyChooseUs: [
        "Advanced traffic-management systems with destination dispatch.",
        "Durable, modern cabins designed to withstand heavy wear and tear.",
        "Compliance with commercial safety codes and fire emergency systems.",
        "Quiet, high-capacity machinery.",
      ],
      process: "Traffic-flow analysis, custom configuration layout, precise installation, and comprehensive commercial inspection support.",
    },
  },
  {
    id: "residential-elevators",
    name: "Residential Elevators",
    title: "Comfortable Residential Elevators for Apartments in Kadapa",
    metaDescription: "Residential lift solutions for apartments and multi-family homes in Kadapa. Affordable, durable, and safe vertical mobility for all residential structures.",
    shortDesc: "Tailored multi-family building elevators combining cost-efficiency, safety, and modern comfort.",
    image: PassengerElevator,
    keywords: ["residential elevators Kadapa", "apartment lifts Kadapa", "residential lift installation"],
    geoContent: {
      intro: "We provide secure, quiet, and budget-friendly passenger elevators for residential apartment buildings and complexes in Kadapa.",
      whyChooseUs: [
        "Space-saving Machine Room-Less (MRL) design options.",
        "Smooth start-stop VVVF drives for smooth transitions.",
        "High safety levels including automatic rescue device and emergency telephone.",
        "Easy maintenance and budget-friendly long-term upkeep.",
      ],
      process: "Shaft verification, elevator configuration matching, installation, and handover with full safety certificates.",
    },
  },
]

export const LOCATIONS_DATA = [
  {
    id: "kadapa",
    name: "Kadapa",
    title: "Best Elevator & Lift Services in Kadapa | Amardip Elevators",
    metaDescription: "Trusted for lift installation, maintenance, and AMC services in Kadapa. Check our local project experience and get a free quote.",
    intro: "Amardip Elevators is a trusted choice for elevator systems in Kadapa. From high-speed passenger lifts in commercial zones to stylish residential elevators in housing projects, we provide complete vertical transport solutions.",
    challenges: "With Kadapa experiencing hot summers and dust, we optimize elevator shafts with dust-sealed parts, high-temperature lubrication, and robust ventilation configurations.",
    projects: "Installations completed across Kadapa city, including hospitals, apartments, and private villas.",
  },
  {
    id: "proddatur",
    name: "Proddatur",
    title: "Lift Installation, Repairs & AMC in Proddatur | Amardip Elevators",
    metaDescription: "Professional lift services in Proddatur, AP. Specializing in commercial lifts for retail hubs, home lifts, and fast breakdown response. Contact us.",
    intro: "Proddatur, the gold hub of Rayalaseema, needs premium capsule and passenger elevators to match its busy retail showrooms and commercial structures. Amardip Elevators delivers just that.",
    challenges: "Given the high customer traffic in Proddatur's commercial areas, our lifts are designed with heavy-duty door operators and fast-response controls for continuous usage.",
    projects: "Installed panoramic glass capsule lifts and passenger elevators in jewelry showrooms and shopping complexes across Proddatur.",
  },
  {
    id: "rajampet",
    name: "Rajampet",
    title: "Elevator Company in Rajampet | Home Lifts & AMC Services",
    metaDescription: "Quality lift installation and maintenance contracts in Rajampet. Affordable solutions for multi-floor buildings, homes, and public facilities.",
    intro: "Amardip Elevators brings safe, reliable vertical mobility to Rajampet. We supply passenger lifts, cargo elevators, and residential villas with home lifts.",
    challenges: "Rajampet's humid climate calls for corrosion-resistant materials. We use high-grade Stainless Steel (SS cabin) for durability.",
    projects: "Home lift installations in Rajampet villas and passenger elevators in private hospitals.",
  },
  {
    id: "rayachoti",
    name: "Rayachoti",
    title: "Elevator Installation & AMC in Rayachoti | Amardip Elevators",
    metaDescription: "Reliable lift services in Rayachoti. We offer budget-friendly home lifts, hospital elevators, and 24/7 breakdown recovery. Call for consultation.",
    intro: "Rayachoti's expansion has led to demand for safe, energy-efficient passenger lifts. We offer customizable elevator options that fit newly built residential complexes and hospitals.",
    challenges: "To prevent power-failure entrapment, our Rayachoti lifts are fitted with emergency backup lighting, intercoms, and self-rescue mechanisms.",
    projects: "Commissioned medical-grade stretcher elevators and passenger lifts in local healthcare centers.",
  },
  {
    id: "pulivendula",
    name: "Pulivendula",
    title: "Elevator Installation & Maintenance in Pulivendula | Amardip Elevators",
    metaDescription: "Trusted lift services in Pulivendula. We specialize in residential home lifts, commercial elevators, and local maintenance contracts. Request a quote.",
    intro: "We are proud to serve the developing landscape of Pulivendula, installing modern elevators in commercial complexes, industrial plants, and residential duplexes.",
    challenges: "Power fluctuations are common, so all our Pulivendula installations feature Automatic Rescue Devices (ARD) and voltage stabilizers for rider safety.",
    projects: "Deployment of high-capacity goods lifts and residential elevators across key business sectors of Pulivendula.",
  },
  {
    id: "jammalamadugu",
    name: "Jammalamadugu",
    title: "Industrial & Domestic Lift Services in Jammalamadugu | Amardip Elevators",
    metaDescription: "Searching for elevator installers in Jammalamadugu? Amardip Elevators provides high-capacity freight lifts and domestic residential lifts.",
    intro: "Jammalamadugu's industrial growth calls for robust, heavy-duty goods elevators. We supply freight lifts and home lifts for local residential developments.",
    challenges: "Industrial dust is a major obstacle. Our Jammalamadugu configurations feature dust-sealed control panels, heavy-duty door tracks, and sealed bearings.",
    projects: "Supplied heavy-duty freight lifts to processing facilities in the Jammalamadugu region.",
  },
]

export const BLOGS_DATA = [
  {
    id: "lift-installation-cost-kadapa",
    title: "Elevator & Lift Installation Cost in Kadapa: Complete Pricing Guide",
    metaDescription: "How much does it cost to install a lift in Kadapa? See the cost breakdown of passenger lifts, home lifts, and the factors influencing pricing.",
    date: "June 25, 2026",
    author: "Amardip Technical Team",
    excerpt: "Discover the factors that influence the price of a new lift installation in Kadapa, from structural requirements to cabin custom upgrades.",
    content: `
When planning to build or renovate a multi-story building, understanding **lift installation costs in Kadapa** is crucial. The investment depends heavily on configuration choices, technology, and design preferences.

### Key Factors Affecting the Installation Price
1. **Elevator Type & Technology:**
   * **Hydraulic Lifts:** Cost-effective for 2-3 stops, requiring minimal headroom.
   * **Traction Lifts (Geared):** Highly reliable for medium-rise buildings.
   * **Machine Room-Less (MRL) Traction Lifts:** Higher upfront cost but extremely energy-efficient and space-saving.
2. **Number of Floors (Stops):**
   Each additional floor adds to the cost of guide rails, wiring, doors, and calibration time.
3. **Cabin Material & Aesthetics:**
   Mild Steel (MS Cabin) is budget-friendly. Stainless Steel (SS Cabin) or glass observation panels are premium and offer long-lasting durability.
4. **Safety Features:**
   Equipping a lift with an Automatic Rescue Device (ARD), fire-rated doors, overload warning, and infrared light curtains affects overall pricing.

At **Amardip Elevators**, we provide transparent, breakdown-free quotations tailored to your construction plan. Contact our local Kadapa office at **+91 9247932351** for a free site assessment today.
    `,
  },
  {
    id: "best-home-elevators-andhra-pradesh",
    title: "Best Home Elevators in Andhra Pradesh: Luxury & Safety Combined",
    metaDescription: "Find the best home elevators in Andhra Pradesh. Compare villa lifts, hydraulic systems, and learn which safety options are essential for your family.",
    date: "June 20, 2026",
    author: "Vertical Mobility Specialist",
    excerpt: "Transform your villa or duplex with a premium home lift. We review the top features to look for in residential elevators in Andhra Pradesh.",
    content: `
Residential elevators are no longer just a luxury; they are a vital asset for accessibility, letting elder family members move freely without straining on stairs. If you are searching for the **best home elevators in Andhra Pradesh**, here is what you need to consider.

### 1. Hydraulic vs. MRL Traction Lifts for Homes
* **Hydraulic Home Lifts:** Popular for 2 to 3-floor villas. They require no overhead machine room and can run on single-phase power. The ride is extremely smooth.
* **MRL Traction Lifts:** Best for taller residential houses (4+ stops). They use counterweights, are energy-efficient, and have faster speeds.

### 2. Space and Architectural Requirements
Modern home lifts are designed to fit compact spaces. Amardip Elevators offers custom setups requiring:
* A pit as shallow as 100mm to 300mm (or even zero pit with a small ramp).
* Compact shafts starting from 1.2m x 1.2m.
* Self-supporting steel structures so you do not need to build a concrete shaft.

### 3. Critical Safety Checklist for Duplex Lifts
* **Automatic Rescue Device (ARD):** Essential in AP to prevent entrapment during frequent power cuts. The lift automatically drives to the nearest floor and opens the doors.
* **Emergency Telephone / Intercom:** Connects directly to family members or our service desk.
* **Infrared Door Curtains:** Prevents doors from closing on children or pets.

Explore customizable home elevator models at **Amardip Elevators**. We ensure premium build quality that blends with your interior styling.
    `,
  },
  {
    id: "elevator-maintenance-checklist",
    title: "The Ultimate Elevator Maintenance Checklist for Building Owners",
    metaDescription: "Prevent elevator breakdowns and save on repairs. Our comprehensive monthly elevator maintenance and safety audit checklist.",
    date: "June 15, 2026",
    author: "Maintenance Division Head",
    excerpt: "Preventive maintenance is key to elevator longevity. Use our checklist to ensure your building's lifts are safe, smooth, and compliant.",
    content: `
Regular maintenance of your elevator is vital to guarantee user safety and extend the lifespan of your machinery. As a building manager or society president in Kadapa, understanding what goes into a professional maintenance check will help you make informed decisions.

### Professional Monthly Inspection Points
A technician from **Amardip Elevators** conducts the following checks:

#### Inside the Cabin
* **Door operation:** Ensure smooth opening/closing without jarring sounds.
* **Buttons and indicator lights:** Verify all floor selections and indicators work.
* **Emergency systems:** Test emergency alarm buttons, intercoms, and backup lights.
* **Leveling accuracy:** Check if the lift stops flush with the floor surface.

#### In the Machine Room & Shaft
* **Oil level & lubrication:** Check gearbox oil levels and lubricate guide rails.
* **Brake operation:** Test safety brakes under simulation conditions.
* **Cables and ropes:** Inspect for signs of wear, tension issues, or corrosion.
* **Controller testing:** Examine electronic relays, switches, and contactors.

### The Value of a Professional AMC Contract
Enrolling in an **Annual Maintenance Contract (AMC)** reduces sudden breakdowns and avoids expensive emergency parts replacement. At Amardip Elevators, we provide service logs after every monthly checklist inspection. Keep your building safe by calling **+91 9247932351**.
    `,
  },
  {
    id: "passenger-lift-vs-capsule-lift",
    title: "Passenger Lift vs. Capsule Lift: Which is Best for Your Building?",
    metaDescription: "Confused between passenger lifts and glass capsule lifts? Compare aesthetics, installation costs, structure requirements, and usage guidelines.",
    date: "June 10, 2026",
    author: "Architectural Design Lead",
    excerpt: "Compare traditional passenger elevators with scenic glass capsule lifts. Discover which model fits your building's commercial or residential needs.",
    content: `
Choosing the right elevator model defines how people interact with your building. If you are comparing a **standard passenger lift** and a **panoramic glass capsule lift**, here is a comparison to guide your decision.

### 1. Aesthetic Impact and Branding
* **Passenger Lifts:** Standard closed cabins, customized with stainless steel (SS) or mild steel (MS). Best for apartments and corporate offices where privacy is preferred.
* **Capsule Lifts:** Feature glass viewing walls that create a dramatic architectural statement. Perfect for shopping complexes, hotels, jewelry showrooms, and luxury residences.

### 2. Installation and Structural Differences
* **Passenger Lifts:** Enclosed inside a concrete or steel shaft, completely hidden from external view.
* **Capsule Lifts:** Can be installed on the exterior facade of a building or inside an open atrium. Requires specialized glass mounting frames and structure.

### 3. Pricing and Budget Breakdown
* **Passenger Lifts:** Budget-friendly, standard pricing, easy installation.
* **Capsule Lifts:** Higher cost due to specialized safety glass, decorative lights, and aesthetic styling.

Whether you need a classic passenger elevator in Kadapa or a scenic glass capsule lift in Proddatur, **Amardip Elevators** has the expertise to manufacture, install, and support your project.
    `,
  },
  {
    id: "lift-safety-tips",
    title: "Top Lift Safety Rules and Emergency Rescue Tips",
    metaDescription: "Important elevator safety rules for children, adults, and emergency procedures. What to do if stuck in a lift.",
    date: "June 05, 2026",
    author: "Safety Compliance Director",
    excerpt: "Elevator safety is everyone's responsibility. Learn the rules for safe operation and how to react calmly during a power outage or sudden stop.",
    content: `
Modern elevators are incredibly safe, equipped with multiple mechanical and electrical backup systems. However, user awareness is crucial to prevent accidents and avoid panic. Here are the top safety rules to follow and share with family or tenants.

### Important Passenger Rules
1. **Never overload the lift:** Pay attention to the maximum passenger and weight warning.
2. **Watch your step:** Always look down to ensure the elevator floor is level before stepping in.
3. **Hold hands with children:** Keep kids and pets close to prevent door sensors from separating them.
4. **Don't block doors:** Do not stick your hands or feet in to stop a closing door. Use the door-open button instead.
5. **No rough-housing:** Avoid jumping inside the cabin, as this can trigger the safety governors and lock the lift.

### What to Do If You Get Stuck
In the rare event the lift stops between floors due to a power cut:
* **Stay calm:** The cabin has plenty of fresh air, and the lift will not fall.
* **Use the alarm/intercom:** Press the alarm button or call our emergency hotline.
* **Do NOT try to pry open the doors:** Attempting to force the doors open can be dangerous. Wait for a technician to perform a safe release.
* **Trust the ARD:** If the lift has an Automatic Rescue Device, wait for it to move to the nearest floor.

At **Amardip Elevators**, safety is our first priority. We install high-quality safety gear, light sensors, and automatic rescue mechanisms on all our systems.
    `,
  },
]

export const AEO_FAQS = [
  {
    question: "Which is the best elevator company in Kadapa?",
    answer: "Amardip Elevators offers top-tier design, installation, maintenance, and AMC services for residential duplexes, apartment buildings, commercial complexes, and hospitals across Kadapa, Proddatur, Rajampet, Rayachoti, Pulivendula, and Jammalamadugu, backed by reliable engineering and emergency rescue support.",
  },
  {
    question: "What is the cost of installing a lift in Kadapa?",
    answer: "The cost of installing a lift in Kadapa varies based on structural stops (floors), capacity, cabin material (Mild Steel vs Stainless Steel), automatic door systems, and safety features like Automatic Rescue Devices (ARD). Contact us for a free, tailored quotation.",
  },
  {
    question: "Which lift is best for homes?",
    answer: "The best lift for homes is typically a hydraulic elevator or a Machine Room-Less (MRL) traction lift. For 2-3 stops, hydraulic elevators are recommended because they require no overhead machine room, operate on single-phase power, consume minimal electricity, and fit into narrow spaces.",
  },
  {
    question: "How much maintenance does an elevator require?",
    answer: "An elevator requires routine preventative maintenance roughly once a month. Monthly servicing includes drive checkups, brake adjustments, guide rail lubrication, door operator calibration, and verification of emergency systems to guarantee safety compliance and prevent breakdowns.",
  },
  {
    question: "What are AMC charges for elevators?",
    answer: "Elevator AMC (Annual Maintenance Contract) charges depend on the type of contract. A Non-Comprehensive AMC covers monthly checkups and emergency calls, while a Comprehensive AMC includes all service charges along with the cost of replacement parts.",
  },
  {
    question: "Which elevator company provides 24/7 service in Kadapa?",
    answer: "Amardip Elevators provides dedicated 24/7 emergency service and breakdown rescue in Kadapa and surrounding areas including Proddatur, Rajampet, and Pulivendula. Reach the emergency support desk at +91 9247932351 for fast-response lift troubleshooting.",
  },
]

// Schema.org JSON-LD generators for local SEO / AEO / GEO
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_DETAILS.name,
    url: BUSINESS_DETAILS.website,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_DETAILS.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
    sameAs: BUSINESS_DETAILS.socials,
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_DETAILS.website}/#local-business`,
    name: BUSINESS_DETAILS.name,
    telephone: BUSINESS_DETAILS.phone,
    email: BUSINESS_DETAILS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_DETAILS.address.streetAddress,
      addressLocality: BUSINESS_DETAILS.address.addressLocality,
      addressRegion: BUSINESS_DETAILS.address.addressRegion,
      postalCode: BUSINESS_DETAILS.address.postalCode,
      addressCountry: BUSINESS_DETAILS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_DETAILS.geo.latitude,
      longitude: BUSINESS_DETAILS.geo.longitude,
    },
    url: BUSINESS_DETAILS.website,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    areaServed: LOCATIONS_DATA.map((loc) => ({ "@type": "AdministrativeArea", name: loc.name })),
  }
}

export function getServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_DETAILS.name,
      telephone: BUSINESS_DETAILS.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS_DETAILS.address.addressLocality,
        addressRegion: BUSINESS_DETAILS.address.addressRegion,
      },
    },
    areaServed: LOCATIONS_DATA.map((loc) => ({ "@type": "AdministrativeArea", name: loc.name })),
    description: service.metaDescription,
  }
}

export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((itm, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: itm.name,
      item: itm.item,
    })),
  }
}
