// ATIVIDADE 1
// Exercício 1
console.log("Arquivo vinculado !");
// Exercício 2
document.querySelector('div.avatar-content').innerHTML = '<img class="avatar" src="/img/avatar-example.png"> <span>Nome Usuário</span>';
// Exercício 3
document.querySelector('input[name="name"]').placeholder = 'Primeiro Nome';
// Exercício 4
document.getElementsByClassName('avatar-content').innerHTML = '<img class="avatar" src="/img/avatar-example.png"> <span>Ale</span>';

// ATIVIDADE 2
// Exercício 1
var example = document.querySelectorAll("input")
for (i=0;i<example.length;i++){
    example[i].style.borderRadius="4px"
};
// Exercício 2
var example = document.querySelectorAll("input")
for (i=0;i<example.length;i++){
    example[i].style.display="flex";
    example[i].style.flexWrap="wrap";
    example[i].style.flexDirection="column";
    example[i].style.justifyContent="center";
    example[i].style.alignItems="center";
    example[i].style.width="100%";
};
// Exercício 3
document.body.style.backgroundColor="#fafafa";
// Exercício 4
document.querySelector("div").style.cssText = "display: flex; border-radius: 10px; background-color: yellow"; 