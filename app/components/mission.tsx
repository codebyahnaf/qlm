// src/components/UserList.tsx
import React from "react";
import mission_statement from "../mission_statement.json"; // direct import

type statement = {
  id: number;
  detail: string;
};

const Mission: React.FC = () => {
  return (
    <div className="mission-bg">
      <div className="mission-title">
        <h1>The Roadmap</h1>
      </div>
      <div className="mission-text" >
        {mission_statement.map((statement: statement) => (
        <div key={statement.id}>{statement.detail}</div>
      ))}
    </div>

      </div>
      
  );
};

export default Mission;
