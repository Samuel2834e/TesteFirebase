import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

import conectar from './conexao.js';

conectar();
document.addEventListener("DOMContentLoaded", function () {
    function carregarmsg() {
        const database = getDatabase();
        const mensagensRef = ref(database, 'Mensagens');
        onValue(mensagensRef, (snapshot) => {
            const data = snapshot.val();
            const divConteudo = document.getElementById('mensagens');
            divConteudo.innerHTML = '';
            const valores = Object.values(data);
            for (let i = 0; i < valores.length; i++) {
                let p = document.createElement('p');
                p.textContent = valores[i];
                divConteudo.appendChild(p);
            }
        });
    }
    carregarmsg();
});
