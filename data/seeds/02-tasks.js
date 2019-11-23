exports.seed = function(knex, Promise) {
  return knex("tasks").insert([
    {
      task_name: "Clean bathroom",
      task_description: "Shower, sink, toilet, floors",
      task_notes: "Do not use bleach",
      project_id: 1
    },
    {
      task_name: "Clean kitchen",
      task_description: "Dishes, counters, floors",
      task_notes: "",
      project_id: 1
    },
    {
      task_name: "Clean living room",
      task_description: "Tidy, dust, vacuum",
      task_notes: "Remove items from display case before dusting",
      project_id: 1
    },
    {
      task_name: "Sorting",
      task_description: "Sort out old items",
      task_notes: "Create trash, recycle, and donate piles",
      project_id: 2
    },
    {
      task_name: "Cleaning",
      task_description: "Clean up any oil spills",
      task_notes: "",
      project_id: 2
    }
  ]);
};
