import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react"

export default function Home() {
  return (
    <div className = "flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-black text-6xl mb-6 font-bold">A better way to track your job application</h1>
          <p className="text-muted-foreground text-xl mb-5 ">Capture , organize , and manage your job search in one place</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="h-12 px-3 text-lg font-medium cursor-pointer">
            Start for Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-muted-foreground text-sm">Free foreever no credit card required</p>
        </div>
        </section>
      </main> 
    </div>
  );
}
