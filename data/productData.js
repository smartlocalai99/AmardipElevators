// Centralized content for the "Elevator Systems For Modern Spaces" tabbed showcase
// and individual product pages.
import GearedTraction from "../assets/Geared_Traction.webp";
import MachineRoom from "../assets/Machine_Room.webp";
import MachineRoomless from "../assets/Machine_Room_Less.webp";

import ManualDoor from "../assets/Manual_Door.webp";
import AutoDoor from "../assets/Auto_Door.webp";
import MsCabin from "../assets/MS_Cabin.webp";
import SsCabin from "../assets/SS_Cabin.webp";
import HospitalElevator from "../assets/Hospital_Elevator.webp";
import PassengerElevator from "../assets/Passenger_Elevators.webp";

import Modernization from "../assets/Modernization.webp";
import Maintenance from "../assets/Maintenance.webp";
import SpareParts from "../assets/Spare_Parts.webp";


export const PRODUCT_TABS = [
  { id: 'liftTypes', label: 'Lift Types' },
  { id: 'configurations', label: 'Elevator Configurations' },
  { id: 'doorSystems', label: 'Door Systems' },
  { id: 'cabinDesigns', label: 'Cabin Designs' },
]

export const PRODUCT_CONTENT = {
  liftTypes: {
    description: "We assist you in selecting the most suitable elevator solution tailored to your building requirements, available space, and budget, ensuring optimal performance and efficiency.",
    products: [
      {
        id: 'passenger-elevators',
        pageLayout: 'elevator',
        cardTitle: 'PASSENGER ELEVATORS',
        cardDescription: 'Engineered for smooth, safe, and comfortable vertical mobility.',
        title: 'PASSENGER ELEVATORS',
        buttonText: 'Explore Now ➔',
        image: PassengerElevator,
        largeImage: PassengerElevator,
        description: 'Engineered for smooth, safe, and comfortable vertical mobility, our passenger elevators ensure dependable performance, energy efficiency, and effortless movement across residential, commercial, and hospitality environments.',
        mainIcons: [
          { label: 'Passenger Safety First', subLabel: 'Ensuring maximum safety for every ride', icon: 'clipboard' },
          { label: 'Emergency Prepared', subLabel: 'Equipped for critical situations', icon: 'shield' },
          { label: 'Silent Operation', subLabel: 'Smooth and noise-free travel', icon: 'smile' },
        ],
        aboutTitle: 'Designed For Modern Architecture',
        aboutDescription: 'Passenger elevators are built for continuous operation with precise leveling, smooth travel, and high energy efficiency, making them ideal for high-traffic environments.',
        keyFeatures: [
          { label: 'Silent Operation', subLabel: 'Smooth and Quiet Ride', icon: 'pulse' },
          { label: 'Emergency Control', subLabel: 'Automatic Rescue System', icon: 'refresh' },
          { label: 'Smooth Movement', subLabel: 'Precise Leveling', icon: 'users' },
          { label: 'Elegant Cabin', subLabel: 'Premium Interior Finishes', icon: 'door' },
          { label: 'Energy Efficient', subLabel: 'Low Power Consumption', icon: 'battery' },
          { label: 'Smart Systems', subLabel: 'Intelligent Control Technology', icon: 'cog' },
        ],
        experiences: [
          'https://picsum.photos/200/300?random=1',
          'https://picsum.photos/200/300?random=2',
          'https://picsum.photos/200/300?random=3',
          'https://picsum.photos/200/300?random=4',
          'https://picsum.photos/200/300?random=5',
          'https://picsum.photos/200/300?random=6',
        ],
        specs: [
          { icon: 'settings', label: 'Traction', value: 'Gear / GearLess' },
          { icon: 'box', label: 'Room', value: 'Required / Not Required' },
          { icon: 'door', label: 'Door', value: 'Auto / Manual' },
          { icon: 'home', label: 'Cabin', value: 'MS / SS' },
          { icon: 'gauge', label: 'Speed', value: 'Up to 2.00 m/s' },
          { icon: 'ruler', label: 'Max Height', value: '18 / 21 meters' },
          { icon: 'weight', label: 'kg or Capacity', value: '544 / 680 / 884 / 1360' },
          { icon: 'users', label: 'Passengers', value: '8 / 10 / 13 / 20' },
        ]
      },
      {
        id: 'hospital-elevators',
        pageLayout: 'elevator',
        cardTitle: 'HOSPITAL ELEVATORS',
        cardDescription: 'Engineered for critical medical environments ensuring safe and rapid transportation.',
        title: 'HOSPITAL ELEVATORS',
        buttonText: 'Explore Now ➔',
        image: HospitalElevator,
        largeImage: HospitalElevator,
        description: 'Engineered for critical medical environments, hospital elevators ensure safe, smooth, and rapid transportation of patients and medical personnel between floors, supporting essential healthcare and emergency operations.',
        mainIcons: [
          { label: 'Patient Ready', subLabel: 'Our Top Priority', icon: 'clipboard' },
          { label: 'Emergency Ready', subLabel: 'Always Prepared', icon: 'shield' },
          { label: 'Silent Movement', subLabel: 'Comfort in Every Ride', icon: 'smile' },
        ],
        aboutTitle: 'Designed For Modern Healthcare Architecture',
        aboutDescription: 'Hospital elevators are built for continuous operation with precise leveling, smooth movement, and high energy efficiency, ensuring reliable performance in critical medical environments.',
        keyFeatures: [
          { label: 'Silent Operation', subLabel: 'Smooth and Quiet Ride For Patients', icon: 'pulse' },
          { label: 'Emergency Control', subLabel: 'Automatic rescue system with power backup', icon: 'refresh' },
          { label: 'Smooth Movement', subLabel: 'Precise leveling for safe stretcher transport', icon: 'users' },
          { label: 'Antibacterial Cabin', subLabel: 'Hygienic materials for infection-free environments', icon: 'door' },
          { label: 'Energy Efficient', subLabel: 'Low Power consumption With High Performance', icon: 'battery' },
          { label: 'Smart Systems', subLabel: 'Intelligent monitoring and control systems', icon: 'cog' },
        ],
        experiences: [
          'https://picsum.photos/200/300?random=1',
          'https://picsum.photos/200/300?random=2',
          'https://picsum.photos/200/300?random=3',
          'https://picsum.photos/200/300?random=4',
          'https://picsum.photos/200/300?random=5',
          'https://picsum.photos/200/300?random=6',
          'https://picsum.photos/200/300?random=7',
          'https://picsum.photos/200/300?random=8',
        ],
        specs: [
          { icon: 'settings', label: 'Traction', value: 'Gear / GearLess' },
          { icon: 'box', label: 'Room', value: 'Required / Not Required' },
          { icon: 'door', label: 'Door Type', value: 'Auto / Manual' },
          { icon: 'home', label: 'Cabin', value: 'MS / SS' },
          { icon: 'gauge', label: 'Speed', value: 'Up to 2.00 m/s' },
          { icon: 'ruler', label: 'Max Travel Height', value: '18 / 21 meters' },
          { icon: 'weight', label: 'Load Capacity', value: '544 / 680 / 884 / 1360' },
          { icon: 'users', label: 'Passengers Capacity', value: '8 / 10 / 13 / 20' },
        ]
      }
    ]
  },
  configurations: {
    description: "Explore a range of customizable elevator configurations designed to match your building structure, usage requirements, and space constraints, ensuring maximum efficiency and comfort.",
    products: [
      {
        id: 'geared-traction',
        pageLayout: 'component',
        number: '01',
        cardTitle: 'Geared Traction',
        cardDescription: 'Engineered for robust performance, reliable lifting capacity, and long-term durability.',
        title: 'GEARED TRACTION CONFIGURATION',
        buttonText: 'Explore Configuration ➔',
        image: GearedTraction,
        largeImage: GearedTraction,
        description: 'Engineered for robust performance, geared traction systems deliver reliable lifting capacity, smooth operation, and long-term durability, making them ideal for medium-rise passenger and goods elevator applications.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Durable & Long-\nLasting Performance',
          'Smooth & Reliable\nOperation',
          'Ideal For Passenger &\nGoods Elevators',
          'High-efficiency geared\ndrive system',
          'Low Maintenance\nPerformance'
        ]
      },
      {
        id: 'machine-room',
        pageLayout: 'component',
        number: '02',
        cardTitle: 'Machine Room',
        cardDescription: 'Designed for powerful performance, stable operation, and easy maintenance.',
        title: 'MACHINE ROOM CONFIGURATION',
        buttonText: 'Explore Configuration ➔',
        image: MachineRoom,
        largeImage: MachineRoom,
        description: 'Machine room based elevator systems are designed for powerful performance, stable operation, and easy maintenance, making them suitable for high-capacity and long-duty applications.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Durable & Long-\nLasting Performance',
          'Smooth & Reliable\nOperation',
          'Ideal For Passenger &\nGoods Elevators',
          'High Efficiency\nDrive System',
          'Low Maintenance\nPerformance'
        ]
      },
      {
        id: 'machine-room-less',
        pageLayout: 'component',
        number: '03',
        cardTitle: 'Machine Room Less',
        cardDescription: 'Designed for space optimization, energy efficiency, and smooth performance.',
        title: 'MACHINE ROOM LESS CONFIGURATION',
        buttonText: 'Explore Configuration ➔',
        image: MachineRoomless,
        largeImage: MachineRoomless,
        description: 'Machine room-less elevator systems are designed for space optimization, energy efficiency, and smooth performance, making them ideal for modern buildings with limited architectural space.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Space-saving machine room-less design',
          'Smooth and quiet operation',
          'Ideal for passenger and goods elevators',
          'High-efficiency drive system',
          'Low maintenance and energy-efficient performance'
        ]
      }
    ]
  },
  doorSystems: {
    description: "Our advanced elevator door systems are designed for smooth operation, enhanced safety, and durability, offering reliable performance in both manual and automatic configurations for various building requirements.",
    products: [
      {
        id: 'manual-doors',
        pageLayout: 'component',
        number: '01',
        cardTitle: 'Manual Doors',
        cardDescription: 'Designed for durability, simplicity, and reliable operation in lower traffic areas.',
        title: 'MANUAL DOORS',
        buttonText: 'Explore ➔',
        image: ManualDoor,
        largeImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop',
        description: 'Manual door systems are designed for durability, simplicity, and cost efficiency, offering reliable operation in low to medium traffic elevator installations.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Durable & Long-Lasting Performance',
          'Smooth and reliable door operation',
          'Ideal for passenger and goods elevators',
          'High-efficiency mechanical system',
          'Low maintenance requirements'
        ]
      },
      {
        id: 'automatic-doors',
        pageLayout: 'component',
        number: '02',
        cardTitle: 'Automatic Doors',
        cardDescription: 'Designed for smooth, safe, and highly efficient passenger movement.',
        title: 'AUTOMATIC DOORS',
        buttonText: 'Explore ➔',
        image: AutoDoor,
        largeImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop',
        description: 'Automatic door systems are designed for smooth, safe, and efficient passenger movement, offering enhanced convenience, precision, and reliability in modern elevator installations.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Durable & Long-\nLasting Performance',
          'Smooth and reliable automatic operation',
          'Ideal for passenger and goods elevators',
          'High-efficiency door drive system',
          'Low maintenance and energy-efficient performance'
        ]
      }
    ]
  },
  cabinDesigns: {
    description: "Our cabin designs combine aesthetics, durability, and comfort, offering customizable interior finishes such as MS and SS to enhance both appearance and passenger experience.",
    products: [
      {
        id: 'ms-cabin',
        pageLayout: 'component',
        number: '01',
        cardTitle: 'MS Cabin',
        cardDescription: 'Designed for durability, cost efficiency, and robust structural performance.',
        title: 'MS CABIN',
        buttonText: 'Explore ➔',
        image: MsCabin,
        largeImage: MsCabin,
        description: 'MS (Mild Steel) cabin interiors are designed for durability, cost efficiency, and robust performance, making them suitable for high-usage passenger and goods elevator applications in commercial and industrial environments.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Durable and long-lasting mild steel construction',
          'Smooth and reliable operation',
          'Ideal for passenger and goods elevators',
          'High-efficiency structural design',
          'Low maintenance performance'
        ]
      },
      {
        id: 'ss-cabin',
        pageLayout: 'component',
        number: '02',
        cardTitle: 'SS Cabin',
        cardDescription: 'Designed for premium aesthetics, corrosion resistance, and long-lasting shine.',
        title: 'SS CABIN',
        buttonText: 'Explore ➔',
        image: SsCabin,
        largeImage: 'https://images.unsplash.com/photo-1517022812141-23320338b2cb?q=80&w=1200&auto=format&fit=crop',
        description: 'SS (Stainless Steel) cabin interiors are designed for premium aesthetics, corrosion resistance, and long-lasting shine, making them ideal for modern residential, commercial, and high-end architectural spaces.',
        mainIcons: [
          { label: 'High\nPerformance', icon: 'trend-up' },
          { label: 'High\nReliability', icon: 'clock' },
          { label: 'Easy Maintenance', icon: 'cog' }
        ],
        features: [
          'Premium stainless steel interior finish',
          'Elegant and modern aesthetic design',
          'Ideal for passenger and goods elevators',
          'High-efficiency structural performance',
          'Low maintenance with long-lasting shine'
        ]
      }
    ]
  }
}


