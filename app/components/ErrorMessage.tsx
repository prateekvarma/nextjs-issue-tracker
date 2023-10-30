import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}
