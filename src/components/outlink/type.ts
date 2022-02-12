import { Options } from '../../types/option-type'
import { TransformReturnValue } from '../../types'

interface OutlinkProps extends TransformReturnValue {
  bindSubmit: (submitFn: () => void) => void
  options: Options
}

export { OutlinkProps }
