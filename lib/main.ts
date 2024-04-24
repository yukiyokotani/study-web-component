import r2wc from '@r2wc/react-to-web-component';

import { Counter } from './counter/Counter';
import { Greeting } from './greeting/Greeting';

export const WebGreeting = r2wc(Greeting, {
  props: {
    name: 'string'
  }
});

export const WebCounter = r2wc(Counter, {
  props: {
    initialCount: 'number'
  }
});

customElements.define('web-greeting', WebGreeting);
customElements.define('web-counter', WebCounter);
