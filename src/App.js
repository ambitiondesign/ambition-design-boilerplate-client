import React from 'react';
import { Switch, Route, Router } from "react-router-dom"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const AppRouter = () => {
  return(
          <Router>
                  <Switch>
                      <Route path="/" exact component={LoginComponent} />
                      <Route path="/list-user" component={ListUserComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />
                  </Switch>
          </Router>
  )
}

export default AppRouter;


// export default function App() {
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Create React App v4-beta example
//         </Typography>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
