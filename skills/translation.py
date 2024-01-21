from modeltranslation.translator import translator, TranslationOptions
from .models import *

class SkillsTranslationOptions(TranslationOptions):
    fields = ('title', 'desc')

translator.register(Skills, SkillsTranslationOptions)