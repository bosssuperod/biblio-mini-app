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
import '@polymer/iron-ajax/iron-ajax.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <iron-ajax auto
        url="https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json"
        handle-as="json"
        last-response="{{ajaxResponse}}"></iron-ajax>

        <template is="dom-repeat" items="{{ajaxResponse}}">
          
            <h3>[[ajaxResponse.title]]</h3>
            
            <p>https://d1re4mvb3lawey.cloudfront.net/pg1017[[ajaxResponse.pathTo.toc]]</p>
        </template>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
