import DisconnectIcon from '@mui/icons-material/LinkOff';
import { Toolbar, Typography } from '@mui/material';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';

export const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <Toolbar style={{ display: 'flex' }}>
            <Typography component="h1" variant="h6" style={{ flexGrow: 1 }}>
                Solana Starter App
            </Typography>
            <WalletMultiButton />
            {wallet && <WalletDisconnectButton startIcon={<DisconnectIcon />} style={{ marginLeft: 8 }} />}
        </Toolbar>
    );
};
