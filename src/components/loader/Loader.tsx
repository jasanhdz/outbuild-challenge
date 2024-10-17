import { CSSProperties } from 'react'
import styles from './styles.module.css'

type LoaderProps = {
  color?: string
  size?: number
  width?: number
}

function Loader({ color = '#3b82f6', size = 140, width = 8 }: LoaderProps) {
  const ringStyles: CSSProperties = {
    borderColor: `${color} transparent transparent transparent`,
    width: size - width,
    height: size - width,
    borderWidth: width
  }
  return (
    <div
      className={styles['lds-ring']}
      style={{
        width: size,
        height: size
      }}
    >
      <div className={styles['lds-ring-div']} style={ringStyles}></div>
      <div className={styles['lds-ring-div']} style={ringStyles}></div>
      <div className={styles['lds-ring-div']} style={ringStyles}></div>
      <div className={styles['lds-ring-div']} style={ringStyles}></div>
    </div>
  )
}

export default Loader