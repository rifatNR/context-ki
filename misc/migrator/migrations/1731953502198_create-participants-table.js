exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("participants", {
        id: {
            type: "serial",
            primaryKey: true,
        },
        idea_id: {
            type: "string",
            references: "ideas(id)",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            notNull: true,
        },
        user_id: {
            type: "integer",
            references: "users(id)",
            notNull: false,
        },
        is_author: {
            type: "boolean",
        },
        email: {
            type: "varchar(255)",
            notNull: true,
        },
        state: {
            type: "varchar(100)",
            notNull: true,
            default: "pending",
        },
        invite_date: {
            type: "timestamp",
            notNull: false,
        },
        accept_reject_date: {
            type: "timestamp",
            notNull: false,
        },
        created_at: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
        updated_at: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("participants");
};
