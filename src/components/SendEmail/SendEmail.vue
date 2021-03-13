<template>
  <transition
    :enter-active-class="$style.fadein"
    :leave-active-class="$style.fadeout"
  >
    <div :class="$style.sendEmail">
      <div :class="$style.message" v-show="messageVisability">
        {{ message }}
      </div>
      <div :class="$style.form">
        <a @click="CHANGE_VISIBILITY_EMAIL()">
          <img
            :src="require(`../../assets/close-button.svg`)"
            :class="$style.close"
          />
        </a>
        <div :class="$style.group">
          <input
            :class="$style.input"
            v-model="name"
            v-on:keypress="isLetter($event)"
            type="text"
            id="name"
            required
          />
          <label :class="$style.label">Имя</label>
        </div>
        <div :class="$style.group">
          <input
            :class="$style.input"
            v-model="phone"
            type="tel"
            v-mask="{ mask: '+7(999) 999-99-99', showMaskOnHover: false }"
            id="phone"
            required
          />
          <label :class="$style.label">Номер телефона</label>
        </div>
        <div :class="$style.group" style="justify-content: space-between;">
          <input
            type="date"
            required
            id="date"
            :min="getDate"
            v-model="date"
            :class="$style.inputDate"
          />
          <label :class="$style.labelDate">Дата вашего события</label>
          <button id="send" @click="send">Отправить</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapActions } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      name: "",
      date: "",
      phone: "",
      message: "",
      messageVisability: false
    };
  },
  methods: {
    ...mapActions(["SEND_EMAIL", "CHANGE_VISIBILITY_EMAIL"]),
    getRusDate(date) {
      const year = date.substr(0, 4);
      const month = date.substr(5, 2);
      const day = date.substr(8, 2);
      return `${day}.${month}.${year}`;
    },
    async send() {
      const { name, date, phone } = this;
      const data = {
        name,
        date,
        phone
      };

      Object.entries(data).forEach(el => {
        if (!el[1]) {
          document.getElementById(el[0]).style.borderBottomColor = "red";
        } else {
          if (el[0] === "phone" && el[1].replace(/[_-]/g, "").length < 15) {
            document.getElementById("phone").style.borderBottomColor = "red";
          } else if (
            el[0] !== "phone" ||
            el[1].replace(/[_-]/g, "").length >= 15
          ) {
            document.getElementById(el[0]).style.borderBottomColor = "#ccc";
          }
        }
      });
      if (data.name && data.date && data.phone) {
        data.date = this.getRusDate(data.date);
        this.SEND_EMAIL(data).then(response => {
          if (response === 200) {
            this.CHANGE_VISIBILITY_EMAIL();
          } else {
            this.messageVisability = true;
            this.message = "Ошибка при отправке сообщения";
          }
        });
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-zА-Яа-яЁё\s]+$/.test(char)) return true;
      else e.preventDefault();
    }
  },
  computed: {
    getDate() {
      return moment().format("YYYY-MM-DD");
    }
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
