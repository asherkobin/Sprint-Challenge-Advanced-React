import { useEffect, useState } from "react";
import Axios from "axios";

export default function useRemoteData(apiUrl) {
  const [remoteData, setRemoteData] = useState({});
  
  useEffect(() => {
    Axios
      .get(apiUrl)
      .then(res => {
        setRemoteData(res.data);
      })
      .catch(err => {
        console.log("Axios Error:", err)
      });
  }, [apiUrl]);

  return remoteData;
}
