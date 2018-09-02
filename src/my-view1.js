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

        h1{
          color: white;
        }

        p{
          color:white;
        }
      </style>

      <div class="card" style="background-color: var(--app-card-color);">
        <div class="book-image">
        <iron-image sizing="contain" src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
        </div>
        <div class="details" style="padding-left:100px;">
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
        </div>
        </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
