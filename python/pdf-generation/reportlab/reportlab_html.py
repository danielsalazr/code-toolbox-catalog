from reportlab.pdfgen import canvas
# from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4, landscape

from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
from reportlab.lib import colors

print(A4)
width, height = A4

# print(width / cm)
# print(height / cm)
# width, height = 8 * cm ,5 * cm

# title_style = ParagraphStyle('Normal', fontName=fontname, textColor=color, fontSize=fontsize,
#                                    alignment=text_align)

title_style = ParagraphStyle('Normal', fontName='Helvetica-Bold', textColor=colors.black, fontSize=14.0,
                                   alignment=TA_CENTER)

styles = getSampleStyleSheet()
styleN = styles["BodyText"]
styleN.alignment = TA_LEFT
styleBH = styles["Normal"]
styleBH.alignment = TA_CENTER
# styleBH.valign="MIDDLE"

def coord(x, y, unit=1):
    x, y = x * unit, height -  y * unit
    return x, y

header = Paragraph("Product Inventory", styles['Heading1']) 


title2 = "<b> Reporte de reportes </b>"

my_text = "Hello\nThis is a multiline text\nHere we do not have to handle the positioning of each line manually"


# Headers
hdescrpcion = Paragraph('''<b>descrpcion</b>''', styleBH)
hpartida = Paragraph('''<b>partida</b>''', styleBH)
hcandidad = Paragraph('''<b>candidad</b>''', styleBH)
hprecio_unitario = Paragraph('''<b>precio_unitario</b>''', styleBH)
hprecio_total = Paragraph('''<b>precio_total</b>''', styleBH)

# Texts
descrpcion = Paragraph('long paragraphnfdkjbkjsbkswabfkjsjksdfkjswbdfiwbfuiwebikujabnsoiuabufiubeikfwaifbwaikbkdsabvkbdskgbkbgkabdkszbkztan tantantantatnatnatantatnatantantatnatnatn', styleN)
partida = Paragraph('1', styleBH)
candidad = Paragraph('120', styleBH)
precio_unitario = Paragraph('$52.00', styleBH)
precio_total = Paragraph('$6240.00', styleBH)

data= [
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       [partida, candidad, descrpcion, precio_unitario, precio_total],
       ]
# split_data = [data[i:i+10] for i in range(0, len(data), 10)]
split_data = [data[i:i+5] for i in range(0, len(data), 5)]

# table = Table(data, colWidths=[2.05 * cm, 2.7 * cm, 5 * cm,
#                                3* cm, 3 * cm])

# table.setStyle(TableStyle([
#                        ('INNERGRID', (0,0), (-1,-1), 0.25, colors.black),
#                        ('BOX', (0,0), (-1,-1), 0.25, colors.black),
#                        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
#                        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
#                        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
#                        ("FONTSIZE", (0, 0), (-1, 0), 12),
#                        ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
#                        ]))

c = canvas.Canvas("a.pdf", pagesize=A4)
# c = canvas.Canvas("a.pdf",pagesize=(200.0, 600.0)) #tamanio modificado
# c.translate(0, height/2)

c.setTitle("hello stackoverflow")
c.drawString(100, 200, "Welcome to Reportlab!")

#texto multilinea
textobject = c.beginText(2*cm, 29.7 * cm - 2 * cm)
for line in my_text.splitlines(False):
    textobject.textLine(line.rstrip())
c.drawText(textobject)

#single title
x = 0; y = 8.5 * cm

title = Paragraph('''<strong>Reporte de reportes</strong>''', title_style)

# First string.

title.wrapOn(c, 200,50)
title.drawOn(c, x+20, y)
# c.drawText(title)

# top_table = 

print(c._pagesize[0]) # horizontal size
print(c._pagesize[1]) # Vertical size
# vertical_size = float(c._pagesize[1] / cm)
# print(vertical_size - 5.6)

# Calculate the required width and height of the table
# table_width, table_height = table.wrapOn(None, width, height)

# print("Table Size:")
# print("Width: {} units".format(table_width))
# print("Height: {} units".format(40 - table_height /cm))

#table
# table.wrapOn(c, width, height)
# table.drawOn(c, 40, 700-(table_height))
# table.drawOn(c, *coord(1.8, 20, cm))
# table.drawOn(c, *coord(1.8, 9.6, cm))
# table.drawOn(c, *coord(1.8, 16.6, cm)) # con el tamanio modificado


# parts = table.split(width, height - 2 * table_height)

# Iterate over the table parts and draw them on the canvas
# for i, part in enumerate(parts):

for i, part in enumerate(split_data):

    part.insert(0, [hdescrpcion, hcandidad,hcandidad, hprecio_unitario, hprecio_total],)

    table = Table(part, colWidths=[2.05 * cm, 2.7 * cm, 5 * cm,
                                3* cm, 3 * cm])

    table.setStyle(TableStyle([
                        ('INNERGRID', (0,0), (-1,-1), 0.25, colors.black),
                        ('BOX', (0,0), (-1,-1), 0.25, colors.black),
                        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                        ("FONTSIZE", (0, 0), (-1, 0), 12),
                        ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
                        ]))

    table_width, table_height = table.wrapOn(None, width, height)

    table.wrapOn(c, width, height)
    table.drawOn(c, 40, 700-(table_height))
    # part.drawOn(c, 60, (700-(table_height)) - i * (height - 2 * (700-(table_height))))
    c.showPage()

# Create the second page
#Set some pages
# for page_number in range(1, 6):
#     # Draw the page number
#     # c.setFont(font_name, font_size)
#     c.drawCentredString(width / 2, 20, f"Page {page_number}")
#     c.drawString(200, 100, "Some text in second page.")
#     c.showPage()

c.save()




# c2 = canvas.Canvas("a.pdf", pagesize=A4)
# # c2.showPage()
# c2.drawText(textobject)
# c2.save()