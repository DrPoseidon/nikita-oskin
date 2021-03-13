import axios from "axios";

export default {
  RESIZE_TO_MOBILE({ commit }) {
    commit("MOBILE_MENU_TRUE");
  },
  RESIZE_TO_PC({ commit }) {
    commit("MOBILE_MENU_FALSE");
  },
  CHANGE_VISIBILITY({ commit }) {
    commit("CHANGE_VIS");
  },
  CHANGE_VISIBILITY_EMAIL({ commit }) {
    commit("CHANGE_VIS_EMAIL");
  },
  async SEND_EMAIL({ commit }, data) {
    const res = await axios.post("https://api.nikitaoskin.ru/sendEmail", data);
    commit;
    return !!(res.data === "OK");
  }
};
