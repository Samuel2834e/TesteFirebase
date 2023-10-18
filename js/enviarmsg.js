import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import conectar from './conexao.js';

conectar();
document.addEventListener("DOMContentLoaded", function () {
    const database = getDatabase();

    function setValor(valor) {
        const mensagensRef = ref(database, 'Mensagens');

        get(mensagensRef).then((snapshot) => {
            const data = snapshot.val();
            const numeroDeElementos = Object.keys(data).length;

            const novoNoRef = ref(database, 'Mensagens/' + (numeroDeElementos + 1));
            set(novoNoRef, valor).then(() => {
                console.log('Valor definido com sucesso no nó: ' + (numeroDeElementos + 1));
            }).catch((error) => {
                console.error('Erro ao definir valor no nó: ', error);
            });
        }).catch((error) => {
            console.error('Erro ao obter dados: ', error);
        });

    }
    
    let btnEnviar = document.getElementById("enviarMsg");
    btnEnviar.addEventListener('click', function() {
        let msg = document.getElementById("msg").value;
        setValor(msg);
    });
    
});
