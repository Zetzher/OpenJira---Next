import { Entry } from "@/interfaces";
import React, { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children: JSX.Element;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente:Non reprehenderit exercitation veniam aliqua officia non quis et dolor dolore et ut.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "En-Progreso Quis et commodo magna velit enim ullamco amet et.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Terminadas Reprehenderit ea Lorem amet nisi et nulla esse ullamco ad.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description: "",
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };
  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
