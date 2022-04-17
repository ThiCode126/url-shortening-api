import React from "react";
import { dataStats } from "../utils/dataStats";

const Statistics = () => {
  return (
    <section id="statistics">
      <div className="cw">
        <div className="head">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="cards-stats">
          {dataStats.map((item, k) => (
            <div key={k} id={item.id} className="card">
              <div className="bg-img">
                <img
                  src={`assets/statistics/${item.id}.svg`}
                  alt={item.title}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
