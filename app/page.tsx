import { Header } from "@/components/header/header";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Presentation } from "@/components/presentation/Presentation";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Header/>
      <div className="h-24 bg-gray-900"></div>
      <Presentation />
      <Portfolio />
    </main>
  );
}
