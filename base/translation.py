from modeltranslation.translator import translator, TranslationOptions
from .models import *

class SiteDetailsModelTranslationOptions(TranslationOptions):
    fields = ('meta_copyright', 'copyright','description','site_title','og_description','og_title')

class menuModelTranslationOptions(TranslationOptions):
    fields = ('title',)

translator.register(SiteDetailsModel, SiteDetailsModelTranslationOptions)
translator.register(menuModel, menuModelTranslationOptions)