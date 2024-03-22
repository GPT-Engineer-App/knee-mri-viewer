import React, { useState } from "react";
import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";
import Header from "../components/Header";

import { Heading } from "@chakra-ui/react";
const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(74);
  const dicomSeries = [...Array(120)];

  return (
    <Box>
      <Header />

      <Box p={8}>
        <Heading mb={8}>Interactive MRI MSK Atlas</Heading>
      </Box>

      {}
      <Grid templateColumns="1fr 2fr 2fr" gap={4} p={4}>
        {}
      </Grid>

      {/* Bottom Section */}
      <Flex p={4} align="center">
        {/* 3D Model Thumbnail */}
        <Image src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGtuZWUlMjBtb2RlbCUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTExMjEzMDF8MA&ixlib=rb-4.0.3&q=80&w=1080" w={20} h={20} mr={4} />

        {/* Scan Thumbnails */}
        <Flex overflowX="scroll" flex={1}>
          {[...Array(120)].map((_, i) => (
            <Image key={i} src={`https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxrbmVlJTIwbXJpJTIwc2xpY2UlMjAlMjQlN0JpJTIwJTJCJTIwMSU3RHxlbnwwfHx8fDE3MTExMjEzMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080`} w={20} h={20} mr={1} border={i === 74 ? "2px solid teal" : "none"} />
          ))}
        </Flex>

        {/* Scrollbar Indicator */}
        <Text ml={4} whiteSpace="nowrap">
          {currentIndex + 1}/{dicomSeries.length}
        </Text>
      </Flex>
    </Box>
  );
};

export default Index;
