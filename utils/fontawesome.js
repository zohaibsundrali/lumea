// src/utils/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false; // Prevent Font Awesome from adding CSS automatically

library.add(  faEnvelope, faPhone,faLocationDot,faClock,faFacebookF, faTwitter, faPinterest, faLinkedinIn );