export const STATS = [
  { value: '25+', label: "Year's Experience" },
  { value: '700+', label: "Project's Completed" },
  { value: '450+', label: 'Lift Installations' },
  { value: '24/7', label: 'Support Services' },
]

export const SERVICES = [
  {
    id: 'modernization',
    title: 'Modernization',
    description:
      'Upgrade outdated elevator systems with improved safety, performance, and modern technology solutions.',
    tags: ['Basic Modernization', 'Advanced Modernization', 'Total Modernization'],
    image:
      Modernization,
  },
  {
    id: 'maintenance',
    title: 'Maintenance Service',
    description:
      'Ensure smooth elevator performance with preventive maintenance, breakdown support, and regular inspections.',
    tags: ['Comprehensive', 'Non-Comprehensive', '24/7 Support'],
    image:
      Maintenance,
  },
  {
    id: 'spareParts',
    title: 'Spare Parts',
    description:
      'Access reliable elevator spare parts and replacement components for uninterrupted system performance.',
    tags: ['Standard Spares', 'Quick Replacement', 'Reliable Supply'],
    image:
      SpareParts,
  },
]

export const DIFFERENTIATORS = [
  { title: 'Decades of Experience', subtitle: 'Premium Quality Engineering' },
  { title: 'Smooth & Safe Ride', subtitle: 'Advanced Motion Control' },
  { title: 'Fast Delivery & Installation', subtitle: 'Efficient Project Delivery' },
  { title: 'Reliable Performance', subtitle: 'Consistent Operation' },
  { title: 'Clarity & Transparency', subtitle: 'Clear Communication' },
  { title: 'Quality Engineering', subtitle: 'Industry Standards' },
  { title: 'Customized Elevator Solutions', subtitle: 'Tailored Designs' },
  { title: 'Energy Efficient Systems', subtitle: 'Optimized Power Usage' },
]

