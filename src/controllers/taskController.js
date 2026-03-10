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
    res.status(200).json({
        success: true,
        data: tasks
    });
};

/**
 * Get single task by ID
 */
exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
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

    if (!title) {
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

    res.status(201).json({
        success: true,
        data: newTask
    });
};

/**
 * Update task
 */
exports.updateTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (index === -1) {
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

    res.status(200).json({
        success: true,
        data: updatedTask
    });
};

/**
 * Delete task
 */
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `Task with ID ${req.params.id} not found`
        });
    }

    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));

    res.status(200).json({
        success: true,
        message: "Task deleted successfully"
    });
};
