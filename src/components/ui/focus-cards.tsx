

// "use client";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// export const Card = React.memo(
//   ({
//     card,
//     index,
//     hovered,
//     setHovered,
//   }: {
//     card: any;
//     index: number;
//     hovered: number | null;
//     setHovered: React.Dispatch<React.SetStateAction<number | null>>;
//   }) => (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out flex items-center justify-center",
//         hovered === index ? "bg-blue-500" : "bg-gray-200",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}
//     >
//       <div
//         className={cn(
//           "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}
//       >
//         {/* Title text */}
//         <div className="text-2xl md:text-3xl font-bold  ">
//           {console.log(card.title)
//           }
//           {card?.title}
//         </div>

//         {/* Additional text (description) */}
//         <div className="text-md md:text-lg font-medium  mt-2">
//           {card?.description}
//         </div>
//       </div>
//     </div>
//   )
// );

// Card.displayName = "Card";

// type Card = {
//   title: string;
//   description: string; // New field for additional text
// };

// export function FocusCards({ cards }: { cards: Card[] }) {
//   const [hovered, setHovered] = useState<number | null>(null);
//   console.log(cards);
  

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered}
//         />
//       ))}
//     </div>
//   );
// }






"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out flex items-center justify-center",
        hovered === index ? "bg-blue-500" : "bg-gray-200",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
        style={{ zIndex: 10 }} // Add z-index to ensure the text is on top
      >
        {/* Title text */}
        <div className="text-2xl md:text-3xl font-bold text-white">
          {console.log('Title:', card?.title)}
          {card?.title}
        </div>

        {/* Additional text (description) */}
        <div className="text-md md:text-lg font-medium text-white mt-2">
          {console.log('Description:', card?.description)}
          {card?.description}
        </div>
      </div>

      {/* Optional debug block to see what styles are applied */}
      {hovered === index && (
        <div className="text-sm text-red-500">
          Hovered index: {hovered}, Title: {card?.title}
        </div>
      )}
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  description: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  console.log('Cards:', cards);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
