const cliente = {
    nome:"andre",
    idade:45,
    cpf:"1232132131",
    email:"wemdellcos@gmail.com",
    fones:["1231232213","123132213","2313213213"],
    
    dependentes :[
        {
        nome : "Sara",
        parentesco:  "filha",   
        dataNasc:"10/05/2000"},
        { 
        nome:"wendell santos ",
        parentesco:"filho",
        dataNasc:"04/05/2000"

        }
    ],




    
    saldo : 100,
     depositar: function(valor){
        this.saldo +=valor 
    }
}
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
 