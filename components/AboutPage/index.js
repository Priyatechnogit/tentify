import {
  PageWrapper,
  PageHeader,
  PageTitle,
  SectionList,
  SectionCard,
  SectionImage,
  SectionContent,
  SectionTitle,
  SectionText,
} from "./AboutPage.styled";
import { SECTIONS } from "../../data/aboutSections";

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>About Oktoberfest</PageTitle>
      </PageHeader>
      <SectionList>
        {SECTIONS.map((section) => (
          <SectionCard key={section.title} href={section.href}>
            <SectionImage
              src={section.image}
              alt={section.title}
              onError={(event) => {
                event.target.src = "/images/tents/placeholder.png";
              }}
            />
            <SectionContent>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionText>{section.text}</SectionText>
            </SectionContent>
          </SectionCard>
        ))}
      </SectionList>
    </PageWrapper>
  );
}
