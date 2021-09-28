import { ItemView, WorkspaceLeaf } from "obsidian";
import { VIEW_TYPE_CARDS } from "utils/constants";
import Cards from "../component/Cards.svelte"

export default class CardsView extends ItemView{
    private cards: Cards;

    constructor(leaf: WorkspaceLeaf){
        super(leaf)
    }

    getViewType(): string {
        return VIEW_TYPE_CARDS;
    }

    getDisplayText(): string {
        return "Cards View";
    }

    getIcon(): string {
        return "logo-crystal";
    }

    onClose(): Promise<void> {
        if(this.cards){
            this.cards.$destroy
        }
        return Promise.resolve();
    }

    async onOpen(): Promise<void> {
        this.cards = new Cards({
            target: (this as any).contentEl,
            props: {}
        });
    }
}