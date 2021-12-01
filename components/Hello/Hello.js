import styles from '../Hello/Hello.module.scss'

const Hello = () => {
    return (
        <div>
            <h1 className={[styles.title, "multiple-class"].join(' ')}>Hello !</h1>
        </div>
    );
}

export default Hello;