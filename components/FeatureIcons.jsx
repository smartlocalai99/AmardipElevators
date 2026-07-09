import * as LucideIcons from 'lucide-react'

export default function FeatureIcons({ iconName, className }) {
  const mappings = {
    'trend-up': LucideIcons.TrendingUp,
    clock: LucideIcons.Clock,
    cog: LucideIcons.Settings,
    clipboard: LucideIcons.ClipboardCheck,
    shield: LucideIcons.ShieldAlert,
    smile: LucideIcons.Smile,
    pulse: LucideIcons.Activity,
    refresh: LucideIcons.RefreshCw,
    users: LucideIcons.Users,
    door: LucideIcons.DoorOpen,
    battery: LucideIcons.BatteryCharging,
    settings: LucideIcons.Settings,
    box: LucideIcons.Box,
    home: LucideIcons.Home,
    gauge: LucideIcons.Gauge,
    ruler: LucideIcons.Ruler,
    weight: LucideIcons.Weight,
  }

  const IconComponent =
    mappings[iconName] || LucideIcons.HelpCircle

  return <IconComponent className={className} />
}