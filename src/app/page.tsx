import Link from "next/link";
import "./styles/todo-task.css";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1>
          <strong>To</strong>day
        </h1>
        <p>
          Wake up, go ahead, do the thing not tomorrow, do <strong>to</strong>
          day.
        </p>
      </div>

      <div className="main-component flex gap-8">
        <div className="task-list-component p-4 w-200 rounded-lg">
          <h2 className="mb-4">To Do</h2>

          <ul className="gap-8">
            <li className="p-4 w-full rounded-lg">
              <h3>Mother Breakfeast</h3>
              <div className="todo-description flex justify-between">
                <p>I need to do my mother breakfeast</p>
                <p>17 March 2021 at 08:00 PM</p>
              </div>
              <button className="rounded-full b">X</button>
            </li>
          </ul>
        </div>

        <div className="task-form-component flex flex-col gap-8">
          <div className="task-metrics p-4 text-center rounded-lg">
            <h2>Finished Tasks quantity</h2>
            <h3>03</h3>
          </div>

          <div className="task-form p-4 rounded-lg">
            <h2 className="text-center">Add new to do</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="titulo">Task Name:</label>
                <input
                  className="rounded-lg"
                  name="titulo"
                  type="text"
                  placeholder="Placeholder..."
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="descricao">Task Description:</label>
                <input
                  className="rounded-lg"
                  name="descricao"
                  type="text"
                  placeholder="Placeholder..."
                />
              </div>
              <button className="w-full bg-white text-black p-2 rounded-lg">
                Create Todo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>
          <q>Chuck Norris Phrase</q>
        </p>
        <h4>By Chuck Norris</h4>
      </div>
    </div>
  );
}
