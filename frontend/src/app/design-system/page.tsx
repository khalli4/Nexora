import type { Metadata } from "next";
import { PreviewShell } from "./_components/preview-shell";
import { BrandSection } from "./_components/brand-section";
import { ThemeSection } from "./_components/theme-section";
import { ColourSection } from "./_components/colour-section";
import { TypographySection } from "./_components/typography-section";
import { GeometrySection } from "./_components/geometry-section";
import { MaterialsSection } from "./_components/materials-section";
import { ComponentsSection } from "./_components/components-section";
import { MotionSection } from "./_components/motion-section";

export const metadata: Metadata = {
  title: "Design system",
  description: "Nexora design system preview. Development and review only.",
  robots: { index: false, follow: false },
};

/** Development and review environment for the Nexora design system. Not a product page. */
export default function DesignSystemPage() {
  return (
    <PreviewShell>
      <BrandSection />
      <ThemeSection />
      <ColourSection />
      <TypographySection />
      <GeometrySection />
      <MaterialsSection />
      <ComponentsSection />
      <MotionSection />
    </PreviewShell>
  );
}
