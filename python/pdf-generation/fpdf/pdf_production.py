from django.conf import settings

from fpdf import FPDF
from picking.packinglist.codeQR import generateQR

import datetime
import os
import time

def exportPDF(listDataRow, infoGen):

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
    qrName = generateQR(str(infoGen[15]))
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
        pdf.add_font('Arial', '', settings.URL_ARIAL_TTF, uni=True)
        pdf.set_font('Arial', 'B', 9)
        pdf.set_author('cristian gomez')

    addPage()

    """ Traemos el qr """
    try: pdf.qr("/var/www/wms/wms/static/qr/"+qrName, 8, 8, 25, 25)
    except: pdf.qr("static/qr/"+str(qrName), 8, 8, 25, 25)

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
    pdf.cell(w = 84, h = 6, txt = str(infoGen[11]), border = 1,ln = 1,align = 'C', fill = 0)

    pdf.set_xy( 10, 51.5)
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(w = 70, h = 6, txt = 'BOX No. '+str(infoGen[12])+'/'+str(infoGen[13]), border = 1,ln = 1,align = 'C', fill = 0)

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


    """ Información panel inferior izquierdo """
    def pushLowerLeftPanel():
        pdf.set_xy( 12, 130)
        pdf.set_font('Arial', 'B', 7)
        pdf.cell(w = 60, h = 4, txt = 'PESO BRUTO/GROSS WEIGHT: '+ str(infoGen[0]) +' Kg' , border = 1,ln = 1,align = 'L', fill = 0)

        pdf.set_xy( 12, 134)
        pdf.set_font('Arial', 'B', 7)
        pdf.cell(w = 60, h = 4, txt = 'PESO NETO/NET WEIGHT: '+ str(infoGen[1]) +' Kg' , border = 1,ln = 1,align = 'L', fill = 0)

        pdf.set_xy( 12, 138)
        pdf.set_font('Arial', 'B', 7)
        pdf.cell(w = 60, h = 4, txt = 'BOX DIMENSIONS: '+ str(infoGen[2]) + " cm", border = 1,ln = 1,align = 'L', fill = 0)

        pdf.set_xy( 12, 142)
        pdf.set_font('Arial', 'B', 7)
        pdf.cell(w = 60, h = 4, txt = 'TOTAL UNITS: '+str(infoGen[3]), border = 1,ln = 1,align = 'L', fill = 0)

        "Trade Registry: istanbul Ticaret Sicili _897500012    ic Kapi No: 3 Sariyer / istanbul"
        "Trade Registry: istanbul Ticaret Sicili _897500012    ic Kapi No: 3 Sariyer / istanbul"
        shipToAddress = str(infoGen[4].replace('\n', ' ').replace('–', '/').replace('İ', 'i').replace('ç', 'c').replace('ı', 'i').replace('ı', 'i').replace('    ', ' ').replace('-', '_'))

        pdf.set_xy( 12, 150)
        pdf.set_font('Arial', '', 7)
        #pdf.cell(w = 200, h = 4, txt = 'SHIP TO ADDRESS: '+"Trade Registry: istanbul Ticaret Sicili -897500012    ic Kapi No: 3 Sariyer / istanbul", border = 1,ln = 1,align = 'L', fill = 0)
        pdf.cell(w = 200, h = 4, txt = 'SHIP TO ADDRESS: '+str(infoGen[4])[0:126], border = 1,ln = 1,align = 'L', fill = 0)


    """ Información del panel inferior """
    def pushBottomPanel():
        if str(infoGen[5]) != 'None' and str(infoGen[5]) != "":
            pdf.set_xy( 12, 148)    
            pdf.set_font('Arial', 'B', 20)
            pdf.cell(w = 272, h = 10, txt =  str(infoGen[5]), border = 1, align = 'C', fill = 0)
        
        if str(infoGen[7]) != 'None' and str(infoGen[7]) != '':
            pdf.set_xy( 12, 158)
            pdf.set_font('Arial', 'B', 10)
            pdf.cell(w = 272, h = 5, txt = str(infoGen[7]), border = 1,ln = 1, align = 'C', fill = 0)
        
        if str(infoGen[8]) != None and str(infoGen[8]) != "": 
            pdf.set_xy( 12, 163)
            pdf.set_font('Arial', 'B', 10)
            pdf.cell(w = 272, h = 5, txt =  str(infoGen[8]), border = 1,ln = 1, align = 'C', fill = 0)

        pdf.set_xy( 12, 168)
        pdf.set_font('Arial', 'B', 10)
        pdf.cell(w = 272, h = 5, txt =  str(infoGen[9]), border = 1,ln = 1, align = 'C', fill = 0)

        pdf.set_xy( 12, 173)
        pdf.set_font('Arial', 'B', 10)
        pdf.cell(w = 272, h = 5, txt =  str(infoGen[10]) + " - COMMERCIAL INVOICE "+ str(infoGen[14]), border = 1,ln = 1, align = 'C', fill = 0)
        
        pdf.set_xy( 12, 178)
        pdf.set_font('Arial', 'B', 10)
        pdf.cell(w = 272, h = 5, txt = "", border = 1,ln = 1, align = 'C', fill = 0)



    """ Información de la tabla """
    #valores tablas
    noLines = 0
    for valor in  listDataRow:
        if noLines == 10: 
            noLines = 0
            pushLowerLeftPanel()
            pushBottomPanel()
            addPage()



        noLines = noLines + 1
        pdf.set_font('Arial', '', 6)
        pdf.cell(w = 15, h = 6, txt = str(valor[0]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 4)
        pdf.cell(w = 55, h = 6, txt = str(valor[2]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 6)
        pdf.cell(w = 48, h = 6, txt = str(valor[3]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[4]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[5]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[6]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[7]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[8]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[9]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 8, h = 6, txt = str(valor[10]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 14, h = 6, txt = str(valor[11]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 7)
        pdf.cell(w = 27, h = 6, txt = str(valor[12]), border = 1, align = 'C', fill = 0)
        pdf.set_font('Arial', '', 4)

        
        if valor[1] == "None" or len(valor[1]) <= 100: #67
            pdf.multi_cell(w = 57, h = 6, txt = str(valor[1]), border = 1, align = 'C', fill = False)
        else:
            pdf.multi_cell(w = 57, h = 3, txt = str(valor[1]), border = 1, align = 'C', fill = False)

# 
    pushLowerLeftPanel()
    pushBottomPanel()


    #nombre del pdf
    file_path = '/media/'+pdfname
    pdf.output( os.path.join(settings.MEDIA_ROOT, pdfname), 'F')

    return file_path

    # Define Django project base directory
