import { ShimmerPlaceholder } from './skeleton.styles'
import { SkeletonProps } from './skeleton.type'

export const Skeleton = ({
  isActive = true,
  height,
  width = '100%',
  className = '',
  isCircle = false,
}: SkeletonProps) => {
  if (isActive) {
    return (
      <ShimmerPlaceholder
        isCircle={isCircle}
        className={className}
        style={{
          height,
          width,
        }}
      />
    )
  }

  return null
}
