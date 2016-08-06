import $ from 'jquery';
import Mustache from 'mustache';
import template from './header.html';
import './header.scss';

export default class Header{
	render(node){
		const text = $(node).text();
		$(node).html(Mustache.render(template,{text}))
	}
}