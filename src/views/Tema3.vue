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
    
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
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

    .row.justify-content-center.align-items-center.fondo4.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-10

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-5
                .tarjeta.tarjeta-flip.color-primario
                  .tarjeta-flip__contenedor.hei
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/6.png')})`}")
                    .tarjeta-flip__contenido.p-5
                      h3.bg4.p-0.mb-0.ps-3.pe-3.text-white.text-center.my-5 Un perfil 
                      h3.bg4.p-0.mb-4.ps-3.pe-3.text-white.text-center en constante evolución
                      p.mb-5.my-5.text-center  El perfil del emprendedor no es estático; evoluciona de manera permanente a partir de sus experiencias y aprendizajes.
              .col-lg-5
                .tarjeta.tarjeta-flip.color-primario
                  .tarjeta-flip__contenedor.hei
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/7.png')})`}")
                    .tarjeta-flip__contenido.p-5
                      h3.bg4.p-0.mb-0.ps-3.pe-3.text-white.text-center.my-5 Un perfil 
                      h3.bg4.p-0.mb-4.ps-3.pe-3.text-white.text-center en constante evolución
                      p.mb-5.my-5.text-center El emprendedor no es un individuo excepcional desde su origen, sino una persona común que, a través del trabajo constante, la dedicación y la determinación, convierte una oportunidad identificada en un proyecto empresarial exitoso.


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
            p.mb-0 Emprender es una decisión profundamente influenciada por las motivaciones que impulsan a una persona a iniciar su propio proyecto; estas motivaciones no solo definen el tipo de emprendimiento que se desarrolla, sino que también inciden en su sostenibilidad, impacto y sentido social. Comprender qué lleva a una persona a emprender, ya sea por necesidad, oportunidad, innovación tecnológica, impacto social, expresión cultural o por compromiso con la sostenibilidad, permite identificar las fortalezas y desafíos particulares de cada iniciativa. 
        p.mb-lg-4.mb-2 Por ello, se exploran los principales tipos de motivaciones para emprender, destacando sus características, orígenes y aportes al desarrollo individual y colectivo.  


    .tarjeta.color-acento-conten.b2.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/video.svg")
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

    p.mb-4(data-aos="fade-left") A lo largo del tiempo, ha existido el debate sobre si el emprendedor nace con habilidades innatas o si estas se pueden desarrollar a lo largo de la vida; más allá de esta discusión, lo cierto es que existen factores que pueden influir positivamente en el camino emprendedor, como crecer en un entorno familiar con tradición empresarial, recibir una formación orientada al desarrollo de competencias emprendedoras, o contar con experiencia laboral previa que refuerce la confianza para iniciar un negocio. Sin embargo, no estar dentro de estas condiciones no impide emprender. 

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.pe-lg-0
        img.d-none.d-lg-block(src="@/assets/curso/tema3/10.svg")
      .col-lg-8.ps-lg-0
        .bg5.p-4
          .bg6.p-1.mb-3
            h4.mb-0.ps-1.pe-1 Toda persona con visión, esfuerzo y preparación adecuada puede convertirse en emprendedora.
          p.mb-3 Para iniciar con claridad y autoconocimiento este camino, es fundamental realizar un análisis FODA personal. Esta herramienta estratégica permite identificar los principales factores internos y externos que afectan o potencian una idea de emprendimiento, brindando una visión clara de la situación actual del emprendedor.
          p.mb-0 El análisis FODA (acrónimo de Fortalezas, Oportunidades, Debilidades y Amenazas), facilita una reflexión estructurada que impulsa la toma de decisiones más acertadas; su propósito es ayudar al emprendedor a reconocer con honestidad sus capacidades y limitaciones, así como los factores del entorno que podrían beneficiarlo o representar un riesgo.


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
          .bg1.p-1.mb-4
            h4.mb-0.text-white(data-aos="fade-left") El análisis FODA 
          p.mb-0 Personal es mucho más que un ejercicio diagnóstico: es una herramienta poderosa de autoconocimiento, planificación y crecimiento. Permite al emprendedor tomar conciencia de su punto de partida, prepararse con mayor solidez y orientar su energía hacia la construcción de un negocio viable, sostenible y alineado con sus capacidades y aspiraciones.

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
                  h3.mb-0.text-center.text-white OPORTUNIDADES
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
