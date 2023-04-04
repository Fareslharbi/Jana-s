from django.shortcuts import render
from django.urls import reverse
from django.shortcuts import redirect

def index(request):
    return render(request, 'shop-owners-page_skincare/build/index.html')

def index1(request):
    return render(request, 'sephora-app1/build/index.html')

def index2(request):
    return render(request, 'departments-page/build/index.html')

def redirect_view(request):
    url = reverse('index')
    return redirect(url)

def redirect_view1(request):
    url = reverse('index1')
    return redirect(url)

def redirect_view2(request):
    url = reverse('index2')
    return redirect(url)
