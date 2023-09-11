import styles from './button.module.css'
import Link from 'next/link';
export default function Button({ props }) {
    return (
        <Link href={props.link} className={styles[props.className]} target='_blank' rel='noopener noreferrer'>
            {props.text} {props.icon}
        </Link>
    );
};