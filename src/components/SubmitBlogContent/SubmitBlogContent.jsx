import styles from './SubmitBlogContent.module.scss';

export default function submitBlogContent() {
    return (
        <div className={styles.submitBlogContent}>
            <div className={styles.submitBlogImage}>
                <img 
                    src="https://www.lambdatest.com/resources/images/business.png" 
                    alt="Business Illustration"
                />
            </div>
            <h2>Submit your blog idea or guest post article on LambdaTest blog</h2>
        </div>
    )
}