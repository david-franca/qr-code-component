"use client";

import { Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface TypographyProps extends PropsWithChildren {
  bold?: boolean;
}

export default function Typography({
  bold = false,
  children,
}: Readonly<TypographyProps>) {
  return (
    <Text
      fontFamily={
        bold ? "var(--font-outfit-bold)" : "var(--font-outfit-regular)"
      }
      fontSize={bold ? "22px" : "15px"}
      lineHeight={bold ? "120%" : "140%"}
      letterSpacing={bold ? 0 : "0.2px"}
      fontWeight={bold ? "bold" : "normal"}
      color="slate.900"
      textAlign="center"
    >
      {children}
    </Text>
  );
}
