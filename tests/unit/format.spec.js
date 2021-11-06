import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { Formatting } from "@/components/Formatting";
import {
  BACKEND_TEXT_SAMPLE,
  BACKEND_TEXT_INDENTED,
  HTML_TEXT
} from "./constants";

const wrapper = shallowMount(Formatting);

describe("Normalize string", () => {
  it("Normal request", async () => {
    wrapper.vm.formattedTextInput = BACKEND_TEXT_SAMPLE;
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.formattedTextOutput.length).equal(
      BACKEND_TEXT_INDENTED.length
    );
  });

  it("HTML Viewer OUTPUT", async () => {
    wrapper.vm.formattedTextInput = BACKEND_TEXT_SAMPLE;
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.ioHTML.length).eq(HTML_TEXT.length);
  });

  it("HTML Viewer INPUT", async () => {
    wrapper.vm.ioHTML = HTML_TEXT;
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.formattedTextOutput.length).equal(
      BACKEND_TEXT_INDENTED.length
    );
  });

  it("HTML Viewer DOM", () => {
    wrapper.vm.ioHTML = HTML_TEXT;

    expect(wrapper.find("section h1").text()).equal(
      "Nova notificação: Você é incrivel"
    );
  });
});
