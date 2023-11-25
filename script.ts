const permissions = {
  admin: "rwx",
  moderator: "rw",
  user: "r",
};

function renderRoleDesc(permissions: string) {
  console.log(`Role description: ${permissions}`);
}

function checkRolePermissions(role: "admin" | "moderator" | "user") {
  renderRoleDesc(permissions[role]);
}