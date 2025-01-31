import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { version } from "../../components";

const styles = (theme) => ({
  footer__container: {
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ paddingTop: "75px" }}>
        <footer className={classes.footer__container} id="footer__container">
          <a href="https://t.me/gawrproject" target="_blank">
            <img
              src="/images/github.gif"
              className="footer__github"
              height="64px"
              alt="github-logo"
            />
          </a>
          <a
            className="no_decoration_link footer__text"
            href="https://gawr.floral.workers.dev/"
            target="_blank"
          >
            {`© 2022 Copyright: Gawr Project - v${version}`}
          </a>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
