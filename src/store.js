import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
      meeting: {
        locationName: null,
        shareClasses: []
      }
  },
  mutations: {
      storeData(dummy) {
        console.log(dummy);
        this.state.meeting.dummy = 5;
      }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
