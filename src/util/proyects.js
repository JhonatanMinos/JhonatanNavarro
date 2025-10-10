export const projectsData = [
  {
    id: 1,
    title: "LumenFlow - Sistema de Gestión de Filas para Eventos",
    description:
      "LumenFlow es una aplicación web especializada diseñada para optimizar y controlar el flujo de personas en eventos, proporcionando una solución digital para la gestión eficiente de filas y orden de atención. El sistema permite una mejor organización y reduce los tiempos de espera, mejorando significativamente la experiencia de los asistentes a eventos.",
    stack: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "inertia.js",
      "Vite",
      "PHP",
      "Lumen",
      "MySQL",
      "RESTful APIs",
      "WebSockets",
      "Git",
    ],
    architecture: {
      frontend: [
        "Arquitectura basada en componentes",
        "Sistema de routing para navegación fluida",
        "Gestión de estado para manejo de datos en tiempo real",
        "Interfaces modulares para diferentes tipos de usuarios",
      ],
      backend: [
        "API RESTful desarrollada con Lumen",
        "Sistema de autenticación y autorización robusto",
        "Gestión de órdenes y estados de fila",
        "Comunicación en tiempo real para actualizaciones de estado",
      ],
      database: [
        "Diseño optimizado para el seguimiento de órdenes y estados",
        "Sistema de registro de eventos y auditoría",
        "Modelado eficiente para consultas rápidas",
      ],
    },
    challenges: {
      gestionEstado: [
        "Implementación de un sistema de actualización en tiempo real para reflejar cambios en el estado de las filas",
        "Optimización de la sincronización de datos entre múltiples clientes",
      ],
      interfazUsuario: [
        "Desarrollo de componentes modulares para diferentes roles de usuario",
        "Implementación de vistas específicas para informadores y administradores",
      ],
      rendimiento: [
        "Optimización de consultas a la base de datos",
        "Implementación de caché para mejorar tiempos de respuesta",
        "Arquitectura modular para facilitar el mantenimiento y escalabilidad",
      ],
    },
    impact: [
      "Reducción significativa en los tiempos de espera en eventos",
      "Mejora en la experiencia de usuario para los asistentes",
      "Sistema de reportes para análisis y optimización de flujos",
      "Interfaz intuitiva que facilita la gestión para el personal del evento",
      "Mayor eficiencia en la gestión de recursos humanos durante eventos",
    ],
  },
  {
    id: 2,
    title: "PayLink - Sistema de Gestión de Solicitudes de Pago",
    description:
      "PayLink es una aplicación web empresarial diseñada para automatizar y optimizar el proceso de solicitudes y gestión de pagos en un entorno dental corporativo. El sistema facilita la comunicación entre departamentos, el seguimiento de solicitudes y la gestión documental relacionada con pagos a proveedores.",
    stack: [
      "React.js",
      "React Hook Form",
      "Tailwind CSS",
      "Context API",
      "JavaScript",
      "HTML5",
      "CSS3",
      "RESTful APIs",
      "Git",
    ],
    architecture: {
      frontend: [
        "Arquitectura basada en componentes React",
        "Context API para estado global",
        "Hooks personalizados para lógica reutilizable",
        "Sistema de rutas protegidas",
        "Componentes modulares",
      ],
      stateManagement: [
        "Context API para estado global",
        "React Hooks para estado local",
        "Custom hooks para lógica de negocio",
      ],
      security: [
        "Sistema de autenticación",
        "Manejo seguro de sesiones",
        "Validación de datos en frontend",
      ],
      features: [
        "Sistema multi-moneda",
        "Carga de archivos múltiples",
        "Notificaciones por email",
        "Modo oscuro/claro",
        "Diseño responsivo",
      ],
    },
    challenges: {
      fileManagement: [
        "Sistema de carga múltiple con validación",
        "Previsualización de documentos",
        "Gestión eficiente del almacenamiento",
      ],
      paymentProcessing: [
        "Implementación de múltiples métodos de pago",
        "Validaciones específicas por tipo",
        "Conversión automática de cantidades a texto",
      ],
      approvalFlow: [
        "Sistema de estados para seguimiento",
        "Notificaciones automáticas",
        "Trazabilidad del proceso",
      ],
    },
    impact: [
      "Reducción significativa en tiempos de procesamiento de pagos",
      "Mejora en la trazabilidad y control de solicitudes",
      "Disminución de errores en procesamiento",
      "Mayor transparencia en aprobaciones",
      "Reducción en uso de papel y documentación física",
    ],
  },
  {
    id: 3,
    title: "MDC Dental - Sistema Integral de Gestión Dental",
    description:
      "Sistema de API integral diseñado para unificar y centralizar la gestión de múltiples plataformas dentales, con enfoque en el control y administración de usuarios. El sistema resuelve la complejidad de manejar diferentes interfaces y sistemas aislados en el contexto de servicios dentales, proporcionando una solución centralizada y eficiente.",
    stack: [
      "PHP",
      "Blade",
      "JavaScript",
      "CSS",
      "API RESTful",
      "Arquitectura por Capas",
      "Autenticación y Autorización",
    ],
    architecture: {
      api_layer: {
        description: "Punto central de integración",
        features: [
          "Comunicación entre plataformas dentales",
          "Endpoints RESTful",
          "Gestión de integraciones",
        ],
      },
      service_layer: {
        description: "Capa de lógica de negocio",
        features: [
          "Gestión centralizada de usuarios",
          "Lógica de operaciones dentales",
          "Servicios de integración externa",
        ],
      },
      presentation_layer: {
        description: "Interfaz de usuario",
        features: [
          "Interfaces con Blade",
          "Interactividad con JavaScript",
          "Diseño responsivo CSS",
        ],
      },
    },
    challenges: {
      integration: {
        problem: "Unificación de sistemas con diferentes protocolos y formatos",
        solution: "Implementación de adaptadores y transformadores de datos",
      },
      user_management: {
        problem: "Consistencia de datos de usuarios en múltiples plataformas",
        solution:
          "Sistema centralizado de gestión de identidades con sincronización",
      },
      security: {
        problem: "Cumplimiento de regulaciones de datos médicos",
        solution:
          "Protocolos de seguridad robustos y cifrado de datos sensibles",
      },
    },
    impact: [
      "Optimización en gestión de usuarios y recursos dentales",
      "Reducción en tiempos administrativos",
      "Mejora en experiencia de usuario para personal y pacientes",
      "Mayor eficiencia en integración de sistemas dentales",
    ],
    confidentiality_note:
      "Proyecto privado desarrollado para MDC Dental. El código fuente y detalles específicos son propiedad confidencial de la empresa.",
    developer: "JhonatanMinos",
    last_updated: "2025-10-10 03:44:26",
  },
];
