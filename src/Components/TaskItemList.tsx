import { TaskItem } from "./TaskItem";
import "./TaskItemList.css";

export function TaskItemList() {
  return (
    <div className="task-list">
      <TaskItem audioText="Spielen" icon="toys" />
      <TaskItem audioText="Trinken" icon="local_drink" />
      <TaskItem audioText="Essen" icon="dining" />
    </div>
  );
}
