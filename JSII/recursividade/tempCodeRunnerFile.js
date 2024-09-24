function verificarRecuperação(osEstudantes, index=0, listaRecuperação=[]){
    if(index >= osEstudantes.length){
        return listaRecuperação;
    }
    if(osEstudantes[index].situacao == "Recuperação"){
        listaRecuperação.push(osEstudantes[index]);
    }
    return verificarRecuperação(osEstudantes, index+1, listaRecuperação);
}