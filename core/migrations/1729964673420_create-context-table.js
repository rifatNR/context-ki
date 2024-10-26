"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("contexts", {
        id: { type: "serial", primaryKey: true },
        title: { type: "varchar(255)", notNull: true },
        context: { type: "text", notNull: true },
        details: { type: "text", unique: false, notNull: false },
        image: { type: "text", unique: false, notNull: false },
        created_at: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("contexts");
};
