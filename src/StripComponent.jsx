import React from "react";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";


const StripComponent = () => {


    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <Box className="">
      <Card
        margin={2}
        padding={2}
        textColor={"black"}
        direction={{ base: "column", sm: "row" }}
        className="bg-skin"
      >
        <VStack align="stretch" width={"100%"}>
          <Flex direction={"column"}>
            <Flex direction={"row"} justifyContent="space-between">
              <Text className="text-medium">PO-JOB00002</Text>
              <Flex direction={"row"} columnGap={2}>
                <Button colorScheme="blue" size={"xs"}>
                  Start
                </Button>
                <Button colorScheme="blue" size={"xs"}>
                  Save
                </Button>
              </Flex>
            </Flex>
            <Flex direction={"row"} justifyContent="space-between">
              <Text className="text-small">Item : SHAFT 14P HS BEE </Text>
              <Text className="text-small">Operation : C-TOTAL LENGTH </Text>
            </Flex>
            <Flex direction={"row"} justifyContent="space-between">
              <Text className="text-small">Qty to Manufacture : 5,000 </Text>
              <Text className="text-small">Total Completed Qty : 5,000 </Text>
            </Flex>{" "}
            <Flex direction={"row"} justifyContent="space-between">
              <Text className="text-small"></Text>
              <Text className="text-small">Started At : {formattedDate}</Text>
            </Flex>
          </Flex>
        </VStack>
      </Card>
    </Box>
  );
};

export default StripComponent;
