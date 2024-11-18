exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("participants", {
        id: {
            type: "serial",
            primaryKey: true,
        },
        ideaId: {
            type: "string",
            references: "ideas(id)",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            notNull: true,
        },
        userId: {
            type: "integer",
            references: "users(id)",
            notNull: false,
        },
        isAuthor: {
            type: "boolean",
        },
        email: {
            type: "varchar(255)",
            notNull: true,
        },
        state: {
            type: "varchar(100)",
            notNull: true,
            default: "invited",
        },
        inviteDate: {
            type: "timestamp",
            notNull: false,
        },
        acceptRejectDate: {
            type: "timestamp",
            notNull: false,
        },
        createdAt: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
        updatedAt: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("participants");
};
