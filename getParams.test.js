import { getParams } from './getParams.js'
import { DEFAULT_REPO } from './constants.js'

describe('getParams', () => {
  it('should return the default repo when no repo is provided', () => {
    process.argv = ['1', '2', 'module=axios', 'version=2.1.13'];
    const params = getParams()
    expect(params.repo).toBe(DEFAULT_REPO)
  })

  it('should throw an error when no module or version is provided', () => {
    process.argv = ['1', '2', 'repo=my-repo'];
    expect(() => getParams()).toThrowError('Please provide all required params: module, version')
  })

  it('should return the correct params when all required params are provided', () => {
    process.argv = ['1', '2', 'repo=my-secret-project', 'module=react', 'version=19.0.0'];
    const params = getParams()
    expect(params.repo).toBe('my-secret-project')
    expect(params.module).toBe('react')
    expect(params.version).toBe('19.0.0')
  })
})
