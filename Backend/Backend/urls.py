
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView

from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns +=[re_path(r"^.*",TemplateView.as_view(template_name="index.html"))]
if settings.DEBUG:
    import debug_toolbar
    urlpatterns +=path('__debug__/', include(debug_toolbar.urls)),
