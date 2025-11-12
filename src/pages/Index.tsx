import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsultingSection from "@/components/ConsultingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ConsultingSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
