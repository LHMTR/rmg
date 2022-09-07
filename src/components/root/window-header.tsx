import React, { useState } from 'react';
import { Heading, HStack, Icon, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { getEnvironment, getVersion } from '../../util/config';
import { Trans, useTranslation } from 'react-i18next';
import { MdHelp, MdOpenInNew, MdTranslate } from 'react-icons/md';
import { LanguageCode } from '../../constants/constants';
import HelpModal from '../modal/help-modal';
import { RmgEnvBadge, RmgWindowHeader } from '@railmapgen/rmg-components';

export default function WindowHeader() {
    const { t, i18n } = useTranslation();

    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

    const environment = getEnvironment();

    const handleChangeLanguage = async (language: LanguageCode) => {
        const t = await i18n.changeLanguage(language);
        document.documentElement.lang = language;
        document.title = t('WindowHeader.heading');
    };

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('WindowHeader.heading')}
            </Heading>
            <RmgEnvBadge
                environment={environment}
                version={getVersion()}
                popoverHeader={
                    <Trans i18nKey="WindowHeader.popoverHeader" environment={environment}>
                        You're on {{ environment }} environment!
                    </Trans>
                }
                popoverBody={
                    <Trans i18nKey="WindowHeader.popoverBody">
                        This is a testing environment where we don't guarantee the stability and compatibility. Please
                        switch back to{' '}
                        <Link
                            color="teal.500"
                            href={'https://railmapgen.github.io' + window.location.pathname}
                            isExternal={true}
                        >
                            Production environment <Icon as={MdOpenInNew} />
                        </Link>
                        .
                    </Trans>
                }
            />

            <HStack ml="auto">
                <Menu>
                    <MenuButton as={IconButton} icon={<MdTranslate />} variant="ghost" size="sm" />
                    <MenuList>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.English)}>English</MenuItem>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.ChineseSimp)}>简体中文</MenuItem>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.ChineseTrad)}>繁體中文</MenuItem>
                    </MenuList>
                </Menu>

                <IconButton
                    size="sm"
                    variant="ghost"
                    aria-label="Help"
                    icon={<MdHelp />}
                    onClick={() => setIsHelpModalOpen(true)}
                />
            </HStack>

            <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
        </RmgWindowHeader>
    );
}
