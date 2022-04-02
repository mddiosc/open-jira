import { useSnackbar } from "notistack";
import { useEffect, useReducer } from "react";
import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });
    dispatch({ type: "[Entry] - Add-Entry", payload: data });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnakbar = false
  ) => {
    try {
      const { data } = await entriesApi.put(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entry] - Entry-Updated", payload: data });
      if (showSnakbar) {
        enqueueSnackbar("Entry updated successfully", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const deleteEntry = async (id: string) => {
    try {
      await entriesApi.delete(`/entries/${id}`);
      dispatch({ type: "[Entry] - Entry-Deleted", payload: id });
      enqueueSnackbar("Entry deleted successfully", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } catch (error) {
      console.log({ error });
      enqueueSnackbar("Error deleted successfully", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  }


  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] - refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods
        addNewEntry,
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
