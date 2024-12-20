import logo_1 from "@/app/assets/Asset 3.png";
import logo_2 from "@/app/assets/Asset 2.png";
import logo_3 from "@/app/assets/Asset 1.png";
const ferryOperatorsData = [
  {
    logo: logo_1,
    name: "Blue Star Ferries",
    operatesIn: "Greece",
    vessels: 8,
    ferryTypes: "Normal",
    popularVessels: ["Blue Star Delos", "Blue Star Naxos"],
    rating: "1,342",
    stars: "3",
    flag: ["GR"],
    branches: "ferries",
    description:
      "Blue Star Ferries is currently the biggest ferry company in Greece, offering reliable and comfortable services across the Aegean Sea. With a fleet of 8 vessels, they provide normal ferry services connecting various Greek islands. Their popular vessels, Blue Star Delos and Blue Star Naxos, are known for their excellent facilities and punctuality. The company has received a rating of 1,342 and is highly rated with four stars.",
  },
  {
    logo: logo_2,
    name: "Seajets",
    operatesIn: "Greece",
    vessels: 17,
    ferryTypes: "Normal and High-speed",
    popularVessels: ["WorldChampion jet", "Seajet 2"],
    rating: "2,467",
    stars: "5",
    flag: ["GR"],
    description:
      "Seajets is the biggest company of high-speed vessels of the Aegean Sea, operating 17 vessels that offer both normal and high-speed ferry services. Known for their speed and efficiency, Seajets connects numerous Greek islands with their popular vessels, WorldChampion jet and Seajet 2. They have a high customer rating of 2,467 and are rated four stars for their exceptional service.",
  },
  {
    logo: logo_3,
    name: "Anek-Superfast",
    operatesIn: "Greece, Italy",
    vessels: 6,
    ferryTypes: "Normal",
    popularVessels: ["Superfast XI", "Superfast X"],
    rating: "667",
    stars: "4.5",
    flag: ["GR", "IT"],
    description:
      "Anek-Superfast is a joint venture established in June 2011, providing ferry services between Greece and Italy. With a fleet of 6 vessels, they offer normal ferry services with popular vessels like Superfast XI and Superfast X. The company is known for its reliable services and has a customer rating of 667, with a three-star rating.",
  },
];

export default ferryOperatorsData;
