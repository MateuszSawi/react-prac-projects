import styles from './Button.module.scss';

const Button = buttonText => {
  return <button className={styles.button}>{buttonText.text}</button>
}

export default Button;