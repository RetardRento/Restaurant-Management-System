from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about-us', views.about_us, name='about-us'),
    path('contact', views.contact, name='contact'),
    path('menu', views.menu, name='menu'),
    path('orders', views.orders, name='orders'),
    path('order-submission', views.order_submission, name='order-submission'),
    path('thanks', views.thanks, name='thanks')
]
