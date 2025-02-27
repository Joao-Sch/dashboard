import { Flex, Box } from "@chakra-ui/react";

import { SideBar } from "./conponent/sideBar";


export default function Home() {
  return (
  <>
    <Flex>
      <Box>
        <SideBar />
      </Box>
    </Flex>
  </>
  );
}
