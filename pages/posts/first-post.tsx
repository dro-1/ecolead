import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <Heading size="xl">FirstPost</Heading>
      <Link href="/" passHref>
        <Button color="red" as="a">
          Back to Home Page
        </Button>
      </Link>
    </>
  );
};

export default FirstPost;
