import React from "react";
import {
  TableCellProps,
  TableColumnHeaderProps,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface SkylarkInputListProps {
  columns: Array<{
    tableColumnHeaderTitle: String;
    tableColumnHeaderProps?: TableColumnHeaderProps;
  }>;
  rows: Array<{
    data: Array<{ Cell: JSX.Element; cellProps?: TableCellProps }>;
  }>;
  children?: React.ReactNode;
}

const SkylarkInputList: React.FC<SkylarkInputListProps> = (props) => {
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

export default SkylarkInputList;
