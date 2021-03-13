export default {
  MOBILE_MENU_TRUE: state => {
    state.mobileMenu = true;
  },
  MOBILE_MENU_FALSE: state => {
    state.mobileMenu = false;
  },
  CHANGE_VIS_EMAIL: state => {
    state.showEmail = !state.showEmail;
  },
  CHANGE_VIS: state => {
    state.visibility = !state.visibility;
  }
};
