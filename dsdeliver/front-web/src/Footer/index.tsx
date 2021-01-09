import './styles.css';
import { ReactComponent as YoutubeIcon } from './Youtube.svg';
import { ReactComponent as InstagramIcon } from './Instagram.svg';
import { ReactComponent as LinkedInIcon } from './Linkedin.svg';

function Footer(){
	return (
		<footer className="main-footer">
			<h3>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</h3>
			<div className="footer-icons">
				<a href="https://www.youtube.com/c/DevSuperior" target="_new">
					<YoutubeIcon />
				</a>
				<a href="https://www.linkedin.com/school/devsuperior/" target="_new">
					<LinkedInIcon />
				</a>
				<a href="https://www.instagram.com/devsuperior.ig/" target="_new">
					<InstagramIcon />
				</a>
			</div>
		</footer>
	)
}

export default Footer;