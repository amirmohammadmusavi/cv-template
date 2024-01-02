from modeltranslation.translator import translator, TranslationOptions
from .models import *

class PersonalDescTranslationOptions(TranslationOptions):
    fields = ('name', 'position','desc')

class SocialTranslationOptions(TranslationOptions):
    fields = ('name',)

class StatusTranslationOptions(TranslationOptions):
    fields = ('desc',)

translator.register(PersonalDesc, PersonalDescTranslationOptions)
translator.register(Social, SocialTranslationOptions)
translator.register(Status, StatusTranslationOptions)