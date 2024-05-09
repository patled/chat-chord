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

    if (tasks && tasks.length > 0) {
      setTasks(tasks);
    } else {
      setTasks([]);
    }
  }

  return (
    <div className="task-list">
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
