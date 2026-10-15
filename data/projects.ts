export type ProjectCategory = "Tienda online" | "Sistema" | "Landing";

export type ProjectImage = { src: string; alt: string; caption?: string };

export type ProjectOverview = {
  client: string;
  industry: string;
  type: string;
  scope: string;
  status: string;
  /** Dominio a mostrar; el link usa `url` */
  site?: string;
};

export type SolutionBlock = { title: string; description: string; items: string[] };

export type StackItem = { name: string; purpose: string };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Una línea, para tarjetas y filas */
  summary: string;
  overview?: ProjectOverview;
  /** Párrafos */
  challenge: string[];
  solutionIntro?: string;
  solution: SolutionBlock[];
  stack: StackItem[];
  results: string[];
  tags: string[];
  url?: string;
  featured: boolean;
  cover: ProjectImage | null;
  images: ProjectImage[];
};

export const categories: ProjectCategory[] = ["Tienda online", "Sistema", "Landing"];

const harasImages: ProjectImage[] = [
  {
    src: "/proyectos/haras/haras-1-tienda.webp",
    alt: "Haras del Este – tienda online en desktop y celular",
    caption: "Inicio de la tienda en computadora y celular",
  },
  {
    src: "/proyectos/haras/haras-2-catalogo.webp",
    alt: "Haras del Este – catálogo de productos",
    caption: "Catálogo con categorías, filtros y ordenamiento",
  },
  {
    src: "/proyectos/haras/haras-3-panel.webp",
    alt: "Haras del Este – panel de administración",
    caption: "Panel de administración con el resumen del negocio",
  },
];

export const projects: Project[] = [
  {
    slug: "haras-del-este",
    title: "Haras del Este",
    category: "Tienda online",
    summary: "Tienda online a medida con pagos automatizados, control de stock en tiempo real y panel de gestión propio.",
    overview: {
      client: "Haras del Este",
      industry: "Artículos de cocina, campo y hogar",
      type: "Tienda online a medida con panel de administración",
      scope: "Diseño, desarrollo, integración de pagos, puesta en producción y soporte",
      status: "En producción",
      site: "harasdeleste.com.ar",
    },
    challenge: [
      "Haras del Este comercializa artículos de cocina de campo, parrilla, vajilla de madera y decoración. Antes del proyecto, las ventas se gestionaban por mensajes: cada consulta implicaba informar precios a mano, confirmar la disponibilidad de cada producto y verificar los pagos uno por uno.",
      "El negocio necesitaba un canal de venta propio que funcionara sin intervención constante: un catálogo ordenado y fácil de recorrer, cobros confiables, un control de stock preciso y la información necesaria para facturar cada operación.",
    ],
    solutionIntro:
      "Desarrollamos una tienda online a medida, pensada para el catálogo y la forma de trabajo del cliente, junto con un panel de administración privado desde el que se gestiona todo el negocio.",
    solution: [
      {
        title: "Catálogo y navegación",
        description:
          "Más de 80 productos organizados en 14 categorías, con una sección de combos para promocionar productos agrupados.",
        items: [
          "Buscador por nombre de producto",
          "Filtros por categoría y opciones de ordenamiento",
          "Galería de imágenes en cada producto",
          "Diseño adaptado a celular, tablet y computadora",
        ],
      },
      {
        title: "Pagos online y por transferencia",
        description: "Dos medios de pago integrados, con la confirmación automatizada de cada operación.",
        items: [
          "Mercado Pago con acreditación y confirmación automática del pedido",
          "Validación del monto y la moneda antes de aprobar cada pago",
          "Cancelación automática ante devoluciones o contracargos",
          "Transferencia bancaria con 10% de descuento e instrucciones enviadas por correo",
        ],
      },
      {
        title: "Control de stock",
        description: "Cada movimiento de inventario queda registrado con fecha, hora y motivo, como en un libro contable.",
        items: [
          "Descuento automático del stock al confirmarse el pago",
          "Reposición automática si un pago se cancela o se devuelve",
          "Historial completo de entradas y salidas por producto",
        ],
      },
      {
        title: "Checkout y facturación",
        description: "El proceso de compra solicita toda la información necesaria para facturar según la normativa de ARCA.",
        items: [
          "DNI o CUIT/CUIL, domicilio de facturación y condición frente al IVA",
          "Validación de teléfono y correo electrónico",
          "Correos automáticos de confirmación al cliente",
        ],
      },
      {
        title: "Seguridad",
        description: "La tienda está protegida contra fraudes, pedidos automatizados y accesos no autorizados.",
        items: [
          "Límites contra pedidos masivos y abuso de formularios",
          "Verificación de autenticidad en cada notificación de pago",
          "Contraseñas cifradas y bloqueo ante intentos de acceso reiterados",
          "Encabezados de seguridad contra suplantación del sitio",
        ],
      },
      {
        title: "Panel de administración",
        description: "Un panel privado, sin registro público, al que solo accede el equipo de la tienda.",
        items: [
          "Resumen de productos activos, ventas del mes y pedidos pendientes",
          "Alta y edición de productos, categorías e imágenes",
          "Gestión de pedidos y confirmación de transferencias",
          "Uso completo desde el celular",
        ],
      },
    ],
    stack: [
      { name: "Next.js", purpose: "Desarrollo de la tienda y del panel de administración" },
      { name: "PostgreSQL", purpose: "Base de datos de productos, pedidos y clientes" },
      { name: "Prisma", purpose: "Acceso a datos y control de la estructura de la base" },
      { name: "Mercado Pago", purpose: "Cobros online y notificaciones de pago" },
      { name: "Cloudinary", purpose: "Almacenamiento y optimización de imágenes" },
      { name: "Vercel", purpose: "Hosting y despliegue continuo" },
      { name: "Nodemailer", purpose: "Envío de correos automáticos" },
    ],
    results: [
      "Canal de venta propio, disponible las 24 horas",
      "Pagos online confirmados sin intervención manual",
      "Stock siempre sincronizado con las ventas reales",
      "Datos de facturación completos en cada pedido",
      "Gestión diaria del negocio desde el celular",
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma", "Mercado Pago"],
    url: "https://harasdeleste.com.ar",
    featured: true,
    cover: harasImages[0],
    images: harasImages,
  },
  {
    slug: "sistema-escolar",
    title: "Sistema de gestión escolar",
    category: "Sistema",
    summary: "Plataforma para administrar alumnos, cursos y notas de un colegio.",
    // TODO: completar ficha, desafío, solución, stack y resultados con datos reales
    challenge: [],
    solution: [],
    stack: [],
    results: [],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    featured: true,
    cover: null,
    images: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
