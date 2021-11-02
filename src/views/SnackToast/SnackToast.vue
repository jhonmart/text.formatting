<template>
  <transition enter-active-class="fadeInDown" leave-active-class="fadeOut">
    <section
      v-show="isActive"
      class="toast"
      @mouseover="pause"
      @mouseleave="removePause"
    >
      <div :class="type">
        <div>
          <b-icon
            icon="check-circle"
            type="is-success"
            v-if="actualToast === 0"
          />
          <b-icon
            icon="close-circle"
            type="is-danger"
            v-if="actualToast === 1"
          />
          <b-icon icon="alert" type="is-warning" v-if="actualToast === 2" />

          <p class="ml-15 has-text-weight-medium">
            <span v-html="message"></span>
            <a v-if="detail" :href="detail.link">
              {{ detail.message }}
            </a>
          </p>
        </div>
        <span @click="close" class="is-clickable is-align-self-center">
          <!-- <b-icon icon="close" type="is-grey" /> -->
        </span>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number
    },
    type: {
      type: String,
      default: "is-success"
    },
    detail: {
      type: Object
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    queue: {
      type: Boolean,
      default: undefined
    },
    position: {
      type: String,
      default: "is-top",
      validator(value) {
        return (
          [
            "is-top-right",
            "is-top",
            "is-top-left",
            "is-bottom-right",
            "is-bottom",
            "is-bottom-left"
          ].indexOf(value) > -1
        );
      }
    },
    closeToast: {
      type: Function,
      default: () => null
    }
  },
  computed: {
    actualToast() {
      return ["is-success", "is-danger", "is-info"].indexOf(this.type);
    }
  },
  data() {
    return {
      isActive: false,
      isPaused: false
    };
  },
  methods: {
    close() {
      this.isActive = false;
      this.isPaused = false;
      this.closeToast();
    },
    pause() {
      if (this.pauseOnHover) {
        this.isPaused = true;
      }
    },
    removePause() {
      if (this.pauseOnHover) {
        this.isPaused = false;
        this.close();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.toast {
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  -webkit-animation-duration: 150ms;
  animation-duration: 150ms;
  box-shadow: none;
  padding: 0;
  opacity: 1;
}
.toast > div {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1rem;
  border-radius: 6px;
  max-width: 620px;
  min-width: 30vw;
  div {
    display: flex;
    align-items: center;
  }
  &.is-success {
    background-color: $green-lighter;
    border: 2px solid $green-dark;
  }
  &.is-danger {
    background-color: $warning-light;
    border: 2px solid $refused-color;
  }
  &.is-info {
    background-color: $green-lighter;
    border: 2px solid $orange;
  }
}
</style>
