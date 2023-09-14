const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token": csrfToken,
    // "Content-type": "application/json",
    "Accept": "application/json",
    ...options.headers
  };

  return await fetch(url, options);
}

const followUser = (id) => {
  return customFetch(`/users/${id}/follow`, {
    method: "POST",
  });
}

const unfollowUser = (id) => {
  return customFetch(`/users/${id}/follow`, {
    method: "DELETE"
  });
}

export { followUser, unfollowUser }