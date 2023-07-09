# from reportlab.platypus.doctemplate import SimpleDocTemplate
# from reportlab.platypus import Paragraph, Spacer
# from reportlab.lib import sytles
# doc = SimpleDocTemplate("products.pdf")
# Catalog = []
# header = Paragraph("Product Inventory", styles['Heading1'])
# Catalog.append(header)
# style = styles['Normal']
# for product in Product.objects.all():
#     for product in Product.objects.all():
#         p = Paragraph("%s" % product.name, style)
#         Catalog.append(p)
#         s = Spacer(1, 0.25*inch)
#         Catalog.append(s)
# doc.build(Catalog)

from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors

def generate_table():
    # Create a document object
    doc = SimpleDocTemplate("table.pdf", pagesize=letter)

    # Data for the table
    data = [
        ["Name", "Age", "Country"],
        ["John Doe", "30", "USA"],
        ["Jane Smith", "25", "Canada"],
        ["Michael Johnsondsawgwaefwwegafawwe", "35", "UK"],
    ]

    # Create a table object and set its style
    table = Table(data, colWidths=[150, 50, 100])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.grey),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.whitesmoke),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, 0), 12),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
        ("BACKGROUND", (0, 1), (-1, -1), colors.beige),
    ]))

    row_heights = [20] + [max(len(str(cell)) // 15 * 12, 20) for row in data[1:] for cell in row]
    table._argH[0] = row_heights

    # Add the table to the document
    elements = [table]
    doc.build(elements)

generate_table()