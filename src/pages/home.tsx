/* Generated from SiteSpec */
import SimpleCentered from "@/sections/SimpleCentered";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import ThreeTiers from "@/sections/ThreeTiers";

export default function home(){
  return (<main>
    <SimpleCentered {...{
  headline: "Welcome to DJ Ari Beats",
  subhead: "Where we bring your music to life!",
  imageUrl: "https://example.com/image.jpg",
  primaryCta: {
    text: "Get Started",
    href: "/services"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/about"
  }
}} />
    <OffsetWithFeatureList {...{
  title: "Our Services",
  subtitle: "Crafting Beats That Resonate",
  items: [
    {
      title: "Custom Beat Production",
      body: "Get personalized beats tailored to your unique style and vision.",
      icon: "🎶"
    },
    {
      title: "Mixing & Mastering",
      body: "Professional mixing and mastering to ensure your tracks sound their best.",
      icon: "🔊"
    },
    {
      title: "Live DJ Services",
      body: "Experience unforgettable live performances that keep the crowd moving.",
      icon: "🎧"
    }
  ]
}} />
    <ThreeTiers {...{
  title: "Choose Your Plan",
  subtitle: "Find the perfect package for your music needs.",
  tiers: [
    {
      name: "Basic Beats",
      id: "basic-beats",
      href: "/pricing/basic-beats",
      priceMonthly: "$29",
      description: "Perfect for beginners looking to get started.",
      features: [
        "3 Custom Beats",
        "1 Revision",
        "Basic Support"
      ],
      mostPopular: false
    },
    {
      name: "Pro Producer",
      id: "pro-producer",
      href: "/pricing/pro-producer",
      priceMonthly: "$59",
      description: "Ideal for serious artists wanting more options.",
      features: [
        "10 Custom Beats",
        "3 Revisions",
        "Priority Support"
      ],
      mostPopular: true
    },
    {
      name: "Ultimate Package",
      id: "ultimate-package",
      href: "/pricing/ultimate-package",
      priceMonthly: "$99",
      description: "For professionals who demand the best.",
      features: [
        "Unlimited Custom Beats",
        "Unlimited Revisions",
        "24/7 Support"
      ],
      mostPopular: false
    }
  ]
}} />
  </main>);
}
