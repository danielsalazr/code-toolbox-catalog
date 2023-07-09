from openpyxl import Workbook, drawing
from openpyxl.drawing.image import Image
from openpyxl.styles import Alignment, Font

# from openpyxl.drawing import Image

wb = Workbook()
ws = wb.active

# Agrega la imagen a la hoja
# img = drawing.image.Image('./python_excel/image.jpeg')


nombres = ['Juan', 'Maria', 'Pedro', 'Luisa']

ws.column_dimensions['A'].width = 20
ws.column_dimensions['B'].width = 9 #9

# Escribir los nombres en la columna A, comenzando en la fila 1
for i, nombre in enumerate(nombres):
    # Aumentar el índice en 1 para escribir en la siguiente fila
    ws.row_dimensions[i+1].height = 50 #40

    img = Image('./image.jpeg')
    img.height = 50
    img.width =60

    fila = i + 1
    filaImagen = f"B{fila}"
    ws.cell(row=fila, column=1, value=nombre)
    ws.cell(row=fila, column=3, value=nombre)
    ws.cell(row=fila, column=1).font = Font(size=12)
    
    ws.cell(row=fila, column=1).alignment = Alignment(horizontal='center', vertical='center')
    ws.cell(row=fila, column=3).alignment = Alignment(horizontal='center', vertical='center')
    ws.cell(row=fila, column=2).alignment = Alignment(horizontal='center', vertical='center')

    
    # print(dir(img.ref()))

    # print(img.height)
    # print(img.width)

    # ws.row_dimensions[1].height = 32 #32
    print(help(img.format))
    img.ref(550)
    
    ws.add_image(img, filaImagen)

    
# img.legacy.Locking(pos='center')

# img.size = (10.0, 10.0)

ws.column_dimensions['A'].width = 14



# img.anchor(ws['B2'])


# ws.add_image(img)
# img.add_offset(col_offset=2, row_offset=3)

# celda = ws['B2']
# alineacion = Alignment(horizontal='center', vertical='center')
# img.alignment = alineacion

wb.save('book.xlsx')










# from openpyxl import load_workbook, drawing
# from openpyxl import Workbook

# # Abre el archivo de Excel y obtén la hoja de cálculo
# # workbook = load_workbook('ruta/del/archivo.xlsx')
# # worksheet = workbook['Nombre de la hoja']

# wb = Workbook()
# ws = wb.active

# # Selecciona la celda B2 y establece su alto en 30 píxeles
# #ws.row_dimensions[2].height = 30

# # Agrega la imagen a la hoja
# #img = Image('./python_excel/image.jpeg')

# # Obtén el ancho y la altura de la celda "A1"
# #cell_width = wb.column_dimensions['A'].width
# #cell_height = ws.row_dimensions[1].height

# # Lee la imagen desde la ruta de acceso y especifica el tamaño y la posición de la imagen en la celda
# # image = drawing.image.Image('./python_excel/image.jpeg')
# image = drawing.image.Image('./image.jpeg')
# #image.anchor = 'B2'
# #image.height = 50.0 # insert image height in pixels as float or int (e.g. 305.5)
# #image.width= 50.0

# #ws.row_dimensions[2].height = 60
# #ws.row_dimensions[2].width = 60
# image.align = 'center'


# cell_width = ws.column_dimensions[image.anchor[0]].width
# cell_height = ws.row_dimensions[image.anchor[1]].height
# offset_x = (cell_width - image.width) / 2
# offset_y = (cell_height - image.height) / 2

# # Ajusta la posición de la imagen utilizando el desplazamiento calculado
# image.drawing.offset(x=offset_x, y=offset_y)
# #ws.add_image(image)
# ws.add_image(image, anchor='B2', width=100, height=100)
# # Inserta la imagen

# wb.save('book1.xlsx')




