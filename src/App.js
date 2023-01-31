import React, { useState } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <Segment textAlign='center' style={{ padding: '120px', width:'100wh' , height:'100vh'}}>
      <Segment textAlign='center' style={{ padding: '40px', boxShadow: '#ccc',height: '55%',width: '40%', left : '300px' }}>
        <Header as='h2'>Count</Header>
        <h1>{count}</h1>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Button color='green' content='Increment' onClick={increment}/>
            </Grid.Column>
            <Grid.Column>
              <Button color='red' content='Decrement' disabled={count === 0} onClick={decrement} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h2' style={{padding : '70px', right :'9px', color: 'black'}}>Done by : Akash Kumar Das - 12017608</Header>
    </Segment>
  );
};

export default App;