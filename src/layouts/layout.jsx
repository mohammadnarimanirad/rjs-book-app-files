import styles from "./layout.module.css"

function layout({ children }) {
  return (
  <>
    <header className={styles.header}>
        <h1>Book App</h1>
        <p>react.js project</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p> Developed by mohammad narimani rad ❤ </p>
    </footer>
  </>

    ); 
}

export default layout