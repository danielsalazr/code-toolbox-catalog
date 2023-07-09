from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle

# Crear un documento PDF con el tamaño de página carta
doc = SimpleDocTemplate("ejemplo2.pdf", pagesize=letter)

# Crear una tabla con datos de ejemplo
data = [['Nombre', 'Edad', 'Direccion'],
        ['Juan', '30', 'Calle Falsa 123'],
        ['Maria', '25', 'Avenida Siempre Viva 456'],
        ['Pedro', '35', 'Calle del Medio 789']]

# Crear una tabla
tabla = Table(data)

# Aplicar estilo a la tabla
tabla.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, 0), '#d0d0d0'),
                           ('TEXTCOLOR', (0, 0), (-1, 0), 'black'),
                           ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                           ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                           ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                           ('BACKGROUND', (0, -1), (-1, -1), '#d0d0d0'),
                           ('TEXTCOLOR', (0, -1), (-1, -1), 'black'),
                           ('ALIGN', (0, -1), (-1, -1), 'CENTER'),
                           ('FONTNAME', (0, -1), (-1, -1), 'Helvetica-Bold'),
                           ('BOTTOMPADDING', (0, -1), (-1, -1), 12),
                           ('GRID', (0, 0), (-1, -1), 1, colors.black)]))

# Crear una lista de elementos para agregar al PDF
elements = []

# Agregar la tabla al PDF
elements.append(tabla)

# Construir el PDF con los elementos agregados
doc.build(elements)