import React from "react";
import { TableCellProps, TableColumnHeaderProps } from "@chakra-ui/react";
interface SkylarkInputListProps {
    columns: Array<{
        tableColumnHeaderTitle: String;
        tableColumnHeaderProps?: TableColumnHeaderProps;
    }>;
    rows: Array<{
        data: Array<{
            Cell: JSX.Element;
            cellProps?: TableCellProps;
        }>;
    }>;
    children?: React.ReactNode;
}
export declare const SkylarkInputList: React.FC<SkylarkInputListProps>;
export default SkylarkInputList;
