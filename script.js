

function buscaCep() {
    var inputCep = document.getElementById("input-cep").value;
    var cep = inputCep.replace("-","");
    
    var xhr = new XMLHttpRequest(); 
    method = "GET";
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    xhr.open(method,url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            preencheCampos(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}
        

function preencheCampos(json) {
    document.getElementById("input-rua").value = json.logradouro;
    document.getElementById("input-bairro").value = json.bairro;
    document.getElementById("input-cidade").value = json.localidade;
    document.getElementById("input-estado").value = json.uf;
}