import styles from './Form.module.scss'

export default function Form() {
    return (
        <form className={styles.submitBlogForm} onSubmit={(e) => {e.preventDefault();}}>
            <div className={styles.nameFields}>
                <input type="text" placeholder="First Name*" required data-cy="first-name" />
                <input type="text" placeholder="Last Name*" required data-cy="last-name" />
            </div>

            <input type="email" placeholder="Email*" required data-cy="email" />
            <input type="text" placeholder="Designation*" required data-cy="designation" />

            <div className={styles.contactFields}>
                <select name="" id="" className={styles.countrySelect} required data-cy="country">
                    <option value="nigeria">Nigeria (+234)</option>
                    <option value="usa">USA (+1)</option>
                    <option value="uk">UK (+44)</option>
                    <option value="algeria">Algeria (+213)</option>
                </select>
                <input type="number" placeholder="Phone Number*" required data-cy="phone" />
            </div>

            <input type="text" placeholder="Social Media Profile (LinkedIn/Twitter)*" required data-cy="social" />

            <textarea placeholder="Provide Work Samples" data-cy="samples"></textarea>

            <button data-cy="submit">Submit</button>
        </form>
    )
}