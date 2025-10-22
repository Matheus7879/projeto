#lista
vetor1 = (100,200,300,400)
vetor2 = (15,76,54,23)
vetor3 = (10,55,33,18)
vetor4 = (9,33,25,9)
vetor5 = (1,2,3,4)
#exibe
print(vetor1,vetor2,vetor3,vetor4,vetor5)
#separa
print("-"*40)
#porcentagem em python
subtracao = []
for i in range(len(vetor1)):
    resultado = vetor1[1] - vetor2[1] - vetor3[1] - vetor4[1] - vetor5[1]
subtracao.append(resultado)
#exibe
print(subtracao)
print("-"*40)
#calculadora
num1 = int(input("Digite o primeiro numero: "))
num2 = int(input("Digite o segundo numero: "))
operacao = (input("Digite a operação(+,-,/,*) "))
if operacao == "+":
    resultado = num1 + num2
elif operacao == "-":
    resultado = num1 - num2
elif operacao == "/":
    resultado = num1 / num2
elif operacao == "*":
    resultado = num1 * num2
else:
    resultado = ("Operação invalida")
print(resultado)


















num1 = int(input("Digite o primeiro numero: "))
num2 = int(input("Digite o segundo numero: "))
operacao = (input("Digite a operação(+,-,/,*,%) "))
if operacao == "+":
    resultado = num1 = num2
elif operacao == "-":
    resultado = num1 - num2
elif operacao == "/":
    resultado = num1 / num2
elif operacao =="*":
    resultado = num1 * num2
elif operacao == "%":
    resultado = num1 % num2
else:
    resultado = ("Operação invalida")

print(resultado)
