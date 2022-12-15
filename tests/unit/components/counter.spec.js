import Counter from '@/components/Counter'
import {shallowMount} from '@vue/test-utils'

describe('Counter Component', () => {

    test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
    })

})

