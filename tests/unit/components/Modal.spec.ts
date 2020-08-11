import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal.vue'

function getMountedComponent(Component: any, propsData: any) {
  return shallowMount(Component, {
    propsData
  })
}

describe('Modal component', () => {
  it('renders correctly modal title', () => {
    const wrapper = getMountedComponent(Modal, {
      title: 'Some modal title'
    }).find('#modal-title')
    expect(wrapper.text()).toBe('Some modal title')
  })
  it('behaves correctly on close method', () => {
    const wrapper = getMountedComponent(Modal, {
      title: 'Some modal title'
    })
    const vm = wrapper.vm as any
    vm.close()
    expect(wrapper.emitted().closeModal).toBeTruthy()
  })
})