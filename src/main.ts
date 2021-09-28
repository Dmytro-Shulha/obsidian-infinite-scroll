import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, Menu, Editor, MarkdownView, WorkspaceLeaf } from 'obsidian';
import Cards from "./ui/component/Cards.svelte";
import CardsView from 'ui/view/cardsView';
import { VIEW_TYPE_CARDS } from 'utils/constants';

export default class InfiniteScrollPlugin extends Plugin {
	private view: CardsView;

	async onload() {
		console.log('loading Infinite Scroll plugin');
		
		this.registerView(
			VIEW_TYPE_CARDS, 
			(leaf:WorkspaceLeaf) => (this.view = new CardsView(leaf))
		);

		this.addCommand({
			id: "show-geographic-view",
			name: "Open view",
			checkCallback: (checking: boolean) => {
			  if (checking) {
				return (
				  this.app.workspace.getLeavesOfType(VIEW_TYPE_CARDS).length === 0
				);
			  }
			  this.initLeaf();
			},
		  });
	}

	initLeaf(): void {
		if (this.app.workspace.getLeavesOfType(VIEW_TYPE_CARDS).length) {
		  return;
		}
		this.app.workspace.getLeaf(false).setViewState({
		  type: VIEW_TYPE_CARDS,
		});
	}


	onunload() {
		console.log('unloading Infinite Scroll plugin');
	}
}
