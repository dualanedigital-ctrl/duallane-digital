"use client";

import { DemoNavbar } from "@/components/demo/DemoNavbar";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { PricingList } from "@/components/demo/sections/PricingList";
import { TeamGrid } from "@/components/demo/sections/TeamGrid";
import { ScheduleTable } from "@/components/demo/sections/ScheduleTable";
import { BeforeAfterSlider } from "@/components/demo/sections/BeforeAfterSlider";
import { TestimonialsGrid } from "@/components/demo/sections/TestimonialsGrid";
import { BmiCalculator } from "@/components/demo/sections/BmiCalculator";
import { ContactMapSection } from "@/components/demo/sections/ContactMapSection";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { gymShared as shared, gymContent } from "@/lib/demo-content/gym";

export function GymDemo() {
  const { locale } = useDemoLanguage();
  const c = gymContent[locale];

  return (
    <div style={{ "--accent": shared.theme.accent, "--accent-2": shared.theme.accent2 } as React.CSSProperties}>
      <DemoNavbar businessName={c.businessName} icon={shared.icon} navLinks={c.navLinks} ctaLabel={c.ctaLabel} ctaHref="#membership" />

      <DemoHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageUrl={`https://images.unsplash.com/${c.hero.imageId}?auto=format&fit=crop&w=1920&q=80`}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <PricingList id="membership" eyebrow={c.membershipEyebrow} title={c.membershipTitle} description={c.membershipDescription} items={c.membership} variant="cards" />

      <TeamGrid id="trainers" eyebrow={c.trainersEyebrow} title={c.trainersTitle} items={c.trainers} />

      <ScheduleTable id="schedule" eyebrow={c.scheduleEyebrow} title={c.scheduleTitle} description={c.scheduleDescription} days={c.schedule} />

      <BeforeAfterSlider
        id="transformations"
        eyebrow={c.transformationsEyebrow}
        title={c.transformationsTitle}
        description={c.transformationsDescription}
        items={c.transformations}
        beforeLabel={locale === "fr" ? "Avant" : "Before"}
        afterLabel={locale === "fr" ? "Après" : "After"}
      />

      <TestimonialsGrid id="stories" eyebrow={c.storiesEyebrow} title={c.storiesTitle} items={c.stories} />

      <BmiCalculator id="bmi" eyebrow={c.bmiEyebrow} title={c.bmiTitle} description={c.bmiDescription} />

      <ContactMapSection
        eyebrow={c.contactEyebrow}
        title={c.contactTitle}
        description={c.contactDescription}
        address={shared.address}
        phone={shared.phone}
        email={shared.email}
        hoursNote={c.hoursNote}
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
