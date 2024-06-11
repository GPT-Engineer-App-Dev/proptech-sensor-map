import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BuildingInfoCard = ({ building }) => {
  if (!building) return null;

  const MotionBox = motion(Box);

  return (
    <MotionBox
      animate={{ x: [0, 20, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      position="absolute"
      top="10px"
      left="10px"
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      zIndex={1000}
    >
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">
          {building.name}
        </Text>
        <Text>Temperature: {building.sensorData.temperature}°C</Text>
        <Text>Humidity: {building.sensorData.humidity}%</Text>
        <Text>CO2 Levels: {building.sensorData.co2} ppm</Text>
      </VStack>
    </MotionBox>
  );
};

export default BuildingInfoCard;