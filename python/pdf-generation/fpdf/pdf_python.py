from turtle import width
from fpdf import FPDF

import datetime
import os
import time
import environ
import math

env = environ.Env()
environ.Env.read_env()
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

URL_ARIAL_TTF = env.str('URL_ARIAL_TTF')

#Objeto que me genera una hoja nueva
class PDF(FPDF):
    pass
    def qr(self, name, x, y, w, h):
        self.image(name, x, y, w, h)

    def texts(self ,name):
        with open(name, 'rb') as xy:
            txt = xy.read().decode('latin-1')
        self.set_xy(10.0,80.0)
        self.set_text_color(76.0, 32.0, 250.0)
        self.set_font('Arial','' ,12)
        self.multi_cell(0,10,txt)

    def datos_documento(self, title):
        self.set_xy(0.0,0.0)
        self.set_font('Arial','8',16)
        self.set_text_color(220, 50, 50)
        self.cell(w=210.0, h=40.0 ,align='C', txt=title, border=0)

""" Información del Encabezado """
qrName = "info QR"
tituempr = "JOHANNA ORTIZ ZONA FRANCA SAS"
tituciud = "PALMIRA - VALLE - COLOMBIA - SUR AMERICA"
titunit  = "NIT: 901.031.553 - 2"
titudire = "KM 6 VIA YUMBO - AEROPUERTO MANZANA E BODEGA 1 Y 2 / ZONA FRANCA DEL PACIFICO"
titutele = "PBX (57 2) 641 00 15"
titucorreo = "paola@johannaortiz.com"
cargo = "PACKING LIST"
hora = datetime.datetime.now()
hora = hora.strftime('%d%m%Y%H%M%S')
pdfname = "report_PackingList_"+hora+".pdf"

""" Generamos una hoja para trabajarla """
# P : (VERTICAL)
# L : (HORIZONTAL)
pdf = PDF(orientation = 'L', unit = 'mm', format = 'A4')

def addPage():
    pdf.add_page()
    pdf.add_font('Arial', '', URL_ARIAL_TTF, uni=True)
    pdf.set_font('Arial', 'B', 9)
    pdf.set_author('cristian gomez')

addPage()

""" Pegamos informacion del encabezado """
pdf.set_xy( 105, 2)
pdf.set_font('Arial', 'B', 12)
pdf.cell(40, 10, tituempr, 0)
pdf.set_xy( 125, 7)
pdf.set_font('Arial', '', 10)
pdf.cell(40, 10, titunit, 0)
pdf.set_xy( 70, 11)
pdf.cell(40, 10, titudire, 0)
pdf.set_xy( 125, 15)
pdf.cell(40, 10, titutele, 0)
pdf.set_xy( 123, 21)
pdf.cell(80, 5, titucorreo,0)
pdf.set_xy( 106, 25)
pdf.cell(80, 5, tituciud, 0)
pdf.set_xy( 125, 29)
pdf.set_font('Arial', 'B', 14)
pdf.cell(40, 10, cargo, 0)

##Aqui viene lo chido ##

""" Encabezados de la tabla """
pdf.set_xy( 128, 39)
pdf.set_font('Arial', 'B', 10)
pdf.cell(w = 56, h = 6, txt = 'TALLAS/SIZES', border = 1,ln = 1,align = 'C', fill = 0)


pdf.set_xy( 128, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '35', border = 1,ln = 1,align = 'C', fill = 0)
pdf.set_xy( 136, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '36', border = 1,ln = 1,align = 'C', fill = 0)
pdf.set_xy( 144, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '37', border = 1,ln = 1,align = 'C', fill = 0)
pdf.set_xy( 152, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '38', border = 1,ln = 1,align = 'C', fill = 0)
pdf.set_xy( 160, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '39', border = 1,ln = 1,align = 'C', fill = 0)
pdf.set_xy( 168, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '40', border = 1,ln = 1,align = 'C', fill = 0)
pdf.set_xy( 176, 51.5)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6, txt = '41', border = 1,ln = 1,align = 'C', fill = 0)

pdf.set_xy( 128, 45)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '0', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '2', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '4', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '6', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '8', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '10', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '12', border = 1,align = 'C', fill = 0)

pdf.set_xy( 198, 51.5)
pdf.set_font('Arial', 'B', 10)
pdf.cell(w = 84, h = 6, txt = str("prueba"), border = 1,ln = 1,align = 'C', fill = 0)

