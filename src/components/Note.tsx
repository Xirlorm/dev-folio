import { ReactNode } from "react";

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="note text-gray-500 p-3 my-4 bg-gray-100 rounded-sm">
      {children}
    </div>
  );
}

export default Note;
