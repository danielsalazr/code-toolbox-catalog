class Empleado(generics.GenericAPIView):
    serializer_class = EmpleadosSerializer
    parser_classes = (JSONParser, MultiPartParser, FormParser)
    
    @swagger_auto_schema(operation_summary="Create a user account by signing Up")
    def post(self, request):
        #print(request.data)
        """
        Employee creation

        creates an employee in database
        """
        serializer = EmpleadosSerializer(data=request.data, many=True)
        if empleados_serializer.is_valid():
            empleado = empleados_serializer.save()

        return Response(EmpleadosSerializer(empleado).data)
