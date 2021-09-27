import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, Menu, Editor, MarkdownView } from 'obsidian';

const NEW_PLOTLY_CHART_NAME = "New Plotly Chart";
const newPlotlyChart = (editor: Editor)=>{
	let doc = editor.getDoc();
	let cursor = doc.getCursor();
	doc.replaceRange("```plotly\ndata:\n\t- x: [0,1,2]\n\t  y: [0,1,0]\n```\n", cursor);
}

export default class PlotlyPlugin extends Plugin {
	async onload() {
		console.log('loading Plotly plugin');
		
		this.registerCodeMirror((cm: CodeMirror.Editor) => {
			console.log('codemirror', cm);
		});

		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		console.log('unloading Plotly plugin');
	}
}
