import Image from "next/image";
import LandingPage from "@/components/landing-page/landing"

export default function Home() {
  return (
    <div>
      <header>
        <p>header</p>
      </header>
      <div>
        <LandingPage />
      </div>


      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
