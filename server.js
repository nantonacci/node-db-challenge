const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config.js");

const server = express();

server.use(helmet());
server.use(express.json());

// get projects
server.get("/api/projects", (req, res) => {
  db("projects")
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// get projects by id
server.get("/api/projects/:id/", (req, res) => {
  const id = req.params.id;

  db("projects")
    .where({ id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// add new project
server.post("/api/projects/", (req, res) => {
  const newProject = req.body;

  db("projects")
    .insert(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

// get tasks
server.get("/api/tasks/", (req, res) => {
  db("projects")
    .join("tasks", "tasks.id", "tasks.project_id")
    .select(
      "projects.id",
      "projects.project_name",
      "projects.project_description",
      "tasks.task_name",
      "tasks.task_description",
      "tasks.task_notes"
    )
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// get tasks by project
server.get("/api/projects/:id/tasks/", (req, res) => {
  const id = req.params.id;

  db("projects")
    .where({ id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// add new task
server.post("/api/tasks", (req, res) => {
  const newTask = req.body;

  db("tasks")
    .insert(newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// get resources
server.get("/api/resources", (req, res) => {
  db("resources")
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// add resources
server.post("/api/resources/", (req, res) => {
  const newResource = req.body;

  db("resources")
    .insert(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});
module.exports = server;
