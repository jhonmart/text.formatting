import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import { Formatting } from "@/components/Formatting";

const wrapper = shallowMount(Formatting),
  BACKEND_TEXT_SAMPLE = `
    '<div style="padding: 20px auto; text-align: -webkit-center">
    <section style="box-shadow: 0 3px 10px 1px #888888; max-width: 800px; text-align: left;">
    <hr style="background-color: orangered; height: 4px; margin-bottom: 20px">
    <article style="padding: 0 0 20px; font-family: Arial, Helvetica, sans-serif">
    '
    '<div style="text-align: center; margin-bottom: 10px">    <span style="display: block; text-align: right; margin-right: 15px'
    '">Data do envio: Agora</span><img style="height: 100px"src="https://cdn-icons-png.flaticon.com/512/806/806177.png"></di'
    'v>
    '
    '<h1 style="font-weight: bold; color: #00b28f; text-align: center; font-size: 28px; font-family: Arial, Helvetica, sans-'
    'serif;">
    Nova notificação: Você é incrivel</h1>
    <div style="margin: 15px 100px; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
    <p><span style="font-weight: bold">Continue:</span> Sendo quem você se tornou</p>
    <p><span style="font-weight: bold">Nunca:</span> Desista</p>
    <p><span style="font-weight: bold">Pare:</span> De não acreditar em você mesmo<br>     </p>
    </div>
    </article>
    </section>
    </div>'
  `,
  BACKEND_TEXT_INDENTED = `
 '<div style="padding: 20px auto; text-align: -webkit-center"><section style="box-shadow: 0 3px 10px 1px #888888; max-wid'
 'th: 800px; text-align: left;"><hr style="background-color: orangered; height: 4px; margin-bottom: 20px"><article style='
 '"padding: 0 0 20px; font-family: Arial, Helvetica, sans-serif"><div style="text-align: center; margin-bottom: 10px"><sp'
 'an style="display: block; text-align: right; margin-right: 15px">Data do envio: Agora</span><img style="height: 100px"s'
 'rc="https://cdn-icons-png.flaticon.com/512/806/806177.png"></div><h1 style="font-weight: bold; color: #00b28f; text-ali'
 'gn: center; font-size: 28px; font-family: Arial, Helvetica, sans-serif;">Nova notificação: Você é incrivel</h1><div sty'
 'le="margin: 15px 100px; font-size: 14px; font-family: Arial, Helvetica, sans-serif;"><p><span style="font-weight: bold"'
 '>Continue:</span> Sendo quem você se tornou</p><p><span style="font-weight: bold">Nunca:</span> Desista</p><p><span sty'
 'le="font-weight: bold">Pare:</span> De não acreditar em você mesmo<br></p></div></article></section></div>'`,
  HTML_TEXT = `<div style="padding: 20px auto; text-align: -webkit-center"><section style="box-shadow: 0 3px 10px 1px #888888; max-width: 800px; text-align: left;"><hr style="background-color: orangered; height: 4px; margin-bottom: 20px"><article style="padding: 0 0 20px; font-family: Arial, Helvetica, sans-serif"><div style="text-align: center; margin-bottom: 10px"><span style="display: block; text-align: right; margin-right: 15px">Data do envio: Agora</span><img style="height: 100px"src="https://cdn-icons-png.flaticon.com/512/806/806177.png"></div><h1 style="font-weight: bold; color: #00b28f; text-align: center; font-size: 28px; font-family: Arial, Helvetica, sans-serif;"> Nova notificação: Você é incrivel</h1><div style="margin: 15px 100px; font-size: 14px; font-family: Arial, Helvetica, sans-serif;"><p><span style="font-weight: bold">Continue:</span> Sendo quem você se tornou</p><p><span style="font-weight: bold">Nunca:</span> Desista</p><p><span style="font-weight: bold">Pare:</span> De não acreditar em você mesmo<br></p></div></article></section></div>`;

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
    expect(wrapper.vm.ioHTML.length).equal(HTML_TEXT.length);
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
