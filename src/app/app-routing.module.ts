import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './secciones/home/home.module#HomePageModule' },
  { path: 'criterios-tratamiento', loadChildren: './secciones/criterios-tratamiento/criterios-tratamiento/criterios-tratamiento.module#CriteriosTratamientoPageModule' },
  { path: 'diabetes', loadChildren: './secciones/criterios-tratamiento/diabetes/diabetes.module#DiabetesPageModule' },
  { path: 'hipertension', loadChildren: './secciones/criterios-tratamiento/hipertension/hipertension.module#HipertensionPageModule' },
  { path: 'influencia-cardiaca', loadChildren: './secciones/criterios-tratamiento/influencia-cardiaca/influencia-cardiaca.module#InfluenciaCardiacaPageModule' },
  { path: 'dislipidemia', loadChildren: './secciones/criterios-tratamiento/dislipidemia/dislipidemia.module#DislipidemiaPageModule' },
  { path: 'obesidad', loadChildren: './secciones/criterios-tratamiento/obesidad/obesidad.module#ObesidadPageModule' },
  { path: 'disfuncion-erectil', loadChildren: './secciones/criterios-tratamiento/disfuncion-erectil/disfuncion-erectil.module#DisfuncionErectilPageModule' },
  { path: 'productos-patrocinadores', loadChildren: './secciones/productos-patrocinadores/productos-patrocinadores/productos-patrocinadores.module#ProductosPatrocinadoresPageModule' },
  { path: 'buscador-farmacias', loadChildren: './secciones/farmacias/buscador-farmacias/buscador-farmacias.module#BuscadorFarmaciasPageModule' },
  { path: 'farmacias', loadChildren: './secciones/farmacias/farmacias/farmacias.module#FarmaciasPageModule' },
  { path: 'ofertas', loadChildren: './secciones/farmacias/ofertas/ofertas.module#OfertasPageModule' },
  { path: 'informacion-pacientes', loadChildren: './secciones/informacion-pacientes/informacion-pacientes/informacion-pacientes.module#InformacionPacientesPageModule' },
  { path: 'solicitud-atencion-servicio', loadChildren: './secciones/solicitud-atencion-servicio/solicitud-atencion-servicio/solicitud-atencion-servicio.module#SolicitudAtencionServicioPageModule' },
  { path: 'solicitud-visita', loadChildren: './secciones/solicitud-atencion-servicio/solicitud-visita/solicitud-visita.module#SolicitudVisitaPageModule' },
  { path: 'ecommerce', loadChildren: './secciones/solicitud-atencion-servicio/ecommerce/ecommerce.module#EcommercePageModule' },
  { path: 'novedades', loadChildren: './secciones/novedades/novedades/novedades.module#NovedadesPageModule' },
  { path: 'social-media', loadChildren: './secciones/novedades/social-media/social-media.module#SocialMediaPageModule' },
  { path: 'videos', loadChildren: './secciones/novedades/videos/videos.module#VideosPageModule' },
  { path: 'encuestas', loadChildren: './secciones/novedades/encuestas/encuestas.module#EncuestasPageModule' },
  { path: 'actualidades-medicas', loadChildren: './secciones/novedades/actualidades-medicas/actualidades-medicas.module#ActualidadesMedicasPageModule' },
  { path: 'farmacovigilancia', loadChildren: './secciones/farmacovigilancia/farmacovigilancia/farmacovigilancia.module#FarmacovigilanciaPageModule' },
  { path: 'reporte-efecto-adverso', loadChildren: './secciones/farmacovigilancia/reporte-efecto-adverso/reporte-efecto-adverso.module#ReporteEfectoAdversoPageModule' },
  { path: 'contacto-alfarma', loadChildren: './secciones/farmacovigilancia/contacto-alfarma/contacto-alfarma.module#ContactoAlfarmaPageModule' },
  { path: 'guias-calculadoras', loadChildren: './secciones/guias-calculadoras/guias-calculadoras/guias-calculadoras.module#GuiasCalculadorasPageModule' },
  { path: 'calculadoras', loadChildren: './secciones/guias-calculadoras/calculadoras/calculadoras.module#CalculadorasPageModule' },
  { path: 'guias', loadChildren: './secciones/guias-calculadoras/guias/guias.module#GuiasPageModule' },
  { path: 'configuracion', loadChildren: './secciones/configuracion/configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'perfil', loadChildren: './secciones/configuracion/perfil/perfil.module#PerfilPageModule' },
  { path: 'contacto', loadChildren: './secciones/configuracion/contacto/contacto.module#ContactoPageModule' },
  { path: 'creditos', loadChildren: './secciones/configuracion/creditos/creditos.module#CreditosPageModule' },
  { path: 'sugerencias', loadChildren: './secciones/configuracion/sugerencias/sugerencias.module#SugerenciasPageModule' },
  { path: 'registro', loadChildren: './secciones/registro/registro/registro.module#RegistroPageModule' },
  { path: 'ippa', loadChildren: './secciones/productos-patrocinadores/ippa/ippa.module#IppaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
