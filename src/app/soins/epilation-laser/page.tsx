
import ServiceCategoryPage from "@/components/ServiceCategoryPage";
import { epilationGroups } from "../../data/services";

export default function EpilationPage() {
  return (
    <ServiceCategoryPage
      title="Épilation & Laser"
      subtitle="Prenez soin de votre peau avec nos prestations d'épilation à la cire et au laser."
      image="/h2.jpeg"
      groups={epilationGroups}
    />
  );
}
