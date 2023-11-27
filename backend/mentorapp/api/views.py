from django.http import HttpResponse
from django.shortcuts import render
from mentorapp.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken

class MentorSignupView(APIView):
    def post(self,request):
        name=request.data.get('name')
        email=request.data.get('email')
        password=request.data.get('password')
        bio=request.data.get('bio')
        expertise=request.data.get('expertise')
        experience=request.data.get('experience')
        
        mentorobj=MentorProfile.objects.create(name=name,email=email,password=password,bio=bio,expertise=expertise,experience=experience)
        print(mentorobj,"mentorobject")
        return Response({"message":"success"})
    

class MentorLoginView(APIView):
    def post(self,request):
        name=request.data.get('name')
        password=request.data.get('password')

        userobj = MentorProfile.objects.get(name=name,password=password)
        print(userobj,"haiiiiiiiiiiiiii")
        if userobj:
            refresh = RefreshToken.for_user(userobj)
            serialized = MentorProfileSerializer(userobj)
            print(serialized.data,"mentorrrrrrrrserialized.data")
            return Response({"message":"success","userdata":serialized.data,"refresh":str(refresh),"access":str(refresh.access_token)})
        else:
            return Response({"message":"invalid credentials"})


        



