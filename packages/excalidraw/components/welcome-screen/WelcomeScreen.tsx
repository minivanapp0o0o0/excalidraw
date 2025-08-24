import { Center } from "./WelcomeScreen.Center";
import { MenuHint, ToolbarHint, HelpHint } from "./WelcomeScreen.Hints";

import "./WelcomeScreen.scss";

const WelcomeScreen = (props: { children?: React.ReactNode }) => {
  return (
    <div className="welcome-screen-middle">
      {props.children || (
        <>
          <Center />
          <MenuHint />
          <ToolbarHint />
          <HelpHint />
        </>
      )}
    </div>
  );
};

WelcomeScreen.displayName = "WelcomeScreen";

WelcomeScreen.Center = Center;
WelcomeScreen.Hints = { MenuHint, ToolbarHint, HelpHint };

export default WelcomeScreen;