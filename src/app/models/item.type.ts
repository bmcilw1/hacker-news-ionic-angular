import { Url } from 'url';

export interface Item {
    id: number;
    deleted: boolean;
    type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
    by: string;
    time: Date;
    text: HTMLDocument;
    dead: boolean;
    parent: number;
    poll: number;
    kids: Array<number>;
    url: Url;
    score: number;
    title: HTMLElement;
    parts: Array<number>;
    descendants: number;
}
