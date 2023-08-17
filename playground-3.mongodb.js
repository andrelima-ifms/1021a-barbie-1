//Filtrando dados com mysql
// SELECT * from personal WHERE _id=1;
//Filtrando dados no mongodb
use("bdacademia");
db.personal.find({_id:1},{salario:true})
