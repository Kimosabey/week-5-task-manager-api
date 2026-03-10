let tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        description: "Understand backend fundamentals",
        status: "completed",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "Build REST APIs",
        description: "Create endpoints with Express",
        status: "pending",
        createdAt: new Date().toISOString()
    }
];

// Helper to generate next ID
const getNextId = () => tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

/**
 * Get all tasks
 */
exports.getAllTasks = (req, res) => {
    console.log(`[INFO] GET /tasks - Fetching all tasks. Count: ${tasks.length}`);
    res.status(200).json({
        success: true,
        data: tasks
    });
};

/**
 * Get single task by ID
 */
exports.getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`[INFO] GET /tasks/${id} - Fetching task.`);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        console.error(`[ERROR] Task ${id} not found.`);
        return res.status(404).json({
            success: false,
            message: `Task with ID ${req.params.id} not found`
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
};

/**
 * Create a new task
 */
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    console.log(`[INFO] POST /tasks - Creating task: "${title}"`);

    if (!title) {
        console.error(`[ERROR] Task creation failed: Missing title.`);
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }

    const newTask = {
        id: getNextId(),
        title,
        description: description || "",
        status: "pending",
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    console.log(`[SUCCESS] Task created with ID: ${newTask.id}`);

    res.status(201).json({
        success: true,
        data: newTask
    });
};

/**
 * Update task
 */
exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`[INFO] PUT /tasks/${id} - Updating task.`);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        console.error(`[ERROR] Update failed: Task ${id} not found.`);
        return res.status(404).json({
            success: false,
            message: `Task with ID ${req.params.id} not found`
        });
    }

    const updatedTask = {
        ...tasks[index],
        ...req.body,
        id: tasks[index].id, // Ensure ID doesn't change
        createdAt: tasks[index].createdAt // Ensure createdAt doesn't change
    };

    tasks[index] = updatedTask;
    console.log(`[SUCCESS] Task ${id} updated.`);

    res.status(200).json({
        success: true,
        data: updatedTask
    });
};

/**
 * Delete task
 */
exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`[INFO] DELETE /tasks/${id} - Deleting task.`);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        console.error(`[ERROR] Delete failed: Task ${id} not found.`);
        return res.status(404).json({
            success: false,
            message: `Task with ID ${req.params.id} not found`
        });
    }

    tasks = tasks.filter(t => t.id !== id);
    console.log(`[SUCCESS] Task ${id} deleted.`);

    res.status(200).json({
        success: true,
        message: "Task deleted successfully"
    });
};
