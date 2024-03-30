from django.shortcuts import render
from .forms import OrderForm
from django.http import HttpResponseRedirect
from .models import RestrauntDB

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about_us(request):
    return render(request, 'about_us.html')

def contact(request):
    return render(request, 'contact.html')

def menu(request):
    return render(request, 'menu.html')

def orders(request):
    return render(request, 'orders.html')

def order_submission(request):
    if request.method == "POST":
        form = OrderForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            address = form.cleaned_data['address']

            RestrauntDB.objects.create(name = name,
                                       email = email,
                                       phone = phone,
                                       address = address)
            return HttpResponseRedirect('thanks')

    return render(request, 'order-submission.html')

def thanks(request):
    return render(request, 'thanks.html')