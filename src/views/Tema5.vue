<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Entidades que apoyan el emprendimiento en Colombia

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5.col-md-9.col-10.mb-4
        img(src="@/assets/curso/tema5/1.png", alt="Descripción imagen")
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img.d-none.d-lg-block(src="@/assets/curso/tema5/2.svg", alt="Descripción imagen")
          .col-lg-10
            p.mb-0(data-aos="fade-right") En Colombia, el fomento al emprendimiento ha sido una prioridad del Estado, especialmente tras la promulgación de la Ley 905 de 2004, que reformó la Ley 590 de 2000. Esta normativa dio origen al Sistema Nacional de Apoyo a las Mipymes, con el propósito de articular de forma estratégica entidades públicas y privadas, fortalecer el tejido empresarial, y respaldar de manera efectiva a los emprendedores, quienes son agentes clave para el dinamismo económico del país.
        p.mb-4(data-aos="fade-left") A partir de esta estructura institucional, se han consolidado diversas iniciativas y actores que brindan acompañamiento, formación, financiación y servicios de incubación o aceleración. A continuación, se presentan las principales entidades y programas de apoyo, organizados según su naturaleza y ámbito de acción:
     
    .titulo.mb-lg-5.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Entidades del gobierno nacional

    .row.fondo1.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12

        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 SENA y Fondo Emprender
                p.mb-4 El Servicio Nacional de Aprendizaje (SENA), a través del Fondo Emprender, otorga capital semilla condonable para financiar iniciativas empresariales presentadas por aprendices, técnicos, tecnólogos y profesionales. Además, lidera el Sistema Nacional de Incubación y Creación de Empresas, ofreciendo formación y orientación en la formulación y ejecución de planes de negocio. SENA, (2016).
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/10.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/3.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 iNNpulsa Colombia
                p.mb-4 Agencia del Ministerio de Comercio, Industria y Turismo especializada en promover la innovación y escalar emprendimientos de alto potencial. Ofrece programas de aceleración, acceso a financiación y fortalecimiento empresarial orientado a la generación de valor agregado, productividad y competitividad.
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/11.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/4.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Apps.co (MinTIC)
                p.mb-4 Iniciativa del Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) orientada a fortalecer emprendimientos digitales. Provee formación, acompañamiento técnico y conexiones estratégicas para emprendedores que desarrollan soluciones basadas en TIC, como aplicaciones móviles o plataformas web.
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/12.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/5.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Colciencias (hoy MinCiencias)
                p.mb-4 El Ministerio de Ciencia, Tecnología e Innovación financia proyectos de investigación aplicada y emprendimiento tecnológico mediante convocatorias públicas. Las áreas priorizadas incluyen salud, biodiversidad, agroindustria, energía, TIC, ciencias sociales y del mar, entre otras.
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/13.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/6.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Bancóldex
                p.mb-4 Banco de desarrollo empresarial que actúa como banco de segundo piso. Ofrece líneas de crédito para modernización, internacionalización, sostenibilidad y capital de trabajo, así como herramientas de formación empresarial a través de plataformas virtuales y asesoría técnica.
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/14.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/7.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 Fondo Nacional de Garantías (FNG)
                p.mb-4 Facilita el acceso al crédito mediante la expedición de garantías para micro, pequeñas y medianas empresas, trabajadores independientes y hogares, reduciendo el riesgo financiero ante entidades prestamistas.
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/15.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/8.png")
            .row.justify-content-center.align-items-center.p-0.p-lg-4
              .col-lg-7
                h4.mb-4 FINAGRO
                p.mb-4 El Fondo para el Financiamiento del Sector Agropecuario, el cual proporciona créditos subsidiados, incentivos a la capitalización rural y programas especiales para pequeños productores, con respaldo del Ministerio de Agricultura y Desarrollo Rural.
                img.img-a.img-t(alt="" src="@/assets/curso/tema5/16.svg")
              .col-lg-4.col-md-7
                img.box(alt="" src="@/assets/curso/tema5/9.png")

    .titulo2.mb-lg-5.mb-md-3.mb-2.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Gobiernos locales y ecosistemas regionales
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-5.col-8.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema5/17.png', alt='')
      .col-lg-9.mb-0
        p.mb-4 Las administraciones departamentales y municipales también lideran programas que fomentan el emprendimiento y la innovación con un enfoque territorial. Algunos ejemplos representativos incluyen:
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Diseño Cultura E (Medellín)")
            .col-lg-12
              p.mb-0 Estrategia de la Alcaldía de Medellín que impulsa la cultura emprendedora y el desarrollo de nuevas empresas en sectores estratégicos, en alianza con Ruta N y los clústeres locales.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Cali Emprendedora")
            .col-lg-12
              p.mb-0 Iniciativa orientada a dinamizar la economía local mediante la promoción del emprendimiento como respuesta al desempleo. Ofrece acceso a microcréditos, capital semilla, ruedas de negocio y herramientas digitales.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Red de Emprendimiento de Santander")
            .col-lg-12
              p.mb-0 Alianza regional de entidades públicas, privadas y académicas que articula políticas, programas y servicios de apoyo a emprendedores, promoviendo el crecimiento empresarial en el oriente colombiano.

    .titulo3.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Aceleradoras e incubadoras de empresas

    .row.mb-5
      .col-lg-12.mb-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.colorac.p-4(titulo="Incubadoras")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Incubadoras
                p.mb-0 Apoyan emprendimientos en etapas tempranas, brindando asistencia técnica, asesoría en planes de negocio, registro de propiedad intelectual, mercadeo y gestión empresarial. Su propósito es incrementar la tasa de éxito de nuevos negocios.
          .tarjeta.colorac.p-4(titulo="Aceleradoras")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Aceleradoras
                p.mb-4 Invierten en startups con potencial de alto crecimiento a cambio de participación accionaria. Su éxito depende del desempeño de las empresas aceleradas, por lo que ofrecen acompañamiento intensivo, redes de contacto, inversión y mentoría especializada.
                p.mb-0 Ejemplos destacados:
          .tarjeta.colorac.p-4(titulo="Ruta N (Medellín)")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Ruta N (Medellín)
                p.mb-0 Centro de innovación y negocios tecnológicos promovido por la Alcaldía de Medellín, UNE y EPM. Fomenta emprendimientos en sectores como energía, salud y TIC mediante programas de formación, financiación y #[em networking.]
          .tarjeta.colorac.p-4(titulo="Connect Bogotá Región")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Connect Bogotá Región
                p.mb-0 Plataforma que articula actores públicos, privados y académicos para fortalecer el emprendimiento de base científica y tecnológica en Bogotá y Cundinamarca.
          .tarjeta.colorac.p-4(titulo="Créame")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Créame
                p.mb-0 Incubadora empresarial que brinda servicios de acompañamiento integral, incluyendo formación, mentoría y diseño de modelos de negocio innovadores.
          .tarjeta.colorac.p-4(titulo="Corporación Ventures")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Corporación Ventures
                p.mb-0 Aceleradora que impulsa proyectos empresariales sostenibles, conectando emprendedores con capital, formación y redes de apoyo público-privadas.

    .titulo2.mb-lg-5.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Universidades e Instituciones de Educación Superior
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-3(data-aos="fade-right")
      .col-lg-7
        p.mb-4 Las Instituciones de Educación Superior (IES) han integrado el emprendimiento en sus funciones misionales. A través de sus Unidades de Emprendimiento ofrecen:
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2
            img.d-none.d-lg-block(alt="" src="@/assets/curso/tema5/19.svg")
          .col-lg-10
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Formación y sensibilización en cultura emprendedora.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Asesoría en formulación de planes de negocio.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Acompañamiento para acceder a convocatorias y fuentes de financiación.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Apoyo en la puesta en marcha de empresas de base tecnológica o social.
      .col-lg-5
        img.box.d-none.d-lg-block(alt="" src="@/assets/curso/tema5/18.png")

    .bg7.mb-0
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema5/20.jpg', alt='')
        .col-lg-7.p-5.p-lg-5(data-aos="fade-left")
          .bg1.p-1.mb-lg-5.mb-4
            h4.mb-0.text-white(data-aos="fade-left") Estas unidades operan como centros de transferencia de conocimiento y fortalecen el vínculo universidad-empresa-sociedad.
          p.mb-0 El fortalecimiento del ecosistema de emprendimiento en Colombia es resultado de un entramado de actores públicos, privados, académicos y sociales que, de forma articulada, ofrecen recursos, formación y acompañamiento a los emprendedores. 
          p.mb-0 El acceso a estas entidades y programas no solo mejora las probabilidades de éxito empresarial, sino que contribuye al desarrollo territorial, la generación de empleo y la transformación productiva del país.




</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
