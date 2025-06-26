<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptos fundamentales del emprendimiento
        
      .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
        .col-lg-5.col-md-9.col-10
          img.mb-lg-0.mb-4(src="@/assets/curso/tema1/1.png", alt="Descripción imagen")
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2
              img.d-none.d-lg-block(src="@/assets/curso/tema1/2.svg", alt="Descripción imagen")
            .col-lg-10
              p.mb-0 Comprender el fenómeno del emprendimiento implica tener claridad sobre ciertos conceptos económicos esenciales; desde esta perspectiva, todo emprendimiento se concibe como una iniciativa orientada a introducir en el mercado bienes o servicios que respondan a necesidades, deseos o problemáticas concretas de los consumidores, aportando valor mediante propuestas innovadoras o soluciones diferenciadas.

      .tarjeta--container.row.mb-lg-5.mb-4
        .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-12
              .row.align-items-center
                .col-lg-3.mb-lg-4.mb-2.my-lg-4
                  img.img-a.img-t(src='@/assets/curso/tema1/3.svg', alt='Imagen decorativa.')
                .col-lg-9
                  .bg1.p-2.mb-3.my-3
                    h3.mb-0.text-white Bienes
              p.mb-lg-4.mb-0 Son productos tangibles que satisfacen necesidades humanas. Se generan mediante procesos de producción y su disponibilidad constituye una condición básica para el desarrollo de la actividad económica.
        .col-md.tarjeta.color-acento-contenido.pr.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-left")
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-center
                .col-lg-3.mb-lg-4.mb-3.my-lg-4
                  img.img-a.img-t(src='@/assets/curso/tema1/4.svg', alt='Imagen decorativa.')
                .col-lg-9
                  .bg1.p-2.mb-3.my-3
                    h3.mb-0.text-white Servicios 
              p.mb-lg-4.mb-0 Se refieren a actividades intangibles, que no generan propiedad sobre un objeto, pero que ofrecen valor al consumidor al resolver problemas o facilitar procesos.

      .titulo.mb-lg-5.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4.text-white Clasificación técnica de los bienes
      
      p.mb-4 En emprendimiento, es clave distinguir los bienes según su uso, durabilidad y nivel de transformación, ya que esto condiciona las estrategias de producción, comercialización y distribución.

      TabsC.color-primario(data-aos="fade-right")
        .p-lg-5.p-4(titulo="Según su función económica")
          .row.justify-content-between.align-items-center
            .col-lg-6
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')
            .col-lg-6
              .bg2.p-2.mb-3  
                h3.mb-0.ps-3.pe-3 Según su función económica 
              p.mb-3 Bienes de consumo (duraderos y no duraderos) y bienes de capital.
              h4.mb-0 Bienes de consumo
              p.mb-4 Son aquellos destinados al uso directo del consumidor final, satisfaciendo necesidades inmediatas. Estos pueden clasificarse en:
              ul.lista-ul
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 #[b Bienes duraderos:] mantienen su utilidad a lo largo del tiempo y pueden ser usados en múltiples ocasiones sin agotarse rápidamente. Ejemplos: vivienda, vehículos, electrodomésticos, maquinaria de oficina.
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 #[b Bienes no duraderos:] tienen una vida útil breve, se consumen rápidamente o se agotan con un solo uso. Ejemplos: productos alimenticios, artículos de higiene, combustibles.
              h4.mb-0 Bienes de capital
              p.mb-0 Son activos productivos que no satisfacen directamente una necesidad de consumo, pero que son indispensables para la producción de otros bienes o servicios. Representan una inversión dentro del ciclo productivo. Ejemplos: maquinaria industrial, herramientas, tecnologías especializadas, etc.

        .p-lg-5.p-4(titulo="Según su grado de transformación")
          .row.justify-content-between.align-items-center
            .col-lg-6
              img.d-none.d-lg-block.img-a.img-t(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen')
            .col-lg-6
              .bg2.p-2.mb-3  
                h3.mb-0.ps-3.pe-3 Según su grado de transformación
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Bienes intermedios] 
                p.mb-4.mx-4 Se utilizan como insumos en procesos de transformación productiva. No están destinados al consumo directo, sino a la elaboración de bienes finales. Ejemplo: algodón para la industria textil, acero para la construcción.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Bienes finales] 
                p.mb-0.mx-4 Son productos terminados que han culminado su proceso de producción y están listos para su comercialización o consumo final. Ejemplos: prendas de vestir, muebles, artículos escolares.

      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Dinámica de la actividad económica y rol de la empresa en el emprendimiento
      
      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-5.col-md-9.col-10.mb-4
          img(src="@/assets/curso/tema1/8.png", alt="Descripción imagen")
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2
              img.d-none.d-lg-block(src="@/assets/curso/tema1/9.svg", alt="Descripción imagen")
            .col-lg-10
              p.mb-0 La economía, como ciencia social, analiza los mecanismos mediante los cuales se producen, distribuyen y consumen los bienes y servicios, a fin de satisfacer las necesidades humanas, teniendo en cuenta que los recursos generalmente son limitados. En este marco, el emprendimiento constituye una manifestación activa de la economía, al propiciar nuevas formas de generación de valor, incentivar la innovación y dinamizar los mercados.
          p.mb-4 El proceso emprendedor, por tanto, no se limita a la creación de una unidad productiva, sino que integra decisiones estratégicas sobre recursos, modelos de negocio, segmentación de mercados y adaptación a los ciclos económicos. Asimismo, articula elementos de innovación, competitividad y sostenibilidad como ejes centrales de su proyección.

      p.mb-lg-5.mb-4 El emprendimiento se inserta dentro del ciclo económico a través de la creación de empresas, las cuales desempeñan un papel central en la producción, distribución y consumo de bienes y servicios. Comprender esta dinámica resulta clave para tomar decisiones informadas y sostenibles al momento de iniciar un proyecto empresarial.
     
      .titulo1.mb-lg-5.mb-md-4.mb-4.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/5.svg', alt='Imagen decorativa')
        h3.mb-0.mx-4.text-white Elementos y conceptos clave del entorno económico y el desarrollo empresarial


      .row.fondo1.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
        .col-lg-12
      
          .tarjeta.tarjeta--gris.ul.p-lg-4.p-3.mb-0(data-aos="fade-right")
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-end(titulo="Paso 1")
                .col-lg-7
                  .bg2.p-2.mb-4
                    h4.mb-0.ps-3.pe-3 A. Fases de la actividad económica
                  h5.mb-2 Producción
                  p.mb-4 Esta etapa consiste en la elaboración de bienes y prestación de servicios; aquí se define qué productos se van a ofrecer, qué necesidades se desean satisfacer y qué recursos se van a emplear. Esta actividad es liderada por las empresas, las cuales actúan como unidades productivas al transformar insumos en productos con valor agregado.
                  h5.mb-2 Distribución
                  p.mb-lg-4.mb-0 Una vez producidos los bienes y servicios, es necesario ponerlos al alcance del consumidor. La distribución conecta la oferta con la demanda, y aunque puede estar a cargo de las mismas empresas productoras, también puede involucrar intermediarios especializados (mayoristas, minoristas, plataformas digitales, entre otros).
                .col-lg-4.col-md-7.col-10.mb-4
                  img.img-a.img-t.d-none.d-lg-block.box(src='@/assets/curso/tema1/10.png')
                .row.justify-content-center.align-items-center.ps-0
                  .col-lg-11
                    h5.mb-2 Consumo
                    p.mb-0 Es la fase final, en la que los consumidores adquieren los bienes y servicios disponibles en el mercado. Su decisión de compra está determinada por sus preferencias, necesidades y capacidad económica (recursos monetarios disponibles).
              
              .row.justify-content-center.align-items-end(titulo="Paso 2")
                .col-lg-7
                  .bg2.p-2.mb-4
                    h4.mb-0.ps-3.pe-3 B. Factores productivos
                  p.mb-4 Para llevar a cabo la producción, las empresas requieren de factores productivos, que son los recursos fundamentales para generar bienes y servicios:  
                  ul.lista-ul
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 #[b Recursos naturales:] provienen directamente de la naturaleza y son limitados. Incluyen el agua, los minerales, la madera, el suelo, entre otros.
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 #[b Trabajo:] hace referencia a la actividad física e intelectual de las personas que intervienen en la producción. Este factor es aportado por el talento humano y es remunerado mediante salarios.
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 #[b Capital:] comprende los bienes de inversión utilizados para producir otros bienes o servicios, como maquinaria, instalaciones, tecnología e incluye los recursos financieros necesarios para operar.

                .col-lg-4.col-md-7.col-10.mb-4
                  img.img-a.img-t.d-none.d-lg-block.box(src='@/assets/curso/tema1/11.png')
                .row.justify-content-center.align-items-center.ps-0
                  .col-lg-11
                    ul.lista-ul
                      li.d-flex.mb-4
                        i.fas.fa-circle-check
                        p.mb-0 #[b Capacidades tecnológicas o conocimiento] (factor empresarial o innovación): se refiere a la capacidad de organizar los otros factores productivos, generar valor agregado e introducir mejoras tecnológicas o procesos innovadores. A veces también se denomina “habilidad empresarial” o “factor humano avanzado”.
              
              .row.justify-content-center.align-items-end(titulo="Paso 3")
                .col-lg-7
                  .bg2.p-2.mb-4
                    h4.mb-0.ps-3.pe-3 C. Agentes económicos
                  p.mb-4 La actividad económica surge de las decisiones e interacciones entre tres agentes fundamentales, cuyas funciones son esenciales para el funcionamiento del sistema económico:
                  ul.lista-ul
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 #[b Las familias:] son consumidoras de bienes y servicios, y además proveen factores de producción, especialmente trabajo y, en algunos casos, capital y recursos naturales. Reciben una remuneración en forma de salarios, intereses, dividendos o rentas.
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 #[b Las empresas:] son unidades económicas que toman decisiones sobre qué producir, cómo producirlo y para quién. Contratan los factores productivos y ofrecen bienes y servicios al mercado con fines de lucro y sostenibilidad.

                .col-lg-4.col-md-7.col-10.mb-4
                  img.img-a.img-t.d-none.d-lg-block.box(src='@/assets/curso/tema1/12.png')
                .row.justify-content-center.align-items-center.ps-0
                  .col-lg-11
                    ul.lista-ul
                      li.d-flex.mb-4
                        i.fas.fa-circle-check
                        p.mb-0 #[b El Estado (sector público):] regula el funcionamiento del sistema económico, provee bienes públicos, promueve la equidad social y vela por el bienestar colectivo. Además, participa como productor, consumidor y regulador.
      
              .row.justify-content-center.align-items-end(titulo="Paso 4")
                .col-lg-7
                  .bg2.p-2.mb-4
                    h4.mb-0.ps-3.pe-3 D. El flujo circular de la economía
                  p.mb-4 La interacción entre estos agentes da lugar al flujo circular de la renta, un modelo que describe cómo circula el dinero y los recursos en la economía:
                  ul.lista-ul
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 Las empresas contratan factores productivos a las familias y les pagan rentas (salarios, intereses, alquileres).
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 Las familias utilizan esas rentas para consumir bienes y servicios ofrecidos por las empresas.
                    li.d-flex.mb-4
                      i.fas.fa-circle-check
                      p.mb-0 Las empresas reciben ingresos que permiten continuar la producción, reinvertir y distribuir beneficios.

                .col-lg-4.col-md-7.col-10.mb-4
                  img.img-a.img-t.d-none.d-lg-block.box(src='@/assets/curso/tema1/13.png')
             
              .row.justify-content-center.align-items-end(titulo="Paso 5")
                .col-lg-7
                  .bg2.p-2.mb-4
                    h4.mb-0.ps-3.pe-3 E. La empresa como eje del emprendimiento
                  p.mb-4 La empresa es la institución económica que transforma recursos en bienes y servicios, y representa el motor del emprendimiento. Se define como una unidad de producción organizada que busca:
                  ul.lista-ul
                    li.d-flex.mb-2
                      i.fas.fa-circle-check
                      p.mb-0 Generar valor económico y social.
                    li.d-flex.mb-2
                      i.fas.fa-circle-check
                      p.mb-0 Incrementar su rentabilidad y participación en el mercado.
                    li.d-flex.mb-2
                      i.fas.fa-circle-check
                      p.mb-0 Crear riqueza compartida entre sus integrantes.
                    li.d-flex.mb-2
                      i.fas.fa-circle-check
                      p.mb-0 Actuar con responsabilidad social y sostenibilidad.
                .col-lg-4.col-md-7.col-10.mb-4
                  img.img-a.img-t.d-none.d-lg-block.box(src='@/assets/curso/tema1/14.png')
                .row.justify-content-center.align-items-center.ps-0
                  .col-lg-11
                    p.mb-0 Para crecer, las empresas pueden optar por estrategias de expansión interna (aumento de producción, ventas, innovación) o externa (acceso a nuevos mercados, fusiones, alianzas estratégicas).
      
              .row.justify-content-center.align-items-end(titulo="Paso 6")
                .col-lg-7
                  .bg2.p-2.mb-4
                    h4.mb-0.ps-3.pe-3 F. Elementos clave para la creación de una empresa
                  p.mb-4 El emprendedor que decide iniciar una empresa debe considerar los siguientes componentes:
                  ul.lista-ul
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Talento humano:] personas que participan activamente en la empresa, desde los socios y directivos hasta los trabajadores operativos.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Recursos materiales e intangibles:] incluyen activos como maquinaria, mobiliario, materias primas, propiedad intelectual y conocimiento.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Organización:] estructura interna que define jerarquías, responsabilidades y flujos de comunicación. Es responsabilidad del empresario establecer un modelo organizacional eficiente.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Entorno:] conjunto de factores externos que influyen en la actividad empresarial, como el entorno económico, político, legal, sociocultural y tecnológico.
                .col-lg-4.col-md-7.col-10.mb-4
                  img.img-a.img-t.d-none.d-lg-block.box(src='@/assets/curso/tema1/16.png')
                .row.justify-content-center.align-items-center.ps-0
                  .col-lg-11
                    p.mb-0 Para que un emprendimiento se convierta en empresa, es necesario que el emprendedor cuente con capital (propio o de terceros), capacidad de gestión y una propuesta de valor clara. Esta transformación lo convierte en empresario, es decir, en un agente activo que asume riesgos, lidera procesos productivos y dinamiza el tejido económico y social.

      
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Ecosistema de emprendimiento

      .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
        .col-lg-5.col-md-9.col-10
          img.mb-lg-0.mb-4(src="@/assets/curso/tema1/15.png", alt="Descripción imagen")
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2
              img.d-none.d-lg-block(src="@/assets/curso/tema1/17.svg", alt="Descripción imagen")
            .col-lg-10
              p.mb-0 Comprender el ecosistema de emprendimiento implica analizar las múltiples interacciones que configuran el entorno donde nacen y se desarrollan las iniciativas empresariales. Según Mason y Brown (2014), un ecosistema de emprendimiento está compuesto por una red interconectada de emprendedores, tanto potenciales como activos, organizaciones de apoyo empresarial (como empresas consolidadas, 
          p.mb-0 fondos de capital de riesgo, bancos y ángeles inversionistas), instituciones académicas y gubernamentales (universidades, agencias públicas, organismos financieros), así como procesos de monitoreo que permiten evaluar la dinámica emprendedora (por ejemplo: la tasa de creación de empresas, el número de compañías de alto crecimiento y el porcentaje de éxito empresarial). 

      p.mb-4(data-aos="fade-right") Todos estos actores y mecanismos interactúan, tanto de manera formal como informal, con el objetivo de facilitar, conectar y orientar el desempeño emprendedor en una región determinada.
      p.mb-lg-5.mb-4(data-aos="fade-left") Por su parte, Isenberg, (2010) propone un enfoque estructurado del ecosistema emprendedor, dividiéndolo en seis dominios fundamentales que permiten entender de forma integral el entorno que influye en la creación de empresas. Estos dominios actúan de manera interdependiente para fomentar la generación de valor económico y social, tanto para el emprendedor como para su comunidad y país. Los seis dominios son:

      .row.justify-content-center.align-items.mb-lg-4.mb-0(data-aos="fade-right")
        .col-lg-6.mb-4
          LineaTiempoD.color-acento-botones.activo
            p.mb-0(numero="1" titulo="Política") Comprende el marco normativo, la estabilidad institucional y los programas gubernamentales de apoyo al emprendimiento.
            p.mb-0(numero="2" titulo="Financiamiento") Abarca las fuentes de capital disponibles, desde créditos hasta inversiones de riesgo y financiamiento alternativo.
            p.mb-0(numero="3" titulo="Cultura") Incluye las actitudes sociales hacia el emprendimiento, el reconocimiento del éxito empresarial y la tolerancia al fracaso.
            p.mb-0(numero="4" titulo="Soporte") Se refiere a las infraestructuras de apoyo como incubadoras, aceleradoras, redes de mentoría y servicios empresariales especializados.
            p.mb-0(numero="5" titulo="Capital humano") Hace referencia al talento disponible, la formación técnica y profesional, y las habilidades emprendedoras de la población.
            p.mb-0(numero="6" titulo="Mercados") Considera el acceso a clientes, la apertura comercial y las oportunidades de escalar a nivel nacional e internacional.
        .col-lg-6.col-md-7.col-9.mb-4
          img.box1.d-none.d-lg-block(src='@/assets/curso/tema1/18.png', alt='')

      .tarjeta.color-acento-conten.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/pdf.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.ver En conjunto, estos elementos conforman un entorno propicio o limitante para el desarrollo de iniciativas emprendedoras sostenibles e innovadoras.
                p.mb-lg-0.mb-3 Complemente la información con los siguientes documentos: 
              .col-sm-auto
                a.boton.color-acento-botones.mar.mb-lg-0.mb-4(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Emprendimiento/CF1_Emprendimiento//downloads/Temas_4_Ecosistema_de_emprendimiento.pdf" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
                a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Emprendimiento/CF1_Emprendimiento//downloads/dominios.pdf" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
                


  </template>

<script>
export default {
  name: 'Tema1',
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
