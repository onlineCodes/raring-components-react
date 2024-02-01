import { Stack } from '@mui/material';
import './App.css';
import Card from './components/Card';

function App() {
    return (
        <Stack {...appStyles}>
            <Card />
        </Stack>
    );
}

const appStyles = {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'rgb(18, 20, 23)',
};

export default App;
