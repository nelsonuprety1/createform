import { act, fireEvent,screen } from "@testing-library/react"
import { setup } from "../utils"

describe('Test input', ()=>{

   test("should change input's value when dispatch input event",()=>{
      const hookParams = {
         initialValues: { 'test-name': 'my-name-test' },
         isControlled: true,
       }
   
       const inputParams = {
         name: 'test-name',
         type: 'text',
       }

      const {} = setup({hookParams, inputParams})

      const result = setup({ hookParams, inputParams })
      act(() => {
        fireEvent.change(screen.getByTestId(inputParams.name), { target: { value: 'new-name-test' } })
      })
  
      expect(result.values).toEqual({ 'test-name': 'new-name-test' })
   })

})