"use client";

import { DemoNavbar } from "@/components/demo/DemoNavbar";
import { DemoGlowBackdrop } from "@/components/demo/DemoGlowBackdrop";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHero } from "@/components/demo/DemoHero";
import { BookingForm } from "@/components/demo/sections/BookingForm";
import { MenuSection } from "@/components/demo/sections/MenuSection";
import { AboutSplit } from "@/components/demo/sections/AboutSplit";
import { GalleryGrid } from "@/components/demo/sections/GalleryGrid";
import { TestimonialsGrid } from "@/components/demo/sections/TestimonialsGrid";
import { EventsList } from "@/components/demo/sections/EventsList";
import { ContactMapSection } from "@/components/demo/sections/ContactMapSection";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { restaurantShared as shared, restaurantContent } from "@/lib/demo-content/restaurant";

export function RestaurantDemo() {
  const { locale } = useDemoLanguage();
  const c = restaurantContent[locale];

  return (
    <div className="demo-light-theme min-h-screen bg-background text-foreground">
      <DemoGlowBackdrop />
      <DemoNavbar businessName={c.businessName} icon={shared.icon} navLinks={c.navLinks} ctaLabel={c.ctaLabel} ctaHref="#reservations" />

      <DemoHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageUrl={`https://images.unsplash.com/${c.hero.imageId}?auto=format&fit=crop&w=1920&q=80`}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <BookingForm
        id="reservations"
        eyebrow={locale === "fr" ? "Réserver une table" : "Book A Table"}
        title={locale === "fr" ? "Réservations en ligne" : "Online reservations"}
        description={locale === "fr" ? "Réservez votre table en quelques secondes — nous confirmerons par téléphone ou courriel." : "Reserve your table in seconds — we'll confirm by phone or email."}
        fields={c.reservationFields}
        submitLabel={locale === "fr" ? "Demander une réservation" : "Request Reservation"}
        successMessage={locale === "fr" ? "Merci! Votre demande de réservation a été reçue — nous confirmerons sous peu." : "Thank you! Your reservation request has been received — we'll confirm shortly."}
      />

      <MenuSection
        id="menu"
        eyebrow={locale === "fr" ? "Notre menu" : "Our Menu"}
        title={locale === "fr" ? "Cuisine française saisonnière" : "Seasonal French cuisine"}
        description={locale === "fr" ? "Préparé chaque jour avec les ingrédients les plus frais du marché." : "Crafted daily from the freshest market ingredients."}
        categories={c.menu}
        variant="list"
      />

      <AboutSplit id="chef" eyebrow={c.chef.eyebrow} title={c.chef.name} paragraphs={c.chef.paragraphs} avatarName={c.chef.name} stats={c.chef.stats} />

      <GalleryGrid id="gallery" eyebrow={c.galleryEyebrow} title={c.galleryTitle} items={c.gallery} />

      <TestimonialsGrid id="reviews" eyebrow={c.reviewsEyebrow} title={c.reviewsTitle} items={c.testimonials} />

      <EventsList id="events" eyebrow={c.eventsEyebrow} title={c.eventsTitle} items={c.events} />

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
