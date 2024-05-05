import { useContext } from "react";
import { SpeechServiceContext } from "../SpeechServiceContext";
import "./TaskItem.css";

type TaskItemProps = {
  title: string;
  audioText: string;
  icon?: string;
};

export function TaskItem({ title, audioText, icon }: TaskItemProps) {
  const speechService = useContext(SpeechServiceContext);

  function speak() {
    speechService.speak(audioText);
  }

  return (
    <div className="task" onClick={() => speak()}>
      {/* <span className="material-icons">{icon}</span> */}
      <span className="material-icons-outlined">{icon}</span>
      {/* <span className="material-icons-round">{icon}</span>
      <span className="material-icons-sharp">{icon}</span>
    <span className="material-icons-two-tone">{icon}</span> */}
    <p>{audioText}</p>
    </div>
  );
}
