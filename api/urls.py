from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from . import views

urlpatterns = [
    path('user/', views.UserApiView.as_view()),
    path('auth/login/', views.AuthView.as_view()),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
