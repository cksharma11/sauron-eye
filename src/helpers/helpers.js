const getSortedDashboard = pushers => {
  const dashboard = Object.keys(pushers).map(name => {
    if (!pushers[name].length) {
      return { total: 0, passed: 0, name, sha: "-" };
    }
    const pusher = pushers[name][0];
    const { passed, total, sha } = pusher;
    return { total, passed, name, sha };
  });

  return dashboard.sort((x, y) => y.passed - x.passed);
};

const getUsername = () => {
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);
  return urlParams.get("username");
};

export { getSortedDashboard, getUsername };
