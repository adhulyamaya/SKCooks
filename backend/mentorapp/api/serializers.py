from rest_framework import serializers
from mentorapp.models import MentorProfile


class MentorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorProfile
        fields ='__all__'

       
        