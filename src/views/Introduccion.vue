<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade-right") El emprendimiento se fundamenta en la capacidad y disposición del ser humano para identificar necesidades o problemáticas en su entorno y generar soluciones mediante la creación o mejora de productos y servicios, orientados a un mercado específico. En Colombia, la promoción del emprendimiento inició formalmente con la Ley 1014 de 2006, que impulsó la cultura emprendedora basada en valores, normas y prácticas sociales, reconociendo la diversidad de formas de emprender según el contexto regional y poblacional.
    p.mb-4(data-aos="fade-left") No obstante, la dinámica empresarial exigió una actualización normativa; es así como se promulgó la Ley 2069 de 2020, que constituye el marco legal vigente para el fortalecimiento del ecosistema emprendedor y establece medidas como la simplificación de trámites para la creación y formalización de empresas, incentivos financieros como el seguro MiPyme, el impulso a modelos de negocio innovadores, la adaptación de políticas al contexto regional y la promoción de la inclusión social, con énfasis en poblaciones vulnerables.
    p.mb-4(data-aos="fade-right") La Ley 2069 refleja el compromiso del Estado colombiano por consolidar un entorno propicio para el surgimiento, crecimiento y sostenibilidad de nuevas empresas, adaptándose a las realidades actuales del mercado y las necesidades de los emprendedores.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
