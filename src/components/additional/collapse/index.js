'use strict';
import _ from 'lodash';

import './collapse.scss';

class Collapse{
    constructor() {
        this.collapseButtons = document.querySelectorAll('.collapse__button');
        this.init();
    }
    init() {
        _.each(this.collapseButtons, (item, index, collapseButtons)=> {
            this.handleClick(item)
        })
    }

    handleClick(item) {
        item.addEventListener('click',(e)=> {
            e.preventDefault();
            var target = e.target;
            var collapseDropdown = document.querySelector('#' + target.getAttribute('aria-controls'));
            this.toggleDropdown(collapseDropdown);
        });
    }

    toggleDropdown(collapseDropdown) {
        collapseDropdown.classList.toggle('collapse__panel_hidden');
        if (collapseDropdown.getAttribute('aria-expanded') == 'false') {
            collapseDropdown.setAttribute('aria-expanded', 'true');
            collapseDropdown.focus();
        }
        else {
            collapseDropdown.setAttribute('aria-expanded', 'false');
        }
    }
}

$(document).ready(function () {
    new Collapse();
});