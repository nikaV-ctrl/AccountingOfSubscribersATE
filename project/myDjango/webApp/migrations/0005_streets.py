# Generated by Django 3.2.9 on 2021-12-01 16:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webApp', '0004_auto_20211127_2336'),
    ]

    operations = [
        migrations.CreateModel(
            name='Streets',
            fields=[
                ('street_code', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('area_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webApp.district')),
            ],
            options={
                'verbose_name': 'Улица',
                'verbose_name_plural': 'Улицы',
            },
        ),
    ]
