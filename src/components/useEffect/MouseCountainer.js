import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";

export default function MouseCountainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      MouseCountainer
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}
