import React from 'react';
import { Control, Controller} from 'react-hook-form';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {FormState} from '.';
import toolbar from './toolbar';

type Props = {
    control: Control<FormState>
}

function DescriptionField({control}: Props) {
    return (
        <Controller
            name="Description"
            control={control}
            defaultValue=""
            render={({value, onChange})=>(
                <Editor
                    toolbarClassName="toolbar-container"
                    editorClassName="editor-container"
                    editorState={value}
                    onEditorStateChange={onChange}
                    toolbar={toolbar}
        
                />
            )}

        />
    )
}

export default DescriptionField;