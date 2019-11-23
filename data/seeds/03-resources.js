exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    { resource_name: "Dish soap", resource_description: "" },
    {
      resource_name: "Towels",
      resource_description: "Bath, kitchen, and wash cloths"
    },
    { resource_name: "Paper towels", resource_description: "" },
    { resource_name: "Spray cleanser", resource_description: "Bleach free" },
    { resource_name: "Trash bags", resource_description: "" }
  ]);
};
