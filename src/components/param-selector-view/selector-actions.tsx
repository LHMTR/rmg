import React, { ChangeEvent, useRef, useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { MdAdd, MdInsertDriveFile, MdOpenInBrowser, MdUpload } from 'react-icons/md';
import TemplateModal from '../modal/template-modal';
import { nanoid } from 'nanoid';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Events } from '../../constants/constants';
import { importParam } from '../../util/param-manager-utils';
import { readFileAsText } from '../../util/utils';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SelectorActionsProps {
    selectedParam?: string;
    disableNew?: boolean;
    onError: (msg: string) => void;
}

export default function SelectorActions(props: SelectorActionsProps) {
    const { selectedParam, disableNew, onError } = props;
    const { t } = useTranslation();

    const [, setSearchParams] = useSearchParams();

    const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleNew = () => {
        setSearchParams({ project: nanoid() });
        rmgRuntime.event(Events.NEW_PARAM, {});
    };

    const handleOpenTemplate = (param: Record<string, any>) => {
        const id = importParam(JSON.stringify(param));
        setSearchParams({ project: id });
    };

    const handleImportProject = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log('handleImportProject():: received file', file);

        try {
            if (file?.type !== 'application/json') {
                onError(t('OpenActions.invalidType'));
            } else {
                const paramStr = await readFileAsText(file!);
                const id = importParam(paramStr);
                setSearchParams({ project: id });
                rmgRuntime.event(Events.UPLOAD_PARAM, {});
            }
        } catch (err) {
            onError(t('OpenActions.unknownError'));
            console.error('handleImportProject():: Unknown error occurred while parsing the uploaded file', err);
        }

        // clear field for next upload
        event.target.value = '';
    };

    const handleOpenSelected = () => {
        if (selectedParam) {
            setSearchParams({ project: selectedParam });
            rmgRuntime.event(Events.OPEN_PARAM, {});
        }
    };

    return (
        <VStack>
            <Button leftIcon={<MdAdd />} onClick={handleNew} isDisabled={disableNew}>
                {t('Blank project')}
            </Button>
            <Button
                leftIcon={<MdInsertDriveFile />}
                onClick={() => setIsTemplateModalOpen(true)}
                isDisabled={disableNew}
            >
                {t('Open template')}
            </Button>
            <Button leftIcon={<MdUpload />} onClick={() => fileInputRef.current?.click()} isDisabled={disableNew}>
                {t('Import project')}
            </Button>
            <Button
                colorScheme="primary"
                leftIcon={<MdOpenInBrowser />}
                onClick={handleOpenSelected}
                isDisabled={selectedParam === undefined}
            >
                {t('Open selected')}
            </Button>

            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                hidden={true}
                onChange={handleImportProject}
                data-testid="file-upload"
            />
            <TemplateModal
                isOpen={isTemplateModalOpen}
                onClose={() => setIsTemplateModalOpen(false)}
                onOpenParam={handleOpenTemplate}
            />
        </VStack>
    );
}
