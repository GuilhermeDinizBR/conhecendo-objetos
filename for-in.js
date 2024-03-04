const estudante = {
    nome: 'José Siva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    tefefones: ['5511999998', '5511999993'],
    enderecos: [{
    rua: 'Rua joseph Climber',
    numero: '45',
    complemento: 'apto 43'
    },
    {
        rua: 'Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}


