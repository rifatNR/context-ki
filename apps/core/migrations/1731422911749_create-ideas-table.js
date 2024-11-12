exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("ideas", {
        id: {
            type: "serial",
            primaryKey: true,
        },
        user_id: {
            type: "integer",
            references: "users(id)",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            notNull: true,
        },
        title: {
            type: "varchar(255)",
            unique: true,
            notNull: true,
        },
        subtitle: {
            type: "varchar(255)",
            unique: false,
            notNull: false,
        },
        details: {
            type: "text",
            unique: false,
            notNull: false,
        },
        image: {
            type: "text",
            unique: false,
            notNull: false,
        },
        claimed_date: {
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
    pgm.dropTable("ideas");
};
