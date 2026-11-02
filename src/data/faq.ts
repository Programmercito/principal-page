export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: '¿Cuánto tiempo tarda un proyecto?',
    a: 'Depende del alcance. Una landing page profesional tarda entre 1 y 2 semanas. Un sistema web completo (ERP, app personalizada) puede llevar de 1 a 3 meses. Siempre te damos un plazo estimado real y transparente antes de empezar.',
  },
  {
    q: '¿Qué necesito tener listo para empezar?',
    a: 'Solo necesitás contarnos qué problema querés resolver o qué necesitás construir. No hace falta tener nada técnico: con una descripción del negocio, tu presupuesto aproximado y la fecha límite ya podemos prepararte una propuesta.',
  },
  {
    q: '¿El proyecto incluye soporte después de la entrega?',
    a: 'Sí. Todos nuestros proyectos incluyen un período de soporte post-entrega para ajustes y correcciones. También ofrecemos planes de mantenimiento mensual si necesitás disponibilidad continua.',
  },
  {
    q: '¿Cómo es el proceso de trabajo?',
    a: 'Consulta inicial sin costo → Propuesta y presupuesto detallado → Desarrollo por etapas con entregas parciales → Revisiones y ajustes → Entrega final con documentación. Siempre sabés en qué etapa estamos.',
  },
  {
    q: '¿Trabajan con clientes de otros países?',
    a: 'Sí, trabajamos de forma 100% remota con clientes de toda Latinoamérica y España. Nos comunicamos por videollamada, email o WhatsApp según tu preferencia y horario.',
  },
];
