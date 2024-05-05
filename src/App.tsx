import { useMemo, useState } from "react";
import "./App.css";
import { SpeechService } from "./service/SpeechService";
import { SpeechServiceContext } from "./SpeechServiceContext";
import { TaskItemList } from "./Components/TaskItemList";

function App() {
  const speechService = useMemo(() => new SpeechService(), []);

  function speak(content: string): void {
    speechService.speak(content);
  }

  return (
    <SpeechServiceContext.Provider value={speechService}>
      <select
        onChange={(e) => {
          console.log(parseInt(e.target.value));
          speechService.voiceNumber = parseInt(e.target.value);
        }}
      >
        {speechService.voices?.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name}
          </option>
        ))}
      </select>

      <div className="card">
        <TaskItemList />
        <button onClick={() => speak("Hallo")}>Speak</button>
      </div>
    </SpeechServiceContext.Provider>
  );
}

export default App;
