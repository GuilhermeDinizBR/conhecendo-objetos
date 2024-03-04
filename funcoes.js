const estudante = {
    nome: 'José Siva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    tefefones: ['5511999998', '5511999993'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7));