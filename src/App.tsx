/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useRef } from "react";
import StreamControls from "./components/StreamControls";
import StreamDisplay from "./components/StreamDisplay";
import { fetchStream } from "./utils/api";

function App() {
  const [streamedData, setStreamedData] = useState<string>("");
  const abortController = useRef<AbortController | null>(null);

  const startStream = useCallback(async (endpoint: string) => {
    setStreamedData(""); 
    const controller = new AbortController();
    abortController.current = controller;

    try {
      await fetchStream(endpoint, (data) => {
        setStreamedData((prev) => prev + data);
      }, controller.signal);
    } catch (err:any) {
      if (err.name !== "AbortError") {
        console.error("Stream error:", err);
      }
    }
  }, []);

  const handleStartTextStream = useCallback(() => {
    startStream("stream-text");
  }, [startStream]);

  const handleStartCharsStream = useCallback(() => {
    startStream("stream-chars");
  }, [startStream]);

  const handleStopStream = useCallback(() => {
    abortController.current?.abort();
    abortController.current = null;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="flex flex-col justify-start">
      <h1 className="text-4xl font-bold text-gray-800 pb-5">True Streaming Text Demo</h1>
      <StreamControls
        onStartTextStream={handleStartTextStream}
        onStartCharsStream={handleStartCharsStream}
        onStopStream={handleStopStream}
      />
      <StreamDisplay data={streamedData} />
      </div>
      
    </div>
  );
}

export default App


