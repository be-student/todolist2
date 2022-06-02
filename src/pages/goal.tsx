import TodoList from "../todolist/TodoList";
import { tasks } from "../todolist/TodoSetting";

//bar
const Index = () => {
  return (
    <TodoList
      sortFunction={(a: tasks, b: tasks) => a.goalAt - b.goalAt}
    ></TodoList>
  );
};
export default Index;
