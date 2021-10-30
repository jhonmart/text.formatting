import SnackToastView from "@/views/SnackToast/SnackToast";
import Vue from "vue";

const SnackToast = {
  queue: [],
  defaultToastDuration: 2e3,
  actualToast: undefined,
  timer: null,
  parentTop: undefined,
  nextToast() {
    if (this.queue.length) {
      if (this.actualToast) return;
      this.actualToast = this.queue[0];
      setTimeout(() => {
        this.showNotice();
      }, 250);
    }
  },
  close(toast = this.actualToast) {
    if (toast && !toast.$root.isPaused) {
      toast.$root.isActive = false;

      // Timeout for the animation complete before destroying
      setTimeout(() => {
        toast.$destroy();
        toast.$el.remove();
        if (toast.$root.queue) {
          clearTimeout(this.timer);
          this.queue.shift();
          this.actualToast = undefined;
          this.nextToast();
        }
      }, 150);
    }
  },
  showNotice(toast = this.actualToast) {
    this.parentTop.insertAdjacentElement("afterbegin", toast.$el);
    toast.$root.isActive = true;

    this.timer = setTimeout(() => {
      toast.$root.queue ? this.close() : this.close(toast);
    }, toast.$root.duration || this.defaultToastDuration);
  },
  open(params) {
    let parent;
    const propsData =
      typeof params === "string"
        ? {
            message: params
          }
        : params;
    propsData.closeToast = () => {
      this.close();
    };
    propsData.message = propsData.message.toString();
    const vm = typeof window !== "undefined" && window.Vue ? window.Vue : Vue;
    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }
    const ToastComponent = vm.extend(SnackToastView);
    const component = new ToastComponent({
      parent,
      el: document.createElement("div"),
      propsData
    });
    this.parentTop = document.querySelector(".notices.is-top");
    if (!this.parentTop) {
      this.parentTop = document.createElement("div");
      this.parentTop.className = "notices is-top";
      document.body.appendChild(this.parentTop);
    }
    if (!propsData.queue) this.showNotice(component);
    else {
      this.queue.push(component);
      this.nextToast();
    }
  }
};

export { SnackToast };
