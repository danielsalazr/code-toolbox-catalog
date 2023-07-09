stri= 'MERECUMBÉ MAXI SKIRT 6 TIEPRINT EMERALD GRE'
char_remov = ["Á","É","Í","Ó","Ú"]

for char in char_remov:
    # replace() "returns" an altered string
    stri = stri.replace(char_remov[0], "A")
    stri = stri.replace(char_remov[1], "E")
    stri = stri.replace(char_remov[2], "I")
    stri = stri.replace(char_remov[3], "O")
    stri = stri.replace(char_remov[4], "U")

print(stri)
