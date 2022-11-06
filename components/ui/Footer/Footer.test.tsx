import { Footer } from '@components/ui'
import { AppSegments } from '@config/constants'
import { render } from '@config/test-utils'

jest.mock('next/navigation', () => ({
    _esModule: true,
    useSelectedLayoutSegment: jest
        .fn()
        .mockImplementationOnce(() => AppSegments.posts)
        .mockImplementationOnce(() => null)
}))

describe('Footer', () => {
    it('Should be able to render footer inside posts segment', () => {
        const { container } = render(<Footer />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be able to render footer outside posts segment', () => {
        const { container } = render(<Footer />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
