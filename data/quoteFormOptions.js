// Mirrors the option lists in the ERP app's lib/quotations.js so the values
// submitted here match exactly what the ERP's public pricing endpoint
// (POST /api/public/website-quote) validates against.
export const FLOOR_OPTIONS = ["G+1", "G+2", "G+3", "G+4", "G+5"]
export const PASSENGER_OPTIONS = [6, 8, 10, 13, 18]
export const DOOR_TYPE_OPTIONS = [
  "MS FRAME COLLAPSIBLE GATE",
  "SS FRAME COLLAPSIBLE GATE",
  "MS SWING DOOR SMALL VISION",
  "SS SWING DOOR SMALL VISION",
  "MANUAL MS TELISCOPIC DOOR",
  "MANUAL SS TELISCOPIC DOOR",
  "MS CLAD AUTO DOOR",
  "SS CLAD AUTO DOOR",
  "SS HALF VISION GLASS AUTO DOOR",
  "SS FULL VISION GLASS AUTO DOOR",
  "MS HALF VISION GLASS AUTO DOOR",
  "MS FULL VISION GLASS AUTO DOOR",
]
export const CABIN_TYPE_OPTIONS = ["MS CABIN", "SS CABIN", "SS CABIN AUTO DOOR", "MS CABIN AUTO DOOR"]
export const MOTOR_TYPE_OPTIONS = ["GEARED MOTOR", "GEAR LESS MOTOR"]
export const HEAD_ROOM_OPTIONS = ["MACHINE ROOM", "MACHINE ROOM LESS"]
export const DOOR_OPENING_OPTIONS = ["600MM", "700MM", "800MM", "900MM", "1000MM", "1200MM"]

export const ERP_QUOTE_ENDPOINT = "https://amardip-elevators-erp.vercel.app/api/public/website-quote"
