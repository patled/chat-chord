import { TaskItem } from "./TaskItem";
import "./TaskItemList.css";


export function TaskItemList() {
  return (
    <div className="task-list">
      <TaskItem title="Task 1" audioText="Spielen" icon="toys" />
      <TaskItem title="Task 2" audioText="Trinken" icon="local_drink" />
      <TaskItem title="Task 3" audioText="Essen" icon="dining" />
    </div>
  );
}