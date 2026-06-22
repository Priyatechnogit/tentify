import { useRouter } from "next/router";
import BottomNav from "../BottomNav";
import {
  PageWrapper,
  PageHeader,
  BackButton,
  PageTitle,
  HeroImage,
  Content,
  SectionTitle,
  SectionText,
  FunFactBox,
  FunFactTitle,
  FunFactText,
} from "./AboutDetail.styled";

export default function AboutDetail({ title, image, description, funFact }) {
  const router = useRouter();

  return (
    <PageWrapper>
      <PageHeader>
        <BackButton
          onClick={() => router.push("/about")}
          aria-label="Back to About page"
        >
          ←
        </BackButton>
        <PageTitle>{title}</PageTitle>
      </PageHeader>
      <HeroImage
        src={image}
        alt={title}
        onError={(event) => {
          event.target.src = "/images/tents/placeholder.png";
        }}
      />
      <Content>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{description}</SectionText>
        {funFact && (
          <FunFactBox>
            <FunFactTitle>💡 Fun Fact</FunFactTitle>
            <FunFactText>{funFact}</FunFactText>
          </FunFactBox>
        )}
      </Content>
      <BottomNav />
    </PageWrapper>
  );
}
