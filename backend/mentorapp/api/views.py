from django.http import HttpResponse
from django.shortcuts import render
from mentorapp.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken


class MentorSignupView(APIView):
    def post(self, request):
        name = request.data.get('name')
        password = request.data.get('password')
        mentorobj = MentorProfile.objects.create(name=name, password=password)
        mentor_id = mentorobj.id  
        print(mentorobj, "mentorobject")
        print(mentor_id)
        return Response({"message": "success", "mentor_id": mentor_id})

    

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

class MentorOnboard(APIView):
    def post(self,request):
        mentor_id=request.data.get('mentor_id')
        print(mentor_id,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        mentor_profile = MentorProfile.objects.get(id=mentor_id)
        fullname=request.data.get('fullname')
        email=request.data.get('email')
        bio=request.data.get('bio')
        expertise=request.data.get('expertise')
        experience=request.data.get('experience')
        age=request.data.get('age')
        image=request.data.get('image')
        address=request.data.get('address')
        certificate=request.data.get('certificate')
        mentor_profile.fullname=fullname
        mentor_profile.email = email
        mentor_profile.bio = bio
        mentor_profile.expertise = expertise
        mentor_profile.experience = experience
        mentor_profile.age=age
        mentor_profile.image=image
        mentor_profile.address=address
        mentor_profile.certificate=certificate
        mentor_profile.save()
        return Response({"message":"success"})
    



        



