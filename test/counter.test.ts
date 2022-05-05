import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from '~/counter/components/Counter.vue'

describe('Counter.vue', () => {
  it('should render', () => {
    const wrapper = mount(Counter, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should increment by 1', async () => {
    const wrapper = mount(Counter, { props: { initial: 0 } })
    expect(wrapper.text()).toContain('0')

    expect(wrapper.find('[data-test="inc"]').exists()).toBe(true)

    await wrapper.get('[data-test="inc"]').trigger('click')

    expect(wrapper.text()).toContain('1')
  })

  it('should decrement by 1', async () => {
    const wrapper = mount(Counter, { props: { initial: 1 } })
    expect(wrapper.text()).toContain('1')

    expect(wrapper.find('[data-test="dec"]').exists()).toBe(true)

    await wrapper.get('[data-test="dec"]').trigger('click')

    expect(wrapper.text()).toContain('0')
  })
})
