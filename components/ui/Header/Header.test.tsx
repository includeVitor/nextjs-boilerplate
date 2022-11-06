import { Header } from '@components/ui'
import { AppSegments } from '@config/constants'
import { render } from '@config/test-utils'

jest.mock('next/navigation', () => ({
    _esModule: true,
    useSelectedLayoutSegment: jest
        .fn()
        .mockImplementationOnce(() => AppSegments.posts)
        .mockImplementationOnce(() => null)
}))

describe('Header', () => {
    it('Should be able to render header inside posts segment', () => {
        const { container } = render(<Header />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be able to render header outside posts segment', () => {
        const { container } = render(<Header />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
