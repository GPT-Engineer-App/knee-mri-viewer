import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Atlas() {
  return (
    <Box>
      <Header />
      <Box p={8}>
        <Heading mb={8}>MRI MSK Atlas</Heading>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Heading size="md" mb={2}>
              Knee
            </Heading>
            <Text>Sagittal View</Text>
            <Text>Coronal View</Text>
            <Text>Axial View</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>
              Shoulder
            </Heading>
            <Text>Sagittal View</Text>
            <Text>Coronal View</Text>
            <Text>Axial View</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