export const BRANCHES = [
  {
    id: 1,
    label: 'Branch 1:',
    address: 'Amardip Elevators Brand No. 9, Corporation Complex,B.S. Road, Kadapa, A.P. INDIA.',
  }
]

export const BUILDING_TYPES = [
  'Commercial Buildings',
  'Residential Buildings',
  'Hospitals',
  'Industrial Buildings',
]

export const LIFT_TYPES = ['Hospital Lifts', 'Passengers Lifts', 'Goods Lifts', 'Capsule Lifts']

export const FAQ_DATA = [
  {
    id: 'pricing',
    title: 'Plans & Pricing',
    faqs: [
      {
        question: 'How much does an elevator cost?',
        answer:
          'The cost depends on the elevator type, building requirements, travel height, and customization options. Our team provides a tailored quotation based on your project needs.',
      },
      {
        question: 'Do you provide free quotations?',
        answer:
          'Yes. We provide free consultations and quotations after understanding your building requirements.',
      },
      {
        question: 'What factors affect the final price?',
        answer:
          'Capacity, number of stops, travel height, cabin finishes, door systems, and installation complexity all influence pricing.',
      },
      {
        question: 'Can I get a solution that fits my budget?',
        answer:
          'Absolutely. We offer multiple configurations and customization options suitable for different budgets.',
      },
      {
        question: 'When will I receive a quotation?',
        answer:
          'Most quotations are shared within 24–48 hours after collecting complete project details.',
      },
    ],
  },

  {
    id: 'installation',
    title: 'Process & Installation',
    faqs: [
      {
        question: 'How long does installation take?',
        answer:
          'Depending on project size and site readiness, installation generally takes between 2–8 weeks.',
      },
      {
        question: 'Do you handle complete installation?',
        answer:
          'Yes. We manage everything from planning and installation to testing and commissioning.',
      },
      {
        question: 'Will installation disrupt operations?',
        answer:
          'We carefully schedule work to minimize disruptions to building operations.',
      },
      {
        question: 'Do you provide site inspection?',
        answer:
          'Yes. Our team conducts site assessments before finalizing the solution.',
      },
    ],
  },

  {
    id: 'safety',
    title: 'Safety & Maintenance',
    faqs: [
      {
        question: 'Are your elevators safe?',
        answer:
          'All elevators are designed with advanced safety mechanisms and comply with industry standards.',
      },
      {
        question: 'Do you provide AMC maintenance?',
        answer:
          'Yes. We provide comprehensive and non-comprehensive AMC packages.',
      },
      {
        question: 'What happens during power failure?',
        answer:
          'Our elevators can be equipped with automatic rescue devices to safely move passengers.',
      },
      {
        question: 'Do you offer emergency support?',
        answer:
          'Yes. We provide emergency maintenance support and rapid-response service.',
      },
    ],
  },
]