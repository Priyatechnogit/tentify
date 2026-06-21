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

const SECTIONS = [
  {
    title: "History",
    image: "/images/about/history.png",
    text: "Oktoberfest began in 1810 to celebrate the marriage of Crown Prince Ludwig. It has since grown into the world's largest folk festival, held annually in Munich.",
  },
  {
    title: "Food Guide",
    image: "/images/about/food.png",
    text: "Pretzels, roast chicken, sausages and apple strudel are festival staples. Don't miss the famous Hendl (roast chicken) and fresh Brezn (pretzels).",
  },
  {
    title: "Dress Code",
    image: "/images/about/dresscode.png",
    text: "Traditional Bavarian wear is common — Dirndl for women and Lederhosen for men. It's not required, but it's part of the fun!",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>About Oktoberfest</PageTitle>
      </PageHeader>
      <SectionList>
        {SECTIONS.map((section) => (
          <SectionCard key={section.title}>
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
