let key = 'item 1';
localStorage.setItem(key, 'value');
let myItem = localStorage.getItem(key);
localStorage.setItem(key, 'new value');
localStorage.removeItem(key);
localStorage.clear();

function respondaApos2Segundos() {
    return new Promise(resposta => {
        setTimeout(() => {
            resposta('resposta');
        }, 2000);
    });
}

async function chamadaAssincrona() {
    console.log('chamando');
    const result = await respondaApos2Segundos();
    console.log(result);
    // Saida esperada: "resposta"
}