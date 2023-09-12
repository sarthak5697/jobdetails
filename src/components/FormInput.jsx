import React from "react";
import "../styles/main__Component.css";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";

const FormInput = (props) => {
  return (
    <Box className="m-2 px-1 w-80" id="">
      <Flex direction={"column "} className="justify-start " >
      <label className="font-semibold text-small sm:text-smallMedium text-cardBlue">{ props.label+ " :"} </label>
      <input
      width={100}
        readOnly={props.readOnly}
        name={props.name}
        ref={props.refer}
        placeholder={props.placeholder}
        className=" text-small font-semibold h-2 sm:h-12 rounded-lg  border-2  border-dark-blue focus:outline-none focus:border-yellow-500 bg-skin"
      />
      </Flex>
    </Box>
  );
};

export default FormInput;
