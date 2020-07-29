export function getHasuraRole(data) {
  const hasuraRoles = data.hasura_roles
 
  const rolesMap = {
    support_admin: 4,
    support_person: 3,
    delivery_manager: 5
  }
  let maxRole = rolesMap["support_person"]
  let xHasuraRole = "support_person"
  for (let i = 0; i < hasuraRoles.length; i++) {
    if (maxRole <= rolesMap[hasuraRoles[i]]) {
      maxRole = rolesMap[hasuraRoles[i]]
      xHasuraRole = hasuraRoles[i]
    }
  }
  return xHasuraRole
}

export function getHasuraId(data) {
  const hasuraId = data.hasura_id
  return hasuraId
}

export function createSession(data) {
  console.log("hasure role", getHasuraRole(data))
  localStorage.setItem('x-hasura-role', getHasuraRole(data))
  localStorage.setItem("hasura-id", getHasuraId(data))
}