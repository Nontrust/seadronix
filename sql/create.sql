ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';


create database seadronix_db;
use seadronix_db;
create table SDRNX_MEMBER(
	user_seq int not null auto_increment,
    id varchar(20),
    pw varchar(200),
    name varchar(10),
    primary key(user_seq)
);

insert into sdrnx_member(id, pw, name) value('deed1515', '1234', '이충호');
commit;

commit;