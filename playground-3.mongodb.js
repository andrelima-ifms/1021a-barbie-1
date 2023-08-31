
use("bdacademia");
db.dropDatabase();
use("bdacademia");
db.createCollection("personal");
db.personal.insertMany([
    {_id:1,
        nome:"Júlio",
        salario:3000, 
        alunos:[
            {
                nome:"Tere",
                idade:28
            },
            {
                nome:"João",
                idade:34
            },
            {
                nome:"Pedro",
                idade:60
            }
        ]
    },
    {_id:2,nome:"Adriano",salario:3000,alunos:[]},
    {_id:3,nome:"Thaina",salario:4000,alunos:[]}
])

//Como apagar algum dado de uma collection
// db.personal.drop() //Apaga uma collection
// db.personal.find()

db.personal.deleteMany({})
