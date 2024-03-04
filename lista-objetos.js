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

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);