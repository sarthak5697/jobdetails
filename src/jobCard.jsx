import React from "react";
import { Card, Flex, Text, Box, VStack, StackDivider } from "@chakra-ui/react";
import Progress_bar from "./ProgressBar";
import ProgressBar from "./ProgressBar";
import MyProgressBar from "./ProgressBar";

const JobCard = () => {
  return (
    <Card
    rounded={"md"}
      margin={2}
      padding={2}
      textColor={"white"}
      direction={{ base: "column", sm: "row" }}
      w={"full"}
      className="bg-cardColor w-100"
    >
      <VStack align="stretch" width={"100%"}>
        <Text className="text-medium">PO-JOB00002</Text>
        <ProgressBar bgcolor="red" progress="60" height={10} />
        <Flex direction={"column"}>
          <Flex direction={"row"} justifyContent="space-between">
            <Text className="text-small">SHAFT 14P HS BEE</Text>
            <Text className="text-small">Machine : GURJIT FACING-2</Text>
          </Flex>
          <Flex direction={"row"} justifyContent="space-between">
            <Text className="text-small">Qty to Manufacture : 5,000</Text>
            <Text className="text-small">Operation : C-TOTAL LENGTH</Text>
          </Flex>
          <Flex direction={"row"} justifyContent="space-between">
            <Text className="text-small">Total Completed Qty : 5,000</Text>
            <Text className="text-small">Operator : Rahul Kumar</Text>
          </Flex>{" "}
        </Flex>
      </VStack>
    </Card>
  );
};

export default JobCard;
