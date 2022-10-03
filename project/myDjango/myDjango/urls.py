"""myDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path # For Django 4.0+
from webApp import views
#from django.conf.urls import url # For Django 3.0



urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/districts/$', views.districts_list),
    re_path(r'^api/districts/(?P<pk>[0-9]+)$', views.districts_detail),
    re_path(r'^api/streets/$', views.streets_list),
    re_path(r'^api/streets/(?P<pk>[0-9]+)$', views.streets_detail),
    re_path(r'^api/lgoty/$', views.lgoty_list),
    re_path(r'^api/lgoty/(?P<pk>[0-9]+)$', views.lgoty_detail),
    re_path(r'^api/employees/$', views.employees_list),
    re_path(r'^api/employees/(?P<pk>[0-9]+)$', views.employees_detail),
    re_path(r'^api/phonenumbers/$', views.phonenumbers_list),
    re_path(r'^api/phonenumbers/(?P<pk>[0-9]+)$', views.phonenumbers_detail),
    re_path(r'^api/pairednumbers/$', views.pairednumbers_list),
    re_path(r'^api/pairednumbers/(?P<pk>[0-9]+)$', views.pairednumbers_detail),
    re_path(r'^api/owners/$', views.owners_list),
    re_path(r'^api/owners/(?P<pk>[0-9]+)$', views.owners_detail),
    re_path(r'^api/installation/$', views.installation_list),
    re_path(r'^api/installation/(?P<pk>[0-9]+)$', views.installation_detail),
    re_path(r'^api/payment/$', views.payment_list),
    re_path(r'^api/payment/(?P<pk>[0-9]+)$', views.payment_detail),
    path('allrequests', views.allrequests, name='allrequests'),
    path('allreports', views.allreports, name='allreports')
]

