import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import  conectar from './conexao.js';
document.addEventListener("DOMContentLoaded", function () {
    
    conectar();

    // Referenciar o Realtime Database
    const database = getDatabase();
    const usersRef = ref(database, 'Samuel');

    function verDados() {
        let senha = document.getElementById("senha");
        let b = document.querySelector("body");

        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const senhav = snapshot.val().senha;
                if (senhav == senha.value){
                    window.location.href = "site.html";
                }
                else{
                    b.style.display = "none";
                }
                
            } else {
                console.log("O nó 'usuarios' não existe no banco de dados.");
            }
        }).catch((error) => {
            console.log("Erro ao obter os dados:", error);
        });

    }

    // Botão para chamar a função de adicionar os dados
    const button = document.getElementById('verificar');
    button.addEventListener('click', verDados);

});