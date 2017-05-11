import { without } from 'seamless-immutable';

export let merge = src => target => ({ ...target, ...src });
export let omit = src => target => without(target, src);
