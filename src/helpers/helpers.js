const getSortedDashboard = pushers => {
  const dashboard = Object.keys(pushers).map(name => {
    const pusher = pushers[name][0];
    const { passed, total } = pusher.test;
    const { sha } = pusher;
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
