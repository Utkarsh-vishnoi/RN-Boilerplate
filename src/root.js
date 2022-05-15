import React, { useState, useEffect } from 'react';

import {AppNavigator} from 'Navigation'; 
import ThemeManager from 'Themes';
// import { Fonts } from 'Constants';

const App = ({ params }) => {
  return (
    <ThemeManager>
      <AppNavigator />
    </ThemeManager>
  );
};

export default App;