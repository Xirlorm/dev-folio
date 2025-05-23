import { ReactNode } from "react";

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="note">
      {children}
    </div>
  );
}

export default Note;
