async function getUsers(names) {
    const promises = names.map(async (name) => {
      try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if (!res.ok) 
            return null;
        return await res.json();
      } catch {
        return null;
      }
    });
    return Promise.all(promises);
  }

  const users=getUsers(["Arnav532", "octocat", "doesnotexist"])
    .then(users => {
      console.log(users);
      alert(JSON.stringify(users, null, 2));
    });
