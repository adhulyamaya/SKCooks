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
        print(name,"kitunno")
        password = request.data.get('password')
        mentorobj = MentorProfile.objects.create(name=name, password=password,email='anu@example.com' )
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
            if userobj.is_approved:

                refresh = RefreshToken.for_user(userobj)
                serialized = MentorProfileSerializer(userobj)

                print(serialized.data,"mentorrrrrrrrserialized.data")
                return Response({"message":"success","userdata":serialized.data,"refresh":str(refresh),"access":str(refresh.access_token)})
            else:
                return Response({"message": "Mentor not yet accepted by admin"})
        else:
            return Response({"message":"invalid credentials"})

class MentorOnboard(APIView):
    def post(self,request):
        mentor_id=request.data.get('mentor_id')
        print(mentor_id,"aaaaaaaaaaaa")
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
        # mentor_profile.is_approved = False
        mentor_profile.save()
        return Response({"message":"success"})
    



# class CreateclassView(APIView):
#     def post(self,request):
#         mentor_id=request.data.get('mentorId')
#         print(mentor_id,"is it come")
#         class_name=request.data.get("classname")
#         print(class_name,"classname vann??????????????????????????????")
#         course_description=request.data.get('description')
#         price=request.data.get('price')
#         syllabus=request.data.get('syllabus')

#         mentor = MentorProfile.objects.get(id=mentor_id)
#         classobj=Class.objects.create(mentor=mentor,class_name=class_name,course_description=course_description,
#                                   price=price,syllabus=syllabus )
#         print(classobj,"/////////////////////////////////")
#         print(classobj,"is that created?????")
#         serialized=MentorProfileSerializer(classobj)
#         return Response ({"message":"success","data":serialized.data})
    
class CreateclassView(APIView):
    def post(self, request):
        mentor_id = request.data.get('mentorId')  # Update field name
        class_name = request.data.get("classname")
        course_description = request.data.get('description')
        price = request.data.get('price')
        syllabus = request.data.get('syllabus')

        try:
            mentor = MentorProfile.objects.get(id=mentor_id)
        except MentorProfile.DoesNotExist:
            return Response({"message": f"Mentor with ID {mentor_id} not found"})

        classobj = Class.objects.create(
            mentor=mentor,
            class_name=class_name,
            course_description=course_description,
            price=price,
            syllabus=syllabus
        )

        # serialized = MentorProfileSerializer(classobj)
        return Response({"message": "success"})

        

        



