// components/store/Context.tsx

"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  starCount: number;
  incrementStarCount: () => void;
}

const CountContext = createContext<ContextProps | undefined>(undefined);

export const useStarCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useStarCount must be used within a StarCountProvider");
  }
  return context;
};

export const StarCountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [starCount, setStarCount] = useState(0);
  const incrementStarCount = () => setStarCount((prev) => prev + 1);

  return (
    <CountContext.Provider value={{ starCount, incrementStarCount }}>
      {children}
    </CountContext.Provider>
  );
};
