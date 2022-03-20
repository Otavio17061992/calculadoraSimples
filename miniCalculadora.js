let numero1 = Number(prompt('Digite um número:'));
let numero2 = Number(prompt('Digite mais um numero:'));
let operacao = prompt('Digite uma operação matematica: " + " " - " " * " " / " ');




    if (operacao == '+') {
        alert(`A soma entre ${numero1} e ${numero2} é ${numero1 + numero2} !`);
    }

    else if (operacao == '-') {
        alert(`A subitração entre ${numero1} e ${numero2} é ${numero1 - numero2} !`);
    }
    else if (operacao == '*') {
        alert(`A multiplicação entre ${numero1} e ${numero2} é ${numero1 * numero2} !`);
    }
    else if (operacao == '/') {
        alert(`A divisão entre ${numero1} e ${numero2} é ${numero1 / numero2} !`)
    }
    else if (operacao != toString){
        alert('Operação invalida')
    }



