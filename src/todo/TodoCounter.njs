export default function TodoCounter({ todos = [] }) {
  const isCompleted = (todo) => todo.done;
  const taskCompleted = todos.filter(isCompleted).length;
  if (!taskCompleted) return;
  return <p> {taskCompleted} completed </p>;
}
