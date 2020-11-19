import * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    '--d'?: 'none' | 'block';
    '--c'?: string;
    '--bgc'?: string;

    [index: string]: any;
  }
}
