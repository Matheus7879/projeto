while True:
    try:
        num1 = float(input("Digite o primeiro numero: "))
        num2 = float(input("Digite o segundo numero: "))
        operacao = (input("Digite a operação(+,-,/,*): "))
        if operacao == "+":
         resultado = num1 + num2
        elif operacao == "-":
         resultado = num1 - num2
        elif operacao == "/":
         resultado = num1 / num2
        elif operacao == "*":
         resultado = num1 * num2
        else:
             print("Operação invalida ")
             testar = (input("Tentar de novo(sim/não)"))
             if testar == "sim":
              continue
             elif testar == "nao":
              print("Fechando o programa")
             break
    except ValueError:
      print("Digite um numero valido")
         #resultado = ("Comece de novo")
        #elif resultado == "não":
         #resultado = ("Saia do programa")
        





