import React from "react";
import { Box, Flex, Heading, Text, Image, Icon, Input, InputGroup, InputLeftElement, Grid, Divider } from "@chakra-ui/react";
import { FaSearch, FaShare } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Top Section */}
      <Flex align="center" justify="space-between" p={4}>
        <Flex align="center">
          <Icon as={FaSearch} mr={2} />
          <Text>Buscar</Text>
        </Flex>
        <Heading size="lg">Joelho - RM (Sagittal)</Heading>
        <Icon as={FaShare} />
      </Flex>

      <Divider />

      {/* Main Content Area */}
      <Grid templateColumns="1fr 2fr 2fr" gap={4} p={4}>
        {/* Left Side: Axial View */}
        <Box>
          <Image src="https://images.unsplash.com/photo-1557733686-3f8641465d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxheGlhbCUyMHZpZXclMjBrbmVlJTIwbXJpfGVufDB8fHx8MTcxMTEyMTMwMHww&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
          <Text align="center">AXIAL</Text>
        </Box>

        {/* Middle: Coronal View */}
        <Box>
          <Image src="https://images.unsplash.com/photo-1510193806518-f731c70a35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3JvbmFsJTIwdmlldyUyMGtuZWUlMjBtcmklMjB3aXRoJTIwbGFiZWxzfGVufDB8fHx8MTcxMTEyMTMwMXww&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>

        {/* Right Side: Sagittal View */}
        <Box>
          <Image src="https://images.unsplash.com/photo-1510193806518-f731c70a35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWdpdHRhbCUyMHZpZXclMjBrbmVlJTIwbXJpJTIwd2l0aCUyMGxhYmVsc3xlbnwwfHx8fDE3MTExMjEzMDF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
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
          75/120
        </Text>
      </Flex>
    </Box>
  );
};

export default Index;
