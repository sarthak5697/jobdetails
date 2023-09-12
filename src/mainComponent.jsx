import React from "react";
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
import AccordianCards from "./AccordianCards";

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

    // console.log(
    //   "Before setting isSaveButtonVisible to false:",
    //   isSaveButtonVisible
    // );
    setIsSaveButtonVisible(false);

    // console.log(
    //   "After setting isSaveButtonVisible to false:",
    //   isSaveButtonVisible
    // );
  };
  const initialSelectedIndex = 0;

  const [isSelectedArray, setIsSelectedArray] = useState(Array(6).fill(false));

  // Set the initial tab as selected
  useEffect(() => {
    const updatedIsSelectedArray = isSelectedArray.map(
      (_, index) => index === initialSelectedIndex
    );
    setIsSelectedArray(updatedIsSelectedArray);
  }, [initialSelectedIndex]);

  // Handle tab selection for a specific tab index
  const handleTabClick = (index) => {
    const updatedIsSelectedArray = isSelectedArray.map((_, i) => i === index); // Set only the clicked tab as selected
    setIsSelectedArray(updatedIsSelectedArray);
  };

  return (
    <Box backgroundColor={"white"}>
      <div className="hidden sm:block">
        {/* Tab and Desktop View  */}

        <Tabs isManual variant="enclosed" style={{ backgroundColor: null }}>
          <div className="w-100 h-100  md:col-span-1 md:col-start-1">
            <Flex direction={"row"}>
              <TabList
                style={{}}
                backgroundColor={"skin"}
                className="base:w-100 sm:w-1/3"
                boxShadow="2px 2px 6px rgba(0, 0, 0, 0.1)"
                border="1px solid gray"
                borderColor={"rgba(0, 0, 0, 0.2)"}
              >
                <Flex direction={"column"} className="w-full">
                  {isSelectedArray.map((isSelected, index) => (
                    <Tab
                      key={index}
                      _selected={{
                        backgroundColor: "",
                      }}
                      onClick={() => handleTabClick(index)}
                    >
                      <Flex direction={"row"} align="center" justify="center">
                        <JobCard className="" />
                        {isSelected && (
                          <div className="arrow-box bg-red-400 w-2 my-2 p-0 rounded-2xl mx-2"></div>
                        )}
                      </Flex>
                    </Tab>
                  ))}
                  {/* <Tab
                    _selected={{
                      backgroundColor: "#26a2b5",
                    }}
                  >
                    <JobCard />
                  </Tab> */}
                </Flex>
              </TabList>
              <TabPanels backgroundColor={""} className="w-2/3 ">
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

      {/* Mobile View  */}

      <div className="sm:hidden m-2" id="mobile-view-accordian">
        <Accordion allowToggle >

         <AccordianCards/>
         <AccordianCards/>
         <AccordianCards/>
         <AccordianCards/>


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
