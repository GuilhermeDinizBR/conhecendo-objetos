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
    }]
}

estudante.enderecos.push({
    rua: 'Dona Clotilde',
    numero: '71',
    complemento: null
})


function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(estudante.tefefones[0], estudante.tefefones[1])
exibirTelefones(...estudante.tefefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);