/* eslint-disable @typescript-eslint/no-explicit-any */

export const BASE_URL = "http://localhost:5000";

export const fetchStream = async (
    endpoint: string,
    onData: (data: string) => void,
    signal: AbortSignal
  ) => {
    try {
      const response = await fetch(`http://localhost:5000/${endpoint}`, { signal });
  
      if (!response.body) {
        throw new Error("Stream not supported");
      }
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
  
      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
  
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          onData(chunk);
        }
      }
  
      console.log("Stream completed.");
    } catch (err:any) {
      if (err.name === "AbortError") {
        console.log("Stream aborted.");
      } else {
        console.error("Error fetching stream:", err);
      }
    }
  };
  
