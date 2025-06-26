export default {
  global: {
    Name: 'Camino emprendedor',
    Description:
      'Ser emprendedor implica más que iniciar un negocio: es asumir una actitud proactiva ante la vida, con visión estratégica, creatividad y capacidad de transformar ideas en oportunidades sostenibles. A través del autoconocimiento, el análisis del entorno y el desarrollo de habilidades clave, el emprendedor se convierte en agente de cambio social y económico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos fundamentales del emprendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Dinámica de la actividad económica y rol de la empresa en el emprendimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ecosistema de emprendimiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Intención emprendedora en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Perfil del emprendedor y habilidades clave',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación y formalización de las empresas en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Formalización empresarial en Colombia',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Entidades que apoyan el emprendimiento en Colombia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Perfil del emprendedor y habilidades clave',
      referencia:
        'Cámara de Comercio de Bogotá. (2016). Consejos para la creación de su empresa.',
      tipo: 'Video',
      link: 'https://youtu.be/n-Ut5dBry3Q',
    },
    {
      tema: 'Formalización empresarial en Colombia',
      referencia:
        'Cámara de Comercio de Bogotá. (2016). Formalización empresarial CCB.',
      tipo: 'Video',
      link: 'https://youtu.be/Kt9g3lXgsOg',
    },
    {
      tema: 'Entidades que apoyan el emprendimiento en Colombia',
      referencia: 'iNNpulsa Colombia (2021).',
      tipo: 'Página',
      link: 'https://www.innpulsacolombia.com/nosotros/',
    },
    {
      tema: 'Intención emprendedora en Colombia',
      referencia:
        'Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Enero 27 de 2006. DO. N°46.164.',
      tipo: 'PDF',
      link:
        'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Emprendimiento/CF1_Emprendimiento//downloads/complementarios/Ley_1014_de_2006.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Emprendimiento',
      significado:
        'proceso de transformar ideas en soluciones sostenibles con impacto económico y social.',
    },
    {
      termino: 'Ecosistema emprendedor',
      significado:
        'conjunto de actores, instituciones y recursos que interactúan para apoyar la creación y desarrollo de empresas.',
    },
    {
      termino: 'Ley 1014 de 2006',
      significado:
        'norma que fomenta la cultura emprendedora en Colombia desde una perspectiva educativa y social.',
    },
    {
      termino: 'Ley 2069 de 2020',
      significado:
        'regulación que impulsa la simplificación de trámites y promueve la inclusión en el ecosistema empresarial.',
    },
    {
      termino: 'Bienes y servicios',
      significado:
        'productos tangibles e intangibles ofrecidos para satisfacer necesidades del mercado.',
    },
    {
      termino: 'Bienes de capital',
      significado:
        'activos utilizados en la producción de otros bienes, fundamentales para el ciclo productivo.',
    },
    {
      termino: 'Factores productivos',
      significado:
        'recursos como trabajo, capital y naturaleza requeridos para generar bienes y servicios.',
    },
    {
      termino: 'Agentes económicos',
      significado:
        'familias, empresas y Estado que toman decisiones y dinamizan la economía.',
    },
    {
      termino: 'Empresa',
      significado:
        'unidad productiva organizada que transforma recursos en valor económico y social.',
    },
    {
      termino: 'Flujo circular de la economía',
      significado:
        'modelo que representa la interacción entre producción, ingreso y consumo.',
    },
    {
      termino: 'Perfil emprendedor',
      significado:
        'conjunto de actitudes, habilidades y experiencias que caracterizan al emprendedor.',
    },
    {
      termino: 'Habilidades del emprendedor',
      significado:
        'competencias como liderazgo, empatía, resiliencia y adaptación al cambio.',
    },
    {
      termino: 'Análisis FODA',
      significado:
        'herramienta estratégica para identificar fortalezas, oportunidades, debilidades y amenazas.',
    },
    {
      termino: 'Formalización empresarial',
      significado:
        'proceso legal que permite operar dentro del sistema económico formal.',
    },
    {
      termino: 'Clasificación de empresas',
      significado:
        'categorización según tamaño, actividad, forma jurídica, zona geográfica y propiedad del capital.',
    },
    {
      termino: 'Motivaciones para emprender',
      significado:
        'razones personales o sociales que impulsan a iniciar un proyecto empresarial.',
    },
    {
      termino: 'Apoyo institucional',
      significado:
        'respaldo ofrecido por entidades gubernamentales, privadas y académicas al emprendedor.',
    },
    {
      termino: 'SENA – Fondo Emprender',
      significado:
        'programa estatal que ofrece capital semilla y formación para nuevas empresas.',
    },
    {
      termino: 'iNNpulsa Colombia',
      significado:
        'agencia que promueve la innovación y el emprendimiento de alto impacto.',
    },
    {
      termino: 'Análisis del entorno',
      significado:
        'evaluación del contexto político, económico, social y tecnológico para tomar decisiones estratégicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfaro Giménez, J., & Pina Massachs, M. (2014). Empresa y administración (p. 10). Mc Graw Hill Educación.',
      link: '',
    },
    {
      referencia: 'Bancoldex. (2021) Líneas de crédito.',
      link: 'https://www.bancoldex.com/',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2009). Abc de las SAS Sociedades por acciones simplificadas.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2016). Consejos para la creación de su empresa. [Video] YouTube.',
      link: 'https://youtu.be/n-Ut5dBry3Q',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2016). Formalización empresarial CCB. [Video] YouTube.',
      link: 'https://youtu.be/Kt9g3lXgsOg',
    },
    {
      referencia: 'Cámara de Comercio de Bogotá. Formalice su empresa. CCB.',
      link: 'https://www.ccb.org.co/Cree-su-empresa/Formalice-su-empresa',
    },
    {
      referencia:
        'Fondo Nacional de Garantías (2021) Sobre el FNG Quienes somos.',
      link: '',
    },
    {
      referencia:
        'Global Entrepreneurship Monitor GEM. (2019). Dinámica de la actividad Empresarial en Colombia. Universidad ICESI.',
      link: '',
    },
    {
      referencia: 'iNNpulsa Colombia (2021). Nosotros.',
      link: 'https://www.innpulsacolombia.com',
    },
    {
      referencia:
        'Isenberg, D. (2010). Cómo lanzar una revolución emprendedora. Harvard Business Review, 88 (págs., 33-40).',
      link: '',
    },
    {
      referencia:
        'Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Enero 27 de 2006. DO. N° 46.164.',
      link: '',
    },
    {
      referencia:
        'Ley 905 de 2004, Por medio de la cual se modifica la Ley 590 de 2000 sobre promoción del desarrollo de la micro, pequeña y mediana empresa colombiana y se dictan otras disposiciones. 02 Ago, 2004.',
      link: '',
    },
    {
      referencia:
        'Mason, C. & Brown, R. (2014). Entrepreneurial Ecosystems and Growth Oriented Entrepreneurship. Final Report to OECD, Paris.',
      link: '',
    },
    {
      referencia: 'Minciencias (2021) Convocatorias.',
      link: 'https://minciencias.gov.co',
    },
    {
      referencia:
        'SENA (2016) Cartilla emprendimiento Centro de Servicios Financieros.',
      link: '',
    },
    {
      referencia:
        'Sánchez, E. (1). El emprendimiento un reto hacia el desarrollo regional y local. Desarrollo & Gestión, (5).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Experta y diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
