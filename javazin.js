principal()
function principal() {
    var escolha = parseFloat(prompt("Escolha uma opção de 1 a 11:\n1) Dois valores informados irei divir somente quando o segundo forma maior ou igual a 1\n2) Bomba Relogio\n3) Algoritmo para imprimir os numeros de 1 a 10\n4) Media aritmetica dos numeros inteiros entre 15 e 100\n5) Calcular a média aritmética de dois\n6) O aluno passou ou não com array\n7) Calculo da média da nota de seis notas\n8) imprimir todos os valores inteiros entre 1 e o valor que você informar\n9) Imprimir os 10 primeiros números inteiros maiores que 100\n10) Tabuada\n11) Quantos numeros estão entre 24 e 42 estão fora deste intervalo"));

    switch (escolha) {

        case 1:
            atividade1();
            break;
        case 2:
            atividade2();
            break;
        case 3:
            atividade3();
            break;
        case 4:
            atividade4();
            break;
        case 5:
            atividade5();
            break;
        case 6:
            atividade6();
            break;
        case 7:
            atividade7();
            break;
        case 8:
            atividade8();
            break;
        case 9:
            atividade9();
            break;
        case 10:
            atividade10();
            break;
        case 11:
            atividade11();
            break;
        default:
            erro();
    }
}




function atividade1() {
    // 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

    var valor1 = parseFloat(prompt("Informe o primeiro valor"));
    var valor2 = parseFloat(prompt("Informe o segundo valor"));

    if (valor2 <= 0) {
        alert("Informe o segundo valor igual ou maior que 1");
        atividade1();
    }
    else {
        var resultado = (valor1 / valor2);
        alert(`O resultado final é ${resultado}`);
        principal();

    }

}




function atividade2(){

// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
function bombaRelogio() {
    var segundos = 30;
    var timer = setInterval(function() {
        document.write(segundos + '<br>');
        segundos--;

        if (segundos < 0) {
            clearInterval(timer);
            document.write('BOOOOOOM');
        }
    }, 1000);
}

bombaRelogio();

}




function atividade3(){

    // 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
    // Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        var segundos = 10;
        var timer = setInterval(function() {
            document.write(segundos + '<br>');
            segundos--;
    
            if (segundos < 0) {
                clearInterval(timer);
                document.write('');
            }
        }, 1000);
    }
    
    de10a0();
    



    function atividade4(){
        // 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

                 var soma = 0; 
                 var contador = 0; 
         
                 for (var i = 15; i <= 100; i++) {
                     soma += i; 
                     contador++;
                 }
         
                 var media = soma / contador; 
    
                 document.write("A média dos números de 15 a 100 é: " + media);
    }


    

    function atividade5(){
        // 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

        var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
        var numero2 = parseInt(prompt("Digite o segundo número inteiro (deve ser maior que o primeiro):"));
        var soma = 0;
        var quantidadeNumeros = 0;

        if (numero1 >= numero2) {
            alert("O segundo número deve ser maior que o primeiro.");
            atividade5();
        } else {
            for (var i = numero1; i <= numero2; i++) {
                soma += i;
                quantidadeNumeros++;
            }

            var mediaTotal = soma / quantidadeNumeros;
            alert("A média aritmética dos números entre " + numero1 + " e " + numero2 + " é: " + mediaTotal.toFixed(2));
            principal();
        }

    }



    function atividade6(){
        // 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

        var alunosAprovados = 0;
while (true){
        
        var nota1 = parseFloat(prompt("Qual é a primeira nota"));
        var nota2 = parseFloat(prompt("Qual é a segunda nota"));

        var media = ((nota1 + nota2) / 2);

        if(media >= 9.5){
            var passouOuNao = ("PASSOU");
            alert(`A nota do aluno foi ${media} o aluno ${passouOuNao}`);
            alunosAprovados++;
            var continuar = prompt("Calcular a média de outro aluno Sim/Não?").toLowerCase();
        if (continuar !== "sim")    {
        principal();
        }
    }

        else if(media <= 9.5){
            var passouOuNao = ("NÃO passou");
            alert(`A nota do aluno foi ${media} o aluno ${passouOuNao}`);

            var continuar = ("Calcular a média de outro aluno Sim/Não?").toLowerCase();
        if (continuar !== "sim")    {
        principal();
        }
}

alert("Quantidade de alunos aprovados " + alunosAprovados)
}
}


        
function atividade7(){
//     7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
// Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 
        var notas = []; 

        for (var i = 1; i <= 6; i++) {
            var nota;
            do {
                nota = parseFloat(prompt("Digite a nota " + i + " (0 a 10):"));
            } while (isNaN(nota) || nota < 0 || nota > 10); 

            notas.push(nota);
        }

        var soma = 0;

        for (var i = 0; i < notas.length; i++) {
            soma += notas[i]; 
        }

        var media = soma / notas.length; 

        alert(`A média do aluno é: ${media}`);

        principal();

    }

function atividade8(){
//     8 - Ler um valor N e imprimir todos os valores inteiros entre 1 e N. Considere que o N será sempre maior que ZERO.
// N  é um valor informado pelo usuário
valores_inteiros_entre()
function valores_inteiros_entre() {
    var N = parseInt(prompt("Digite um número N:"));

    if (N <= 0 || isNaN(N)) {
        document.write("Por favor, insira um número válido maior que zero.");
        return;
    }

    var contador = 1;
    var timer = setInterval(function () {
        if (contador <= N) {
            document.write(contador + '<br>');
            contador++;
        } else {
            clearInterval(timer);
            document.write('FIM !!!');
        }
    }, 0);
}

valores_inteiros_entre();
}




    function atividade9(){
        // 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

        for (var i = 101; i <= 110; i++) {
            alert(i);
            principal();
          }
    }


    function atividade10(){
        // 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
            
        var N = parseInt(prompt("Digite um número N para calcular as tabuadas de 1 a N:"));

if (N <= 0 || isNaN(N)) {
    alert("Por favor, insira um número válido maior que zero.");
} else {
    var resultado = "";

    for (var i = 1; i <= N; i++) {
        resultado += "Tabuada do " + i + ":<br>";

        for (var j = 1; j <= 10; j++) {
            resultado += i + " x " + j + " = " + (i * j) + "<br>";
        }

        resultado += "<br>";
    }

    document.write(resultado);

}
}




    function atividade11(){
        // 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
var valoresDentroIntervalo = 0;
var valoresForaIntervalo = 0;

for (var i = 1; i <= 10; i++) {
  var valor = parseFloat(prompt("Informe o valor #" + i + ":"));

  if (!isNaN(valor) && valor >= 24 && valor <= 42) {
    valoresDentroIntervalo++;
  } else {
    valoresForaIntervalo++;
  }
}

alert("Valores dentro do intervalo [24, 42]: " + valoresDentroIntervalo);
alert("Valores fora do intervalo [24, 42]: " + valoresForaIntervalo);


    }




    function erro(){
        alert("Tente novamente!")
        principal();
    }