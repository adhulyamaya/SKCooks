from django.urls import path
from .views import *

urlpatterns = [
    path('mentorsignup/', MentorSignupView.as_view(), name='mentor_signup'),   
    path('mentorlogin/', MentorLoginView.as_view(), name='mentorlogin'), 
    path('mentoronboard/', MentorOnboard.as_view(), name='mentoronboard'), 
    
    
]
