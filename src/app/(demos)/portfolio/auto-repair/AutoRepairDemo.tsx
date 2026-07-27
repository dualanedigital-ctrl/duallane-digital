"use client";

import { DemoNavbar } from "@/components/demo/DemoNavbar";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { FloatingCallButton } from "@/components/demo/FloatingCallButton";
import { ServicesGrid } from "@/components/demo/sections/ServicesGrid";
import { ProcessSteps } from "@/components/demo/sections/ProcessSteps";
import { InfoBand } from "@/components/demo/sections/InfoBand";
import { PricingList } from "@/components/demo/sections/PricingList";
import { TestimonialsGrid } from "@/components/demo/sections/TestimonialsGrid";
import { BookingForm } from "@/components/demo/sections/BookingForm";
import { ContactMapSection } from "@/components/demo/sections/ContactMapSection";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { autoRepairShared as shared, autoRepairContent } from "@/lib/demo-content/autoRepair";

export function AutoRepairDemo() {
  const { locale } = useDemoLanguage();
  const c = autoRepairContent[locale];

  return (
    <div style={{ "--accent": shared.theme.accent, "--accent-2": shared.theme.accent2 } as React.CSSProperties}>
      <DemoNavbar businessName={c.businessName} icon={shared.icon} navLinks={c.navLinks} ctaLabel={c.ctaLabel} ctaHref="#booking" />

      <DemoHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageUrl={`https://images.unsplash.com/${c.hero.imageId}?auto=format&fit=crop&w=1920&q=80`}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <ServicesGrid id="services" eyebrow={c.servicesEyebrow} title={c.servicesTitle} description={c.servicesDescription} items={c.services} />

      <ProcessSteps id="diagnostics" eyebrow={c.diagnosticsEyebrow} title={c.diagnosticsTitle} description={c.diagnosticsDescription} items={c.diagnosticsSteps} />

      <InfoBand id="repairs" eyebrow={c.repairsEyebrow} title={c.repairsTitle} items={c.repairs} />

      <PricingList id="packages" eyebrow={c.packagesEyebrow} title={c.packagesTitle} description={c.packagesDescription} items={c.packages} variant="cards" />

      <TestimonialsGrid id="reviews" eyebrow={c.reviewsEyebrow} title={c.reviewsTitle} items={c.reviews} />

      <BookingForm
        id="booking"
        eyebrow={c.bookingEyebrow}
        title={c.bookingTitle}
        description={c.bookingDescription}
        fields={c.bookingFields}
        submitLabel={c.bookingSubmitLabel}
        successMessage={c.bookingSuccess}
      />

      <InfoBand id="financing" eyebrow={c.financingEyebrow} title={c.financingTitle} items={c.financing} />

      <ContactMapSection
        eyebrow={c.contactEyebrow}
        title={c.contactTitle}
        description={c.contactDescription}
        address={shared.address}
        phone={shared.phone}
        email={shared.email}
        hoursNote={c.hoursNote}
      />

      <FloatingCallButton phone={shared.towingPhone} label={c.towingLabel} />

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
