exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "House cleaning",
      project_description: "Clean the house"
      // project_completed: false
    },
    {
      project_name: "Organize garage",
      project_description: "Organize the garage"
      // project_completed: false
    }
  ]);
};
