import moment from "moment";

export const toDateTime =(secs) => {
  return moment.utc(secs*1000).format('LLLL');
};
