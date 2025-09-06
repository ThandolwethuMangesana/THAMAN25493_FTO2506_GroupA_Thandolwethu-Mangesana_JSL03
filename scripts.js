//arat to store initial tasks
// Each task has an id, title, description, and status (todo, doing, done)
//added 3 more tasks

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Function to add a new task
function addTask() {
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  let status = prompt("Enter task status ('todo', 'doing', or 'done'):").toLowerCase();

  //Validtes the status input
  while(
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  );
  
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Invalid status. Please enter 'todo', 'doing', or 'done':").toLowerCase();
}

//creates a new task object and adds it to the initialTasks array
const newTask = {
  id: initialTasks[initialTasks.length - 1].id + 1,
  title: title,
  description: description,
  status: status,
};

//adds the new task to the array
initialTasks.push(newTask);

//number of tasks added
while (initialTasks.length < 6) {
  addTask();
}

// alerts the user if adds more than required tasks
if (initialTasks.length === 6) {
  alert("There are enough tasks on your board, please check them in the console")
}


