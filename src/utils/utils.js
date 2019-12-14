import lintData from "../data/data.json";

const getErrorCount = result => {
  return result.reduce((count, err) => {
    return count + err.messages.length;
  }, 0);
};

const getAllPusher = () => {
  const pushers = {};
  Object.values(lintData).forEach(ld => {
    const errorCount = getErrorCount(ld.result);
    pushers[ld.pusher] = { name: ld.pusher, errorCount: errorCount };
  });
  return Object.values(pushers);
};

export { getAllPusher };
