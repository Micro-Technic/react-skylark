// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionProps, ChakraProvider } from "@chakra-ui/react";
import { SkylarkCards, SkylarkInputList } from "../components/Skylark";
import "bootstrap/dist/css/bootstrap.min.css";
import { SkylarkCardsProps } from "../components/Skylark/SkylarkCards";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Skylark",
  component: SkylarkCards,
} as ComponentMeta<typeof SkylarkCards>;

const List1 = () => {
  return (
    <SkylarkInputList
      columns={[
        { tableColumnHeaderTitle: "Column 1 title" },
        { tableColumnHeaderTitle: "Column 2 title" },
        { tableColumnHeaderTitle: "Column 3 title" },
        { tableColumnHeaderTitle: "Column 4 title" },
      ]}
      rows={[
        {
          data: [
            { Cell: <div>Cell data 1</div>, cellProps: { textColor: "red" } },
            { Cell: <div>Cell data 2</div>, cellProps: { textColor: "pink" } },
            { Cell: <div>Cell data 3</div>, cellProps: { textColor: "black" } },
            { Cell: <div>Cell data 4</div>, cellProps: { textColor: "green" } },
          ],
        },
      ]}
    />
  );
};

const List2 = () => {
  return (
    <SkylarkInputList
      columns={[
        { tableColumnHeaderTitle: "Column 1 title" },
        { tableColumnHeaderTitle: "Column 2 title" },
        { tableColumnHeaderTitle: "Column 3 title" },
        { tableColumnHeaderTitle: "Column 4 title" },
      ]}
      rows={[
        {
          data: [
            { Cell: <div>Cell data 1</div>, cellProps: { textColor: "red" } },
            { Cell: <div>Cell data 2</div>, cellProps: { textColor: "pink" } },
            { Cell: <div>Cell data 3</div>, cellProps: { textColor: "black" } },
            { Cell: <div>Cell data 4</div>, cellProps: { textColor: "green" } },
          ],
        },
      ]}
    />
  );
};

export const SkylarkCard: ComponentStory<typeof SkylarkCards> = () => {
  let cards: Array<{
    header: string;
    body: JSX.Element;
    accordionProps?: AccordionProps;
  }> = [
    {
      header: "Card 1",
      body: <List1 />,
      accordionProps: { defaultIndex: 0, allowToggle: true },
    },
    {
      header: "Card 2",
      body: <List2 />,
    },
  ];
  let cardProps: SkylarkCardsProps = {
    cards: cards,
    title: "Application title",
  };

  return (
    <ChakraProvider>
      <SkylarkCards cards={cardProps.cards} title={cardProps.title} />
    </ChakraProvider>
  );
};
