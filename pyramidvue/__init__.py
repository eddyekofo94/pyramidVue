from pyramid.config import Configurator
from pyramid.settings import asbool


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    settings['webpack-dev-server'] = \
        asbool(settings.get('webpack-dev-server', 'f'))
    
    config = Configurator(settings=settings)
    config.include('pyramid_jinja2')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_renderer('.html', "pyramid_jinja2.renderer_factory")
    config.scan()
    return config.make_wsgi_app()
