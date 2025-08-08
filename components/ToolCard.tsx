import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"

type ToolCardProps = {
  title: string
  description: string
  url: string
  icon: string
}

export default function ToolCard({ title, description, url, icon }: ToolCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
      <Card className="bg-white/5 border border-white/10 text-white hover:scale-105 transition-transform">
        <CardContent className="p-6 space-y-3">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <span>{icon}</span> {title}
          </CardTitle>
          <p className="text-sm text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
