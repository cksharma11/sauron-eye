const sortByTime = (x, y) => {
  return new Date(y.time) - new Date(x.time);
};

const getSortedDashboard = pushers => {
  const dashboard = Object.keys(pushers).map(name => {
    if (!pushers[name].length) {
      return { total: 0, passed: 0, name, sha: "-", project: "" };
    }
    console.log("Before", pushers[name])
    const pusher = pushers[name].sort(sortByTime)[0];
    const { passed, total, sha, project } = pusher;
    return { total, passed, name, sha, project };
  });

  return dashboard.sort((x, y) => y.passed - x.passed);
};

const getUsername = () => {
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get("username");
};

export { getSortedDashboard, getUsername };
