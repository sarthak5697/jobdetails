import React from 'react'
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import JobCard from "./jobCard";
import FormInput from "./FormInput";
import { useRef, useState, useEffect } from "react";
import StripComponent from "./StripComponent";
import FormComponent from "./FormComponent";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

// Reminder : always wrap this inside a <Accordion allowToggle> tag 



const AccordianCards = () => {
  return (
    <AccordionItem marginBottom={2}  >
    <Flex direction={"column" } backgroundColor={"#15616d"} alignItems={"center"} rounded={"xl"} >
    <JobCard />
     <AccordionButton marginBottom={2}  alignItems={"center"} justifyContent={"center"} backgroundColor={"white"} w={"30px"} h={"30px"} rounded={"full"}>
      
       <AccordionIcon color={"#15616d"} fontSize={"2xl"} fontWeight={"bold"}/>
     </AccordionButton>
    </Flex>
     <AccordionPanel p={0}>
       <FormComponent />
     </AccordionPanel>
   </AccordionItem>
  )
}

export default AccordianCards