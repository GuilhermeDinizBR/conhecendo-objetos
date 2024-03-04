const estudante = {
    nome: 'José Siva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    tefefones: ['5511999998', '5511999993'],
    endereco: [{
    rua: 'Rua joseph Climber',
    numero: '45',
    complemento: 'apto 43'
    }]
}

estudante.endereco.push({
    rua: 'Dona Clotilde',
    numero: '71',
    complemento: null
})

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('é necessário ter um endereço cadastrado')
}