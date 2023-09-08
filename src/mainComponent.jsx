import React from "react";
import { Flex, Text, Box, VStack, Card, Button } from "@chakra-ui/react";
import JobCard from "./jobCard";
import FormInput from "./FormInput";
import { useRef, useState } from "react";
import StripComponent from "./StripComponent";
import FormComponent from "./FormComponent";

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
    <>
      <section className="p-2">
        <div className="w-100 h-screen grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* LEFT PART */}
          <div className="w-full h-full  md:col-span-1 md:col-start-1 p-2">
            <Flex direction={"column"}>
              <Text textAlign={"center"} className="text-xl font-semibold">
                {" "}
                Job List{" "}
              </Text>
              <Box className="">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
              </Box>
            </Flex>
          </div>
          {/* RIGHT PART */}
          <div className="w-full h-full  md:col-span-2 md:col-start-2 p-2">
            <Flex direction={"column"}>
              <Text textAlign={"center"} className="text-xl font-semibold">
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
        </div>
      </section>
    </>
  );
};

export default MainComponent;
