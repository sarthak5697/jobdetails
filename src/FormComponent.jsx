import React from "react";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";
import JobCard from "./components/jobCard";
import FormInput from "./components/FormInput";
import { useRef, useState } from "react";
import StripComponent from "./components/StripComponent";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";

const FormComponent = ({
  formData,
  handleChange,
  handleSubmit,
  isSaveButtonVisible,
  readOnly,
}) => {

  // console.log("save button boolean L", isSaveButtonVisible);
  // console.log("read only ;", readOnly);

  return (
    <Box margin={2}  paddingTop={0} textColor={"black"} className="bg-skin rounded-lg">
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"}>
          <Flex direction={{base:'column',sm:'row'}} justifyContent="space-between">
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
            <FormInput
              name="reworkQty"
              placeholder="Rework Qty"
              label="Rework Qty"
              readOnly={readOnly}
              onChange={handleChange}
            />
          </Flex>
          <Flex direction={{base:'column',sm:'row'}} justifyContent="space-between">
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
             <FormInput
              name="rejectedQty"
              placeholder="Rejection Qty"
              label="Rejection Qty"
              readOnly={readOnly}
              onChange={handleChange}
            />
          </Flex>
          <Flex justifyContent="center" marginBottom={2}>
        {isSaveButtonVisible && !readOnly && (
          <Button type="submit" backgroundColor="#15616d" textColor="white" size={"md"}>
            Save Data
          </Button>
        )}
      </Flex>
        </Flex>
      </form>
     
    </Box>
  );
};

export default FormComponent;
