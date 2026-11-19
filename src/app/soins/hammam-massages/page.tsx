
import ServiceCategoryPage from "../../../components/ServiceCategoryPage";
import { hammamGroups } from "../../data/services";

export default function HammamPage() {
  return (
    <ServiceCategoryPage
      title="Hammam & Massages"
      subtitle="Évadez-vous le temps d'un instant et profitez de nos soins dédiés à la détente et au bien-être."
      image="/h.jpeg"
      groups={hammamGroups}
    />
  );
}
