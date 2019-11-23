exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("id");

      tbl.string("project_name", 255).notNullable();
      tbl.text("project_description");
      tbl
        .boolean("project_completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments("id");

      tbl.string("task_name", 255).notNullable();
      tbl.text("task_description").notNullable();
      tbl.text("task_notes");
      tbl
        .boolean("task_completed")
        .notNullable()
        .defaultTo(false);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", tbl => {
      tbl.increments("id");
      tbl.string("resource_name", 255).notNullable();
      tbl.text("resource_description");
    })
    .createTable("project_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
