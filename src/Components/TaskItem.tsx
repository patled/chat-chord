import { useContext } from "react";
import { SpeechServiceContext } from "../SpeechServiceContext";
import "./TaskItem.css";
import { Task } from "../dtos/Task";

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  const speechService = useContext(SpeechServiceContext);

  function speak() {
    speechService.speak(task.audioText);
  }

  return (
    <div className="task" onClick={() => speak()}>
      {/* <span className="material-icons">{icon}</span> */}
      <span className="material-icons-outlined">{task.icon}</span>
      {/* <span className="material-icons-round">{icon}</span>
      <span className="material-icons-sharp">{icon}</span>
    <span className="material-icons-two-tone">{icon}</span> */}
      <p>{task.audioText}</p>
    </div>
  );
}
