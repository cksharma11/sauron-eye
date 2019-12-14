import lintData from "../data/data.json";

const getAllPusher = () => {
  const pushers = {};
  lintData.forEach(ld => {
    pushers[ld.pusher] = {};
  });
  return Object.keys(pushers);
};

export { getAllPusher };
