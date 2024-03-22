import React from "react";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSearch, FaShare } from "react-icons/fa";

export default function Header() {
  return (
    <Flex align="center" justify="space-between" p={4}>
      <Flex align="center" as={Link} to="/">
        <Icon as={FaSearch} mr={2} />
        <Heading size="lg">DICOM Viewer</Heading>
      </Flex>
      <Flex>
        <Heading size="md" mr={8} as={Link} to="/upload">
          Upload
        </Heading>
        <Heading size="md" as={Link} to="/atlas">
          Atlas
        </Heading>
      </Flex>
      <Icon as={FaShare} />
    </Flex>
  );
}
