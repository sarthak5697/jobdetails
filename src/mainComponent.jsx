import React from "react";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import JobCard from "./jobCard";
import FormInput from "./FormInput";
import { useRef, useState } from "react";
import StripComponent from "./StripComponent";
import FormComponent from "./FormComponent";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const MainComponent = () => {
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(true);

  const [formDataList, setFormDataList] = useState([]);
  const [formData, setFormData] = useState({
    machine: "",
    operator: "",
    targetQty: "",
    completedQty: "",
    reworkQty: "",
    rejectedQty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDataList([...formDataList, formData]);
    setFormData({
      machine: "",
      operator: "",
      targetQty: "",
      completedQty: "",
      reworkQty: "",
      rejectedQty: "",
    });
    console.log(
      "Before setting isSaveButtonVisible to false:",
      isSaveButtonVisible
    );
    setIsSaveButtonVisible(false);
    console.log(
      "After setting isSaveButtonVisible to false:",
      isSaveButtonVisible
    );
  };
  return (
    <Box backgroundColor={"white"}>
      <div className="hidden sm:block">
        <Tabs isManual variant="enclosed" style={{ backgroundColor: null }}>
          <div className="w-100 h-100  md:col-span-1 md:col-start-1">
            <Flex direction={"row"}>
              <TabList style={{}} className="base:w-100 sm:w-1/3">
                <Flex direction={"column"} className="w-full">
                  <Tab
                    _selected={{
                      //  borderRightRadius: "50%", Change the border radius when selected
                      backgroundColor: "#26a2b5", // Background color when selected
                    }}
                  >
                    <JobCard
                      style={{
                        backgroundColor: "#5cb047",
                        borderRightRadius: "50%", // Change the border radius of JobCard when the tab is selected
                      }}
                    />
                  </Tab>
                  <Tab
                    _selected={{
                      backgroundColor: "#26a2b5", // Background color when selected
                    }}
                  >
                    <JobCard />
                  </Tab>
                  <Tab
                    _selected={{
                      backgroundColor: "#26a2b5", // Background color when selected
                    }}
                  >
                    <JobCard />
                  </Tab>
                  <Tab
                    _selected={{
                      backgroundColor: "#26a2b5", // Background color when selected
                    }}
                  >
                    <JobCard />
                  </Tab>
                  <Tab
                    _selected={{
                      backgroundColor: "#26a2b5", // Background color when selected
                    }}
                  >
                    <JobCard />
                  </Tab>
                  <Tab
                    _selected={{
                      backgroundColor: "#26a2b5", // Background color when selected
                    }}
                  >
                    <JobCard />
                  </Tab>
                </Flex>
              </TabList>
              <TabPanels backgroundColor={"#26a2b5"} className="w-2/3 ">
                <TabPanel>
                  <div className="w-full h-full  md:col-span-2 md:col-start-2 p-2">
                    <Flex direction={"column"}>
                      <Text
                        textAlign={"center"}
                        className="text-xl font-semibold"
                      >
                        {" "}
                        Edit Job Details{" "}
                      </Text>
                      {/* RIGHT TOP STRIP */}
                      <StripComponent />
                      {/* RIGHT DYNAMIC PART */}

                      {/* Render a new editable FormComponent */}
                      <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isSaveButtonVisible={isSaveButtonVisible}
                        readOnly={false}
                      />
                      {formDataList.map((data, index) => (
                        <FormComponent
                          key={index}
                          formData={data}
                          readOnly={true}
                        />
                      ))}
                    </Flex>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="w-full h-full  md:col-span-2 md:col-start-2 p-2">
                    <Flex direction={"column"}>
                      <Text
                        textAlign={"center"}
                        className="text-xl font-semibold"
                      >
                        {" "}
                        Edit Job Details{" "}
                      </Text>
                      {/* RIGHT TOP STRIP */}
                      <StripComponent />
                      {/* RIGHT DYNAMIC PART */}

                      {/* Render a new editable FormComponent */}
                      <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isSaveButtonVisible={isSaveButtonVisible}
                        readOnly={false}
                      />
                      {formDataList.map((data, index) => (
                        <FormComponent
                          key={index}
                          formData={data}
                          readOnly={true}
                        />
                      ))}
                    </Flex>
                  </div>
                </TabPanel>
              </TabPanels>
            </Flex>
          </div>
        </Tabs>
      </div>
      <div className="sm:hidden" id="mobile-view-accordian">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <JobCard />
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormComponent />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <JobCard />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <FormComponent />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <JobCard />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <FormComponent />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <JobCard />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <FormComponent />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </Box>
  );

  //   return (
  //     <>
  //       <section className="p-2">
  //         <div className="w-100 h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
  //           {/* LEFT PART */}

  //           {/* RIGHT PART */}

  //         </div>
  //       </section>
  //     </>
  //   );
};

export default MainComponent;
