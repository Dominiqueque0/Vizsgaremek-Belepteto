create table security_user (
    id          int         not null        primary key     auto_increment,
    first_name              varchar(100)    not null,
    last_name               varchar(100)    not null,
    username                varchar(100)    not null,
    password                varchar(100)    not null,
    role                    varchar(100)    not null,
    authority               varchar(100)    not null
);