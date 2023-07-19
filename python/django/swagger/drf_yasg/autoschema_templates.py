"""
I have disposed this script to save diferent examples of configurations to document django rest frameworks apis
with swagger semi-automatically

"""


from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from rest_framework.views import APIView
from rest_framework.decorators import api_view

@swagger_auto_schema(
    methods=['POST'],
    request_body=openapi.Schema(
    type=openapi.TYPE_OBJECT, 
    title = 'Body',
    properties={
        
        'supplier': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'supplierName': openapi.Schema(type=openapi.TYPE_STRING, description='string', ),
        'purchaseOrder': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'referenceNumber': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'comments': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'documentTotal': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'warehouse': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'itemsEntrie': openapi.Schema(type=openapi.TYPE_STRING, description='string',), 
        # 'x': openapi.Schema(type=openapi.TYPE_STRING, description='string', default ='Ss'),
        # 'y': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
    }),
    manual_parameters=[
            openapi.Parameter('page', openapi.IN_PATH, description="test manual param", type=openapi.TYPE_STRING, default='20'),
            # openapi.Parameter('test', openapi.IN_BODY, description="test manual param", type=openapi.TYPE_BOOLEAN, default=False),
            openapi.Parameter('limit', openapi.IN_QUERY, description="test manual param", type=openapi.TYPE_STRING, default='20'),
        ],
    responses={
        # 200: {"success":'OK'},
        200 : 'OK',
        500: 'Error',
    },
)


##################################################################


@swagger_auto_schema(
    methods=['POST'],
    request_body=openapi.Schema(
    type=openapi.TYPE_OBJECT, 
    title = 'Body',
    properties={
        
        'supplier': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'supplierName': openapi.Schema(type=openapi.TYPE_STRING, description='string', ),
        'purchaseOrder': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'referenceNumber': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'comments': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'documentTotal': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'warehouse': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
        'itemsEntrie': openapi.Schema(type=openapi.TYPE_STRING, description='string',), 
        # 'x': openapi.Schema(type=openapi.TYPE_STRING, description='string', default ='Ss'),
        # 'y': openapi.Schema(type=openapi.TYPE_STRING, description='string',),
    }),
    manual_parameters=[
            openapi.Parameter('page', openapi.IN_PATH, description="test manual param", type=openapi.TYPE_STRING, default='20'),
            # openapi.Parameter('test', openapi.IN_BODY, description="test manual param", type=openapi.TYPE_BOOLEAN, default=False),
            openapi.Parameter('limit', openapi.IN_QUERY, description="test manual param", type=openapi.TYPE_STRING, default='20'),
        ],
    responses={
        # 200: {"success":'OK'},
        200 : ExperienciaSerializer,
        500: 'Error',
    },
)
@api_view(['POST'])
def crearExperiencia(request):
    experiencia_serializer = ExperienciaSerializer(data=request.data)
    if experiencia_serializer.is_valid():
        # print("True")
        experiencia = experiencia_serializer.save()

    return Response(ExperienciaSerializer(experiencia).data)


##################################################################


@swagger_auto_schema(
    methods=['POST'],
    # operation_summary="Sum of Two numbers",
    request_body = EmpleadosSerializer,
    responses={
        200: openapi.Schema(
            type=openapi.TYPE_OBJECT,
            title="susue",
            description ='bacas bacas',
            properties={
              'phone': openapi.Schema(type=openapi.TYPE_STRING, description='lol'),
              'body': openapi.Schema(type=openapi.TYPE_STRING, description='The desc'),
            }
        ),

        '500': 'Error',

    }
)
@api_view(['POST'])
def getEmpleado(request):
    """
    post de post

    se hace el post

    """
    experiencia_serializer = ExperienciaSerializer(data=request.data)
    if experiencia_serializer.is_valid():
        # print("True")
        experiencia = experiencia_serializer.save()

    return Response(ExperienciaSerializer(experiencia).data)


##################################################################

@swagger_auto_schema(
        request_body=EmpleadosSerializer(many=True),
        responses=
        {
            200: EmpleadosSerializer(many=True),
            400: 'There\'s no selection',
        },
    )
def post(self, request,*args, **kwargs):
    #print(request.data)
    """
    Crear un empleado

    Si la consulta se realiza con exito se crea un empleado
    """
    empleados_serializer = EmpleadosSerializer(data=request.data)
    if empleados_serializer.is_valid():
        empleado = empleados_serializer.save()

    return Response(EmpleadosSerializer(empleado).data)