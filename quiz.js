
const q1 = {
    numQuestao: 1,
    pergunta: "(Enem PPL 2019) A depressão que afetou a economia mundial entre 1929 e 1934 se anunciou, ainda em 1928, por uma queda generalizada nos preços agrícolos internacionais. Mas o fator mais marcante foi a crise financeira detonada pela quebra da bolsa de Nova Iorque.",
    com: "Perante o cenário econômico descrito, o Estado brasileiro assume, a partir de 1930, uma política de incentivo à",
    alternativaA: "Industrialização interna para substituir as importações.",
    alternativaB: "Nacionalizção de empresas estrangeiras atingidas pela crise.",
    alternativaC: "Venda de terras a preços acessíveis para os pequenos produtores",
    alternativaD: "Entrada de imigrantes para trabalhar nas indústrias de base recém-criadas",
    alternativaE: "Abertura de linhas de financiamento especial para empresas do setor terciário",
    correta: "alternativaA"
}

const q2 = {
    numQuestao: 2,
    pergunta: "(Enem 2021) Quando Getúlio Vargas se suicidou, em agosto de 1954, o país parecia a beira do caos. Acuado por uma grave crise política, o velho líder preferiu uma bala no peito à humilhação de aceitar uma nova deposição, como a que sofrera em outubro de 1945. Entretanto, ao contrário do que imaginavam os inimigos, ao ruído do estampido não se seguiu o silêncio que cerca a derrota.",
    com: "O evento analisado no texto teve como repercussão imediata na política nacional a",
    alternativaA: "Abertura democrática",
    alternativaB: "Intervenção militar",
    alternativaC: "Reação popular",
    alternativaD: "Campanha anticomunista",
    alternativaE: "Radicalização oposicionista",
    correta: 2
}

const q3 = {
    numQuestao: 3,
    pergunta: "(Enem 2017) Durante o Estado Novo, os encarregados da propaganda proucuram aperfeiçoar-se na arte da empolgação e envolvimento das 'multidões' através das mensagens políticas. Nesse tipo de discurso, o significado das palavras importa pouco, pois, como declarou Goebbels, 'não falamos para dizer alguma coisa, mas para obter determinado efeito'.",
    com: "O controle sobre os meios de comunicação foi uma marca do Estado Novo, sendo fundamental à propaganda política, na medida em que visava",
    alternativaA: "Estender a participação democrática dos meios de comunicação no Brasil",
    alternativaB: "Ampliar o envolvimento das multidões nas decisões políticas",
    alternativaC: "Aumentar a oferta de informações públicas para a sociedade civil.",
    alternativaD: "Conquistar o apoio popular na legitimização do novo governo.",
    alternativaE: "Alargar o entendimento da população sobre as intenções do novo governo.",
    correta: 2
}

var total = document.querySelector('#total')
var i = 1

var numQuestao = document.querySelector('#numquestion')
var pergunta = document.querySelector('#questao')
var com = document.querySelector('#com')

var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')
var d = document.querySelector('#d')
var e = document.querySelector('#e')

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
com.textContent = q1.com
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

var botao = document.querySelector('.botao')
var botaos = document.querySelector('.botaos')
var botaoss = document.querySelector('.botaoss')
var botaosss = document.querySelector('.botaosss')
var reiniciar = document.querySelector('.reiniciar')
var cont = document.querySelector('.quiz-header')
var number = document.querySelector('#number')
var final = document.querySelector('.totals')
var finals = document.querySelector('#totaus')
var somAcerto = document.querySelector('#somAcerto')
var somErro = document.querySelector('#somErro')
var erro = document.querySelector('.quiz-container')

function analisar(){
    f = Number(number.value)
    var resposta = 1   

    if(f == resposta){
        numQuestao.textContent = q2.numQuestao
        pergunta.textContent   = q2.pergunta
        a.textContent = q2.alternativaA
        b.textContent = q2.alternativaB
        c.textContent = q2.alternativaC
        d.textContent = q2.alternativaD
        e.textContent = q2.alternativaE

        a.setAttribute('value', '1A')
        b.setAttribute('value', '1B')
        c.setAttribute('value', '1C')
        d.setAttribute('value', '1D')
        e.setAttribute('value', '1E')

        total.innerHTML = i++
        somAcerto.play()
        erro.style.background = "#00fa2a";

        setTimeout(() => {
            erro.style.background = "#1a1d29";
        }, "500")

        botao.style.display = "none"
        botaos.style.display = "block"
        botaoss.style.display = "none"
        botaosss.style.display = "none"
        reiniciar.style.display = "none"
    }else{

        somErro.play()
        erro.style.background = "red";

        setTimeout(() => {
            erro.style.background = "#1a1d29";
        }, "500")

        botao.style.display = "block"
        botaos.style.display = "none"
        botaoss.style.display = "none"
        botaosss.style.display = "none"
        reiniciar.style.display = "none"
    
    }
}


function analisando(){
    f = Number(number.value)
    var resposta = 3

    if(f == resposta){
        numQuestao.textContent = q3.numQuestao
        pergunta.textContent   = q3.pergunta
        a.textContent = q3.alternativaA
        b.textContent = q3.alternativaB
        c.textContent = q3.alternativaC
        d.textContent = q3.alternativaD
        e.textContent = q3.alternativaE

        a.setAttribute('value', '1A')
        b.setAttribute('value', '1B')
        c.setAttribute('value', '1C')
        d.setAttribute('value', '1D')
        e.setAttribute('value', '1E')

        total.innerHTML = i++
        somAcerto.play()
        erro.style.background = "#00fa2a";

        setTimeout(() => {
            erro.style.background = "#1a1d29";
        }, "500")

        botao.style.display = "none"
        botaos.style.display = "none"
        botaoss.style.display = "block"
    }else{

        somErro.play()
        erro.style.background = "red";

        setTimeout(() => {
            erro.style.background = "#1a1d29";
        }, "500")

        botao.style.display = "none"
        botaos.style.display = "block"
        botaoss.style.display = "none"
    }
}

function analisarmos(){
    
    f = Number(number.value)
    var resposta = 4

    if(f == resposta){
        a.innerHTML = `Sua pontuação foi ${i} de 3 pontos`

        total.innerHTML = i++ 
        somAcerto.play()
        erro.style.background = "#00fa2a";

        setTimeout(() => {
            erro.style.background = "#1a1d29";
        }, "500")

        botao.style.display = "none"
        botaos.style.display = "none"
        botaoss.style.display = "none"
        botaosss.style.display = "block"
        reiniciar.style.display = "block"
        cont.style.display = "none"
        final.style.display = "block"
        finals.style.display = "none"
    }else{
        
        somErro.play()
        erro.style.background = "red";

        setTimeout(() => {
            erro.style.background = "#1a1d29";
        }, "500")

        botao.style.display = "none"
        botaos.style.display = "none"
        botaoss.style.display = "block"
        botaosss.style.display = "none"
        reiniciar.style.display = "none"
    }
}