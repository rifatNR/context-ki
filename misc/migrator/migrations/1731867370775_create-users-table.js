exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("users", {
        id: {
            type: "varchar(255)",
            primaryKey: true,
        },
        username: {
            type: "varchar(50)",
            notNull: true,
            unique: true,
        },
        email: {
            type: "varchar(100)",
            notNull: true,
            unique: true,
        },
        photo: {
            type: "text",
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
        updated_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("users");
};
