import { useState } from "react";

// TaskFlow frontend
function App() {
  const [tasks, setTasks] = useState([
    "Finish React project",
    "Write documentation",
  ]);
  const [newTask, setNewTask] = useState("");

  // Add task
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle complete
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? (task.startsWith("✔️ ") ? task.slice(3) : "✔️ " + task) : task
      )
    );
  };

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <h1>TaskFlow</h1>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Boards</a>
          <a href="#">Logout</a>
        </nav>
      </header>

      {/* Main */}
      <main style={styles.main}>
        {/* Boards Section */}
        <section style={styles.card}>
          <h2>Your Boards</h2>
          <ul>
            <li>Personal</li>
            <li>Work</li>
          </ul>
        </section>

        {/* Tasks Section */}
        <section style={styles.card}>
          <h2>Tasks</h2>
          <ul>
            {tasks.map((task, idx) => (
              <li key={idx}>
                {task}{" "}
                <button onClick={() => toggleComplete(idx)}>✔️</button>{" "}
                <button onClick={() => deleteTask(idx)}>🗑️</button>
              </li>
            ))}
          </ul>

          <form onSubmit={addTask}>
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New task..."
            />
            <button type="submit">Add Task</button>
          </form>
        </section>
      </main>
    </div>
  );
}

// Inline styles
const styles = {
  header: {
    background: "#4f46e5",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  main: {
    display: "flex",
    gap: "2rem",
    padding: "1rem",
  },
  card: {
    background: "white",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    flex: 1,
  },
};

export default App;
