import React from 'react';
import { Control, Controller} from 'react-hook-form';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {FormState} from '.';

type Props = {
    control: Control<FormState>
}

function DescriptionField({control}: Props) {
    return (
        <Controller
            name="Description"
            control={control}
            render={({value, onChange})=>(
                <Editor
                    toolbarClassName="toobar-container"
                    editorClassName="editor-container"
                    editorState={value}
                    onEditorStateChange={onChange}
        
                />
            )}

        />
    )
}

export default DescriptionField;