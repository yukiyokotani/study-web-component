import r2wc from '@r2wc/react-to-web-component';

import { Greeting } from './greeting/Greeting';

export const WebGreeting = r2wc(Greeting, {
  props: {
    name: 'string'
  }
});

customElements.define('web-greeting', WebGreeting);
