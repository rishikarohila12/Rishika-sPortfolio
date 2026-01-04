import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

export const addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch {
    res.status(400).json({ message: "Error adding project" });
  }
};
