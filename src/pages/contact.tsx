/* Generated from SiteSpec */
import SimpleStacked from "@/sections/SimpleStacked";

export default function contact(){
  return (<main>
    <SimpleStacked {...{
  headline: "Let's Connect!",
  subhead: "Get in touch for inquiries or collaborations.",
  imageUrl: "https://example.com/contact-image.jpg",
  primaryCta: {
    text: "Send a Message",
    href: "/contact-form"
  },
  secondaryCta: {
    text: "Follow Us on Social Media",
    href: "/social-media"
  }
}} />
  </main>);
}
