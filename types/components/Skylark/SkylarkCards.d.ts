import React from "react";
export interface SkylarkCardsProps {
    title: string;
    cards: Array<{
        header: string;
        title: string;
        body: JSX.Element;
    }>;
    children?: React.ReactNode;
}
declare const SkylarkCards: React.FC<SkylarkCardsProps>;
export default SkylarkCards;
