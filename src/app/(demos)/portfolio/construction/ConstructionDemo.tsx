"use client";

import { DemoNavbar } from "@/components/demo/DemoNavbar";
import { DemoGlowBackdrop } from "@/components/demo/DemoGlowBackdrop";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { FloatingCallButton } from "@/components/demo/FloatingCallButton";
import { ServicesGrid } from "@/components/demo/sections/ServicesGrid";
import { GalleryGrid } from "@/components/demo/sections/GalleryGrid";
import { BeforeAfterSlider } from "@/components/demo/sections/BeforeAfterSlider";
import { TestimonialsGrid } from "@/components/demo/sections/TestimonialsGrid";
import { TeamGrid } from "@/components/demo/sections/TeamGrid";
import { BookingForm } from "@/components/demo/sections/BookingForm";
import { FAQAccordion } from "@/components/demo/sections/FAQAccordion";
import { ContactMapSection } from "@/components/demo/sections/ContactMapSection";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { constructionShared as shared, constructionContent } from "@/lib/demo-content/construction";

export function ConstructionDemo() {
  const { locale } = useDemoLanguage();
  const c = constructionContent[locale];

  return (
    <div className="demo-light-theme min-h-screen bg-background text-foreground">
      <DemoGlowBackdrop />
      <DemoNavbar businessName={c.businessName} icon={shared.icon} navLinks={c.navLinks} ctaLabel={c.ctaLabel} ctaHref="#quote" />

      <DemoHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageUrl={`https://images.unsplash.com/${c.hero.imageId}?auto=format&fit=crop&w=1920&q=80`}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <ServicesGrid
        id="services"
        eyebrow={locale === "fr" ? "Ce que nous faisons" : "What We Do"}
        title={locale === "fr" ? "Services de construction complets" : "Complete construction services"}
        description={locale === "fr" ? "Du premier croquis à l'inspection finale, nous gérons chaque étape à l'interne." : "From first sketch to final inspection, we manage every phase in-house."}
        items={c.services}
      />

      <GalleryGrid
        id="projects"
        eyebrow={locale === "fr" ? "Nos réalisations" : "Our Work"}
        title={locale === "fr" ? "Projets complétés" : "Completed projects"}
        description={locale === "fr" ? "Une sélection de projets résidentiels et commerciaux récents dans le Grand Montréal." : "A selection of recent residential and commercial builds across Greater Montreal."}
        items={c.projects}
      />

      <BeforeAfterSlider
        id="before-after"
        eyebrow={locale === "fr" ? "Résultats concrets" : "Real Results"}
        title={locale === "fr" ? "Avant et après" : "Before & after"}
        description={locale === "fr" ? "Glissez le curseur pour voir la transformation." : "Drag the slider to see the transformation."}
        items={c.beforeAfter}
        beforeLabel={locale === "fr" ? "Avant" : "Before"}
        afterLabel={locale === "fr" ? "Après" : "After"}
      />

      <TestimonialsGrid
        id="reviews"
        eyebrow={locale === "fr" ? "Avis clients" : "Client Reviews"}
        title={locale === "fr" ? "Ce que disent nos clients" : "What our clients say"}
        items={c.testimonials}
      />

      <TeamGrid
        id="team"
        eyebrow={locale === "fr" ? "Notre équipe" : "Meet The Team"}
        title={locale === "fr" ? "Les gens derrière chaque projet" : "The people behind the build"}
        items={c.team}
      />

      <BookingForm
        id="quote"
        eyebrow={locale === "fr" ? "Soumission gratuite" : "Free Estimate"}
        title={locale === "fr" ? "Demandez une soumission gratuite" : "Request a free quote"}
        description={locale === "fr" ? "Parlez-nous de votre projet et nous vous répondrons dans un jour ouvrable." : "Tell us about your project and we'll get back to you within one business day."}
        fields={c.quoteFields}
        submitLabel={locale === "fr" ? "Demander ma soumission" : "Request My Quote"}
        successMessage={locale === "fr" ? "Merci! Votre demande de soumission a été reçue — nous vous contacterons sous 1 jour ouvrable." : "Thank you! Your quote request has been received — we'll be in touch within 1 business day."}
        sideNote={c.quoteSideNote}
      />

      <FAQAccordion
        id="faq"
        eyebrow={locale === "fr" ? "Questions fréquentes" : "Common Questions"}
        title={locale === "fr" ? "Foire aux questions" : "Frequently asked questions"}
        items={c.faq}
      />

      <ContactMapSection
        eyebrow={locale === "fr" ? "Contactez-nous" : "Get In Touch"}
        title={locale === "fr" ? "Démarrez votre projet dès aujourd'hui" : "Start your project today"}
        description={locale === "fr" ? "Contactez-nous pour une consultation gratuite — nous desservons tout le Grand Montréal." : "Reach out for a free consultation — we serve all of Greater Montreal."}
        address={shared.address}
        phone={shared.phone}
        email={shared.email}
        hoursNote={c.hoursNote}
      />

      <FloatingCallButton phone={shared.emergencyPhone} label={locale === "fr" ? "Ligne d'urgence" : "Emergency Line"} />

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
