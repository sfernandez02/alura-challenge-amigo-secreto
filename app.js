let amigos = [];
const regex = /^[A-Za-z]+$/;

function limpiarLista(id){
    let lista = document.getElementById(id);   
    lista.innerHTML = "";
    return lista;
}

function crearlista(indice){
    let lista = document.createElement('li');
    lista.innerHTML = amigos[indice].charAt(0).toUpperCase() + amigos[indice].slice(1).toLowerCase();
    return lista;    
}


function agregarAmigo(){    
    let nombreAmigo = (document.getElementById('amigo').value).toLowerCase();    
    document.getElementById('amigo').value = '';
    if(!regex.test(nombreAmigo)){
        alert('Por favor, inserte un nombre valido. ');
    }else if(amigos.includes(nombreAmigo)){
        alert('el amigo ingresado esta en la lista.');
    }else{
        amigos.push(nombreAmigo);
        listaAmigos();
        document.getElementById('reiniciar').removeAttribute('disabled');
    }    
}

function listaAmigos(){
    let lista = limpiarLista('listaAmigos');
    for(i = 0; i<amigos.length; i++){          
        lista.appendChild(crearlista(i));
    }
    
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('no se han ingresado amigos');
    }else{        
        let numAmigo = Math.floor(Math.random()*(amigos.length));
        limpiarLista('listaAmigos');        
        limpiarLista('resultado').appendChild(crearlista(numAmigo));
        
    }    
}

function reiniciar(){
    amigos = [];
    limpiarLista('listaAmigos');
    limpiarLista('resultado');
    document.getElementById('reiniciar').setAttribute('disabled','true');
}



