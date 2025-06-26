<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Intención emprendedora en Colombia

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      .col-lg-5.col-md-9.col-10.mb-4
        img(src="@/assets/curso/tema2/1.png", alt="Descripción imagen")
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img.d-none.d-lg-block(src="@/assets/curso/tema2/2.svg", alt="Descripción imagen")
          .col-lg-10
            p.mb-0 Entre 2017 y 2022, la intención emprendedora en Colombia entre adultos de 18 a 64 años cayó del 57 % al 21,2 %, evidenciando una disminución sostenida. Esta tendencia refleja un menor interés por emprender, posiblemente asociado a factores como la incertidumbre económica, el acceso limitado a financiamiento, las brechas en educación emprendedora y las condiciones desfavorables del mercado.
    p.mb-4(data-aos="fade-right") Sin embargo, según el informe GEM Colombia 2023-2024, la intención emprendedora entre adultos colombianos mostró una recuperación notable a partir del año 2022, alcanzando un 28 %. Aunque en 2023 se evidenció nuevamente un descenso, esta vez más moderado, situándose en un 23,5 %, esta tendencia señala una dinámica marcada por altibajos en la actividad emprendedora, con fluctuaciones que presentan desafíos y oportunidades para el análisis y la comprensión de los factores que influyen en el comportamiento emprendedor a lo largo del tiempo.
    p.mb-4(data-aos="fade-left") A nivel regional, según el Índice de Contexto Empresarial (NECI) del Global Entrepreneurship Monitor (GEM, 2019), Colombia ocupa el séptimo lugar entre los países de América del Norte, Centroamérica y Suramérica en términos de favorabilidad para la creación de empresas, de acuerdo con una escala donde puntuaciones cercanas a cero reflejan entornos poco propicios y valores cercanos a diez indican condiciones altamente favorables para el emprendimiento.
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 1. 
          | Informe GEM Colombia
        img.mb-3(src='@/assets/curso/tema2/3.svg', alt='La figura presenta un mapa de América con porcentajes asociados a distintos países, correspondientes al Informe GEM sobre el contexto para emprender. Colombia aparece con un 4.2 %, ubicándose en el séptimo lugar, entre países como Ecuador (4.1 %), Brasil (3.9 %) y México (4.7 %). Estados Unidos y Canadá que registran los porcentajes más altos (5.3 % y 5.1 %, respectivamente), mientras que Puerto Rico presenta el valor más bajo (3.1 %).')
        figcaption.mb-5 Fuente: https://gemcolombia.org/
      
      .col-lg-6
        .titulo2.mb-lg-5.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
          img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
          h3.mb-0.mx-4.text-white Factores que respaldan la intención emprendedora:
        
        ul.lista-ul
          li.d-flex.mb-4
            i.fas.fa-circle-check
            p.mb-0 #[b Percepción positiva del emprendimiento:] más del 70 % de los adultos colombianos conocen a alguien que ha iniciado un negocio recientemente, y una proporción similar considera tener las habilidades y experiencia necesarias para emprender. 
          li.d-flex.mb-4
            i.fas.fa-circle-check
            p.mb-0 #[b Participación femenina:] en 2023, se observó una mayor participación femenina en la actividad empresarial temprana (TEA), lo que indica un avance en la inclusión de las mujeres en el ecosistema emprendedor colombiano.
          li.d-flex.mb-4
            i.fas.fa-circle-check
            p.mb-0 #[b Apoyo institucional:] iniciativas gubernamentales y de organizaciones como iNNpulsa Colombia (nombre oficial de la entidad colombiana de apoyo al emprendimiento y la innovación), han fortalecido la mentalidad emprendedora, con programas que han beneficiado a más de 54.833 colombianos y una inversión superior a 42.000 millones de pesos para impulsar las micro, pequeñas y medianas empresas (MiPymes) en todo el país.


    .bg2.p-2.mb-4(data-aos="fade-right")
      h3.mb-0.ps-3.pe-3 Los principales factores que obstaculizan la actividad empresarial

    p.mb-4(data-aos="fade-left") Según el estudio Global Entrepreneurship Monitor (GEM) Colombia 2019, los principales factores que obstaculizan la actividad empresarial en el país son:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 1
            | La falta de políticas gubernamentales (29,6 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | El limitado acceso a apoyo financiero (24,1 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | Deficiencias en la educación empresarial (6,5 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 4
            | La baja dinámica del mercado interno (6,5 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 5
            | Limitado acceso a infraestructura física y servicios (5,6 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 6
            | Las capacidades limitadas para crear empresas (5,6 %).
          li 
            
      .col-lg-2
        img.d-none.d-lg-block(src='@/assets/curso/tema2/4.svg', alt='Imagen decorativa')
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 7
            | Las características de la mano de obra (4,6 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 8
            | La insuficiencia de programas gubernamentales (4,6 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 9
            | El contexto político y social (3,7 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 10
            | Las normas sociales y culturales junto a la corrupción (2,8 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 11
            | La baja transferencia de investigación y desarrollo (2,8 %).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 12
            | El clima económico adverso (0,9 %).
          li 


    .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El emprendimiento representa una oportunidad de transformación personal, en la medida en que permite al emprendedor generar soluciones frente a sus problemáticas particulares, por ello se convierte en un proyecto de vida con el potencial de mejorar su calidad de vida y de proyectar su desarrollo individual hacia una realización integral.
        br
        br
        p.mb-0 Las iniciativas emprendedoras no solo responden a necesidades individuales, sino que constituyen motores de desarrollo socioeconómico; su impacto trasciende el ámbito local, pudiendo influir de manera significativa en contextos regionales e incluso internacionales, lo que contribuye al progreso de toda una nación (Sánchez, 2010).
        br
        br
        p.mb-0 La acción emprendedora está siempre situada en un contexto determinado, cuyas dinámicas sociales, económicas y culturales moldean tanto las oportunidades como los desafíos. Por ello, el emprendimiento puede entenderse como una apuesta por el desarrollo humano, que reconoce las particularidades de las comunidades y busca, a través de la innovación y la generación de valor, superar las inequidades sociales y construir condiciones de vida más dignas.
</template>

<script>
export default {
  name: 'Tema2',
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
