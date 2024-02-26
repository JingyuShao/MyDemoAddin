import React, { useState } from "react";
import {
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  tab: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("20px", "20px"),
    rowGap: "20px",
  },
  panels: {
    ...shorthands.padding(0, "10px"),
    "& th": {
      textAlign: "left",
      ...shorthands.padding(0, "30px", 0, 0),
    },
  },
});

const App = (props: AppProps) => {
  const styles = useStyles();
  const [selectedValue, setSelectedValue] = useState<TabValue>("firstTab");
  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.tab}>
        <TabList aria-label="Tabs" appearance="subtle" selectedValue={selectedValue} onTabSelect={onTabSelect}>
          <Tab id="firstTab" value="firstTab">First Tab</Tab>
          <Tab id="secondTab" value="secondTab">Second Tab</Tab>
          <Tab id="thirdTab" value="thirdTab">Third Tab</Tab>
        </TabList>
      </div>
      <div className={styles.panels}>
        {selectedValue === "firstTab" && <FirstTab title={props.title} />}
        {selectedValue === "secondTab" && <SecondTab />}
        {selectedValue === "thirdTab" && <ThirdTab />}
      </div>
    </div>
  );
};

export default App;
