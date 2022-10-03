from django.contrib import admin
from .models import *

class Lgoty_admin(admin.ModelAdmin):
    list_display = ('code_lgoty', 'name_lgoty')
    list_display_links = ('code_lgoty', 'name_lgoty')
    search_fields = ('code_lgoty', 'name_lgoty')

class District_admin(admin.ModelAdmin):
    list_display = ('area_code', 'name')
    list_display_links = ('area_code', 'name')
    search_fields = ('area_code', 'name')

class Streets_admin(admin.ModelAdmin):
    list_display = ('street_code', 'name', 'area_code')
    list_display_links = ('street_code', 'name')
    search_fields = ('street_code', 'name')

class Employees_admin(admin.ModelAdmin):
    list_display = ('employee_code', 'name')

class Phone_numbers_admin(admin.ModelAdmin):
    list_display = ('phone_number', 'owner_IIN', 'street_code', 'house_number', 'apartment_number', 'close_number_sign', 'pairing_number_sign')

class Paired_numbers_admin(admin.ModelAdmin):
    list_display = ('pair_number', 'phone_number')

class Owners_admin(admin.ModelAdmin):
    list_display = ('IIN', 'FIO', 'birthdate', 'gender', 'availability_lgoty_signs', 'code_type_lgoty')
    list_display_links = ('IIN', 'FIO')
    search_fields = ('IIN', 'FIO')

class Installation_admin(admin.ModelAdmin):
    list_display = ('data_installations', 'phone_number', 'employee_code', 'owner_IIN')

class Payment_admin(admin.ModelAdmin):
    list_display = ('owner_IIN', 'payment_amount', 'date', 'phone_number')


# Register your models here.
admin.site.register(Lgoty, Lgoty_admin)
admin.site.register(District, District_admin)
admin.site.register(Streets, Streets_admin)
admin.site.register(Employees, Employees_admin)
admin.site.register(Phone_numbers, Phone_numbers_admin)
admin.site.register(Paired_numbers, Paired_numbers_admin)
admin.site.register(Owners, Owners_admin)
admin.site.register(Installation, Installation_admin)
admin.site.register(Payment, Payment_admin)
