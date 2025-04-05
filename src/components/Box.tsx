import React, {ReactNode} from 'react'
export interface InfoBoxProps {
  icon?: ReactNode
  title?: string | ReactNode
  titleColor?: string
  children: ReactNode
  variant?: 'default' | 'central' | 'alert'
  className?: string
  size?: 'small' | 'medium' | 'large'
}
export const Box: React.FC<InfoBoxProps> = ({
    onClick,
      icon,
      title,
      titleColor = 'text-blue-700',
      children,
      variant = 'default',
      className = '',
      size = 'medium',
    }) => {
  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  }
  const variantClasses = {
    default: 'bg-white rounded-lg shadow',
    central: 'bg-white rounded-lg shadow',
    alert: 'bg-red-600 rounded-lg shadow text-white',
  }
  return (
      <div
          onClick={onClick}
          className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} cursor-pointer`}
      >
        {(icon || title) && (
            <div className="flex items-center gap-2 mb-3">
              {icon && <div className={`text-blue-700`}>{icon}</div>}
              {title &&
                  (typeof title === 'string' ? (
                      <h3 className={`text-lg font-medium ${titleColor}`}>{title}</h3>
                  ) : (
                      title
                  ))}
            </div>
        )}
        <div className="w-full">{children}</div>
      </div>
  )
}
export const HighlightNumber: React.FC<{
  value: string
  description?: string
  className?: string
}> = ({ value, description, className = '' }) => {
  return (
      <div className={`text-center ${className}`}>
        <div className="text-blue-700 text-3xl font-bold mb-1">{value}</div>
        {description && (
            <div className="text-gray-600 text-sm">{description}</div>
        )}
      </div>
  )
}
export const BulletList: React.FC<{
  items: string[]
  className?: string
}> = ({ items, className = '' }) => {
  return (
      <ul className={className}>
        {items.map((item, index) => (
            <li key={index} className="flex items-start mb-2">
              <div className="min-w-4 mr-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-blue-700"></div>
              </div>
              <span>{item}</span>
            </li>
        ))}
      </ul>
  )
}
