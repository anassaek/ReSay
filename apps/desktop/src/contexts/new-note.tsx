import { useRouter } from "@tanstack/react-router";
import { createContext, useCallback, useContext } from "react";
import { useHotkeys } from "react-hotkeys-hook";

interface NewNoteContextType {
  createNewNote: () => void;
}

const NewNoteContext = createContext<NewNoteContextType | null>(null);

export function NewNoteProvider({ children }: { children: React.ReactNode }) {
  const { navigate } = useRouter();

  const createNewNote = useCallback(() => {
    navigate({ to: "/app/new" });
  }, [navigate]);

  useHotkeys(
    "mod+n",
    (event) => {
      event.preventDefault();
      createNewNote();
    },
    {
      enableOnFormTags: true,
      enableOnContentEditable: true,
    },
  );

  return (
    <NewNoteContext.Provider value={{ createNewNote }}>
      {children}
    </NewNoteContext.Provider>
  );
}

export function useNewNote() {
  const context = useContext(NewNoteContext);
  if (!context) {
    throw new Error("useNewNote must be used within NewNoteProvider");
  }
  return context;
}
