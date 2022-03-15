const cliente = {
    nome:"andre",
    idade:45,
    cpf:"1232132131",
    email:"wemdellcos@gmail.com"
}                   //0       1     2       3
const chaves = [ "nome","idade","cpf","email"]

console.log(cliente[chaves[0]]) 

chaves.forEach(info=>console.log(cliente[info]))