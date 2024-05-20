cliente = input().split()
nome = cliente[0]
xp = int(cliente[1])
elos = ["ferro","bronze","prata","ouro","platina","ascendente","imortal","radiante"]


if xp <1000:
    print(f'O Herói de nome {nome} está no nível {elos[0]}')
elif xp >1000 and xp <2000:
    print(f'O Herói de nome {nome} está no nível {elos[1]}')
elif xp >2000 and xp<5000:
    print(f'O Herói de nome {nome} está no nível {elos[2]}')
elif xp>6000 and xp<7000:
    print(f'O Herói de nome {nome} está no nível {elos[3]}')
elif xp>7000 and xp<8000:
    print(f'O Herói de nome {nome} está no nível {elos[4]}')
elif xp>8000 and xp<9000:
    print(f'O Herói de nome {nome} está no nível {elos[5]}')
elif xp>9000 and xp<10000:
    print(f'O Herói de nome {nome} está no nível {elos[6]}')
elif xp>10000:
    print(f'O Herói de nome {nome} está no nível {elos[7]}')
else:
    print("erro")

