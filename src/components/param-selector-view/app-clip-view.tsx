import { RmgCard, RmgPage } from '@railmapgen/rmg-components';
import ParamSelector from './param-selector';
import React, { useEffect, useRef, useState } from 'react';
import { Events, LocalStorageKey, ParamConfig } from '../../constants/constants';
import { getParamRegistry } from '../../util/param-manager-utils';
import { Button, HStack, IconButton, SystemStyleObject } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { MdRefresh, MdSettings } from 'react-icons/md';

const CHANNEL_PREFIX = 'rmg-bridge--';

const styles: SystemStyleObject = {
    flexDirection: 'column',
    h: '100%',
    p: 2,

    '& > div:first-of-type': {
        m: 0,
        '& > div': {
            h: '100%',
        },
    },

    '& > div:last-of-type': {
        mt: 2,
        '& button:nth-child(2)': {
            mr: 'auto',
        },
    },
};

export default function AppClipView() {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();
    const parentId = searchParams.get('parentId');
    const parentComponent = searchParams.get('parentComponent');

    const [paramRegistry, setParamRegistry] = useState<ParamConfig[]>([]);
    const [selectedParam, setSelectedParam] = useState<string>();

    const channelRef = useRef<BroadcastChannel>();

    useEffect(() => {
        // channel that talks to parent (RMP import modal, RMG Templates upload modal)
        channelRef.current = new BroadcastChannel(CHANNEL_PREFIX + parentId);
        rmgRuntime.event(Events.APP_CLIP_VIEW_OPENED, { parentComponent });

        // hide window header
        const styleEl = document.createElement('style');
        styleEl.textContent = `.rmg-window__header{display: none;}`;
        document.head.appendChild(styleEl);

        // init paramRegistry state update
        setParamRegistry(getParamRegistry());

        return () => {
            channelRef.current?.close();
            document.head.removeChild(styleEl);
        };
    }, []);

    const handleImport = () => {
        const paramConfigStr = window.localStorage.getItem(LocalStorageKey.PARAM_CONFIG_BY_ID + selectedParam);
        const paramStr = window.localStorage.getItem(LocalStorageKey.PARAM_BY_ID + selectedParam);
        channelRef.current?.postMessage({
            event: 'IMPORT',
            meta: paramConfigStr ? JSON.parse(paramConfigStr) : null,
            data: paramStr ? JSON.parse(paramStr) : null,
        });
        rmgRuntime.event(Events.APP_CLIP_VIEW_IMPORT, { parentComponent });
    };

    const handleClose = () => {
        setSelectedParam(undefined);
        channelRef.current?.postMessage({
            event: 'CLOSE',
        });
        rmgRuntime.event(Events.APP_CLIP_VIEW_CLOSED, { parentComponent });
    };

    const handleManage = () => {
        rmgRuntime.openApp('rmg');
    };

    return (
        <RmgPage>
            <RmgCard sx={styles}>
                <ParamSelector
                    paramRegistry={paramRegistry}
                    selectedParam={selectedParam}
                    onParamSelect={setSelectedParam}
                />

                <HStack>
                    <IconButton
                        variant="ghost"
                        aria-label={t('Manage')}
                        title={t('Manage')}
                        icon={<MdSettings />}
                        onClick={handleManage}
                    />
                    <IconButton
                        variant="ghost"
                        aria-label={t('Refresh')}
                        title={t('Refresh')}
                        icon={<MdRefresh />}
                        onClick={() => setParamRegistry(getParamRegistry())}
                    />

                    <Button onClick={handleClose}>{t('Close')}</Button>
                    <Button colorScheme="primary" isDisabled={!selectedParam} onClick={handleImport}>
                        {t('Import')}
                    </Button>
                </HStack>
            </RmgCard>
        </RmgPage>
    );
}
