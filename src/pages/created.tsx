import TodoList from "../todolist/TodoList";
import { tasks } from "../todolist/TodoSetting";

//bar
const Index = () => {
  return (
    <TodoList
      sortFunction={(a: tasks, b: tasks) => a.createdAt - b.createdAt}
    ></TodoList>
  );
};
export default Index;
