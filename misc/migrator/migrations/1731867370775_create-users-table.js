exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("users", {
        id: {
            type: "serial",
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
        createdAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
        updatedAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("users");
};
