import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("products", (table) => {
    table.timestamp("created_at").defaultTo(knex.fn.now()).alter();
    table.timestamp("updated_at").defaultTo(knex.fn.now()).alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("products", (table) => {
    table.timestamp("created_at").defaultTo(knex.fn.now()).alter();
    table.timestamp("updated_at").defaultTo(knex.fn.now()).alter();
  });
}
