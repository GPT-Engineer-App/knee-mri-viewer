import React from "react";
import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Upload() {
  return (
    <Box>
      <Header />
      <Box p={8}>
        <Heading mb={8}>Upload DICOM or JPG</Heading>
        <Stack spacing={4} direction="column" align="center">
          <Input type="file" accept=".dcm,.jpg" />
          <Button colorScheme="blue" size="lg">
            Upload
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
