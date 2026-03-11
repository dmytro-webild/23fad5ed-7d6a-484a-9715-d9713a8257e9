"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, CheckCircle, Phone, Sparkles, Star, TrendingUp, Home, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmall"
      background="aurora"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Services", id: "services" },
            { name: "Gallery", id: "gallery" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Request Consultation",            href: "contact"
          }}
          brandName="Nick's Lawn Service"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Artistry in Every Blade"
          description="Experience the gold standard of curb appeal. Professional turf grooming that transforms your landscape into a masterpiece."
          background={{ variant: "glowing-orb" }}
          tag="The Gold Standard"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/green-grass-texture_23-2147506500.jpg"
          imageAlt="Slow-motion grass blade cutting morning dew"
          imagePosition="right"
          buttons={[
            { text: "Request Consultation", href: "contact" },
            { text: "View Portfolio", href: "gallery" }
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardFour
          title="The Transformation Gallery"
          description="Before & After showcases of our precision work transforming neglected yards into striped masterpieces."
          tag="Real Results"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Estate Yard Transformation",              price: "Before",              variant: "Overgrown lawn",              imageSrc: "http://img.b2bpic.net/free-photo/marsh-grass-coastal-views-new-england_493961-1758.jpg",              imageAlt: "Before: neglected yard"
            },
            {
              id: "2",              name: "Estate Yard Transformation",              price: "After",              variant: "Pristine striped masterpiece",              imageSrc: "http://img.b2bpic.net/free-photo/old-woman-doing-fitness-exercises_23-2149565535.jpg",              imageAlt: "After: perfectly manicured lawn"
            },
            {
              id: "3",              name: "Residential Yard Restoration",              price: "Before",              variant: "Untended landscape",              imageSrc: "http://img.b2bpic.net/free-photo/aged-concrete-with-rocks-paint_23-2148394731.jpg",              imageAlt: "Before: unkempt lawn"
            },
            {
              id: "4",              name: "Residential Yard Restoration",              price: "After",              variant: "Golf course quality result",              imageSrc: "http://img.b2bpic.net/free-photo/man-having-game-golf-outdoors_23-2150551586.jpg",              imageAlt: "After: luxury lawn finish"
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Premium Lawn Services"
          description="Each service is engineered for perfection, delivering the golf course aesthetic your property deserves."
          tag="Our Expertise"
          tagIcon={Award}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Precision Turf Grooming",              description: "Meticulous mowing with striped patterns, seasonal timing, and equipment calibrated for perfection. Every blade matters.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/inspired-bearded-male-gardener-shaping-spiral-from-thuja-hedge-by-trimming-outside-side-view_7502-10568.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/inspired-bearded-male-gardener-shaping-spiral-from-thuja-hedge-by-trimming-outside-side-view_7502-10568.jpg?_wi=2" }
            },
            {
              id: 2,
              title: "Estate Edging",              description: "Crisp, clean borders that define your landscape with luxury. Professional edge work that frames your property.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/view-robot-tending-maintaining-gardens_23-2151803968.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/view-robot-tending-maintaining-gardens_23-2151803968.jpg?_wi=2" }
            },
            {
              id: 3,
              title: "Seasonal Nutrient Programs",              description: "Strategic feeding schedules that keep your lawn thriving year-round. Customized nutrient plans for peak growth.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-working-garden_23-2147714891.jpg?_wi=1" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-working-garden_23-2147714891.jpg?_wi=2" }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "1", name: "James Henderson", imageSrc: "http://img.b2bpic.net/free-photo/smiley-professional-businesswoman-with-glasses-presentation_23-2148824824.jpg", imageAlt: "James Henderson" },
            { id: "2", name: "Victoria Chen", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-girl-entrepreneur-office-woman-glasses-looking-happy-confident-standing-white-blouse-studio-background_1258-122706.jpg", imageAlt: "Victoria Chen" },
            { id: "3", name: "Michael Robertson", imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg", imageAlt: "Michael Robertson" },
            { id: "4", name: "Sarah Mitchell", imageSrc: "http://img.b2bpic.net/free-photo/portrait-bald-senior-dressed-stylish-suit-posing-against-dark-background_613910-17578.jpg", imageAlt: "Sarah Mitchell" },
            { id: "5", name: "David Worthington", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064977.jpg", imageAlt: "David Worthington" },
            { id: "6", name: "Eleanor Brooks", imageSrc: "http://img.b2bpic.net/free-photo/content-caucasian-businesswoman-standing-with-folded-hands-portrait-confident-adult-beautiful-female-office-employer-black-blouse-posing-work-business-company-management-concept_74855-6952.jpg", imageAlt: "Eleanor Brooks" }
          ]}
          cardTitle="Over 500+ high-end properties trust Nick's Lawn Service for uncompromising curb appeal."
          cardTag="Client Spotlight"
          cardTagIcon={Star}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Impact"
          description="Measurable results that speak to our commitment to excellence."
          tag="Performance"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Home, title: "Properties Transformed", value: "500+" },
            { id: "2", icon: Star, title: "5-Star Reviews", value: "98%" },
            { id: "3", icon: Zap, title: "Client Retention", value: "95%" },
            { id: "4", icon: Award, title: "Years Excellence", value: "15+" }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Pricing Tiers"
          description="Premium lawn care tailored to your property's unique needs."
          tag="Transparent Pricing"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          plans={[
            {
              id: "1",              badge: "Precision Standard",              badgeIcon: CheckCircle,
              price: "$89-129/month",              subtitle: "Bi-weekly mowing and edging",              buttons: [{ text: "Select Plan", href: "contact" }],
              features: ["Bi-weekly precision mowing", "Professional edging", "Basic leaf removal", "Seasonal cleanups"]
            },
            {
              id: "2",              badge: "Estate Premier",              badgeIcon: Sparkles,
              price: "$189-299/month",              subtitle: "VIP turf management",              buttons: [{ text: "Select Plan", href: "contact" }],
              features: ["Weekly precision mowing", "Estate-level edging", "Seasonal nutrient program", "Priority scheduling", "Landscape consultation"]
            },
            {
              id: "3",              badge: "Gold Standard",              badgeIcon: Award,
              price: "Custom Quote",              subtitle: "Bespoke luxury lawn care",              buttons: [{ text: "Request Consultation", href: "contact" }],
              features: ["Unlimited service flexibility", "White-glove turf grooming", "Advanced nutrient programs", "Dedicated account manager", "24/7 emergency response"]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Request Your Private Consultation"
          description="Let's discuss how to elevate your property to the gold standard of curb appeal. Share your vision, and we'll craft the perfect lawn care strategy."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy. Unsubscribe anytime. We'll connect within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Precision Turf Grooming", href: "services" },
                { label: "Estate Edging", href: "services" },
                { label: "Nutrient Programs", href: "services" },
                { label: "Seasonal Maintenance", href: "services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Our Story", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Service Agreement", href: "#" },
                { label: "Warranty", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Nick's Lawn Service | The Gold Standard of Curb Appeal"
        />
      </div>
    </ThemeProvider>
  );
}
