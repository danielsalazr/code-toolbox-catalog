stri = 'MERECUMBÉ MAXI SKIRT 6 TIEPRINT EMERALD GRE'

chars = set('ÁÉÍÓÚ')
if any((c in chars) for c in stri):
    print('Found')
    #print(c)
else:
    print('Not Found')