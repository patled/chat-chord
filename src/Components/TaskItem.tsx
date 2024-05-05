import { useContext } from "react";
import { SpeechServiceContext } from "../SpeechServiceContext";

type TaskItemProps = {
  title: string;
  task: string;
  icon?: string;
};

export function TaskItem({ title, task, icon }: TaskItemProps) {
  const speechService = useContext(SpeechServiceContext);

  function speak() {
    speechService.speak(task);
  }

  return (
    <div className="task" onClick={() => speak()}>
      <h3>{title}</h3>
      <p>{task}</p>
      <img src={icon} alt={title} />
    </div>
  );
}
