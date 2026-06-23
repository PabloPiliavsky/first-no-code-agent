import { Button } from "@/components/ui/button"
import { SparklesIcon } from "lucide-react"

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center p-6 overflow-hidden">
      {/* Background soft glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 self-center backdrop-blur-sm animate-fade-in">
            <SparklesIcon className="size-3 text-purple-400" />
            <span>Nueva Plataforma</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            Bienvenido
          </h1>

          <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Descubre una experiencia minimalista, rápida y elegante diseñada para potenciar tu productividad y flujos de trabajo.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Button
            size="lg"
            className="relative overflow-hidden bg-white text-black hover:bg-neutral-200 transition-all duration-300 font-semibold px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
          >
            Comenzar
          </Button>
        </div>
      </div>
    </div>
  )
}
