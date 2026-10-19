import { Image } from "@chakra-ui/react";

const logoSrc = `${process.env.PUBLIC_URL}/realtorone-logo.png`;
const markSrc = `${process.env.PUBLIC_URL}/realtorone-mark.png`;

export default function RealtorOneMark({ compact = false, onClick, h }) {
  const height = h || (compact ? "40px" : "64px");

  return (
    <Image
      src={compact ? markSrc : logoSrc}
      alt="Realtor One"
      h={height}
      w={compact ? height : "auto"}
      maxW={compact ? height : "168px"}
      objectFit="contain"
      cursor={onClick ? "pointer" : "default"}
      onClick={onClick}
      userSelect="none"
      bg="#141414"
      borderRadius="12px"
      p={compact ? "4px" : "6px"}
    />
  );
}
