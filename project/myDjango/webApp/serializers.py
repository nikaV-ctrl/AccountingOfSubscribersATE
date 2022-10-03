from django.db.models import fields
from rest_framework import serializers
from .models import *


class DistrictsSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = ('area_code', 'name')


class StreetsSerializer(serializers.ModelSerializer):

    area_code = serializers.SlugRelatedField(slug_field="name", read_only=True)

    class Meta:
        model = Streets
        fields = ('street_code', 'name', 'area_code')


class LgotySerializer(serializers.ModelSerializer):
    class Meta:
        model = Lgoty
        fields = ('code_lgoty', 'name_lgoty')


class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('employee_code', 'name')


class PhoneNumbersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Phone_numbers
        fields = ('phone_number',
                  'owner_IIN',
                  'street_code',
                  'house_number',
                  'apartment_number',
                  'close_number_sign',
                  'pairing_number_sign')


class PairedNumbersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Paired_numbers
        fields = ('pk', 'pair_number', 'phone_number')


class OwnersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Owners
        fields = ('IIN',
                  'FIO',
                  'birthdate',
                  'gender',
                  'availability_lgoty_signs',
                  'code_type_lgoty')


class InstallationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Installation
        fields = ('pk',
                  'data_installations',
                  'phone_number',
                  'employee_code',
                  'owner_IIN')


class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = ('pk',
                  'owner_IIN',
                  'payment_amount',
                  'date',
                  'phone_number')
