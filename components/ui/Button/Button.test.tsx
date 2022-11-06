import { render } from '@config/test-utils'
import { Button } from '@components/ui/index'

describe('Button', () => {
    it('Should be able to match snapshot', () => {
        const { container } = render(<Button>Simple Button</Button>)
        expect(container.firstChild).toMatchSnapshot()
    })
})
