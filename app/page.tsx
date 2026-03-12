import Image from "next/image";

export default function Home() {
  return (
    <div className = "flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-black text-6xl mb-6 font-bold">A better way to track your job application</h1>
          <p className="text-muted-foreground text-xl ">Capture , organize , and manage your job search in one place</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button >Start for Free</button>
          <p>Free foreever no credit card required</p>
        </div>
        </section>
      </main>
    </div>
  );
}
