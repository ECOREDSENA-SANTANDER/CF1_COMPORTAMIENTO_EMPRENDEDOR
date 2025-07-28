<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Perfil del emprendedor y habilidades clave

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-4
        img.img-t.mb-3.d-none.d-lg-block(src='@/assets/curso/tema3/1.svg', alt='Imagen decorativa')
        p.mb-4 Comprender el fenómeno del emprendimiento, en Colombia y en el mundo, exige reconocer que emprender es mucho más que crear una empresa: es una actitud ante la vida. Emprender implica tomar la decisión de hacer realidad un sueño, sabiendo que para alcanzarlo es indispensable prepararse, conocer el entorno y estar dispuesto a construir el propio camino.
      .col-lg-3.col-md-7.col-9
        img.mb-lg-0.mb-4(src='@/assets/curso/tema3/2.svg', alt='Imagen decorativa')
      .col-lg-5
        .bg3.p-4.mb-lg-0.mb-4
          p.mb-0.my-lg-4 Desde la perspectiva de la administración, el emprendedor es quien identifica una necesidad, crea una solución innovadora y la transforma en una oportunidad de negocio. En este proceso, no solo busca beneficios económicos, sino también enfrenta retos y asume riesgos, elementos esenciales para lograr los objetivos que se propone.

    p.mb-4(data-aos="fade-left") Ser emprendedor implica cultivar habilidades como la resiliencia, la confianza en sí mismo, la capacidad de fijarse metas ambiciosas y el liderazgo positivo. Además, los emprendedores sienten un fuerte impulso de autorrealización y tienen la habilidad de evaluar constantemente su progreso, aprender de sus errores y adaptarse al cambio.

    .tarjeta.color-acento-conten.b2.p-4.mb-lg-5.mb-4.mb-md-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.ver Como complemento a esta información sobre emprendimiento, se invita a consultar el siguiente video, en el cual se abordan de manera clara y didáctica los aspectos fundamentales del emprendimiento.
              p.mb-0 Se recomienda visitar como apoyo para fortalecer los conocimientos.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://youtu.be/7pWonVKZPAA" target="_blank")
                span Ir al sitio
                i.fas.fa-video

    .titulo2.mb-lg-5.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Factores que inciden en el perfil emprendedor
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            p.mb-4 El perfil emprendedor no depende únicamente de características psicológicas, pues existen otros factores que también lo moldean:
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6.mb-0
                ul.lista-ul.mb-lg-4.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Género del emprendedor.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Edad.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Experiencia laboral específica.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Conocimiento técnico sobre productos o servicios.
              .col-lg-6
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Sector económico de desempeño.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Nivel de formación técnica y profesional.
          .col-lg-2
            img.d-none.d-lg-block(src='@/assets/curso/tema3/3.svg', alt='Imagen decorativa')
        p.mb-lg-0.mb-4 La adquisición de habilidades emprendedoras no es innata, sino que se construye en función de la capacidad del individuo para rodearse de experiencias enriquecedoras ya sean propias o ajenas y que, a su vez, le permitan transformar la intención en acción efectiva y superar el temor natural al fracaso que conlleva iniciar un nuevo proyecto de vida.
      .col-lg-5.col-md-9.col-10
        img.box(src='@/assets/curso/tema3/4.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        .titulo2.mb-lg-0.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
          h3.mb-0.mx-4.text-white Principales habilidades del emprendedor
      .col-lg-7.mb-lg-0.mb-0
        p.mb-0 A continuación, se describen las habilidades esenciales que debe desarrollar un emprendedor exitoso:
    
    
    .row.fondo3.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-12
    
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-3.col-md-5.col-8.mb-4
            img.d-none.d-lg-block(src='@/assets/curso/tema3/5.png', alt='')
          .col-lg-9.mb-0
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
              .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Pasión por lo que se hace")
                .col-lg-12
                  p.mb-0 La pasión constituye la fuerza motriz del emprendimiento; es la motivación profunda que impulsa al emprendedor a llevar adelante una idea, incluso frente a la adversidad. Se traduce en determinación y persistencia para cumplir un sueño, aún bajo presión o en entornos desfavorables.
              .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Empatía")
                .col-lg-12
                  p.mb-0 El emprendedor debe ser capaz de comprender las emociones y necesidades de los demás, estableciendo relaciones efectivas y colaborativas. La empatía requiere autoconciencia emocional y la habilidad de utilizar las emociones de manera constructiva, favoreciendo la cooperación y el respaldo de la red de contactos.
              .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Liderazgo positivo y trabajo en equipo")
                .col-lg-12
                  p.mb-0 Un emprendedor exitoso lidera reconociendo las fortalezas de su equipo, promoviendo su desarrollo y orientando sus esfuerzos hacia el logro de objetivos estratégicos. Fomenta el trabajo colaborativo, define claramente los roles de cada integrante y articula las acciones en torno a una planificación coherente.
              .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Gestión del cambio")
                .col-lg-12
                  p.mb-0 El entorno empresarial es dinámico y cambiante. El emprendedor eficaz anticipa los cambios, detecta oportunidades emergentes y adapta rápidamente su estrategia; para ello, es fundamental establecer redes de apoyo con otros emprendedores, empresarios y organizaciones que promueven el emprendimiento.
              .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="Tolerancia al fracaso")
                .col-lg-12
                  p.mb-0 El fracaso no se concibe como un obstáculo definitivo, sino como una fuente de aprendizaje. El emprendedor resiliente analiza sus errores, identifica oportunidades de mejora y desarrolla estrategias de ajuste para futuros intentos, asumiendo una actitud proactiva frente a los desafíos.

        .bg17.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/tema3/im1.svg', alt='')
            .col-lg-7.p-5(data-aos="fade-left")
              .bg6.p-2.mb-lg-5.mb-4
                h4.mb-0.ps-lg-3.pe-lg-3.ps-0.pe-0 Un perfil en constante evolución
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 El perfil del emprendedor no es estático; evoluciona de manera permanente a partir de sus experiencias y aprendizajes.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 El emprendedor no es un individuo excepcional desde su origen, sino una persona común que, a través del trabajo constante, la dedicación y la determinación, convierte una oportunidad identificada en un proyecto empresarial exitoso.


    .titulo.mb-lg-5.mb-md-5.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Motivaciones para emprender

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.col-md-9.col-10.mb-4
        img.box(src="@/assets/curso/tema3/8.png", alt="Descripción imagen")
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img.d-none.d-lg-block(src="@/assets/curso/tema3/9.svg", alt="Descripción imagen")
          .col-lg-10
            p.mb-0 Emprender es una decisión profundamente influenciada por las motivaciones que impulsan a una persona a iniciar su propio proyecto; estas motivaciones no solo definen el tipo de emprendimiento que se desarrolla, sino que también inciden en su sostenibilidad, impacto y sentido social. Comprender qué lleva a una persona a emprender, #[b ya sea por necesidad, oportunidad, innovación tecnológica, impacto social, expresión cultural o por compromiso con la sostenibilidad], permite identificar las fortalezas y desafíos particulares de cada iniciativa. 
        p.mb-lg-4.mb-2 Por ello, se exploran los principales tipos de motivaciones para emprender, destacando sus características, orígenes y aportes al desarrollo individual y colectivo.  


    .tarjeta.color-acento-conten.b2.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0.ver Cada emprendimiento nace de una motivación única que impulsa a dar el primer paso. 
              h4.mb-3.ver Existen diversas razones que llevan a una persona a elegir el camino del emprendimiento.
              p.mb-0 Descúbralas a continuación: &nbsp;&nbsp;&nbsp;• ¿Cuáles son las motivaciones para emprender?
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Emprendimiento/CF1_Emprendimiento//downloads/Tema_1.1_cuales_son_las_motivaciones_para_emprender.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
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