pdf.set_xy( 10, 51.5)
pdf.set_font('Arial', 'B', 10)
pdf.cell(w = 70, h = 6, txt = 'BOX No. '+str("prueba")+'/'+str("prueba"), border = 1,ln = 1,align = 'C', fill = 0)

pdf.set_font('Arial', 'B', 8)
pdf.cell(w = 15, h = 6.5, txt = 'CODIGO', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 8)
pdf.cell(w = 55, h = 6.5, txt = 'REFERENCIA', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 8)
pdf.cell(w = 48, h = 6.5, txt = 'COLOR', border = 1,align = 'C', fill = 0)


pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = 'XS', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = 'S', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = 'M', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = 'L', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = 'XL', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = '', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 8, h = 6.5, txt = 'OS', border = 1,align = 'C', fill = 0)


pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 14, h = 6.5, txt = 'CANTIDAD', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 7)
pdf.cell(w = 27, h = 6.5, txt = 'COUNTRY OF ORIGIN', border = 1,align = 'C', fill = 0)
pdf.set_font('Arial', 'B', 8)
pdf.multi_cell(w = 57, h = 6.5, txt = 'DESCRIPCION', border = 1,align = 'C', fill = False)


valor = ["WOMEN PAREO IN WOVEN FABRIC VISCOSE 0001 65.00% SILK 0002 35.00%",
         "WOMEN BELT POLYPROPYLENE 0029 47.00% COW LEATHER 0013 33.00% RUBBER 0050 20.00% ",
         "WOMEN ONEPIECE KNITTED POLYAMIDE 0007 65.00% LUREX 0102 30.00% ELASTHANE 0006 5.00% WITH BELT",
         #"WOMEN SKIRT IN WOVEN FABRIC ACRYLIC 0038 45.00% CELLULOSE ACETATE 0072 41.00% POLYESTER 0019 14.00%WOMEN SKIRT IN WOVEN FABRIC ACRYLIC 0038 45.00% CELLULOSE ACETATE 0072 41.00% POLYESTER 0019 14.00%",
         #"WOMEN SKIRT IN WOVEN FABRIC ACRYLIC 0038 45.00% CELLULOSE ACETATEe 0072 41.00% POLYESTER 0019 14.00%WOMEN SKIRT IN WOVEN FABRIC ACRYLIC 0038 45.00% CELLULOSE ACETATE 0072 41.00%",
         #"WOMEN SKIRT IN WOVEN FABRIC ACRYLIC 0038 45.00% CELLULOSE ACETATEe",

         #"blusa de campo"
]
noLines = 0
for descripciones in  valor:
    if noLines == 10: 
        noLines = 0
        pushLowerLeftPanel()
        pushBottomPanel()
        addPage()



    noLines = noLines + 1

    pdf.set_font('Arial', '', 6)
    pdf.cell(w = 15, h = 6, txt = str("PT00858"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 4)
    pdf.cell(w = 55, h = 6, txt = str("PT00858"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 6)
    pdf.cell(w = 48, h = 6, txt = str("PT00858"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 8, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 14, h = 6, txt = str("1"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 7)
    pdf.cell(w = 27, h = 6, txt = str("PT00858"), border = 1, align = 'C', fill = 0)
    pdf.set_font('Arial', '', 4)



    # celdas con varios renglones

    # if descripciones == "None" or len(descripciones) <= 67: #67
    #     pdf.multi_cell(w = 57, h = 6, txt = str(descripciones), border = 1, align = 'C', fill = False)
    # else:
    #     pdf.multi_cell(w = 57, h = 3, txt = str(descripciones), border = 1, align = 'C', fill = False)

    # pdf.multi_cell(w = 57, h = 6, txt = str(descripciones), border = 1, align = 'C', fill = False)
    print(pdf.get_string_width(descripciones))

    descripciones=" ".join(str(descripciones).split())


    num_lines =6/(int(len(descripciones)/65)+1)
    #tamanio_renglon = pdf.get_string_width(descripciones)
    width_multicell = 57
    #heigth_multicell = 6/(math.ceil((tamanio_renglon)/(width_multicell-2)))
    #print(f"nuevo metodo {heigth_multicell} viejo metodo {num_lines}")
    pdf.multi_cell(
        w = width_multicell,
        h= num_lines,
        txt = str(descripciones), border = 1,
        align = 'C', fill = False
    )
    #print(len(descripciones))
    
    #print(6/len(descripciones)%65)
    #print(int(len(descripciones)/65)+1)


file_path = '/media/'+pdfname
pdf.output( os.path.join(BASE_DIR, pdfname), 'F')
#pdf.render(os.path.join(BASE_DIR, pdfname))


