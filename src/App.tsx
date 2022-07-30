import { useState } from "react";
import ReactJson from "react-json-view";

import { Block, BlocklyComponent } from "./Blockly";

function App() {
  const [code, setCode] = useState<Object>({});
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <BlocklyComponent
        readOnly={false}
        moveOptions={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        onChange={setCode}
      >
        <Block type="step_project" />
        <Block type="step_match" />
        <Block type="step_group" />
        <Block type="projection_field" />
        <Block type="filter_equal" />
        <Block type="value_number" />
      </BlocklyComponent>
      <div style={{ flex: 1 }}>
        <ReactJson
          style={{ height: "100%" }}
          src={code}
          theme="ocean"
          onEdit={false}
          onAdd={false}
          onDelete={false}
          enableClipboard={false}
          displayDataTypes={false}
          collapsed={false}
          displayObjectSize={false}
        />
      </div>
    </div>
  );
}

export default App;
