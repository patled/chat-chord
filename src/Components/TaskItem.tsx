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
    if (!speechService) return;

    if (task.pronounciation) {
      speechService.speak(task.pronounciation);
    } else {
      speechService.speak(task.audioText);
    }
  }

  return (
    <div className="task" onClick={() => speak()}>
      {task.imageUrl && <img src={task.imageUrl} alt="image" />}
      {task.icon && !task.imageUrl && (
        <span className="material-icons-outlined">{task.icon}</span>
      )}
      <p>{task.audioText}</p>
    </div>
  );
}
