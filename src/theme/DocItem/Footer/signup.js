import { FaBusinessTime, FaCertificate, FaList, FaQuestionCircle } from "react-icons/fa";

import React from 'react';
import classes from './signup.module.css';

export default function SignUp() {
  return (
    <section className={classes.main}>
      <br />
      <div className={classes.cols}>
        <div className={classes.email}>
          <div>
            <strong style={{ marginTop: 12 }}>
              <h3 style={{ marginBottom: 4 }}>Don't get left behind on AI</h3>
            </strong>
            <strong style={{ fontSize: 14 }}>
              <p>Sign up and get the latest AI news, prompts, and tools.</p>
            </strong>
            <iframe
              src="https://embeds.beehiiv.com/078568cc-ab93-4b36-b02f-cc863bca3bed?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              width="100%"
              frameborder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: "0 !important",
                backgroundColor: "transparent",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
