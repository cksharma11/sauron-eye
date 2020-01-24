const sortByTime = (x, y) => {
  return new Date(y.time) - new Date(x.time);
};

const getTimeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) return Math.round(elapsed / 1000) + " seconds ago";

  if (elapsed < msPerHour)
    return Math.round(elapsed / msPerMinute) + " minutes ago";

  if (elapsed < msPerDay) return Math.round(elapsed / msPerHour) + " hours ago";

  if (elapsed < msPerMonth) return Math.round(elapsed / msPerDay) + " days ago";

  if (elapsed < msPerYear)
    return Math.round(elapsed / msPerMonth) + " months ago";

  return Math.round(elapsed / msPerYear) + " years ago";
};

const getSortedDashboard = pushers => {
  const dashboard = Object.keys(pushers).map(name => {
    if (!pushers[name].length) {
      return { total: 0, passed: 0, name, sha: "-", project: "" };
    }
    const pusher = pushers[name].sort(sortByTime)[0];
    const { passed, total, sha, project, failed } = pusher;
    const latestPushTime = getTimeDifference(new Date(), new Date(pusher.time));
    return { total, passed, failed, name, sha, project, latestPushTime };
  });

  return dashboard.sort((x, y) => y.passed - x.passed);
};

const getUsername = () => {
  const search = window.location.hash.split("?")[1];
  const urlParams = new URLSearchParams(search);
  return urlParams.get("username");
};

export { getSortedDashboard, getUsername, getTimeDifference };
