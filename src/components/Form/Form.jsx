import styles from './Form.module.scss'

export default function Form() {
    return (
        <form action="" className={styles.submitBlogForm}>
            <div className={styles.nameFields}>
                <input type="text" placeholder="First Name*" required />
                <input type="text" placeholder="Last Name*" required />
            </div>

            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder="Designation*" required />

            <div className={styles.contactFields}>
                <select name="" id="" className={styles.countrySelect} required>
                    <option value="">Nigeria (+234)</option>
                    <option value="">USA (+1)</option>
                    <option value="">UK (+44)</option>
                    <option value="">Algeria (+213)</option>
                </select>
                <input type="number" placeholder="Phone Number*" required />
            </div>

            <input type="text" placeholder="Social Media Profile (LinkedIn/Twitter)*" required />

            <textarea placeholder="Provide Work Samples"></textarea>

            <button>Submit</button>
        </form>
    )
}