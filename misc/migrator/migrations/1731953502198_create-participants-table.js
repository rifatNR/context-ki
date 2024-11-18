exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("participants", {
        id: {
            type: "serial",
            primaryKey: true,
        },
        userId: {
            type: "integer",
            references: "users(id)",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            notNull: true,
        },
        ideaId: {
            type: "string",
            references: "ideas(id)",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            notNull: true,
        },
        isAuthor: {
            type: "boolean",
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
    pgm.dropTable("ideas");
};
