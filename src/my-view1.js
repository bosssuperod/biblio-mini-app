/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';



class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        iron-image {
          transform: translateY(-20%);
          border-radius: 10px;
          width:164px;
          height:220px;
          box-shadow: 0px 3px 2px grey;
          float:left;
          }

        h3, h4, ul{
          color: white;
          padding-left:20%;
        }

      

      </style>

      <div class="card" style="background-color: var(--app-card-color);">
        <div class="book-image">
        <a href="[[rootPath]]view2">
        <iron-image sizing="contain" src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
        </a>
        </div>
        <iron-ajax auto
        url="index.json"
        handle-as="json"
        last-response="{{ajaxResponse}}"></iron-ajax>

        <template is="dom-repeat" items="{{ajaxResponse}}">
          <h3>[[ajaxResponse.title]]</h3>
          <h4>[[ajaxResponse.contributors]]</h4>  
          <ul style="list-style-type:none">
            <li>ISBN | [[ajaxResponse.isbn]]</li>
            <li>Publisher | [[ajaxResponse.pathTo.toc]]</li>
          </ul>
        </template>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
