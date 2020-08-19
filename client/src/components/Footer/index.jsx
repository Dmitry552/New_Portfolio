import React, {Component} from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import './Footer.scss';

class Footer extends Component {

  render(){
    var {Modal} = this.props;
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="cont">
            <div className="cont_title">
              <p>Контакты</p>
            </div>
            <div className="contact">
              <div className="cont_contacts">
                <p className="phone"><i className="fas fa-phone-square"></i>
                  +380634774013</p>
                <p className="maill" onClick={Modal}><i className="fas fa-envelope"></i>
                  foker552@gmail.com</p>
                <p className="location"><i className="fas fa-map-marker-alt"></i>
                  Украина, Запорожье</p>
              </div>
              <div className="cont_social">
                <div className="Facebook">
                  <a href="https://www.facebook.com/profile.php?id=100002034410060" target="_blank" rel = "noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                </div>
                <div className="Instagram">
                  <a href="https://www.instagram.com/dmitrii_bendug/?hl=ru" target="_blank" rel = "noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
                </div>
                <div className="GitHub">
                  <a href="https://github.com/Dmitry552" target="_blank" rel = "noopener noreferrer"><i className="fab fa-github-square"></i></a>
                </div>
                <div className="goMail">
                  <p onClick={Modal}><i className="fa fa-envelope" aria-hidden="true"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;