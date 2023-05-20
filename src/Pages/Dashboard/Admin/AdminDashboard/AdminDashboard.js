import React, { useEffect, useState } from "react";
import { GoogleApiWrapper, Chart } from "@google-analytics/data";

const AdminDashboard = ({ google }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await google.analytics.data.ga.get({
        ids: process.env.REACT_APP_MEASUREMENT_ID,
        startDate: "30daysAgo",
        endDate: "today",
        metrics: "ga:sessions",
      });
      setData(response.data.rows);
    };

    fetchData();
  }, [google]);

  return (
    <div>
      {data.map((row) => (
        <Chart data={row} />
      ))}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(AdminDashboard);
