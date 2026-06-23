import { services } from "./constant";
import { ServiceCard} from "./ServiceCard";

export function ServicesCards() {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}