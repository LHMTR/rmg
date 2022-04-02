import React, { ReactNode } from 'react';
import { useAppSelector } from '../../redux';
import { setSidePanelMode } from '../../redux/app/action';
import { useDispatch } from 'react-redux';
import { SidePanelMode } from '../../constants/constants';
import StationSidePanel from './station-side-panel/station-side-panel';
import StyleSidePanel from './style-side-panel/style-side-panel';
import ColineSidePanel from './coline-side-panel/coline-side-panel';
import { RmgMultiLineString, RmgSidePanel, RmgSidePanelHeader } from '@railmapgen/rmg-components';
import StationSidePanelFooter from './station-side-panel/station-side-panel-footer';
import BranchSidePanel from './branch-side-panel/branch-side-panel';

const SIDE_PANEL_WIDTH = 320;

export default function SidePanel() {
    const dispatch = useDispatch();

    const { sidePanelMode, selectedStation } = useAppSelector(state => state.app);
    const name = useAppSelector(state => state.param.stn_list[selectedStation]?.name);

    const mode: Record<SidePanelMode, { header: ReactNode; body?: ReactNode; footer?: ReactNode }> = {
        STATION: {
            header: <RmgMultiLineString text={name?.join(' - ') || ''} />,
            body: <StationSidePanel />,
            footer: <StationSidePanelFooter />,
        },
        STYLE: { header: 'Edit style', body: <StyleSidePanel /> },
        COLINE: { header: 'Edit sharing track', body: <ColineSidePanel /> },
        BRANCH: { header: 'Edit line section', body: <BranchSidePanel /> },
        CLOSE: { header: 'Close' },
    };

    const handleClose = () => {
        dispatch(setSidePanelMode(SidePanelMode.CLOSE));
    };

    return (
        <RmgSidePanel isOpen={sidePanelMode !== SidePanelMode.CLOSE} width={SIDE_PANEL_WIDTH} header="Dummy header">
            <RmgSidePanelHeader onClose={handleClose}>{mode[sidePanelMode].header}</RmgSidePanelHeader>
            {mode[sidePanelMode]?.body}
            {mode[sidePanelMode]?.footer}
        </RmgSidePanel>
    );
}
