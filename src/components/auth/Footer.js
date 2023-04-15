import React from "react";
import { Hidden } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortraitIcon from '@material-ui/icons/Portrait';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AuthStyles from '../../styles/auth/AuthStyles';

const Footer = () => {
  const classes = AuthStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.dev}>
        <Hidden xsDown>
          <Typography className={classes.lora}>Gary Rios</Typography>
        </Hidden>
        <div className={classes.icons}>
          <Tooltip title="Bio" arrow>
            <PortraitIcon className={classes.icon} onClick={() => window.open('https://bonniehardie.github.io./')} />
          </Tooltip>
          <Tooltip title="Github" arrow>
            <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/babypwant')} />
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/gary-rios-9464a2208/')} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Footer;