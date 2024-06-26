declare module 'react-quill' {
    import * as React from 'react';
  
    type Delta = any;
    type Sources = 'api' | 'user' | 'silent';
  
    interface QuillOptions {
      debug?: 'warn' | 'log' | 'error' | false;
      modules?: { [moduleName: string]: any };
      placeholder?: string;
      readOnly?: boolean;
      theme?: string;
    }
  
    interface ReactQuillProps {
      bounds?: string | HTMLElement;
      children?: React.ReactElement<any>;
      className?: string;
      defaultValue?: string | Delta;
      formats?: string[];
      id?: string;
      modules?: QuillOptions['modules'];
      onChange?: (content: string, delta: Delta, source: Sources, editor: any) => void;
      onChangeSelection?: (selection: any, source: Sources, editor: any) => void;
      placeholder?: string;
      preserveWhitespace?: boolean;
      readOnly?: boolean;
      style?: React.CSSProperties;
      tabIndex?: number;
      theme?: string;
      value?: string | Delta;
    }
  
    export default class ReactQuill extends React.Component<ReactQuillProps> {
      focus(): void;
      blur(): void;
      getEditor(): any;
    }
  }
  