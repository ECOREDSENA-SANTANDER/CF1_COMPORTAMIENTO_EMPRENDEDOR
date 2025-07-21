<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramienta de análisis FODA
    
    p.mb-4(data-aos="fade-left") A lo largo del tiempo, ha existido el debate sobre si el emprendedor nace con habilidades innatas o si estas se pueden desarrollar a lo largo de la vida; más allá de esta discusión, lo cierto es que existen factores que pueden influir positivamente en el camino emprendedor, como crecer en un entorno familiar con tradición empresarial, recibir una formación orientada al desarrollo de competencias emprendedoras, o contar con experiencia laboral previa que refuerce la confianza para iniciar un negocio. Sin embargo, no estar dentro de estas condiciones no impide emprender. 

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.pe-lg-0
        img.d-none.d-lg-block(src="@/assets/curso/tema3/10.svg")
      .col-lg-8.ps-lg-0
        .bg5.p-4
          p.mb-4.my-2 Toda persona con visión, esfuerzo y preparación adecuada puede convertirse en emprendedora.
          p.mb-4 Para iniciar con claridad y autoconocimiento este camino, es fundamental realizar un análisis FODA personal. Esta herramienta estratégica permite identificar los principales factores internos y externos que afectan o potencian una idea de emprendimiento, brindando una visión clara de la situación actual del emprendedor.
          p.mb-1 El análisis FODA (acrónimo de Fortalezas, Oportunidades, Debilidades y Amenazas), facilita una reflexión estructurada que impulsa la toma de decisiones más acertadas; su propósito es ayudar al emprendedor a reconocer con honestidad sus capacidades y limitaciones, así como los factores del entorno que podrían beneficiarlo o representar un riesgo.


    .cont_5_1.mt-4(data-aos="fade-left").mb-lg-5.mb-4
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema3/11.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center.text-white Fortalezas
              p.mb-0.text-center.mb-0.txp Son los atributos, recursos, conocimientos y habilidades que el emprendedor posee y que le otorgan una ventaja para alcanzar sus objetivos. Representan los pilares sobre los que puede construir su propuesta de valor.
        .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema3/12.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center.text-white Debilidades
              p.mb-0.text-center.mb-0.txp Son las carencias o limitaciones personales que pueden dificultar el desarrollo del emprendimiento. Identificarlas permite establecer planes de mejora y evitar que se conviertan en obstáculos críticos.
        .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema3/13.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center.text-white Oportunidades
              p.mb-0.text-center.mb-0.txp Corresponden a factores externos positivos — tendencias del mercado, avances tecnológicos, necesidades insatisfechas, apoyos institucionales — que pueden ser aprovechados estratégicamente para fortalecer el proyecto.
        .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema3/18.png' alt="")
            .crd_hover_txt--body.colt
              h5.mb-3.text-center.text-white Amenazas
              p.mb-0.text-center.mb-0.txp Se refieren a riesgos o desafíos del entorno que podrían poner en peligro el éxito del emprendimiento, como cambios regulatorios, alta competencia o crisis económicas. Anticiparlas permite diseñar estrategias de prevención o adaptación.
    
    .bg7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema3/14.png', alt='')
        .col-lg-7.p-5(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") #[b El análisis FODA]  Personal es mucho más que un ejercicio diagnóstico: es una herramienta poderosa de autoconocimiento, planificación y crecimiento. Permite al emprendedor tomar conciencia de su punto de partida, prepararse con mayor solidez y orientar su energía hacia la construcción de un negocio viable, sostenible y alineado con sus capacidades y aspiraciones.

    .row.mb-5
      .col-lg-12.mb-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.colorac.p-4(titulo="Fortalezas")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Fortalezas
                p.mb-4 Son las capacidades, conocimientos y recursos personales que favorecen el emprendimiento, como la formación académica, habilidades sociales, experiencia o dominio del área de negocio. Identificarlas permite construir desde lo que ya se posee.
                h4.mb-0 Preguntas guía: ¿En qué soy bueno?, ¿qué habilidades me destacan?, ¿qué conocimientos tengo?
          .tarjeta.colorac.p-4(titulo="Debilidades")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Debilidades
                p.mb-4 Son limitaciones internas que dificultan el logro de objetivos, como temores, falta de experiencia o conocimientos desactualizados. Reconocerlas es el primer paso para superarlas y crecer.
                h4.mb-0 Preguntas guía: ¿Qué puedo mejorar?, ¿qué me impide avanzar?, ¿qué actitudes debo cambiar?
          .tarjeta.colorac.p-4(titulo="Oportunidades")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Oportunidades
                p.mb-4 Factores externos positivos que pueden ser aprovechados para fortalecer el emprendimiento, como tendencias del mercado, redes de apoyo o nuevas tecnologías. Estar atento a ellas permite actuar en el momento adecuado.
                h4.mb-0 Preguntas guía: ¿Qué está ocurriendo en mi entorno que me beneficia?, 
                h4.mb-0 ¿qué recursos externos puedo usar?
          .tarjeta.colorac.p-4(titulo="Amenazas")
            .row.justify-content-center
              .col-lg-12.p-4
                h4.mb-4 Amenazas
                p.mb-4 Son riesgos o situaciones externas que podrían afectar negativamente el proyecto emprendedor, como la competencia, inestabilidad económica o cambios tecnológicos. Detectarlas a tiempo permite prevenir y adaptarse.
                h4.mb-0 Preguntas guía: ¿Qué factores externos pueden afectar mi idea?, ¿qué riesgos debo anticipar?
  

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-10
        .row.justify-content.align-items-center.mb-0
          .col-lg-7(alt='La tabla presenta las cuatro áreas clave del análisis FODA aplicado al emprendedor: fortalezas, que permiten reconocer sus características destacadas; debilidades, que señalan aspectos personales o profesionales por mejorar; oportunidades, que hacen referencia a factores externos que pueden impulsar un nuevo proyecto; y amenazas, que corresponden a situaciones que pueden dificultar su desarrollo, como circunstancias personales o sociales.')
            .titulo-sexto.color-secundario.mb-5
              h5 Tabla 1. 
              | Áreas por identificar
            .row.justify-content-center.mb-0
              .col-lg-6.col-md-6.col-10.mb-lg-0.mb-4
                .bg15.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white FORTALEZAS
                .bg8.p-5.mb-lg-0
                  p.mb-0.text-center Permite identificar las características en las cuales se destaca el emprendedor.
                .bg11.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white OPORTUNIDADES
                .bg13.p-5.mb-lg-0
                  p.mb-0.text-center Permite identificar oportunidades, tendencias, elementos externos, que pueden favorecer el emprendimiento a iniciar.
              .col-lg-6.col-md-6.col-10.mb-lg-0.mb-4
                .bg9.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white DEBILIDADES
                .bg12.p-lg-4.he3.mb-lg-0.p-4
                  p.mb-0.text-center.mb-3.my-2.my-lg-4.mb-lg-4 Permite identificar los puntos negativos o aspectos de mejora del emprendedor, pueden ser de índole personal o profesional.
                .bg16.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white AMENAZAS
                .bg14.p-lg-4.ce3.mb-lg-0.p-4
                  p.mb-0.text-center.my-lg-2 Detecta aquellas situaciones, acontecimientos que pueden afectar el correcto desarrollo del proyecto, como motivos personales, aspectos de la vida familiar, social, emocional, entre otros.
                     
    
          .col-lg-5(data-aos="fade-right")
            img.img-a.img-t.mb-3(src='@/assets/curso/tema3/15.svg' alt="")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                p.mb-0 Después de analizar cada uno de los elementos del FODA (fortalezas, debilidades, oportunidades y amenazas), el siguiente paso es elaborar un plan de acción. Este se construye a partir del cruce entre los factores internos (fortalezas y debilidades) y los factores externos (oportunidades y amenazas). El cruce permite al emprendedor obtener una visión objetiva y estratégica de su situación actual, identificando tanto las áreas de oportunidad que puede aprovechar como las debilidades que necesita mejorar; a partir de este análisis, se pueden definir acciones concretas que fortalezcan su perfil, potencien sus ventajas competitivas y minimicen los riesgos que podrían afectar el desarrollo de su emprendimiento.
    
    .titulo-sexto.color-secundario.mb-
      h5 Tabla 2. 
      | Matriz FODA con planes de acción
    
    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-10(alt='La tabla integra el análisis FODA con estrategias de acción. Se identifican fortalezas, debilidades, oportunidades y amenazas del emprendedor, y se relacionan con planes específicos: FO para potenciar fortalezas y oportunidades; DO para superar debilidades aprovechando oportunidades; FA para usar fortalezas frente a amenazas; y DA para reducir debilidades y minimizar amenazas que puedan afectar el emprendimiento.')
        .row.justify-content-center.mb-0
          .col-lg-8.mb-lg-0.mb-4.pe-lg-0
            .bg15.p-3.mb-lg-0
              h3.mb-0.text-center.text-white FORTALEZAS
            .bg8.p-5.mb-lg-0
              p.mb-0.text-center Permiten reconocer las cualidades, habilidades y competencias en las que el emprendedor se destaca, ya sea a nivel personal, profesional o empresarial.
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-6.pe-0.mb-lg-5.mb-0
                .bg16.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white OPORTUNIDADES
                .bg8.p-4.mb-lg-0
                  p.mb-0.text-center Se refieren a factores externos favorables como tendencias, apoyos institucionales o necesidades del entorno, que pueden facilitar el desarrollo del emprendimiento.
                .bg16.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white AMENAZAS
                .bg133.p-4.mb-lg-0
                  p.mb-0.text-center Son situaciones externas o personales que pueden poner en riesgo el avance del proyecto emprendedor, tales como problemas familiares, sociales, económicos o emocionales.
              .col-lg-6.col-md-6.ps-0.mb-lg-5
                .bg11.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white Plan de acción FO
                .bg8.p-4.mb-lg-0
                  p.mb-lg-4.mb-0.text-center Define estrategias para aprovechar al máximo las fortalezas del emprendedor y así sacar el mayor provecho de las oportunidades del entorno.
                .bg11.p-3.mb-lg-0
                  h3.mb-0.text-center.text-white Plan de acción FA
                .bg134.p-4.mb-lg-0
                  p.mb-4.text-center Diseña estrategias para utilizar las fortalezas personales o profesionales como herramientas para enfrentar o reducir posibles amenazas.
          
          .col-lg-4.ps-lg-0
            .bg91.p-3.mb-lg-0
              h3.mb-0.text-center.text-white.tx DEBILIDADES
            .bg8.p-lg-4.mb-lg-0.p-4
              p.mb-0.text-center Identifican las limitaciones, carencias o aspectos que requieren mejora en el emprendedor, tanto en el ámbito personal como profesional.
            .bg16.p-3.mb-lg-0
              h3.mb-0.text-center.text-white Plan de acción DO
            .bg8.mb-lg-0.p-4
              p.mb-4.text-center Plantea estrategias para superar debilidades internas del emprendedor, aprovechando las oportunidades externas disponibles.
            .bg16.p-3.mb-lg-0
              h3.mb-0.text-center.text-white Plan de acción DA
            .bg13.mb-lg-0.p-4
              p.mb-0.text-center Propone estrategias para mitigar los efectos de las debilidades del emprendedor y prevenir el impacto de las amenazas que podrían afectar el desarrollo del proyecto.

</template>

<script>
export default {
  name: 'Tema4',
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
