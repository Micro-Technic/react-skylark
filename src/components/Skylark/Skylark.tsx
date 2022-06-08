import React from "react";
import {
  ComponentWithAs,
  Flex,
  TableCellProps,
  TableColumnHeaderProps,
  TableRowProps,
} from "@chakra-ui/react";

import Card from "react-bootstrap/Card";
import { Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
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

export interface SkylarkInputListProps {
  columns: Array<{
    tableColumnHeaderTitle: String;
    tableColumnHeaderProps?: TableColumnHeaderProps;
  }>;
  rows: Array<{
    data: Array<{ Cell: JSX.Element; cellProps?: TableCellProps }>;
  }>;
  children?: React.ReactNode;
}

export const SkylarkInputList: React.FC<SkylarkInputListProps> = (props) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple" size={"sm"}>
          <Thead
            className={"table-dark"}
            style={{ height: "35px", lineHeight: "20px" }}
          >
            <Tr>
              {props.columns.map((val, i) => {
                return (
                  <Th
                    key={`${Math.random()}`}
                    textColor={"white"}
                    {...val?.tableColumnHeaderProps}
                  >
                    {val.tableColumnHeaderTitle}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {props.rows.map((row, i) => {
              return (
                <Tr key={`${Math.random()}`}>
                  {row.data.map(
                    (
                      cellData: {
                        Cell: JSX.Element;
                        cellProps?: TableCellProps;
                      },
                      j
                    ) => {
                      return (
                        <Td key={`${Math.random()}`} {...cellData?.cellProps}>
                          {cellData.Cell}
                        </Td>
                      );
                    }
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {props.children}
    </Box>
  );
};
export const SkylarkCards: React.FC<SkylarkCardsProps> = (props) => {
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
