import { useNavigate } from 'react-router'
import chevronLeft from '../assets/icon-chevron-left.svg'
import './BackButton.css'

type BackButtonProps = {
  disabled?: boolean
}

export default function BackButton({ disabled = false }: BackButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="back-button"
      aria-label="Back"
      disabled={disabled}
      onClick={() => navigate(-1)}
    >
      <img src={chevronLeft} alt="" width={24} height={24} />
    </button>
  )
}