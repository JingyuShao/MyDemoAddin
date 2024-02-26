import React, { useState } from "react";
import { Button, Combobox, makeStyles, Option, shorthands, useId } from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";
import { insertTextToCurrentActiveCell } from "../office-document";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    ...shorthands.gap("2px"),
    maxWidth: "400px",
  },
});

const SecondTab = (props: Partial<ComboboxProps>) => {
  const comboId = useId("combo-default");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const styles = useStyles();
  const [value, setValue] = useState<string>("select from the dropdown to insert text");

  const onOptionSelect = (ev, data) => {
    setValue(data.optionText ?? "");
  };
  const handleTextInsertion = async () => {
    await insertTextToCurrentActiveCell(value);
  };
  return (
    <div className={styles.root}>
      <label id={comboId}>Best pet</label>
      <Combobox aria-labelledby={comboId} placeholder="Select an animal" {...props} onOptionSelect={onOptionSelect}>
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Combobox>
      <Button appearance="primary" disabled={false} size="large" onClick={handleTextInsertion}>
        Insert into Excel
      </Button>
    </div>
  );
};

export default SecondTab;
