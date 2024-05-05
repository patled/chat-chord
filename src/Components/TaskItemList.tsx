import { TaskItem } from "./TaskItem";

export function TaskItemList() {
  return (
    <div className="task-list">
      <TaskItem title="Task 1" task="Spielen" icon="https://via.placeholder.com/150" />
      <TaskItem title="Task 2" task="Trinken" icon="https://via.placeholder.com/150" />
      <TaskItem title="Task 3" task="Essen" icon="https://via.placeholder.com/150" />
    </div>
  );
}