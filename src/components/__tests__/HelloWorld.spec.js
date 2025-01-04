
import { mount } from '@vue/test-utils';
import App from '../../App.vue';
import { expect, it, describe } from 'vitest';
import App from '../../App.vue';

describe('App', () => {
  it('should update horas when input value changes', async () => {
    const wrapper = mount(App); // Montamos el componente
    
    // Imprime el HTML generado para ver si el input existe
    console.log(wrapper.html());
    await wrapper.vm.$nextTick();

    // Verificamos que el campo de input existe antes de intentar interactuar con él
    const input = wrapper.find('input[type="number"]');
    expect(input.exists()).toBe(true);// Verificamos si el input existe en el DOM

    // Simulamos el cambio de valor
    await input.setValue(10); // Cambiamos el valor del input a 10

    // Verificamos que el modelo de datos 'horas' se haya actualizado correctamente
    expect(wrapper.vm.horas).toBe(10); // Verificamos si el valor de 'horas' es 10
  });
});
