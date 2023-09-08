import React from "react";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";
import JobCard from "./jobCard";
import FormInput from "./FormInput";
import { useRef, useState } from "react";
import StripComponent from "./StripComponent";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";

const FormComponent = ({
  formData,
  handleChange,
  handleSubmit,
  isSaveButtonVisible,
  readOnly,
}) => {
  console.log("save button boolean L", isSaveButtonVisible);
  console.log("read only ;", readOnly);

  return (
    <Box margin={2} padding={2} textColor={"black"} className="bg-skin">
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"}>
          <Flex direction={"row"}>
            <FormInput
              name="machine"
              placeholder="Machine"
              label="Machine Name"
              readOnly={readOnly}
              onChange={handleChange}
            />
            <FormInput
              name="completedQty"
              placeholder="Completed Qty"
              label="Completed Qty"
              readOnly={readOnly}
              onChange={handleChange}
            />
          </Flex>
          <Flex direction={"row"}>
            <FormInput
              name="targetQty"
              placeholder="Targeted Qty"
              label="Targeted Qty"
              readOnly={readOnly}
              onChange={handleChange}
            />
            <FormInput
              name="operator"
              placeholder="Operator"
              label="Operator Name"
              readOnly={readOnly}
              onChange={handleChange}
            />
          </Flex>
          <Flex direction={"row"}>
            <FormInput
              name="reworkQty"
              placeholder="Rework Qty"
              label="Rework Qty"
              readOnly={readOnly}
              onChange={handleChange}
            />
            <FormInput
              name="rejectedQty"
              placeholder="Rejection Qty"
              label="Rejection Qty"
              readOnly={readOnly}
              onChange={handleChange}
            />
          </Flex>
        </Flex>
      </form>
      <Flex justifyContent="center" padding={5}>
        {isSaveButtonVisible && !readOnly && (
          <Button type="submit" backgroundColor="#15616d" textColor="white" size={"md"}>
            Save Data
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default FormComponent;
