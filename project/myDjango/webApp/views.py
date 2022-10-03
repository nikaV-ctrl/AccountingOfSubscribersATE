from django.db.models.aggregates import Count
from django.shortcuts import render
from django.db.models import *
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import *
from .serializers import *


# District

@api_view(['GET', 'POST'])
def districts_list(request):
    if request.method == 'GET':
        data = District.objects.all()
        data = District.objects.order_by('area_code')
        
        serializer = DistrictsSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DistrictsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def districts_detail(request, pk):
    try:
        districts = District.objects.get(pk=pk)
    except District.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = DistrictsSerializer(
            districts, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        districts.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Streets


@api_view(['GET', 'POST'])
def streets_list(request):
    if request.method == 'GET':
        data = Streets.objects.all()
        data = Streets.objects.order_by('street_code')
        serializer = StreetsSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StreetsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def streets_detail(request, pk):
    try:
        streets = Streets.objects.get(pk=pk)
        # districtNameSelect = Streets.objects.all().values("area_code__name")
    except Streets.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = StreetsSerializer(
            streets, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        streets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ----------------------- Lgoty

@api_view(['GET', 'POST'])
def lgoty_list(request):
    if request.method == 'GET':
        data = Lgoty.objects.all()
        data = Lgoty.objects.order_by('code_lgoty')
        serializer = LgotySerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LgotySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def lgoty_detail(request, pk):
    try:
        lgoty = Lgoty.objects.get(pk=pk)
    except Lgoty.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = LgotySerializer(
            lgoty, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        lgoty.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ----------------------- Employees

@api_view(['GET', 'POST'])
def employees_list(request):
    if request.method == 'GET':
        data = Employees.objects.all()
        data = Employees.objects.order_by('employee_code')
        serializer = EmployeesSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EmployeesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def employees_detail(request, pk):
    try:
        employees = Employees.objects.get(pk=pk)
    except Employees.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EmployeesSerializer(
            employees, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        employees.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ----------------------- Phone_numbers

@api_view(['GET', 'POST'])
def phonenumbers_list(request):
    if request.method == 'GET':
        data = Phone_numbers.objects.all()
        serializer = PhoneNumbersSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PhoneNumbersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def phonenumbers_detail(request, pk):
    try:
        phonenumbers = Phone_numbers.objects.get(pk=pk)
    except Phone_numbers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PhoneNumbersSerializer(
            phonenumbers, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        phonenumbers.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# TODO: ОТСЮДА И ДАЛЬШЕ



# ----------------------- Paired_numbers

@api_view(['GET', 'POST'])
def pairednumbers_list(request):
    if request.method == 'GET':
        data = Paired_numbers.objects.all()
        serializer = PairedNumbersSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PairedNumbersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def pairednumbers_detail(request, pk):
    try:
        pairednumbers = Paired_numbers.objects.get(pk=pk)
    except Paired_numbers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PairedNumbersSerializer(
            pairednumbers, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pairednumbers.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ----------------------- Owners

@api_view(['GET', 'POST'])
def owners_list(request):
    if request.method == 'GET':
        data = Owners.objects.all()
        serializer = OwnersSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OwnersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def owners_detail(request, pk):
    try:
        owners = Owners.objects.get(pk=pk)
    except Owners.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = OwnersSerializer(
            owners, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        owners.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ----------------------- Installation

@api_view(['GET', 'POST'])
def installation_list(request):
    if request.method == 'GET':
        data = Installation.objects.all()
        serializer = InstallationSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InstallationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def installation_detail(request, pk):
    try:
        installation = Installation.objects.get(pk=pk)
    except Installation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = InstallationSerializer(
            installation, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        installation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ----------------------- Payment

@api_view(['GET', 'POST'])
def payment_list(request):
    if request.method == 'GET':
        data = Payment.objects.all()
        serializer = PaymentSerializer(
            data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def payment_detail(request, pk):
    try:
        payment = Payment.objects.get(pk=pk)
    except Payment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PaymentSerializer(
            payment, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        payment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def allreports(request):

    # 1 Финансовый отчет о поступлении сумм оплату за «I-е» число

    if 'q1' in request.GET:
        q1 = request.GET['q1']
        resultReport1 = Payment.objects.filter(date__icontains=q1)
        # resultReport1 = Payment.objects.filter(report1)
    else:
        resultReport1 = Payment.objects.all()

    # 2 Список сотрудников, устанавливающих телефоны  «I-го» числа

    if 'q2' in request.GET:
        q2 = request.GET['q2']
        resultReport2 = Installation.objects.filter(
            data_installations__icontains=q2)
    else:
        resultReport2 = Installation.objects.all()

    # 3 Список владельцев, имеющих льготы «I-го» типа

    selectLgoty = Lgoty.objects.all()

    if 'q3' in request.GET:
        q3 = request.GET['q3']
        resultReport3 = Owners.objects.filter(
            code_type_lgoty__code_lgoty__icontains=q3)
        if q3 == '0':
            resultReport3 = Owners.objects.exclude(
                code_type_lgoty__isnull=True).exclude(code_type_lgoty__exact=0)
    else:
        resultReport3 = Owners.objects.exclude(
            code_type_lgoty__isnull=True).exclude(code_type_lgoty__exact=0)

    context = {
        'title': 'Отчеты',
        'resultReport1': resultReport1,
        'resultReport2': resultReport2,
        'resultReport3': resultReport3,
        'selectLgoty': selectLgoty,
    }
    return render(request, 'allreports.html', context)


def allrequests(request):

    # --------------------------- 1 Количество телефонов, установленных каждым из сотрудников по датам.

    result = Installation.objects.values('employee_code').annotate(
        tot=Count('employee_code')).order_by()
    all1 = Installation.objects.all()
    request1 = zip(result, all1)

    # --------------------------- 2 Список телефонов клиентов, проживающих по адресу "...".

    if 'q' in request.GET:
        q = request.GET['q']

        multiply_q = Q(Q(street_code__name__icontains=q) | Q(
            house_number__icontains=q) | Q(apartment_number__icontains=q))
        phoneNumbers = Phone_numbers.objects.filter(multiply_q)
    else:
        phoneNumbers = Phone_numbers.objects.all()

    # --------------------------- 3. Количество телефонных номеров у каждого из клиентов.

    all3 = Payment.objects.values('phone_number__owner_IIN').annotate(
        count3=Count('phone_number__owner_IIN')).order_by()
    resultCount3 = Payment.objects.all()
    request3 = zip(all3, resultCount3)

    # --------------------------- 4 ФИО владельцев "i-ой" пары спаренных телефонов.

    pairedNumbers = Paired_numbers.objects.all()
    payments = Payment.objects.all()
    if 'q4' in request.GET:
        q4 = request.GET['q4']
        x = Paired_numbers.objects.filter(
            pair_number__icontains=q4).values('phone_number')
        payments = {}
        for i in x:
            val = i["phone_number"]
            payments[Payment.objects.filter(
                phone_number=val)] = Payment.objects.filter(phone_number=val)
    else:
        payments = Payment.objects.all()

    # --------------------------- 5 Количество владельцев.

    ownersMen = Owners.objects.filter(gender='м')
    resultMen = ownersMen.count()
    ownersWomen = Owners.objects.filter(gender='ж')
    resultWomen = ownersWomen.count()

    context = {
        'title': 'Запросы',
        'request1': request1,
        'phoneNumbers': phoneNumbers,
        'request3': request3,
        'pairedNumbers': pairedNumbers,
        'payments': payments,
        'resultMen': resultMen,
        'resultWomen': resultWomen,
    }
    return render(request, 'allrequests.html', context)
