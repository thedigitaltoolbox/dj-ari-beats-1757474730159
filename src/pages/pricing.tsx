/* Generated from SiteSpec */
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";

export default function pricing(){
  return (<main>
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Find the perfect fit for your music needs.",
  showToggle: true,
  tiers: [
    {
      name: "Basic",
      id: "basic-plan",
      href: "/pricing/basic",
      price: {
        monthly: "$19",
        annually: "$199"
      },
      description: "Ideal for beginners looking to explore.",
      features: [
        "Access to basic beats",
        "1 download per month",
        "Email support"
      ],
      mostPopular: false
    },
    {
      name: "Pro",
      id: "pro-plan",
      href: "/pricing/pro",
      price: {
        monthly: "$49",
        annually: "$499"
      },
      description: "Perfect for aspiring DJs and producers.",
      features: [
        "Access to premium beats",
        "5 downloads per month",
        "Priority email support",
        "Exclusive content"
      ],
      mostPopular: true
    },
    {
      name: "Elite",
      id: "elite-plan",
      href: "/pricing/elite",
      price: {
        monthly: "$99",
        annually: "$999"
      },
      description: "For professionals who demand the best.",
      features: [
        "Unlimited downloads",
        "Personalized support",
        "Access to all exclusive content",
        "Collaboration opportunities"
      ],
      mostPopular: false
    }
  ]
}} />
  </main>);
}
