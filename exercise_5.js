async function obterClienteNoBancoDeDados(idCliente) {
        const retorno = await new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
        resolve(cliente);
        });
    return retorno;
}

async function processar() {
    const resposta = await obterClienteNoBancoDeDados(7)
    console.log(resposta);
}

processar();