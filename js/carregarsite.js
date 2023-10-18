import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';
document.addEventListener("DOMContentLoaded", async function () {

    conectar();

    const database = getDatabase();
    const usersRef = ref(database, 'Samuel');


    function verificar (){
        let senha = document.getElementById("senha2");
        let b = document.querySelector("body");
        get(usersRef).then(async (snapshot) => {
            if (snapshot.exists()) {
                let senhav = snapshot.val().senha2;
                if (senhav == senha.value){
                    try {
                        const snapshot = await get(usersRef);
                        const data = snapshot.val().site;
                        const divConteudo = document.getElementById('conteudoHTML');
                        divConteudo.innerHTML = data;
                
                    } catch (error) {
                        console.error("Erro ao obter os dados:", error);
                    }
                }
                else{
                    b.style.display = "none";
                    console.log("Errada");
                }
                
            } else {
                console.log("O nó 'usuarios' não existe no banco de dados.");
            }
        }).catch((error) => {
            console.log("Erro ao obter os dados:", error);
        });
    }
    const button = document.getElementById('btn');
    button.addEventListener('click', verificar);


//Fim do escopo

});