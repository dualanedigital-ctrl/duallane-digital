"use client";

import { DemoNavbar } from "@/components/demo/DemoNavbar";
import { DemoGlowBackdrop } from "@/components/demo/DemoGlowBackdrop";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { MenuSection } from "@/components/demo/sections/MenuSection";
import { AboutSplit } from "@/components/demo/sections/AboutSplit";
import { GalleryGrid } from "@/components/demo/sections/GalleryGrid";
import { TestimonialsGrid } from "@/components/demo/sections/TestimonialsGrid";
import { HoursTable } from "@/components/demo/sections/HoursTable";
import { ContactMapSection } from "@/components/demo/sections/ContactMapSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { cafeShared as shared, cafeContent } from "@/lib/demo-content/cafe";

export function CafeDemo() {
  const { locale } = useDemoLanguage();
  const c = cafeContent[locale];

  return (
    <div className="demo-light-theme min-h-screen bg-background text-foreground">
      <DemoGlowBackdrop />
      <DemoNavbar businessName={c.businessName} icon={shared.icon} navLinks={c.navLinks} ctaLabel={c.ctaLabel} ctaHref="#contact" />

      <DemoHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageUrl={`https://images.unsplash.com/${c.hero.imageId}?auto=format&fit=crop&w=1920&q=80`}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <MenuSection id="coffee-menu" eyebrow={c.coffeeMenuEyebrow} title={c.coffeeMenuTitle} description={c.coffeeMenuDescription} categories={c.coffeeMenu} variant="list" />

      <MenuSection id="featured" eyebrow={c.featuredEyebrow} title={c.featuredTitle} categories={c.featuredDrinks} variant="cards" />

      <MenuSection id="bakery" eyebrow={c.bakeryEyebrow} title={c.bakeryTitle} categories={c.bakery} variant="cards" />

      <AboutSplit id="about" eyebrow={c.about.eyebrow} title={c.about.title} paragraphs={c.about.paragraphs} imageId={c.about.imageId} stats={c.about.stats} reverse />

      <GalleryGrid id="gallery" eyebrow={c.galleryEyebrow} title={c.galleryTitle} items={c.gallery} />

      <TestimonialsGrid id="reviews" eyebrow={c.reviewsEyebrow} title={c.reviewsTitle} items={c.reviews} />

      <section id="hours" className="relative py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-16">
          <SectionHeading eyebrow={c.contactEyebrow} title={locale === "fr" ? "Heures d'ouverture" : "Opening hours"} />
          <div className="w-full max-w-md">
            <HoursTable rows={c.hours} />
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
