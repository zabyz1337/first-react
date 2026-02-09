import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import Categories from "./components/sections/Categories";
import Vacancies from "./components/sections/Vacancies";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Categories />
        <Vacancies />
      </main>
      <Footer />
    </>
  );
}
