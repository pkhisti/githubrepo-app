const api = "https://api.github.com/orgs"

export const getAll = (org) =>
  fetch(`${api}/${org}/repos`, {})
    .then(res => res.json())
    .then(data => data)
