import ServiceCategoryPage from "@/components/ServiceCategoryPage";
import { regardGroups } from "../../data/services";
import Footer from "@/components/Footer";

export default function RegardPage() {
  return (
    <>
      <ServiceCategoryPage
        title="Regard & Maquillage"
        subtitle="Sublimez votre beauté avec nos prestations dédiées au regard et au maquillage."
        image="/h3.jpeg"
        groups={regardGroups}
      />
      <Footer />
    </>
  );
}