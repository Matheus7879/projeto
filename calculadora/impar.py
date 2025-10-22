numeros= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
pares = []
impares = []
for num in numeros:
    if num %2 == 0:
     pares.append(num)
    else:
     impares.append(num)
print("pares:",pares)
print("impares:",impares)

print("-"*72)

#lista
vetor1 = (1,2,3,4,)
vetor2 = (6,7,8,9,10)
vetor3 = (2,12,13,14,15)
vetor4 = (1,17,18,19,20)
#exibe
print(vetor1,vetor2,vetor3,vetor4)
#multplicação
multiplicacao = []
for num in range(len(vetor1)):
    resultado = vetor1[0] * vetor2[0] * vetor3[0] * vetor4[0]
multiplicacao.append(resultado)
print(multiplicacao)

num1 = int(input("Digite o primeiro numero: "))
num2 = int(input("Digite o primeiro numero: "))
operacao = (input("Digite a operação: "))
if operacao == "+":
   resultado = num1 + num2
elif operacao == "-":
   resultado = num1 - num2
elif operacao == "/":
   resultado = num1 * num2
elif operacao == "*":
   resultado = num1 * num2
else:
   resultado = ("Operação invalida")

print("Resultado:", resultado)