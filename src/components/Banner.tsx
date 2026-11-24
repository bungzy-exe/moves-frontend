import errorIcon from '../assets/icon-error.svg'
import './Banner.css'

type BannerProps = {
  title: string
  body: string
}


export default function Banner({ title, body }: BannerProps) {
  return (
    <div className="banner banner--error" role="alert">
      <img src={errorIcon} alt="" width={24} height={24} />
      <div className="banner__text">
        <p className="banner__title">{title}</p>
        <p className="banner__body">{body}</p>
      </div>
    </div>
  )
}