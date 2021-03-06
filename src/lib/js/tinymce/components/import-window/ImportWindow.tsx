import * as React from 'react';
import { observable, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import { Modal } from '../../../utils/Modal';
import { RISParser } from '../../../utils/RISParser';
import { generateID } from '../../../utils/HelperFunctions';

interface Props {
    wm: TinyMCE.WindowManager;
}

@observer
export class ImportWindow extends React.Component<Props, {}> {

    labels = ((top as any).ABT_i18n as BackendGlobals.ABT_i18n).tinymce.importWindow;
    modal: Modal = new Modal(this.labels.title);
    wm: TinyMCE.WindowManager = this.props.wm;

    @observable
    filename = '';

    @observable
    payload = observable([]);

    @action
    setFilename = (filename: string) => this.filename = filename;

    @action
    setPayload = (payload: CSL.Data[]) => this.payload.replace(payload);

    handleFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = (e.target as HTMLInputElement).files[0];
        const filename = (e.target as HTMLInputElement).files[0].name;

        reader.addEventListener('load', this.parseFile);
        reader.readAsText(file);

        this.setFilename(filename);
    }

    parseFile = (upload) => {
        const parser = new RISParser(upload.target.result);

        let payload = parser.parse();
        if (payload.length === 0) {
            this.wm.alert(`𝗘𝗿𝗿𝗼𝗿: ${this.labels.filetypeError}`);
            return;
        }

        payload = payload.map(ref => {
            const id = generateID();
            ref.id = id;
            return ref;
        });

        const leftovers = parser.unsupportedRefs;

        if (leftovers.length > 0) {
            this.wm.alert(`𝗘𝗿𝗿𝗼𝗿: ${this.labels.leftovers}: ${leftovers.join(', ')}`);
        }

        this.setPayload(payload);
    }

    handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.wm.setParams({data: toJS(this.payload)});
        this.wm.close();
    }

    componentDidMount() {
        this.modal.resize();
    }

    render() {
        return (
            <div className="row">
                {/* <DevTools /> */}
                <div>
                    <label className="uploadLabel">
                        <input
                            type="file"
                            className="abt-btn abt-btn-flat"
                            id="uploadField"
                            required={true}
                            onChange={this.handleFileUpload}
                            accept="application/xresearch-info-systems"
                        />
                        <span children={this.labels.upload} />
                    </label>
                </div>
                <div className="well flex" children={this.filename} />
                <div>
                    <input
                        type="button"
                        className="abt-btn-submit"
                        id="submitbtn"
                        value={this.labels.importBtn}
                        disabled={this.payload.length === 0}
                        onClick={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}
