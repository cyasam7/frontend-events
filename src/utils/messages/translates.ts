export const translateRoles = (key: string): string => {
  const value: any = {
    SUPERADMIN: "Super Admin",
    ADMINISTRATOR: "Administrador",
    ANALYST: "Analista",
    STARTUP: "Start up",
    MEMBER: "Miembro",
  };
  return value[key] ? value[key] : "No existe";
};

export const translateStatusApplications = (key: string): string => {
  const value: any = {
    PENDING: "Pendiente",
    ACCEPTED: "Aceptado",
    REJECTED: "Rechazado",
    RE_ASSIGNED: "Re asignado",
  };
  return value[key] ? value[key] : "No existe";
};
