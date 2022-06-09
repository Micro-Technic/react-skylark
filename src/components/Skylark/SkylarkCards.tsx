import React from "react";
import Card from "react-bootstrap/Card";
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export interface SkylarkCardsProps {
  title: string;
  cards: Array<{
    header: string;
    title: string;
    body: JSX.Element;
  }>;
  children?: React.ReactNode;
}

const SkylarkCards: React.FC<SkylarkCardsProps> = (props) => {
  return (
    <div className="mb-5 mt-5" style={{ marginLeft: "5%", marginRight: "5%" }}>
      <Box className="h2 font-weight-bold">{props.title}</Box>
      <Flex direction={"column"}>
        {props.cards.map((val, i) => {
          return (
            <Box
              className={i == 0 ? "mt-0" : "mt-5"}
              key={`${Math.random()}`}
              style={{ borderStyle: "none" }}
            >
              <Accordion
                allowMultiple
                style={{ borderStyle: "none", borderWidth: 0 }}
              >
                <AccordionItem style={{ borderStyle: "none", borderWidth: 0 }}>
                  <Card>
                    <Box
                      padding={0}
                      marginBottom={0}
                      backgroundColor={"rgba(0,0,0,.03)"}
                    >
                      <AccordionButton
                        style={{
                          outline: "0px",
                          boxShadow: "none",
                        }}
                      >
                        <Box flex="1" textAlign="left">
                          {val.header}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Box>

                    <AccordionPanel pb={4}>
                      <Card.Body>{val.body}</Card.Body>
                    </AccordionPanel>
                  </Card>
                </AccordionItem>
              </Accordion>
            </Box>
          );
        })}
        {props.children}
        <Flex mt={"1rem"} justifyContent={"center"}>
          Copyright © 2022 Micro Technic
        </Flex>
      </Flex>
    </div>
  );
};

export default SkylarkCards;
