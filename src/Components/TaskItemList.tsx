import { Task } from "../dtos/Task";
import supabase from "../utils/supabase";
import { TaskItem } from "./TaskItem";
import "./TaskItemList.css";
import { useEffect, useState } from "react";

export function TaskItemList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const { data: tasks } = await supabase.from("Task").select();
    console.log('data:', tasks);

    if (tasks && tasks.length > 0) {
      setTasks(tasks);
    }
  }

  return (
    <div className="task-list">
      {tasks.map((task: Task) => (
        <TaskItem id={task.id} audioText={task.audioText} icon={task.icon} />
      ))}
    </div>
  );
}
