import React, { Component } from 'react';
import {Allert} from '../ValidComponent'
import axios from '../../axios.js';
import './Modal_form.scss';

class Modal_form extends Component {

  Modal_form_out = (e) => {
    e.preventDefault();
    var {Modal, remove_Title, remove_Txt, Valid} = this.props;
    remove_Title();
    remove_Txt();
    Modal();
    Valid({valid: true});
  }

  ValidationForm = (e) => {
    e.preventDefault();
    var {Title, Text, Valid} = this.props;
    if(!Title || !Text) {
      Valid({
        valid: false,
        message: 'Поля должны быть заполненны',
        arr: [false, false]
      })
      return
    } else if(Title.length < 3) {
      Valid({
        valid: false,
        message: 'Тема не менее 3-х символов',
        arr: [true, false]
      })
      return
    } else if(Text.length < 10) {
      Valid({
        valid: false,
        message: 'Текст не менее 10-ти символов',
        arr: [false, true]
      })
      return
    } else {
      Valid({
        valid: false,
        message: '',
        arr: [true, true]
      })
    }
    var data = {
      Title: Title,
      Text: Text,
    }
    this.Maill(data, e)
    setTimeout(this.Modal_form_out(e), 10000);
  }

  Maill = async (data, e) => {
    const {Valid} = this.props
    try {
      const response = await axios.post('/email', data);
      if(response.data) {
        await Valid({
          valid: true,
          message: response.data.message,
          arr: [true, true]
        })
      }
      
    } catch (error) {
      console.log('Ошибка');
      console.log(error);
    }
    
  }

  render(){
    var {Title_, Txt, Valid_form} = this.props;
    return(
      <div className="form">
        <form id="contact" action="#" method="post" name="contact">
          <h2>Сообщение</h2>
          <input id="name" className="txt" name="name" type="name" placeholder="Тема" 
            onChange = {(e) => Title_(e.target.value)}
          />
          <textarea id="msg" className="txtarea" name="msg" placeholder="Сообщение:" 
            onChange = {(e) => Txt(e.target.value)}
          ></textarea>
          <div className="button">
            <button id="send" onClick={(e) => this.ValidationForm(e)}>Отправить</button>
            <button id="cancellation" onClick={(e) => this.Modal_form_out(e)}>Отмена</button> 
          </div>
          {Valid_form.message ? <Allert message={Valid_form.message} valid={Valid_form.valid}/> : ''}
        </form>
        
      </div>
    );
  }
}

export default Modal_form;