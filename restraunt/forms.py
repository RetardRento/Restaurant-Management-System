from django import forms

class OrderForm(forms.Form):
    name = forms.CharField(max_length=35, required=True)
    email = forms.EmailField(required=True)
    phone = forms.IntegerField(required=True)
    address = forms.CharField(max_length=1000)