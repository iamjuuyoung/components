/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import KTableRow from '@/KTableRow/KTableRow.vue';

describe('KTableRow', () => {
  test('test', () => {
    shallowMount(KTableRow)
  })
})
