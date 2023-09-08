import React from "react";
import "./index.css";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";

const FormInput = (props) => {
  return (
    <Box className="w-1/2 flex flex-row justify-center items-center px-2 ">
      <label className=" text-medium font-normal w-1/4">{ props.label+ " :"} </label>
      <input
        readOnly={props.readOnly}
        name={props.name}
        ref={props.refer}
        placeholder={props.placeholder}
        className=" text-small h-10  border-2  border-dark-blue focus:outline-none focus:border-yellow-500 w-2/3 bg-skin"
      />
    </Box>
  );
};

export default FormInput;
