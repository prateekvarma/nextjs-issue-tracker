import { Flex, Card, Box } from "@radix-ui/themes";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function IssueDetailsPageLoader() {
  return (
    <Box>
      <Skeleton />
      <Flex gap={"3"}>
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}
