import React, { useState, useCallback, useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "./Dashboard.css";
import TableData from "./response.json";
import _ from "lodash";
import Header from "./Header";
import StatusBtn from "./StatusBtn";
import TableParent from "./TableParent";
import { dashboard } from "../../config.json";

const Dashboard = () => {
  const [socketUrl, setSocketUrl] = useState(dashboard);
  const messageHistory = useRef([]);

  const {
    sendMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
  } = useWebSocket(socketUrl);

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastJsonMessage),
    [lastJsonMessage]
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="flex justify-center bg-black px-8">
      <main className="Wrapper">
        <Header />

        <div className="StatusBtnWrapper">
          <StatusBtn status={connectionStatus} />
        </div>
        {lastJsonMessage
          ? _.map(lastJsonMessage, (val, key) => {
              return <TableParent key={key} Title={key} SectionData={val} />;
            })
          : "NO DATA 😢"}
      </main>
    </div>
  );
};

export default Dashboard;
