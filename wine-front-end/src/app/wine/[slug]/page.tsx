"use client";

import ImageAndDetailsWrapper from "@/components/ProductPage/ImageAndDetailsWrapper/ImageAndDetailsWrapper";
import { Button } from "@/components/lib/Button";
import MainWrapper from "@/components/lib/MainWrapper/MainWrapper";
import { BackButtonWrapper } from "@/components/lib/MainWrapper/MainWrapperStyles";
import { ButtonVariantEnum } from "@/enum/buttonVariant";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface WineIdPageProps {
  params: {
    slug: string;
  };
}
export default function WineIdPage({ params: { slug } }: WineIdPageProps) {
  const { push } = useRouter();

  console.log(slug);

  return (
    <MainWrapper>
      <BackButtonWrapper>
        <Button.Root variant={ButtonVariantEnum.Text} onClick={() => push("/")}>
          <Button.Icon icon={ChevronLeft} />
          Voltar
        </Button.Root>
      </BackButtonWrapper>
      <ImageAndDetailsWrapper />
    </MainWrapper>
  );
}
