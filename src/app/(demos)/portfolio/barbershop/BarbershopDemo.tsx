"use client";

import { DemoNavbar } from "@/components/demo/DemoNavbar";
import { DemoGlowBackdrop } from "@/components/demo/DemoGlowBackdrop";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { ServicesGrid } from "@/components/demo/sections/ServicesGrid";
import { TeamGrid } from "@/components/demo/sections/TeamGrid";
import { PricingList } from "@/components/demo/sections/PricingList";
import { BookingForm } from "@/components/demo/sections/BookingForm";
import { GalleryGrid } from "@/components/demo/sections/GalleryGrid";
import { TestimonialsGrid } from "@/components/demo/sections/TestimonialsGrid";
import { HoursTable } from "@/components/demo/sections/HoursTable";
import { ContactMapSection } from "@/components/demo/sections/ContactMapSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { barbershopShared as shared, barbershopContent } from "@/lib/demo-content/barbershop";

export function BarbershopDemo() {
  const { locale } = useDemoLanguage();
  const c = barbershopContent[locale];

  return (
    <div className="demo-light-theme min-h-screen bg-background text-foreground">
      <DemoGlowBackdrop />
      <DemoNavbar businessName={c.businessName} icon={shared.icon} navLinks={c.navLinks} ctaLabel={c.ctaLabel} ctaHref="#booking" />

      <DemoHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageUrl={`https://images.unsplash.com/${c.hero.imageId}?auto=format&fit=crop&w=1920&q=80`}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <ServicesGrid id="services" eyebrow={c.servicesEyebrow} title={c.servicesTitle} items={c.services} />

      <TeamGrid id="barbers" eyebrow={c.barbersEyebrow} title={c.barbersTitle} items={c.barbers} />

      <PricingList id="prices" eyebrow={c.pricesEyebrow} title={c.pricesTitle} items={c.prices} variant="list" />

      <BookingForm
        id="booking"
        eyebrow={c.bookingEyebrow}
        title={c.bookingTitle}
        description={c.bookingDescription}
        fields={c.bookingFields}
        submitLabel={c.bookingSubmitLabel}
        successMessage={c.bookingSuccess}
      />

      <GalleryGrid id="gallery" eyebrow={c.galleryEyebrow} title={c.galleryTitle} items={c.gallery} />

      <TestimonialsGrid id="reviews" eyebrow={c.reviewsEyebrow} title={c.reviewsTitle} items={c.reviews} />

      <section id="hours" className="relative py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-16">
          <SectionHeading eyebrow={c.contactEyebrow} title={locale === "fr" ? "Heures d'ouverture" : "Opening hours"} />
          <div className="w-full max-w-md">
            <HoursTable rows={c.hours} note={c.hoursNote} />
          </div>
        </Container>
      </section>

      <ContactMapSection
        eyebrow={c.contactEyebrow}
        title={c.contactTitle}
        address={shared.address}
        phone={shared.phone}
        email={shared.email}
      />

      <DemoFooter
        businessName={c.businessName}
        icon={shared.icon}
        tagline={c.tagline}
        quickLinks={c.navLinks}
        address={shared.address}
        phone={shared.phone}
        email={shared.email}
      />
    </div>
  );
}
