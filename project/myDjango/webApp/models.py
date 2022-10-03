from django.db import models



class Lgoty(models.Model):
    code_lgoty = models.PositiveIntegerField(primary_key = True)
    name_lgoty = models.CharField(max_length=20)

    def __str__(self):
        return str(self.code_lgoty)

    class Meta:
        verbose_name = 'Льгота'
        verbose_name_plural = 'Льготы'


class District(models.Model):
    area_code = models.PositiveIntegerField(primary_key = True)
    name = models.CharField(max_length=20)

    def __str__(self):
        return str(self.area_code)

    class Meta:
        verbose_name = 'Район'
        verbose_name_plural = 'Районы'


class Streets(models.Model):
    street_code = models.PositiveIntegerField(primary_key = True)
    name = models.CharField(max_length=20)
    area_code = models.ForeignKey(District, on_delete = models.CASCADE)

    def __str__(self):
        return str(self.street_code)

    class Meta:
        verbose_name = 'Улица'
        verbose_name_plural = 'Улицы'


class Employees(models.Model):
    employee_code = models.PositiveIntegerField(primary_key = True)
    name = models.CharField(max_length=35)

    def __str__(self):
        return str(self.employee_code)

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'


class Phone_numbers(models.Model): 
    phone_number = models.PositiveIntegerField(primary_key = True)
    owner_IIN = models.PositiveIntegerField()
    street_code = models.ForeignKey(Streets, on_delete = models.CASCADE)
    house_number = models.PositiveIntegerField()
    apartment_number = models.PositiveIntegerField()
    close_number_sign = models.BooleanField()
    pairing_number_sign = models.BooleanField(null=True, blank=True)

    def __str__(self):
        return str(self.phone_number)

    class Meta:
        verbose_name = 'Телефон'
        verbose_name_plural = 'Телефоны'


class Paired_numbers(models.Model):
    pair_number = models.PositiveIntegerField()
    phone_number = models.ForeignKey(Phone_numbers, on_delete = models.CASCADE)

    def __str__(self):
        return str(self.pair_number)

    class Meta:
        verbose_name = 'Спаренный номер'
        verbose_name_plural = 'Спаренные номера'


class Owners(models.Model):
    short_value_gender = (
        ('ж', 'женщина'),
        ('м', 'мужчина')
    )
    IIN = models.PositiveIntegerField(primary_key = True)
    FIO = models.CharField(max_length=50)
    birthdate = models.DateField()
    gender = models.CharField(max_length=1, choices=short_value_gender)
    availability_lgoty_signs = models.BooleanField()
    code_type_lgoty = models.ForeignKey(Lgoty, on_delete = models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.IIN)

    class Meta:
        db_table = "Владельцы"
        verbose_name = 'Владелец'
        verbose_name_plural = 'Владельцы'


class Installation(models.Model):
    data_installations = models.DateTimeField()
    phone_number = models.ForeignKey(Phone_numbers, on_delete=models.CASCADE)
    employee_code = models.ForeignKey(Employees, on_delete = models.CASCADE)
    owner_IIN = models.PositiveIntegerField()

    def __str__(self):
        return str(self.phone_number)

    class Meta:
        verbose_name = 'Установка'
        verbose_name_plural = 'Установка'


class Payment(models.Model):
    owner_IIN = models.ForeignKey(Owners, on_delete=models.CASCADE)
    payment_amount = models.PositiveIntegerField()
    date = models.DateTimeField()
    phone_number = models.ForeignKey(Phone_numbers, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.phone_number)

    class Meta:
        verbose_name = 'Оплата'
        verbose_name_plural = 'Оплата'
