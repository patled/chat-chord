import { useMemo } from "react";
import "./App.css";
import { SpeechService } from "./service/SpeechService";
import { SpeechServiceContext } from "./SpeechServiceContext";
import { TaskItemList } from "./Components/TaskItemList";

function App() {
  const speechService = useMemo(() => new SpeechService(), []);

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
      </div>
    </SpeechServiceContext.Provider>
  );
}

export default App;
