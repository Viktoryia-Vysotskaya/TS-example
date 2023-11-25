var permissions = {
    admin: "rwx",
    moderator: "rw",
    user: "r",
};
function renderRoleDesc(permissions) {
    console.log("Role description: ".concat(permissions));
}
function checkRolePermissions(role) {
    renderRoleDesc(permissions[role]);
}
