// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { SkylarkCards } from "../components/Skylark";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Skylark",
  component: SkylarkCards,
} as ComponentMeta<typeof SkylarkCards>;

export const SkylarkCard: ComponentStory<typeof SkylarkCards> = () => {
  let cards: Array<{
    header: string;
    title: string;
    body: JSX.Element;
  }> = [
    {
      header: "Setup",
      title: "Setup",
      body: <div> Setup BODY </div>,
    },
    {
      header: "Log",
      title: "Log",
      body: <div> LOG BODY </div>,
    },
  ];
  let cardProps = {
    cards: cards,
    title: "Application title",
  };

  return (
    <ChakraProvider>
      <SkylarkCards cards={cardProps.cards} title={cardProps.title} />
    </ChakraProvider>
  );
};
