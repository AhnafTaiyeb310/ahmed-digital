import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function SocialLinks() {
    return (
        <div className="flex gap-3 my-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-dark-black text-xl px-2 py-1 rounded-sm bg-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-dark-black text-xl px-2 py-1 rounded-sm bg-white" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-dark-black text-xl px-2 py-1 rounded-sm bg-white" />
            </a>
        </div>
    )
}
export default SocialLinks