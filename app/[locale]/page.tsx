import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { t } from "@/lib/i18n/t";
import { home as homeEn } from "@/content/i18n/en/home";
import { home as homeUr } from "@/content/i18n/ur/home";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  const underConstruction =
    locale === "en"
      ? homeEn.underConstruction
      : t(homeUr.underConstruction, homeEn.underConstruction);

  return (
    <main className="flex flex-1 flex-col">
      <Section className="flex flex-1 items-center">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-display">Dawn of Light Ministry</h1>
          <p className="font-urdu-display text-2xl" lang="ur" dir="rtl">
            نور کی صبح
          </p>
          <p className="text-body max-w-md text-muted-foreground">
            {underConstruction}
          </p>
        </Container>
      </Section>
    </main>
  );
}
