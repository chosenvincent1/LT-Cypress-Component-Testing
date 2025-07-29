import styles from './SubmitBlog.module.scss';
import Form from '../Form/Form';
import SubmitBlogContent from '../SubmitBlogContent/SubmitBlogContent';

export default function SubmitBlog() {
    return (
        <section className={styles.submitBlogSection}>
            <SubmitBlogContent />
            <Form />
        </section>
    )
}